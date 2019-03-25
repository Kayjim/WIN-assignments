document.querySelector("#spin").addEventListener("click", function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    console.log(`rgb(${r}, ${g}, ${b})`);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".jumbotron").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector("footer").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});