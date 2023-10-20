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

// To add a parallax effect 
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let profileImage = document.querySelector('.profileimage');
    let nameSection = document.querySelector('.name');

    profileImage.style.transform = 'translateY(' + offset * 0.5 + 'px)';
    nameSection.style.transform = 'translateY(' + offset * 0.3 + 'px)';
});
