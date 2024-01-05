
// JavaScript for enhanced FAQ section interaction
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle the answer display
        this.nextElementSibling.classList.toggle('show');

        // Adding smooth scrolling to the clicked question
        item.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    });
});

// Additional JavaScript for other interactive elements can be added here
