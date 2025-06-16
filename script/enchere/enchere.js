document.addEventListener("DOMContentLoaded", function () {
  const liens = document.querySelectorAll(".lien-navigation");
  const sectionCours = document.querySelector(".enchere-en-cours");
  const sectionArchive = document.querySelector(".enchere-archivé");

  if (!liens.length || !sectionCours || !sectionArchive) {
    console.warn("One or more DOM elements not found.");
    return;
  }

  sectionCours.classList.add("enchere-visible");
  sectionArchive.classList.remove("enchere-visible");

  liens.forEach((lien) => {
    lien.addEventListener("click", function (e) {
      e.preventDefault();

      liens.forEach((el) => el.classList.remove("actif"));
      this.classList.add("actif");

      if (this.textContent.includes("Enchères en cours")) {
        sectionCours.classList.add("enchere-visible");
        sectionArchive.classList.remove("enchere-visible");
      } else if (this.textContent.includes("Enchères archivées")) {
        sectionArchive.classList.add("enchere-visible");
        sectionCours.classList.remove("enchere-visible");
      }
    });
  });
});
