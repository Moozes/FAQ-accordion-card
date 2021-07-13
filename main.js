let questions = document.querySelectorAll('.card .right .question');
let answers = document.querySelectorAll('.card .right .answer');
console.log(questions);
console.log(answers);

for(let i = 0; i<questions.length; i++) {
    questions[i].onclick = function() {
        questions[i].classList.toggle('active');
        answers[i].classList.toggle('show');
        questions[i].querySelector('img').classList.toggle('rotate');

        for(let j = 0; j < questions.length; j++) {
            if(j != i) {
                questions[j].classList.remove('active');
                answers[j].classList.remove('show');
                questions[j].querySelector('img').classList.remove('rotate');
            }
        }
    }
}