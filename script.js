function changeText() {
    document.getElementById("main-title").textContent = "You've changed the title!";
}

function changeStyle() {
    document.body.style.backgroundColor = "#f0f8ff";
    document.getElementById("description").style.color = "blue";
    document.getElementById("description").style.fontWeight = "bold";
}

function addElement() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added to the page!";
    newParagraph.setAttribute("id", "new-paragraph");
    document.getElementById("dynamic-content").appendChild(newParagraph);
}

function removeElement() {
    const paragraph = document.getElementById("new-paragraph");
    if (paragraph) {
        paragraph.remove();
    } else {
        alert("No element to remove!");
    }
}
