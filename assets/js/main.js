// Function to load the navbar dynamically
function loadNavbar() {
    fetch('navbar.html') // Load the navbar.html file
      .then(response => response.text()) // Convert the response to text
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data; // Insert the navbar into the placeholder
  
        // Once the navbar is loaded, set the active class
        setActiveNavbar();
      })
      .catch(error => {
        console.error('Error loading navbar:', error);
      });
  }
  
  // Function to highlight the active navbar link based on the current page
  function setActiveNavbar() {
    var currentUrl = window.location.pathname.split("/").pop(); // Get the current page name
    
    // Loop through each navbar link
    $(".navbar-nav .nav-item").each(function() {
      var link = $(this).find("a").attr("href").split("/").pop(); // Get the href of the link
  
      // If the current URL matches the href of the link, add 'active' class
      if (currentUrl === link) {
        $(this).addClass("active");
      } else if (link === '' && currentUrl === '') { // Handle the case where the URL is the root
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }


//   Carousel Functionality
 $(document).ready(function(){
  $(".owl-banner").owlCarousel({
    items: 1, // Show one item at a time
    loop: true, // Loop the carousel infinitely
    margin: 10, // Set the margin between items
    autoplay: true, // Enable auto sliding
    autoplayTimeout: 3000, // Set the auto slide timeout (in milliseconds)
    autoplayHoverPause: true, // Pause the carousel on hover
    nav: true, // Enable navigation arrows
    navText: ['<', '>'], // Default text for navigation arrows (you can change this later)
  });
});

// Show/hide scroll to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scrollToTop').addClass('show');
    } else {
        $('#scrollToTop').removeClass('show');
    }
});

// Smooth scroll to top
$('#scrollToTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 'smooth');
    return false;
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
 // Scroll to top on page load
 window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Alternative method if the above doesn't work
$(document).ready(function() {
  $(window).scrollTop(0);
});

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Show button when user scrolls down 300px
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ...existing code...

// Client Carousel Configuration
$(document).ready(function(){
  $(".owl-clients").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 5 }
      }
  });
});

// ...existing code...

  
  
  
  // Load the navbar when the page loads
  window.onload = loadNavbar;
