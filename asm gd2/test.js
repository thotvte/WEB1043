const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

for (let i = 0; i < navLinks.length; i++) {
  let link = navLinks[i];
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let href = this.getAttribute('href');
    let offsetTop = document.querySelector(href).offsetTop;
    let scrollSpeed = 0.5; // Speed of scrolling, in seconds

    // Scroll to section
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });

    // Highlight selected link
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}