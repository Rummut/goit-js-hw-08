import throttle  from "lodash.throttle";

const formEl = document.querySelector(".feedback-form")

const formObject = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

formFull()

function formFull() {

    if (formObject) {
        formEl.elements.email.value = formObject.email || ""
        formEl.elements.message.value = formObject.message || ""
    }
}

const setEmailLocalStorage = (event) => {
    formObject.email = formEl.elements.email.value.trim()
    formObject.message = formEl.elements.message.value.trim()
    localStorage.setItem('feedback-form-state', JSON.stringify(formObject))
}

formEl.addEventListener("input", throttle(setEmailLocalStorage, 500))

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    localStorage.removeItem('feedback-form-state')
     console.log("Email:", formEl.elements.email.value)
    console.log("Message:", formEl.elements.message.value)
    formEl.elements.email.value = ""
    formEl.elements.message.value = ""
})
