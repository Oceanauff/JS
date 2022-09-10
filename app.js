const title = document.querySelector(".board h1");

function titleClick() {
  title.innerText = "Title is Clicked!!";
}

function titleEnter() {
  title.innerText = "Title is Entered!!";
}

function titleLeave() {
  title.innerText = "Title is Leaved!!";
}

//title.addEventListener("click", titleClick);
//title.addEventListener("mouseenter", titleEnter);
//title.addEventListener("mouseleave", titleLeave);

title.onclick = titleClick;
title.onmouseenter = titleEnter;
title.onmouseleave = titleLeave;

function changeBackColor() {
  document.body.style.backGroundColor = "blue";
}

function noCopy() {
  alert("no!!");
}

function funOffline() {
  alert("offline...");
}

function funOnline() {
  alert("online...");
}

window.addEventListener("resize", changeBackColor);
window.addEventListener("copy", noCopy);
window.addEventListener("offline", funOffline);
window.addEventListener("online", funOnline);
