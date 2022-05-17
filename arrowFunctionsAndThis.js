const person = {
    talk() {
        // WITHOUT ARROW FUNCTIONS you must declare a new variable self that references this in order to access within the timeout function

        //inherits code within the context of where the function is. They dont rebhind the this keyword.
        var self = this;
        setTimeout(() => console.log("this", this), 1000)
        
    }
}

person.talk();