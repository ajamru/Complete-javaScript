const calcTip = function(bill) {
    return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20
}

const bills = [125, 555, 40]
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tip)

const totals = [bills[0] + tip[0], bills[0] + tip[0], bills[0] + tip[0]]
console.log(totals)