import '../styles/main.scss'; // connect scss to template.html
import {getBooksByGenres} from './api/books';
import {submitFunction} from './components/submit'



const form = document.getElementById('form')

form.addEventListener('submit', submitFunction) // Submit