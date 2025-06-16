document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".enchere-vedette__input");

  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      let value = parseFloat(input.value);
      if (!isNaN(value)) {
        // Bloque l'utilisateur de déscendre sous le minimum
        const min = parseFloat(input.min) || 0;
        if (value < min) value = min;

        // Format de deux décimals toujours
        input.value = value.toFixed(2);
      } else {
        // Remet au minimum si le montant est invalide
        input.value = parseFloat(input.min || 0).toFixed(2);
      }
    });
    a;
  });
});
