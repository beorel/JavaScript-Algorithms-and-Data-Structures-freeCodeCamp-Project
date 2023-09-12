function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let cidTotal = 0;
    for (let elem of cid) {
        cidTotal += elem[1] * 100
    }
    if (change > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (change === cidTotal) {
        return { status: "CLOSED", change: cid }
    } else {
        let output = []
        cid = cid.reverse()
        let currencyUnits = { "ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1 }
        for (let elem of cid) {
            let holderForCurrency = [elem[0], 0]
            elem[1] = elem[1] * 100
            while (change >= currencyUnits[elem[0]] && elem[1] > 0) {
                change -= currencyUnits[elem[0]]
                elem[1] -= currencyUnits[elem[0]]
                holderForCurrency[1] += currencyUnits[elem[0]]/100
            }
            if (holderForCurrency[1] > 0) {
                output.push(holderForCurrency)
                console.log(output)
            }
        }
        if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] }
        }
        return { status: "OPEN", change: output }
    }
}

