const searchInput = document.getElementById("searchInput");
const container = document.querySelector(".container");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const organizationLinks = container.querySelectorAll("a");

  organizationLinks.forEach((link) => {
    const organizationName = link.textContent.toLowerCase();
    const parentDiv = link.parentElement;

    if (organizationName.includes(searchTerm)) {
      parentDiv.style.display = "block";
    } else {
      parentDiv.style.display = "none";
    }
  });
});
