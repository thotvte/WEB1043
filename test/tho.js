

// Lấy tất cả các mục của menu
var items = document.querySelectorAll("li");

// Lặp qua từng mục và thêm sự kiện 'mouseover' để thay đổi màu
items.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    this.style.backgroundColor = "rgb(69, 184, 222)";
  });

  // Thêm sự kiện 'mouseout' để đặt lại màu khi chuột rời khỏi mục
  item.addEventListener("mouseout", function() {
    this.style.backgroundColor = "rgb(107, 15, 15)";
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
var navLinks = document.querySelectorAll('nav ul li a');
for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    var offsetTop = document.querySelector(href).offsetTop;

    document.querySelector(href).scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
}

// lấy tất cả các button trên trang
const buttons = document.querySelectorAll('button');

// lặp qua từng button và thêm sự kiện rê chuột vào
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    // thêm CSS vào button khi rê chuột vào
    button.style.opacity = 0.7;
    button.style.cursor = 'pointer';
  });

  button.addEventListener('mouseout', () => {
    // loại bỏ CSS khỏi button khi rê chuột ra
    button.style.opacity = 1;
    button.style.cursor = 'default';
  });
});
//hover sanpham
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.classList.add('active');
  });
  
  box.addEventListener('mouseleave', () => {
    box.classList.remove('active');
  });
});
document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}

document.getElementById("demo2").addEventListener("mouseover", mouseOver2);
document.getElementById("demo2").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.getElementById("demo2").style.color = "red";
}

function mouseOut2() {
  document.getElementById("demo2").style.color = "black";
}

document.getElementById("demo3").addEventListener("mouseover", mouseOver3);
document.getElementById("demo3").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.getElementById("demo3").style.color = "red";
}

function mouseOut3() {
  document.getElementById("demo3").style.color = "black";
}

function bigImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}
// Thiết lập thời gian kết thúc đếm ngược
const countDownDate = new Date("April 30, 2023 23:59:59").getTime();

// Cập nhật đếm ngược mỗi giây
const x = setInterval(function() {

  // Lấy thời gian hiện tại
  const now = new Date().getTime();
  
  // Tính khoảng cách thời gian giữa thời gian hiện tại và thời gian kết thúc đếm ngược
  const distance = countDownDate - now;
  
  // Tính số ngày, giờ, phút và giây còn lại
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Hiển thị kết quả trong thẻ có id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // Nếu thời gian kết thúc đếm ngược đã qua thì hiển thị thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const quantityInput = document.querySelector('#quantity');
const noteInput = document.querySelector('#note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const quantity = quantityInput.value.trim();
  const note = noteInput.value.trim();

  // Kiểm tra tên
  if (name === '') {
    alert('Hãy nhập tên của bạn');
    nameInput.focus();
    return;
  }

  // Kiểm tra tên không có kí tự đặc biệt hoặc số
  const nameRegex = /^[a-zA-Z\s]*$/;
  if (!nameRegex.test(name)) {
    alert('Tên không được chứa kí tự đặc biệt hoặc số');
    nameInput.focus();
    return;
  }

  // Kiểm tra email
  const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!emailRegex.test(email)) {
    alert('Email không hợp lệ');
    emailInput.focus();
    return;
  }

  // Kiểm tra số điện thoại
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Số điện thoại không hợp lệ');
    phoneInput.focus();
    return;
  }

  // Kiểm tra số lượng
  if (quantity === '') {
    alert('Hãy nhập số lượng');
    quantityInput.focus();
    return;
  }

  // Kiểm tra số lượng là số
  const quantityRegex = /^[0-9]*$/;
  if (!quantityRegex.test(quantity)) {
    alert('Số lượng không hợp lệ');
    quantityInput.focus();
    return;
  }

  // Kiểm tra ghi chú
  if (note === '') {
    alert('Hãy nhập ghi chú');
    noteInput.focus();
    return;
  }

  // Nếu tất cả đều hợp lệ, gửi thông tin và hiển thị thông báo
  alert('Thông tin của bạn đã được gửi đi');
  form.reset();
});
const collection = document.getElementsByClassName("banhtruyenthong");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "#666";
}
