function filterOrganizations() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  var organizations = document.querySelectorAll(".organization-tile");

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

