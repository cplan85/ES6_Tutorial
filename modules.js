
const person = new Person("Tom");

console.log(person.name);

class Teacher extends Person{
    constructor(name, degree) {
        //in a constructor function of a child class must call constructor of parent class
        super(name);
        this.degree = degree;
    }
    
    teach() {
        console.log("teach");
    }

}

const teacher = new Teacher("Mosh", "Master of Science");