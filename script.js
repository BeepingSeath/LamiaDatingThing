let question = {
    title: 'Arigatou',
    alternatives: ['Hello', 'Goodbye', 'Here you go', 'Thank you'],
    correctAnswer: 3
};

let questions = [
    {
        title: 'Arigatou',
        alternatives: ['Hello', 'Goodbye', 'Here you go', 'Thank you'],
        correctAnswer: 3
    },
    {
        title: 'What is "kanelkaka"?',
        alternatives: ['A pastry', 'A brand', 'A car', 'An Ikea item'],
        correctAnswer: 0
    },
    {
        title: 'What is Elder Scrolls IV named',
        alternatives: ['Daggerfall', 'Redfall', 'Oblivion', 'Skyrim'],
        correctAnswer: 2
    },
]

let app = {
    start: function() {

        this.currPosition = 0;

        this.score = 0;

        this.win = false;

        let alts = document.querySelectorAll('.alternative');

    alts.forEach((element, index) =>{
        element.addEventListener('click', () =>{
            this.checkAnswer(index);
        });
    });

    this.updateStats();
    this.showQuestion(questions[this.currPosition]);
    },

    showQuestion: function(q) {

        let titleDiv = document.getElementById('title');

        titleDiv.textContent = q.title;
    
        let alts = document.querySelectorAll('.alternative');
    
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    
    },

    checkAnswer: function(userSelected) {

        let currQuestion = questions[this.currPosition];

        if(currQuestion.correctAnswer == userSelected) {
            console.log('correct');
            this.score++;
        }
        else {
            console.log('incorrect');
        }

        this.updateStats();

        this.increasePosition();

        this.showQuestion(questions[this.currPosition]);
    },
    
    increasePosition: function() {
        this.currPosition++;

        if(this.currPosition == questions.length) {
            this.checkWin();
            if(this.win == true) {
                console.log("aaa");
            }
            else {
                console.log("bbb");
            }
            this.result();
        }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    checkWin: function() {
        if(this.score == questions.length) {
            this.win = true;
        }
        else {
            this.win = false;
        }
    },

    result: function() {
        let winDiv = document.getElementById('result');
        if (this.win == true){
        winDiv.textContent = `You have succesfully partnered with the Lamia!`
        }
        else {
            winDiv.textContent = `You are a failure`
        }
    }
};
app.start();


// {
//    title: 'Title',
//    alternatives: ['Option0', 'Option1', 'Option2', 'Option3'],
//    correctAnswer: 
//},