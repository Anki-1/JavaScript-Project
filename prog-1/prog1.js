const container = document.querySelector("#container");

const urlBase =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 0; i <= 151; i++) {
  const pokemon = document.createElement("div");
pokemon.classList.add("container")
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const image = document.createElement("img");
  image.src = `${urlBase}${i}.png`;
  pokemon.appendChild(image);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
