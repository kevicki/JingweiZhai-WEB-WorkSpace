function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

Person.prototype = {
    constuctor: Person,
    sayName: function () {
        alert(this.name);
    }
};

var person1 = new Person("jingwei", "18", "Engineer");
person1.sayName();