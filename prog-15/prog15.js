const form = document.querySelector(".form");

const input = document.getElementById("query");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let value = input.value;

  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${value}`);

  showImages(res.data);

  input.value = "";
});

const showImages = (serial) => {

  for (let result of serial) {

    if (result.show.image) {
      
      const img = document.createElement("IMG");

      img.src = result.show.image.medium;

      document.body.append(img);
    }
  }
};
