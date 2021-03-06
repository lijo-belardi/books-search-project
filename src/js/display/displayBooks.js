import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { log, logErrors } from "../utility/consoleShortcuts";


export const displayBook = async (book) => {
  try {
    let html = ''
    const bookList = document.getElementById('book-list')
    book.forEach(element => {
      html += `
        <!-- Single book - main div -->
        <div class="card card--soft-dark book" data-id="${element.key}">
            
            <!-- Book - Title -->
            <div class="book-title">
                <h2>${element.title}</h2>
            </div>

            <!-- Book - Cover -->
            <div class="book-cover">
            </div>

            <!-- Book - Authors -->
            <div class="book-authors">
                <h4>Authors: ${element.authors}</h4>
            </div>

            <!-- Button trigger modal -->
            <div class="book-button">
                <button type="button" class="description-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Read Description
                </button>
            </div>
            <!-- Description's modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Description</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
            </div> <!-- Description's modal -->
          </div> <!-- Single book - main div -->`;
    });
    bookList.innerHTML = html

  } catch (error) {
    log('ERROR: displayBooks function')
    logErrors(error)
  }
}
