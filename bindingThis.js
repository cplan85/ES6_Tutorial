const person = {
    name: "Mosh",
    walk() {
        console.log(this);
    }
};

//if you call this with reference to the object, then you will get the whole object.
person.walk();

// this walk function is always attached to the person object.
const walk = person.walk.bind(person);

walk();