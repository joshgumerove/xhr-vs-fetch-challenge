const btn1 = document.getElementById("one");
btn1.addEventListener("click", XHRClickHandler);

const output = document.getElementById("output");

function XHRClickHandler() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://icanhazdadjoke.com/");
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const rawData = xhr.responseText;
      const dataJSON = JSON.parse(rawData);

      output.innerHTML = dataJSON.joke;
    }
  };

  xhr.send();
}
