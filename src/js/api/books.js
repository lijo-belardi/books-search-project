import axios from "axios";
import {log, logErrors} from "../utility/consoleShortcuts";

// Request - get Book list
export const getBooksByGenres = async (searchItem) => {
    try {
      const url = `https://openlibrary.org/subjects/${searchItem}.json`
      const response = await axios.get(url)
      log(`getBooksByGenres - Response Status: ${response.status}`)
      let books = response.data.works
  
      //getBookElements(books)
      //getCovers(books)
      //displayBookDescription()
    } catch (error) {
      log('ERROR: getBooksByGenres function');
      log(`getBooksByGenres - Response Status: ${response.status}`)
      logErrors(error);
    }
  }