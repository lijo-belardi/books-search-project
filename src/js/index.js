import '../styles/main.scss'; // connect scss to template.html
import {getBooksByGenres} from './api/books';

getBooksByGenres('love')