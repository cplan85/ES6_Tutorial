const person = {
    name: "Mosh",
    walk() {
        console.log(this);
    },
    talk() {},
};

//if you call this with reference to the object, then you will get the whole object.
person.walk();

const walk = person.walk;
// here this refers to the global object, and thus returns that.v
walk();