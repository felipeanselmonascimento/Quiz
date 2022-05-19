const correctAnswer = ['A', 'A', 'A', 'A'];
const result = document.querySelector('.nonee')
const form = document.querySelector('.form-def')

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;


    const userAnswers = [
        form.inputquestion1.value,
        form.inputquestion2.value,
        form.inputquestion3.value,
        form.inputquestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswer[index]){
            score += 25
        }
    })

    scrollTo(0, 0);

    result.classList.remove('nonee');

    let counter = 0;

    if (counter === score){
        result.querySelector('span').textContent = `${counter} %`
    }

    const idSet = setInterval(() => {
        if (counter === score){
            clearInterval(idSet)
            return
        }
        result.querySelector('span').textContent = `${++counter} %`
    }, 10)
})