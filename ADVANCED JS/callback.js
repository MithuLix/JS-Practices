function explain_callback(name, age, task) {
    console.log('name:', name);
    console.log('age:', age);
    task()
}

function Enginner() {
    console.log('Enginner');
}

function medical_Student() {
    console.log('medical_Student');
}


explain_callback('mohaiminul islam', 22, Enginner);
explain_callback('Mamun rashid', 18, medical_Student);