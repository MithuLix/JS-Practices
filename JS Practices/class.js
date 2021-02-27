
class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name  = givenName;
        this.Experience = givenExperience;
        this.Division = givenDivision; 
    }
    slogan(){
        return `This is mithu. Working with ${this.name} company since ${this.Experience}.`;
    } 

    joiningYear(){
        let date = new Date();
        return date.getFullYear() - this.Experience;
    }
}

var employee1 = new Employee('mithu', 2, 'Web Developer');
console.log(employee1);
console.log(employee1.joiningYear());





class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, givenLanguage, githubProfile) {
        super (givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.profile = githubProfile;
    }
    favouriteLang() {
        return 'Python & JavaScript.';
    }
    static multiply(a, b) {
        return a * b;
    }
}

employee1Data = new Programmer('mohaiminul', 3,'App development', 'Go', 'mithuLix');
console.log(employee1Data);
console.log(employee1Data.favouriteLang());
console.log(Programmer.multiply(23, 43));

