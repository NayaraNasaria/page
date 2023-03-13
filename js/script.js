const php = document.getElementById("php");
const mysql = document.getElementById("mysql");

const js = document.getElementById("js");
const html = document.getElementById("html");
const css = document.getElementById("css");
const java = document.getElementById("java");

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");

one.addEventListener("click", () => {
  php.style.left = "80px";
  js.style.left = "500px";
  html.style.left = "-150px";
  css.style.left = "-150px";
  java.style.left = "-150px";
  mysql.style.left = "-150px";
});
two.addEventListener("click", () => {
  php.style.left = "-150px";
  js.style.left = "80px";
  html.style.left = "-150px";
  css.style.left = "-150px";
  java.style.left = "-150px";
  mysql.style.left = "-150px";
});
three.addEventListener("click", () => {
  php.style.left = "-150px";
  js.style.left = "500px";
  html.style.left = "80px";
  css.style.left = "-150px";
  java.style.left = "-150px";
  mysql.style.left = "-150px";
});
four.addEventListener("click", () => {
  php.style.left = "-150px";
  js.style.left = "500px";
  html.style.left = "-150px";
  css.style.left = "80px";
  java.style.left = "-150px";
  mysql.style.left = "-150px";
});
five.addEventListener("click", () => {
  php.style.left = "-150px";
  js.style.left = "500px";
  html.style.left = "-150px";
  css.style.left = "-150px";
  java.style.left = "80px";
  mysql.style.left = "-150px";
});

six.addEventListener("click", () => {
  mysql.style.left = "80px";
  php.style.left = "-150px";
  js.style.left = "500px";
  html.style.left = "-150px";
  css.style.left = "-150px";
  java.style.left = "-150px";
});
