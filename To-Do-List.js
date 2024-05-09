// IEFE
(() => {
    //state variables
    let toDoListArray = [];
    // ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = Document.querySelector(".toDoList");

    // event listeners
    form.addEventListeners("submit", (e)) => {
        // prevent default behaviour . Page reload
        e.preventDefault();
        //give item a unique ID
        let itemId = String(date.now());
        //pass ID and item into functions
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, ToDoItem);
        //clear the input box. (this is default behaviour but we got rid of that)
        input.value = "";
    });

    ul.addEventListeners("click", (e) => {
        let id = e.target.getattribute("data-id");
        if (!id) return; // user clicked in something else
        // pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    //functions
    function addItemToDoDOM(itemId, ToDoItem) {
        // create an li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        // add toDoItem text to li
        li.innerText = toDoItem;
        // add li to the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        //add item to array as an object with an ID so we can find and delete it later
        toDoListArray.push({itemId, toDoItem});
        console.log(todoListArray);
    }
    
    function removeItemFromDOM(id) {
        //get the list item by data ID
        var li = document.querySelector('[data-id="' + id + '"]');
        // remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        //create a new toDoListArray with all li's that don't match the ID
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    }
})();