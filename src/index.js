import Student from './student';
import './style/style.scss';


const student1 = new Student("Rohit", 12);
let des = `ES6 setup is done by ${ student1.name }`;
document.write(des);
