const form = document.querySelector(".form");

const text1 = document.getElementById("input1");

const text2 = document.getElementById("input2");

const weather = document.querySelector(".weather")

const celsius = document.querySelector(".celsius");

const condition = document.querySelector(".condition");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let value1 = input1.value;

  let value2 = input2.value;

  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${value1}&units=${value2}&appid=a703c2170924cb442fedfc26769a3a5d`
  );

  weather.innerHTML = `Weather of ${value1}`

  celsius.innerHTML = `${res.data.main.temp} * C`

  // condition.innerHTML = `${res.data.weather.description}`

  input1.value = ""

  input2.value = ""
});
