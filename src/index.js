function generateRiddle(event) {
  event.preventDefault();

  new Typewriter("#riddle", {
    strings: "Here is a riddle",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  riddleElement.innerHTML = "Here is a riddle";
}

let riddleFormElement = document.querySelector("#riddle-generator-form");
riddleFormElement.addEventListener("submit", generateRiddle);
