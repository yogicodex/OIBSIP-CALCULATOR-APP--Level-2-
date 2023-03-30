const addListBtn = document.querySelector(".add-list_icon");
const inputText = document.querySelector("#input");
const listNode = document.querySelector(".list");
const listItem = document.querySelector(".new-list_item");


addListBtn.addEventListener("click", () => {
    console.log("addListBtn clicked");
    console.log(inputText.value);
    if (inputText.value.length > 0) {
        const createElement = document.createElement("li");
        createElement.classList.add("new-list_item")
        createElement.textContent = inputText.value;
        listNode.appendChild(createElement)
        inputText.value = "";


        createElement.addEventListener("click", () => {
            createElement.classList.toggle("active-line_through");
        })

        createElement.addEventListener("dblclick", () => {
            listNode.removeChild(createElement)
            console.log("dbl")
        })

    }

});







