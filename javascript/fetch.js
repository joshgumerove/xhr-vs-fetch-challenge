const btn2 = document.getElementById("two");
const outputTwo = document.getElementById("output");
btn2.addEventListener("click", fetchClickHandler);

function fetchClickHandler() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then(({ joke }) => {
      outputTwo.innerHTML = joke;
    })
    .catch((e) => console.log("there has been an error: ", e));
}
