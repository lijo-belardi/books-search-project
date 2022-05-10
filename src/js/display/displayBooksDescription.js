import axios from "axios";
import { async } from "@babel/runtime/regenerator"
import { log, logErrors } from "../utility/consoleShortcuts"
import { descriptionRequest } from "../api/booksDescription";

export const displayBookDescription = async () => {
    try {
        // take all description-buttons
        const descriptionButton = document.querySelectorAll(".description-button");
        
        // addEventListener
        descriptionButton.forEach((button => {
            button.addEventListener('click', (e) => {
                // Take data-id from book
                let key = (e.target.parentElement.parentElement).dataset.id
                descriptionRequest(key)
            })
        }))
    } catch (error) {
        log('ERROR: displayBookDescription function')
        logErrors(error)
    }
}