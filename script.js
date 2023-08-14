let buttonBasics = document.querySelector('.price-rate-buttons>div');
let acc1 = document.querySelector('.accordion-1');
let textBasics = document.querySelector(".basics>p");
let textStandart = document.querySelector(".standart>p");
let textPro = document.querySelector(".pro>p");

let bas = document.querySelector(".basics");
let st = document.querySelector(".standart");
let pro = document.querySelector(".pro");

let fn = function () {
  bas.classList.toggle('opened')
 st.classList.toggle("hidden");
 pro.classList.toggle('hidden')
 bas.classList.toggle('hover')
}
bas.addEventListener('click', fn)
let fn2 = function () {
  bas.classList.toggle("hidden");
  st.classList.toggle("opened");
  pro.classList.toggle("hidden");
  st.classList.toggle('hover')
};
st.addEventListener("click", fn2);

let fn3 = function () {
  bas.classList.toggle("hidden");
  st.classList.toggle("hidden");
  pro.classList.toggle("opened");
 pro.classList.toggle('hover')
};
pro.addEventListener("click", fn3);