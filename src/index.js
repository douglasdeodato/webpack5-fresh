import Heading from './components/heading/heading.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


if (process.env.NODE_ENV === 'production'){
    console.log('production mode ');
} else if (process.env.NODE_ENV === 'development'){
    console.log('development mode');
}

const heading = new Heading();
heading.render('index');