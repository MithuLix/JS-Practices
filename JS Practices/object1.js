function Student(name, age, gender, order){
    this.name = name; 
    this.age = age; 
    this.gender = gender; 
    this.order = order;

    this.dispaly = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
        console.log(this.order);
    };
}

let student1 =new Student("mohaiminul islam", "22 years", "male", "Twelve");
let student2 = new Student("shifa jahan", "22 years","female", "Honours 2nd");
let student3 = new Student("Nayem islam", "24 years", "male", "Honours 4th");
let student4 = new Student("Mostafizur islam", "27 years", "male", "BCS cader");


student1.dispaly();


const foo = () => {
    let a = b = 10;
    a++;
    return a;
}
foo();
console.log(a);
console.log(b);