const normalPerson = {
    fName: 'Rahim',
    lName: 'islam',
    salary: 150000,

    getFullName: function () {
        console.log(this.fName, this.lName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this.salary);
        this.salary = this.salary - amount -tips - tax;
        return this.salary;
    }
}

const heroPerson = { fName: 'Hero', lName: 'Balam',salary: 35000,}
const friendlyPerson = { fName: 'Hero', lName: 'Balam',salary: 35000,}


normalPerson.chargeBill.call(friendlyPerson, 1000, 500, 50);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [100, 50, 5]);
console.log(heroPerson.salary);

// // normalPerson.chargeBill();

// const HeroCharge = normalPerson.chargeBill.bind(heroPerson);
// HeroCharge(1000);
// HeroCharge();
// console.log(normalPerson.salary);

// const friendlyPerson = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPerson(1345);
