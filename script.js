// Accordion functionality

const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle the display of the associated content
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
  
      // Toggle the active class for the button
      this.classList.toggle("active");
    });
  });  

  const accordionButton = document.querySelector('.accordion-button');
const accordionContent = document.querySelector('.accordion-content');

accordionButton.addEventListener('click', () => {
  accordionContent.classList.toggle('show');

  // Change the button text from + to − and vice versa
  if (accordionContent.classList.contains('show')) {
    accordionButton.textContent = '-';
  } else {
    accordionButton.textContent = '+';
  }
});
// Add event listeners to all accordion buttons
const accordionButtonsAll = document.querySelectorAll('.accordion-button');
