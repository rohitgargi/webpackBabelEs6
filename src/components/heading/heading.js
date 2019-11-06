import './heading.scss';
class Heading {
    render(){
        var h1 = document.createElement('h1');
        var body = document.querySelector('body');
        h1.innerHTML = "Webpack is awsome!!";
        body.appendChild(h1);
    }
}
export default Heading;