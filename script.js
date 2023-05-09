let buttonBasics = document.querySelector('.price-rate-buttons>div');
let acc1 = document.querySelector('.accordion-1');
let textBasics = document.querySelector(".basics>p");
let textStandart = document.querySelector(".standart>p");
let textPro = document.querySelector(".pro>p");
buttonBasics.onclick  = function () {

/* Buttons can be only opened */
buttonBasics.style.width = "250px";
buttonBasics.style.height = "154px";



textBasics.style.margin = "0"
let basicsDesc = document.createElement('div');
buttonBasics.append(basicsDesc)
basicsDesc.classList.toggle('hl-basics')
let hlBasics = document.querySelector('hl-basics');
let basicsP = document.createElement('p')
buttonBasics.append(basicsP);
basicsP.classList.toggle('p-basics')
basicsP.textContent =
  "Release of Letraset sheets containing Lorem Ipsum passages, and more recently";


basicsP.style.width  = "168px"
basicsP.style.paddingTop = "6px";
let basicsCost = document.createElement('p')
basicsCost.classList.toggle('cost')
basicsP.append(basicsCost)
let span = document.createElement('span')
span.classList.toggle('span-cost');
span.textContent = " / per hour";
basicsCost.textContent = "$15";
basicsCost.appendChild(span);
let basicsOrder = document.createElement('div')

basicsCost.append(basicsOrder)
basicsOrder.classList.toggle = ('bp')
let orP = document.createElement('p')
basicsOrder.appendChild(orP)

orP.textContent = "Order"
basicsOrder.style.textAlign = "center"
orP.style.position = "relative";
orP.style.top = "3px"

   buttonBasics.classList.remove("hover");


}


let buttonStandart = document.querySelector(".standart");
buttonStandart.onclick = function () {
  buttonStandart.style.width = "250px";
  buttonStandart.style.height = "154px";

  textBasics.style.margin = "0";
  let basicsDesc = document.createElement("div");
  buttonStandart.append(basicsDesc);
  basicsDesc.classList.toggle("hl-basics");
  let hlBasics = document.querySelector("hl-basics");
  let basicsP = document.createElement("p");
  buttonStandart.append(basicsP);
  basicsP.classList.toggle("p-basics");
  basicsP.textContent =
    "Release of Letraset sheets containing Lorem Ipsum passages, and more recently";

  basicsP.style.width = "168px";
  basicsP.style.paddingTop = "6px";
  let basicsCost = document.createElement("p");
  basicsCost.classList.toggle("cost");
  basicsP.append(basicsCost);
  let span = document.createElement("span");
  span.classList.toggle("span-cost");
  span.textContent = " / per hour";
  basicsCost.textContent = "$15";
  basicsCost.appendChild(span);
  let basicsOrder = document.createElement("div");

  basicsCost.append(basicsOrder);
  basicsOrder.classList.toggle = "bp";
  let orP = document.createElement("p");
  basicsOrder.appendChild(orP);

  orP.textContent = "Order";
  basicsOrder.style.textAlign = "center";
  orP.style.position = "relative";
  orP.style.top = "3px";
     buttonStandart.classList.remove("hover");
}


let buttonPro = document.querySelector('.pro');

buttonPro.onclick = function () {

  buttonPro.style.width = "250px";
  buttonPro.style.height = "154px";

  textBasics.style.margin = "0";
  let basicsDesc = document.createElement("div");
  buttonPro.append(basicsDesc);
  basicsDesc.classList.toggle("hl-basics");
  let hlBasics = document.querySelector("hl-basics");
  let basicsP = document.createElement("p");
  buttonPro.append(basicsP);
  basicsP.classList.toggle("p-basics");
  basicsP.textContent =
    "Release of Letraset sheets containing Lorem Ipsum passages, and more recently";

  basicsP.style.width = "168px";
  basicsP.style.paddingTop = "6px";
  let basicsCost = document.createElement("p");
  basicsCost.classList.toggle("cost");
  basicsP.append(basicsCost);
  let span = document.createElement("span");
  span.classList.toggle("span-cost");
  span.textContent = " / per hour";
  basicsCost.textContent = "$15";
  basicsCost.appendChild(span);
  let basicsOrder = document.createElement("div");

  basicsCost.append(basicsOrder);
  basicsOrder.classList.toggle = "bp";
  let orP = document.createElement("p");
  basicsOrder.appendChild(orP);

  orP.textContent = "Order";
  basicsOrder.style.textAlign = "center";
  orP.style.position = "relative";
  orP.style.top = "3px";
   buttonPro.classList.remove('hover')



};

