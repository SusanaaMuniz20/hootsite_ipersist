document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Here you can add your logic to handle form submission, like sending an AJAX request or validating inputs
    alert('Formulário enviado!'); // For demonstration, just showing an alert
  });
  
  document.addEventListener("DOMContentLoaded", function() { 

    let currentIndex = 0; 

    const slides = document.querySelectorAll('.slide'); 

    const totalSlides = slides.length; 

   

    function nextSlide() { 

      currentIndex = (currentIndex + 1) % totalSlides; 

      updateSlide(); 

    } 

   

    function updateSlide() { 

      const newTransformValue = -currentIndex * 100 + '%'; 

      document.querySelector('.carrossel').style.transform = 'translateX(' + newTransformValue + ')'; 

    } 

   

    // Altera o slide automaticamente a cada 3 segundos (3000 milissegundos) 

    setInterval(nextSlide, 3000); 

  }); 

  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  
  function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  showSlides();
  
const tableRows = document.querySelectorAll('#interactive-table tbody tr');

tableRows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.classList.add('highlight');
  });

  row.addEventListener('mouseleave', () => {
    row.classList.remove('highlight');
  });
});