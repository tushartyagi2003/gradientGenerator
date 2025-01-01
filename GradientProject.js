let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let copydiv = document.querySelector(".copycode");
let rgb1 = "#095f9a";
let rgb2 = "#fff";

const hexvalue = () => {
    let hexvalue = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + hexvalue[Math.floor(Math.random() * 16)];
    }
    return color;
};

const handleBtn1 = () => {
    rgb1 = hexvalue();
    btn1.innerHTML = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}) `;
    copydiv.innerHTML = ` background-image : linear-gradient(to right, ${rgb1}, ${rgb2} )`;
};

const handleBtn2 = () => {
    rgb2 = hexvalue();
    btn2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}) `;
    copydiv.innerHTML = ` background-image : linear-gradient(to right, ${rgb1}, ${rgb2} )`;
};

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);

copydiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copydiv.innerText);
});

copydiv.addEventListener("click", () => {
    alert("Copied");
});
