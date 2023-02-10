let life = 100;
let hunger = 100;
let tiredness = 100;

setInterval(() => {
  hunger -= 1;
  tiredness -= 1;
  hunger = Math.max(hunger, 0);
  tiredness = Math.max(tiredness, 0);
  life = 100 - hunger - tiredness;
  updateBars();
}, 1500);

const updateBars = () => {
  document.querySelector("#feed-bar").style.width = `${hunger}%`;
  document.querySelector("#sleep-bar").style.width = `${tiredness}%`;
  life = (hunger + tiredness) / 2;
  document.querySelector("#life-bar").style.width = `${life}%`;

  document.querySelector("#feed-bar").textContent = `${hunger}%`;
  document.querySelector("#sleep-bar").textContent = `${tiredness}%`;
  document.querySelector("#life-bar").textContent = `${life}%`;

  // Lógica para cambiar el color
  if (hunger >= 70) {
    document.querySelector("#feed-bar").style.backgroundColor = "rgb(57, 50, 161)";
  } else if (hunger >= 30) {
    document.querySelector("#feed-bar").style.backgroundColor = "rgb(250, 229, 45)";
  } else if (life >= 1){
    document.querySelector("#feed-bar").style.backgroundColor = "rgb(255, 0, 0)";
  }

  if (tiredness >= 70) {
    document.querySelector("#sleep-bar").style.backgroundColor = "rgb(0, 109, 143)";
  } else if (tiredness >= 30) {
    document.querySelector("#sleep-bar").style.backgroundColor = "rgb(250, 229, 45)";
  } else if (life >= 1){
    document.querySelector("#sleep-bar").style.backgroundColor = "rgb(255, 0, 0)";
  }

  if (life >= 70) {
    document.querySelector("#life-bar").style.backgroundColor = "rgb(0, 105, 56)";
  } else if (life >= 30) {
    document.querySelector("#life-bar").style.backgroundColor = "rgb(250, 229, 45)";
  } else if (life >= 1){
    document.querySelector("#life-bar").style.backgroundColor = "rgb(255, 0, 0)";
  }


  // Cambio de imagen con base al color de la barra
  const img = document.querySelector(".pikachu");
  if (hunger >= 70) {
    img.src = "images/pikachuhappy.gif";
  } else if (hunger >= 30) {
    img.src = "images/pikachuangry.gif";
  } else if (hunger >= 1) {
    img.src = "images/pikachusad.gif";
  } else if (hunger >= 0){
    img.src = "images/RIP1.png";
  } 
};


const decreaseValues = () => {
  hunger -= 1;
  tiredness -= 1;
  hunger = Math.max(hunger, 0);
  tiredness = Math.max(tiredness, 0);
  life = hunger + tiredness;
};


const intervalId = setInterval(() => {
  decreaseValues();
  updateBars();
  alertTamagotchi();
}, 1500);

function feed() {
  hunger += Math.floor(Math.random() * 20 + 10);
  hunger = Math.min(hunger, 100);
  updateBars();
}

function sleep() {
  tiredness += Math.floor(Math.random() * 20 + 10);
  tiredness = Math.min(tiredness, 100);
  updateBars();
}


