import axios from "axios";
import { get } from "lodash";
import "@babel/runtime/regenerator";
import { log, logErrors } from "../utility/consoleShortcuts";
import { getBookElements } from "../getElements/getBookElements";
import { displayBookDescription } from "../display/displayBooksDescription";
import { descriptionModal } from "../components/modal";

// Request - get Book list
export const getBooksByGenres = async (searchItem) => {
  try {
    const url = `https://openlibrary.org/subjects/${searchItem}.json`
    const response = await axios.get(url)
    log(`getBooksByGenres - Response Status: ${response.status}`)
    let books = response.data.works

    getBookElements(books)
    //getCovers(books)
    displayBookDescription()
  } catch (error) {
    log('ERROR: getBooksByGenres function');
    log(`getBooksByGenres - Response Status: ${response.status}`)
    logErrors(error);
  }
}

// Request - get Description
export const descriptionRequest = async (key) => {
  try {
    let url = `https://openlibrary.org${key}.json`;
    const response = await axios.get(url);
    const description = get(response.data, 'description', 'No description for this book.')
    descriptionModal(description)
  } catch (error) {
    log('ERROR: descriptionRequest function')
    logErrors(error)
  }
}