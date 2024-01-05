document.addEventListener('DOMContentLoaded', function () {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            var answer = this.nextElementSibling;
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                answer.style.height = 'auto';
                var height = answer.clientHeight + 'px';
                answer.style.height = '0px';

                setTimeout(function () {
                    answer.style.height = height;
                }, 0);
            } else {
                answer.style.height = '0px';
                answer.addEventListener('transitionend', function () {
                    answer.style.display = 'none';
                }, {
                    once: true
                });
            }
        });
    });
});

