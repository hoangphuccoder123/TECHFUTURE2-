const scriptURL = 'https://script.google.com/macros/s/AKfycbz-NzxawTEMTyrvbRqe9VHhEaDFMd7faHs8rR8_k-n2ufLG7vly7Pwtzhn-kCjm8DqIMA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})