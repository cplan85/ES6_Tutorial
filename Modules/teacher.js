import {Person } from "./person";

 export function promote() {}

export default class Teacher extends Person{
    constructor(name, degree) {
        //in a constructor function of a child class must call constructor of parent class
        super(name);
        this.degree = degree;
    }
    
    teach() {
        console.log("teach");
    }

};