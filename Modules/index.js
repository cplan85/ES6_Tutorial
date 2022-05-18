//Default -> import ... from "";
//Named -> import {...} from "";

import Teacher, {promote} from "./teacher"
const teacher = new Teacher("Mosh", "Master of Science");

teacher.teach()