// Preloader Animation
window.addEventListener('load', () => {
  const preloader = document.querySelector('.container');
  const homepageContent = document.querySelector('.homepage-content');

  // Only run if preloader exists (i.e. on index.html)
  if (preloader && homepageContent) {
    setTimeout(() => {
      preloader.style.display = 'none';
      homepageContent.style.opacity = '1';
    }, 6000); // Matches the CSS animation duration
  } else if (homepageContent) {
    // For other pages: show content immediately
    homepageContent.style.opacity = '1';
  }
});
//hero section
 const words = document.querySelectorAll(".animated-word");
  let current = 0;

  function showNextWord() {
    words.forEach((word, index) => {
      word.style.opacity = index === current ? "1" : "0";
    });
    current = (current + 1) % words.length;
  }

  //Education
  setInterval(showNextWord, 2000); // Change word every 2 seconds
  showNextWord(); // Initial display

  function toggleEducation() {
    const content = document.getElementById("education-content");
    const icon = document.getElementById("toggle-icon");

    if (content.style.display === "block") {
      content.style.display = "none";
      icon.textContent = "+";
    } else {
      content.style.display = "block";
      icon.textContent = "−";
    }
  }

//experience

  function showExperience(index) {
    const tabs = document.querySelectorAll('.tab');
    const experiences = document.querySelectorAll('.experience');

    tabs.forEach(tab => tab.classList.remove('active'));
    experiences.forEach(exp => exp.classList.remove('active'));

    tabs[index].classList.add('active');
    experiences[index].classList.add('active');
  }


   document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const targetHeight = target.offsetHeight;
        const windowHeight = window.innerHeight;
        const offset = 0; // Adjust if you have a fixed header (e.g., use 60)

        const scrollTo = targetTop - (windowHeight / 2) + (targetHeight / 2) - offset;
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      }
    });
  });





