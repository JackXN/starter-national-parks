const submitHandler = (event) => {

const form = event.target

const formData = new formData(form)

const errors = validateForm(formData)

//* Clear all previous errors

const errorElements = document.querySelectorAll('.error')
for(let element of errorElements) {
    element.style.display = 'none'
}


//* display any new errors




Object.keys(errors).forEach((key) => {
    //* Find the specific error element
    const errorElement = document.querySelector(`#park_${key} .error`);
    error.element.innerHTML = errors[key];
    errorElement.style.display = 'block';
    
})

//* check if rating was entered
if(!validateExists(formData.get('rating'))) {
    errors.rating = 'Please enter a rating'
}else {
    //* check if the rating is a number
    if(!validateExists(formData.get('rating'))) {
        errors.rating = 'Rating must be a number'
    }else {
        //* Since it is a number we need to convert it
        const rating = Number.parseFloat(formData.get('rating'))
        //* Check that the rating is between 1 and 5 inclusive
        if(!validateRange(rating, 1,5)) {
            errors.rating = 'Rating must be between 1 and 5 inclusive'
        }
    }
}
//! Adding a park to the DOM
//? We can create a new section element and set the rest of the HTML as the innerHTML property of the element. We can use template literals to construct the correct HTML.


//! Add The park to the dom!


//* if there are no errors, create a new element
if(!Object.keys(errors).length) {
    const parkSection = document.createElement('section')

    //* Add the park calss
    parkSection.classList.add('park')

    //* Construct the HTML for this element
    const content = `
    <h2>${formData.get('name')}</h2>
    <div class = 'location'>${formData.get('location')}</div>
    <div class = 'description'${formData.get('description')}</div>
    <button class = 'rateBtn' title = 'Add to favorites'>&#9734;</button>
    <div class = 'stats'>
    <div class = 'established stat'>
    <h3>Established</h3>
    <div class = 'value'>${moment(formData.get('established')).format('MMM D, YYYY')}</div>
    </div>

    <div class = 'area stat' >
    <h3>Area</h3>
    <div class = 'value'>${formData.get('area')} </div>
    </div>


    <div class = 'rating stat'>
    <h3>Rating</h3>
    <div class = 'value'>${formData.get('rating')}</div>
    </div>
    </div>`;

    // ? set the inner HTML
parkSection.innerHTML = content;

//? Append to the main element
document.querySelector('main').appendChild(parkSection)

}








    // event.preventDefault() // ? event.preventDefault() prevents the page from refreshing
    // console.log('the form was submitted!')
    


// * Get the name input
// const parkName = document.querySelector('#name').value
// console.log(parkName)


//? Using the formData object to return the forms data as a set of key-value paris
// const formData = new FormData(event.target)
    

// //? The Formdata object has several methods for working with the form.
// //? For example i can use the get() method to get a specific value
// //? The keys in the FormData correspond to the names of the forms <input> elements
// const name = formData.get('name')
// console.log(name)

}



//* Validation function to validate that a given value is actually a number and another that validates the number in a specific range

function validateNumber(value) {
    return !isNaN(value)
}

function validateRange(value,min,max) {
    return value >= min && value <= max
}


const main = () => {
    //* Get the form element
const form = document.querySelector('#parkForm')
//*Attach the submit handler
form.addEventListener('submit', submitHandler) 
   


}

window.addEventListener('DOMContentLoaded', main)




//! The main validation function

//* This function will take each input field, perform required validation on it and generate a collection of error messages,which will then be displayed to the user

const validateForm  = formData => {

    const errors = {};

    //* Check if name was entered
    if(!validateExists(formData.get('name'))) {
        errors.name = 'Please enter a name';
    }

    //*Check if rating was entered

    if(!validateExists(formData.get('rating'))) {
        errors.rating = 'Please enter a rating'
    }


    //* Check if description was entered
    if(!validateExists(formData.get())) {
        errors.description = 'Please enter a short description'
    }

    //* check if established date was entered
    if(!validateExists(formData.get())) {
        errors.established = 'Please enter a date'
    }

    //* Check if area was entered

    if(!validateExists(formData.get()))
    errors.area = 'Please enter the area of the park'

    //* Check if the location date was entered
if(!validateExists(formData.get()))
errors.location = 'Please enter the location of the park'; 
{
    return errors;
}

}











