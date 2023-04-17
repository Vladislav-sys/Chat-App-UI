const avatar = document.querySelector(".chat__avatar img");
const name = document.querySelector(".chat__name");

const url = new URL(location.href);

avatar.src =`images/avatars/${url.searchParams.get("num")}.png`;

avatar.onload = function () {
    const arr = url.searchParams.get("name").split("-");
    let text = "";
    for (let el of arr) text += el + " ";
    name.textContent = text;
}



