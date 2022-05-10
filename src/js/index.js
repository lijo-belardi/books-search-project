import '../styles/main.scss'; // connect scss to template.html
import {getBooksByGenres} from './api/books';
import {submitFunction} from './components/submit'
import { refreshFunction } from './components/refresh';

const form = document.getElementById('form')
const refreshButton = document.getElementById('refresh-button')

form.addEventListener('submit', submitFunction) // Submit
refreshButton.addEventListener('click', refreshFunction) // Refresh button