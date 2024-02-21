/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image
        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        let breed = url.split('/')[4]

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
            const img = document.createElement("img")
            img.src = url
            const listItem = document.createElement("li")
            const figureItem = document.createElement("figure")
            const figureCaption = document.createElement("figcaption")
            figureCaption.innerText = breed

            figureItem.appendChild(img)
            figureItem.appendChild(figureCaption)
            listItem.appendChild(figureItem)

            const gallery = document.getElementsByClassName("gallery")
            const ul = gallery[0].children[0]
            ul.appendChild(listItem)
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log(e)
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const gallery = document.getElementsByClassName("gallery")
    const ul = gallery[0].children[0]
    const firstChild = ul.children[0]
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstChild.remove()
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const gallery = document.getElementsByClassName("gallery")
    const ul = gallery[0].children[0]
    const length = ul.children.length
    const lastChild = ul.children[length - 1]
    console.log(lastChild)
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastChild.remove()
});
