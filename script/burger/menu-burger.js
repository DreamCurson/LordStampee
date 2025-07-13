document
  .querySelector(".navigation__burger")
  .addEventListener("click", function () {
    document.querySelector(".navigation__principal").classList.toggle("active");
    document
      .querySelector(".navigation__secondaire")
      .classList.toggle("active");
    this.classList.toggle("active");
  });

document
  .querySelectorAll(".navigation__element--has-subcategories")
  .forEach(function (menu) {
    menu.addEventListener("click", function (event) {
      event.preventDefault();

      const subcategories = menu.querySelector(".navigation__subcategories");
      if (subcategories) {
        subcategories.classList.toggle("active");
      }
    });
  });
