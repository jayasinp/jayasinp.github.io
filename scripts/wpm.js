const typingArea = document.getElementById('typingArea');
const resetButton = document.getElementById('resetButton');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const phraseDisplay = document.getElementById('phrase');

let phrases = [
    "Just keep examining every low bid quoted for zinc etchings.",
    "Jackdaws love my big sphinx of quartz.",
    "Mr. Jock, TV quiz PhD, bags few lynx.",
    "Blowzy night-frumps vex'd Jack Q.",
    "Crazy Fredericka bought many very exquisite opal jewels.",
    "Sixty zippers were quickly picked from the woven jute bag.",
    "A quick movement of the enemy will jeopardize six gunboats.",
    "All questions asked by five watched experts amaze the judge.",
    "Jack quietly moved up front and seized the big ball of wax.",
    "The five boxing wizards jump quickly.",
    "How vexingly quick daft zebras jump!",
    "Bright vixens jump; dozy fowl quack.",
    "Jinxed wizards pluck ivy from the big quilt.",
    "Foxy diva Jennifer Lopez wasn't baking my quiche.",
    "My jocks box, get hard, unzip, quiver, flow.",
    "Kinky zebras joust in my paved front garden.",
    "Quick zephyrs blow, vexing daft Jim.",
    "Sympathizing would fix Quaker objectives.",
    "Many-wived Jack laughs at probes of sex quiz.",
    "Jim just quit and packed extra bags for Liz Owen.",
    "Five wine experts jokingly quizzed sample chablis.",
    "J.Q. Vandz struck my big fox whelp.",
    "Quick wafting zephyrs vex bold Jim.",
    "Sex-charged fop blew my junk TV quiz.",
    "How quickly daft jumping zebras vex."
];

let startTime;
let currentPhrase;

function calculateWpm(text, time) {
    const numOfWords = text.trim().split(/\s+/).length;
    const minutes = time / 60;
    return Math.floor(numOfWords / minutes);
}

function resetTest() {
    currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    typingArea.value = '';
    typingArea.disabled = false;
    startTime = null;
    wpmDisplay.innerText = '0';
    accuracyDisplay.innerText = '0';
    renderPhrase(currentPhrase, '');
}

//I didnt write this bit 
function renderPhrase(phrase, input) {
    let html = '';
    for (let i = 0; i < phrase.length; i++) {
        let cssClass = 'remaining';
        if (i < input.length) {
            cssClass = input[i] === phrase[i] ? 'correct' : 'incorrect';
        }
        html += '<span class="' + cssClass + '">' + phrase[i] + '</span>';
    }
    phraseDisplay.innerHTML = html;
}

typingArea.addEventListener('input', function() {
    if (!startTime) {
        startTime = new Date();
    }

    const inputText = typingArea.value;
    let correctChars = 0;

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === currentPhrase[i]) {
            correctChars++;
        }
    }

    renderPhrase(currentPhrase, inputText);

    const currentTime = new Date();
    const timeDifference = (currentTime.getTime() - startTime.getTime()) / 1000;
    wpmDisplay.innerText = calculateWpm(inputText, timeDifference);

    const accuracy = Math.floor((correctChars / currentPhrase.length) * 100);
    accuracyDisplay.innerText = accuracy;
});

resetButton.addEventListener('click', resetTest);

window.addEventListener('load', resetTest);
