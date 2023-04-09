let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

/*            */
const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
  
      // Kiểm tra tên không để trống
      if (name === '') {
        alert('Please enter your name.');
        return;
      }
  
      // Kiểm tra email theo định dạng chính xác
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Kiểm tra số điện thoại chỉ chứa số và không vượt quá 11 kí tự
      if (!/^[0-9]{11}$/.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
      }
  
      // Thực hiện gửi form ở đây...
      alert('Form submitted successfully!');
    });