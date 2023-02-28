const php = document.getElementById("php");
const mysql = document.getElementById("mysql");

const python = document.getElementById("python");
const js = document.getElementById("js");
const html = document.getElementById("html");
const css = document.getElementById("css");
const java = document.getElementById("java");

const setaRight = document.getElementById("right");
const setaLeft = document.getElementById("left");

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");

setaLeft.addEventListener("click", () => {
  php.style.left = "50px";
  mysql.style.left = "-150px";
});

setaRight.addEventListener("click", () => {
  php.style.left = "-150px";
  mysql.style.left = "50px";
});

one.addEventListener("click", () => {
  python.style.left = "50px";
  js.style.left = "-150px";
  html.style.left = "-150px";
  css.style.left = "-150px";
  java.style.left = "-150px";
});
two.addEventListener("click", () => {
  python.style.left = "-150px";
  js.style.left = "50px";
  html.style.left = "-150px";
  css.style.left = "-150px";
  java.style.left = "-150px";
});
three.addEventListener("click", () => {
  python.style.left = "-150px";
  js.style.left = "-150px";
  html.style.left = "50px";
  css.style.left = "-150px";
  java.style.left = "-150px";
});
four.addEventListener("click", () => {
  python.style.left = "-150px";
  js.style.left = "-150px";
  html.style.left = "-150px";
  css.style.left = "50px";
  java.style.left = "-150px";
});
five.addEventListener("click", () => {
  python.style.left = "-150px";
  js.style.left = "-150px";
  html.style.left = "-150px";
  css.style.left = "-150px";
  java.style.left = "50px";
});
