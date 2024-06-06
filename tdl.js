const item = document.querySelector("#item")
const tdl = document.querySelector("#tdl")
item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)
const addToDo = (item) => {
    const listI = document.createElement("li");
    listI.innerHTML = `
    ${item}
    <i class="fa-solid fa-xmark"></i>
    ` ;
    listI.addEventListener(
        "click",
        function () {
            this.classList.toggle("done")
        }
    )
    listI.querySelector("i").addEventListener(
        "click",
        function () {
            listI.remove()
        }
    )
    tdl.appendChild(listI)
}
