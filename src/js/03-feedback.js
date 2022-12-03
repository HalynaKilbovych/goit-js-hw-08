import throttle from 'lodash.throttle';

const refs = { 
    form: document.querySelector('.feedback-form'), 
    email: document.querySelector('.feedback-form input'), 
    textarea: document.querySelector('.feedback-form textarea'), 
}; 

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formData = {};


refs.form.addEventListener('submit', onFormSubmit); 
refs.form.addEventListener('input',throttle(onInput, 500));;


function onInput(e) { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(formData));

};

function onFormSubmit(e) { 
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))); 
    e.currentTarget.reset(); 
    localStorage.removeItem(LOCAL_STORAGE_KEY)

};  

populateData(); 
function populateData() {
    const parseData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (parseData) {
        console.log(parseData);
      refs.textarea.value = parseData.message;
      refs.email.value = parseData.email;
    }
  }
  