const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tip =[]
const totals = []

const calcTip = function(bill) {
    return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20
}

for(let i = 0; i < bill.length; i++) {
   const billValue = calcTip(bill[i])
   tip.push(billValue)
   totals.push(billValue + bill[i])
}
console.log(tip)
console.log(totals)
console.log(bill, tip, totals)


//q-2 
const calcAverage = function(arr) { 
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

const avgTotal = calcAverage(bill)
console.log(avgTotal)