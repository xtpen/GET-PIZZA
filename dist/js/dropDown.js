const dropdowns = document.querySelectorAll("h4");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const isActive = dropdown.classList.contains("active");
    dropdown.nextElementSibling.classList.toggle("open");
    dropdown.querySelector("i").classList.toggle("open");

    dropdowns.forEach((otherDrop) => {
      if (otherDrop !== dropdown) {
        otherDrop.nextElementSibling.classList.remove("open");
        otherDrop.querySelector("i").classList.remove("open");
      }
    });

    if (!isActive) {
      dropdown.nextElementSibling.classList.toggle("open");
      dropdown.querySelector("i").classList.toggle("open");
    }
  });
});
