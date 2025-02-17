let listaAmigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  //comprobamos que se ingrese un string y no numeros como nombre
  let esString = (str) => /^[a-zA-Z]*$/.test(str);
  //chequeamos que no ingrese un valor vacio y que sea un string
  if (amigo == "" || esString(amigo) == false) {
    alert("Por favor, ingresa un nombre de valido de algun amigo.");
  } else {
    //chequeamos que el amigo no se incluya 2 veces
    if (listaAmigos.includes(amigo)) {
      alert(`El amigo ${amigo} ya se encuentra en la lista`);
    } else {
      listaAmigos.push(amigo);
      document.getElementById("amigo").value = "";
      actualizarLista();
    }
  }
}

function actualizarLista() {
  let amigos = document.getElementById("listaAmigos");
  amigos.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    let amigo = document.createElement("li");
    amigo.textContent = listaAmigos[i];
    amigos.appendChild(amigo);
  }
}

function sortearAmigo() {
  let amigoSecreto =
    listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.textContent = "El amigo secreto es: " + amigoSecreto;
  document.getElementById("reiniciar").removeAttribute("disabled");
}

//permitimos que con un enter se agregue un amigo
document.getElementById("amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

document
  .getElementById("resultado")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      sortearAmigo();
    }
  });
console.log(listaAmigos);

function limpiarLista() {
  listaAmigos = [];
  let resultado = document.getElementById("resultado");
  resultado.textContent = "";
  actualizarLista();
}

function reiniciar() {
  limpiarLista();
}
