import axios from "axios";
import { get } from "lodash";
import "@babel/runtime/regenerator";
import { log, logErrors } from "../utility/consoleShortcuts";
import { getBookElements } from "../getElements/getBookElements";
import { displayBookDescription } from "../display/displayBooksDescription";


// Request - get Book list
export const getBooksByGenres = async (searchItem) => {
  try {
    const spinner = document.querySelector('.spinner-border')
    const url = `https://openlibrary.org/subjects/${searchItem}.json`
    spinner.style.display = 'block'
    const response = await axios.get(url)
    log(`getBooksByGenres - Response Status: ${response.status}`)
    let books = response.data.works

    getBookElements(books)
    displayBookDescription()
  } catch (error) {
    log('ERROR: getBooksByGenres function');
    log(`getBooksByGenres - Response Status: ${response.status}`)
    logErrors(error);
  } finally {
    const spinner = document.querySelector('.spinner-border')
    const bookList = document.querySelector('.book-list')
    spinner.style.display = 'none'
    bookList.style.display = 'flex'
  }
}
