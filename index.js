




//!DECLARE THE HANDLER AND SUPPORT FUNCTIONS HERE

//* FUNCTION FOR SORTING BY NAME




// const heading = document.querySelector('h1')
// console.log(heading)




// // const val = document.querySelector('.value')
// // console.log(val)

// // const btn = document.querySelector('button')
// // console.log(btn)

// // const desc = document.querySelector('stat,div')
// // console.log(desc)


// // const hello = document.querySelector('.hello')
// // console.log(hello)

// const buttons = document.querySelectorAll('button')
// // console.log(buttons)


// //! WORKING WITH NODE LIST

// //* Get a list of all <h3> elements

// const heading3List = document.querySelectorAll('h3')

// //* Iterate over the list and print each one


// // heading3List.forEach((value) => console.log(value))

// //? Get a list of all the div elements containing ratings on the page. Log them to the console using the values method.

const rating = document.querySelectorAll('rating')

// for(let rate of rating.values()) {
//     console.log(rate)
// }
const areaThings = document.querySelectorAll('.area')
// console.log(areaThings)



// const ratings = document.querySelectorAll('.rating .value')
// ratings.forEach((element) => console.log(element))





//! Modifying Elements in DOM

// Print the description for each park to the console
const descriptions = document.querySelectorAll('.description')

for(let desc of descriptions.values()) {
let content = desc.innerText;
if(content.length > 250) {
    content = content.slice(0,250);
    content = content = content +  '<a href="$">...</a>'
}

desc.innerHTML = content
// console.log(content)
}




//! Changing the style

// const ratings = document.querySelectorAll('.rating .value')


// for(let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText)
//     if(ratingValue > 4.7) {
//         rating.classList.add('high-rating')
//         rating.classList.remove('value')
//         // rating.style.fontWeight = 'bold'
//         // rating.style.color = 'blue'
//     }
//     // console.log(ratingValue)
// }

// //! Creating DOM Elements
// //? First select all the parks on the page
// const parks = document.querySelectorAll('.park')

// // ? Then get the number of parks
// const numberParks = parks.length

// //? Then create a new element
// const newElement = document.createElement('div')

// newElement.innerText = `${numberParks} exciting parks to visit`

// newElement.classList.add('header-statement')

// const header = document.querySelector('header')
// header.appendChild(newElement)




//! EVENT LISTENERS


const firstBtn = document.querySelector('button')
firstBtn.style.color = 'red'
firstBtn.addEventListener('click',(event) => {
    console.log(event.target)
    // alert('You clicked the button')
}) 

// ? Select all of the buttons for all the parks
const allBtns = document.querySelectorAll('.rateBtn')



//? iterate through the list of buttons and add an event handler

allBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const park = event.target.parentNode
        park.style.backgroundColor = 'red'
        console.log(event.target.parentNode)
    })
})


//?Select nameSorter Link

const nameSorter = document.querySelector('#nameSorter');

// ? Add the event listener

nameSorter.addEventListener('click', (event) => {
    event.preventDefault()
  
//? 1. Get the main element
const main = document.querySelector('main')

//? 2 Get the list of parks

const parksList = document.querySelectorAll('.park')

//? 3 Empty the main element

main.innerHTML = '';

//? 4 Create an array

const parksArray = Array.from(parksList)

// console.log(parksArray)

//? 5 Sort the array

parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector('h2').innerText;
    const parkBName = parkB.querySelector('h2').innerText
    if(parkAName < parkBName) {
        return -1
    }else if (parkAName > parkBName) {
        return 1
    }else {
        return 0
    }

})

//? 6 Insert each park into the DOM
parksArray.forEach((park) => {
    main.appendChild(park)
})

})



//!FUNCTION FOR SORTING BY NAME


const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector('h2').innerText;
    const parkBName = parkB.querySelector('h2').innerText
    if(parkAName > parkBName) {
        return -1;
    }else if(parkAName < parkBName) {
        return 1
    }else {
        return 0
    }
}


// ? Function for handling the nameSorter Click
const nameSorterClickHandler = (event) => {
    event.preventDefault()


//? Get the main element

const main = document.querySelector('main');

//? Get the list of parks

const parksList = document.querySelectorAll('.park')

//? Empty the main

main.innterHTML = '';

//? Create an array

const parksArray = Array.from(parksList)

// ? Sort the array

parksArray.sort(sortByName)


//? Insert each park into the DOM

parksArray.forEach((park) => {
    main.appendChild(park)
})
};


//? Select the namesorter link

// const nameSorter = document.querySelector('#nameSorter');

//? Add an event listener

nameSorter.addEventListener('click',nameSorterClickHandler)


//! SORT PARKS BY RATING

const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(parkA.querySelector('.rating > .value').innerText)
    const parkBRating = parseFloat(parkB.querySelector('.rating > .value').innerText)
    return parkBRating - parkARating
}

// //? Function for handling the ratingSorter click
// const ratingSorter = document.querySelector('#ratingSorter')


const ratingSorterClickHandler = (event) => {
    event.preventDefault()


    //? Step 1 - get the main element
const main = document.querySelector('main')

//? Step 2 - get the list of parks
const parksList = document.querySelectorAll('.park')

//? Step 3 - Empty the main
main.innerHTML = '';

//? Create an array
const parksArray = Array.from(parksList) 


//?Sort the array
parksArray.sort(sortByRating)

//? Insert each park into the dom
parksArray.forEach((park) => {
    main.appendChild(park)
})


}


ratingSorter.addEventListener('click', ratingSorterClickHandler)







