var student = { id:233, phone:34534, name:"abir"};
var student2 = { id:235, phone:234512, name:"mahi"};

console.log("----StudentDetails---")
    console.log(student2);

console.log("----phoneNo--")
var phoneNo = student2["phone"];
    console.log(phoneNo);

console.log("----UpdatedPhoneNo---")
var UpdatedPhoneNo = student2["phone"];
    student2["phone"] = 34562364;
    console.log(student2);

    console.log("----UpdatedProperty---")
    student2.cinema = "ogni2"
    console.log(student2);
    
