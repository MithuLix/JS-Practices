class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Nilphamari Govt. college';
    }
}

const student1 = new student(1, 'Mithu');
const student2 = new student(2, 'Rakib');
console.log(student1, student2);