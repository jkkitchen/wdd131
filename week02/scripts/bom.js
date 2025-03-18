//Declare 3 variables that hold references ot the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

//Create a click event listener for the Add Chapter button using an addEventListener
button.addEventListener("click", function () {
    //Check to make sure the input is not blank before completeing the remaining tasks in this list
    if (input.value.trim() !== '') {
        //Create a li element that will hold each entry's chapter title and an associated delete button.
        const li = document.createElement('li');

        //Create a delete button.
        const deleteButton = document.createElement('button');

        //Populate the li element variable's textContent or innerHTML with the input value.
        li.textContent = input.value;

        //Populate the button textContent with a X.
        deleteButton.textContent = '❌';

        //Append the li element variable with the delete button.
        li.append(deleteButton);

        //Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        //Append the li element variable to the unordered list in your HTML
        list.append(li);

        //Change the input value to nothing or the empty string to clean up the interface for the user.
        input.value = '';

        //Whether or not a list item was created, the focus should be sent to the input element.
        input.focus()

    } else {
        alert("Please enter a chapter.");
    }
});


