document.addEventListener("DOMContentLoaded", function () {
  history.replaceState(null, null, " "); //deleting the previous hash (id)
  //Appear part
  var projectBlocks = document.querySelectorAll(".project-animation");

  function checkScroll() {
    projectBlocks.forEach(function (projectBlock) {
      var rect = projectBlock.getBoundingClientRect();
      var windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Check if the element is in the viewport
      if (rect.top <= windowHeight * 0.8) {
        projectBlock.classList.add("animate");
      }
    });
  }

  // Initial check on page load
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);

  // Contact form submission (dummy handler)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out! I will get back to you soon.");
      form.reset();
    });
  }

  // Project animation (if needed)
  const projectBlocks = document.querySelectorAll(".project-block-div");
  projectBlocks.forEach((block, idx) => {
    setTimeout(() => {
      block.classList.add("animate");
    }, 300 * idx);
  });
});
