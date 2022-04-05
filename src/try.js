let p = document.getElementById("p1")

btn = document.addEventListener("btn")
console.log("js file")

btn.addEventListener("click", change)
function change() {
    p.innerHTML = "<h1>Changed!!!!</h1>"
    console.log("hii")

}