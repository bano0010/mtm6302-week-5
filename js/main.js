// console.log ("JS File Connection")

const $bodyTag = document.querySelector('body')

const $newSection = document.createElement('section')
$newSection.id = "groceries"

$bodyTag.appendChild($newSection)

$newSection.insertAdjacentHTML("afterbegin", `<h2>Groceries</h2>` )

$newSection.insertAdjacentHTML("beforeend", `<ul id="grocery-list"></ul>`)

let $groceryItems = [ "apple", "banana", "dog food", "milk", "eggs", "bread"]
const $groceryUl= document.getElementById("grocery-list")

// for($item of $groceryItems) {
/* $groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`) } */

/*$groceryItems.forEach(functon($item) {
    $groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`)

}) */

// $groceryItems.forEach($item => $groceryItems.insertAdjacentHTML("beforeend", `<li>${$item}</li>`)

let $listItem =[]
$groceryItems.forEach($item => $listItem.push(`<li>${$item}</li>`))
$groceryUl.insertAdjacentHTML("beforeend", $listItem.join(''))

/*create an addItem function that allows us to add a new item to the list
and display the update list on the page */

function addItem(item){
    // add item to the groceryItem array
    $groceryItems.push(item)

    // display the new item on the page 
    $groceryUl.insertAdjacentHTML("afterbegin", `<li> ${item}</li>`)
}

// add a removeItem function that accept the item to be moved as parameter 
// filter the array based on the array
// display the filter array on the page

function removeItem (thing){
    // filter array base on thing
    $groceryItems = $groceryItems.filter(item => item !== thing)

    // display the filtered array on the page 
    // map each item for the $groceryItems array inside by adding the HTML template
    $listItem = $groceryItems.map(item => `<li>${item}</li>`)

    $groceryUl.innerHTML = ""
    $groceryUl.insertAdjacentHTML("beforeend", $listItem.join(''))
}
