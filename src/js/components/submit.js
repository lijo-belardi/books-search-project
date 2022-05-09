import { getBooksByGenres } from "../api/books"

// submit function
export const submitFunction = (e) => {
    // set variables
    const formErrorMessage = document.getElementById('error-message')
    const subject = e.target.querySelector('#search-input')
    const searchItem = subject.value.toLowerCase()
  
    e.preventDefault()
  
    // searchItem conditions
    let messages = []
    if (subject.value === '' || subject.value == null) {
      messages.push('Subject is required!')
    }
    if (messages.length > 0) {
      formErrorMessage.innerText = messages.join(', ')
    }
  
    //function invocation
    getBooksByGenres(searchItem)
  }