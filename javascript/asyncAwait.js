const btn3 = document.getElementById("three");
const outputThree = document.getElementById("output");

btn3.addEventListener("click", async () => {
  const data = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const response = await data.json().then(({ joke }) => joke);
  outputThree.innerHTML = response;
});
