function handleGetRandomQuote() {
  fetch("https://api.icndb.com/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".quote-card").innerHTML = data.value.joke;
    })
    .catch((err) => console.log(err));
}
