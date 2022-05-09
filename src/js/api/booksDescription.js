import axios from "axios";
import "@babel/runtime/regenerator";
import { log, logErrors } from "../utility/consoleShortcuts";
import { get } from "lodash";
import { descriptionModal } from "../components/modal";

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