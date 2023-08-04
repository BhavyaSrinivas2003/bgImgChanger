function Btn() {
    let inputElement = document.getElementById("themeUserInput");
    let bgElement = document.getElementById("bgContainer");
    let headingElement = document.getElementById("heading");

    if (inputElement.value === "Light") {
        bgElement.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        headingElement.style.color = "#014d40";
    } else if (inputElement.value === "Dark") {
        bgElement.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        headingElement.style.color = "#ffffff";
    } else {
        alert("Enter valid input");
    }

}

function keydownBtn(event) {

    if (event.key === "Enter") {
        Btn()
    }
}