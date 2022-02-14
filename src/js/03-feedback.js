import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form')
const emailEl = document.querySelector('input')
const textEl = document.querySelector('textarea')

const LOCALSTORAGE_KEY = 'feedback-form-state'

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

let formData = {}

function onFormInput (event) {
    formData = {
        email: emailEl.value,
        message: textEl.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit (event) {
    event.preventDefault()
    event.currentTarget.reset()
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

populateData();

function populateData() {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    if(data) {
        emailEl.value = data.email
        textEl.value = data.message
    }
}



