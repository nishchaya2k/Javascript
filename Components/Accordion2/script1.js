const wrapper = document.querySelector(".wrapper")

wrapper.addEventListener('click', function (e) {
    const question = e.target.closest('.question'); //anything inside question

    if (!question) return;

    const accordion = question.parentElement;
    const icon = question.querySelector('.icon');
    const answer = accordion.querySelector('.answer');
    const isOpen = icon.classList.contains('fa-minus');


    if (isOpen) {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        answer.style.maxHeight = null;
    } else {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }

})