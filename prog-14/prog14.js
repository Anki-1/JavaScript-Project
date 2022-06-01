const jokes = document.querySelector(".jokes");

const btn = document.querySelector(".btn");

const getDadJokes = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };

    const res = await axios.get("https://icanhazdadjoke.com/", config);

    const newLI = document.createElement("li");

    newLI.innerHTML = res.data.joke;

    jokes.append(newLI);
  } catch (e) {
    jokes.append("NO JOKES AVAILABLE");
  }
};

btn.addEventListener("click", getDadJokes);
