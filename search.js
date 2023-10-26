function filterOrganizations() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  var organizations = document.querySelectorAll(".divorganization");

  organizations.forEach(function (org) {
      var orgName = org.textContent || org.innerText;
      orgName = orgName.toLowerCase();

      if (orgName.indexOf(filter) > -1) {
          org.style.display = "inline-block"; // Show the organization
      } else {
          org.style.display = "none"; // Hide the organization
      }
  });
}

/*
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
*/
