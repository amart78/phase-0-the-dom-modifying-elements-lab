// Write your code here!

const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

const element1 = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";

element.textContent = "You've changed what's on the screen!";

element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog";

element.classList.remove("dog");
element.classList.add("cat", "sale");

const ul1 = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

ul.remove();

var newHeader = document.createElement("h1")

document.body.append(newHeader);

newHeader.textContent = "YOUR-NAME is the champion";