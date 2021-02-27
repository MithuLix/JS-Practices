function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.login = function () {
        console.log(this.firstName, 'is him');
    }
  }

  Person.prototype.display = function () {
      this.online = true;
      console.log(this.email, 'has no new name');
  }
  

  var a = new Person("John", "Doe", 50, "blue");
  var b = new Person("Sally", "Rally", 48, "green");

 a.login();