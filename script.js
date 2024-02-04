 const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
 };

 //header container
 ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
    delay: 500,
 });

 ScrollReveal().reveal(".header-container h2", {
    ...scrollRevealOption,
    delay: 1000,
 });

 ScrollReveal().reveal(".header-container .btn", {
    ...scrollRevealOption,
    delay: 1500,
 });

 ScrollReveal().reveal(".header-container img", {
    ...scrollRevealOption,
    origin: "right",
 });

 //why container
 ScrollReveal().reveal(".why-container .section-header", {
    ...scrollRevealOption,
    delay: 500,
 });

 ScrollReveal().reveal(".why-container p", {
    ...scrollRevealOption,
    delay: 1000,
 });

 ScrollReveal().reveal(".why-container li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
 });

 ScrollReveal().reveal(".why-container img", {
    ...scrollRevealOption,
    origin: "left",
 });

 //hero container
 ScrollReveal().reveal(".hero-card", {
    ...scrollRevealOption,
    interval: 500,
 });

 //classes container 
 ScrollReveal().reveal(".classes-image", {
    duration: 1000,
    interval: 500,
 });

 //membership container 
 ScrollReveal().reveal(".membership-card", {
    ...scrollRevealOption,
    interval: 500,
 });

 //stories container
 ScrollReveal().reveal(".stories-card", {
    ...scrollRevealOption,
    interval: 1000,
 });

 // posts container
ScrollReveal().reveal(".posts-card", {
    ...scrollRevealOption,
    interval: 1000,
  });
  
  // photos container
  ScrollReveal().reveal(".photos-card", {
    duration: 1000,
    interval: 500,
  });
