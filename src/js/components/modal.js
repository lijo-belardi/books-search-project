export const descriptionModal = (description) => {
    const modalBody = document.querySelector('.modal-body')
    let html = ''
    html = `<p>${description.value != null ? description.value : description}</p>`;
    modalBody.innerHTML = html
  }