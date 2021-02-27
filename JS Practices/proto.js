function Person(first, last) {
    this.first = first || 'unknown';
    this.last = last || 'unknown';
};

Person.prototype.getFull = () => {
    return this.first + " " + this.last;
};

let Person1 = new Person('mithu', 'islam');

console.log(Person1);




