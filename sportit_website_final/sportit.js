
// JavaScript for FAQ section interaction
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('show');
    });
});

// JavaScript for smooth reveal in FAQ section
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        var answer = this.nextElementSibling;
        answer.style.transition = 'height 0.5s ease-out';
        answer.style.height = answer.classList.contains('show') ? '0' : answer.scrollHeight + 'px';
        answer.classList.toggle('show');
    });
});
