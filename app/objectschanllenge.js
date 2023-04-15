const mark = {
    fullName : "Mark",
    mass : 78,
    height : 1.69,
    calcBmi : function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

const muller = {
    fullName : "muller",
    mass : 92,
    height : 1.95,
    calcBmi : function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

mark.calcBmi();
muller.calcBmi();
console.log(mark.bmi)
console.log(muller.bmi)

if(mark.bmi > muller.bmi) {
    console.log(`Mark full name ${mark.fullName}'s BMI ${mark.bmi} is greater than Muller full name ${muller.fullName}'s BMI ${muller.bmi} `)
} else { 
    console.log(`Mark full name ${mark.fullName}'s BMI ${mark.bmi} is lesser than Muller full name ${muller.fullName}'s BMI ${muller.bmi} `)
}

