import Student from './student';
import './style/style.scss';


const student1 = new Student("Rohit", 12,14);
let des = `ES6 setup is done by ${ student1.name }`;
let age = student1.getAge();
document.write(age);
