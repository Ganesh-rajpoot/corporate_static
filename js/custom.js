const scriptURL = 'https://script.google.com/macros/s/AKfycbzTYmIsvEqLjvc3cj95ew3375ADA92e9IcaH-zTggj-UsUFdBRoWmZSv3HDvMzk-yAx/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})