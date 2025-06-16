const range = document.getElementById("dateCreation");
const yearDisplay = document.getElementById("valeur-annee");
range.addEventListener("input", () => {
  yearDisplay.textContent = range.value;
});
