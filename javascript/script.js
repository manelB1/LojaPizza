let modalQT = 1
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
//essas duas constantes estão servindo para que não precise ficar repetindo querySelector e querySelectorAll
pizzaJson.map((item, index) => {
  let pizzaItem = c(".models .pizza-item").cloneNode(true);
  pizzaItem.setAttribute("data-key", index);
  //preencher as informações em pizzaitem
  //o cloneNode está clonando o item com todas as informções que estão dentro.
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  //toFixed está sendo usado para colocar dois algarismos depois da virgula. É como um float
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  //o name está sendo pego la do arquivo Json que eu criei(pizzas.js).
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    //addEventListener adciona um evento a determinada classe, id, tag, etc. Neste caso está adcionando evento de click.
    e.preventDefault();
    let key = e.target.closest(".pizza-item").getAttribute("data-key");
    modalQT = 1
    c(".pizzaBig img").src = pizzaJson[key].img;
    c(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    c(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    c(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[key].price.toFixed(
      2
    )}`;
    c(".pizzaInfo--size.selected").classList.remove("selected");
    cs(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if(sizeIndex == 2){
        size.classList.add('selected')
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });
    c('.pizzaInfo--qt').innerHTML = modalQT;
    c(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      c(".pizzaWindowArea").style.opacity = 1;
    }, 200);
    //setTimeout está sendo utilizado para colocar 1/5 de segundo para exibir a opacidade, é basicamente uma animação.
  });

  c(".pizza-area").append(pizzaItem);
});
