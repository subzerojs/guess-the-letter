const levels = [
  { 
    image: "assets/cvetok.png",
    word: "цветок",
    answer: "в",
    letters: ["л", "в", "м"]
  },
  { 
    image: "assets/grusha.jpg",
    word: "груша",
    answer: "ш",
    letters: ["п", "ш", "ж"]
  },
  { 
    image: "assets/krab.jpg",
    word: "краб",
    answer: "а",
    letters: ["и", "е", "а"]
  }
]
/**
 * game
 */
const imageElement = document.querySelector('.task__image')
const wordElement = document.querySelector('.task__word')
const lettersElement = document.querySelectorAll('.controls__letter')
const controlsElement = document.querySelector('.controls')
/*
 * старт
 */
let levelIndex = 0
function start(){
  levelIndex = 0
  renderLevel( levels[levelIndex] )
}
start();

function renderLevel (level){
  outputTask (level)
  outputLetters (level)
}

function outputTask (level){
  imageElement.src = level.image
  let w = level.word.replace( level.answer, "_" )
  wordElement.innerText = w
}

function outputLetters (level){
 
  for (let index = 0; index < lettersElement.length; index++){
    lettersElement[index].innerText = level.letters[index]
  }
}

controlsElement.addEventListener('click', function (e){
  if( e.target.className.includes('controls__letter') ){
      const letter = e.target.innerText
      checkAnswer( letter )
  }
})

function checkAnswer (answer){


  if(answer===levels[levelIndex].answer){
    alert('Правильно')
 
  }
  else{
    alert('Не првильно')
  }
  /*
   * проверка на конец
   */
  if( isEndGame() ){
      alert('КОНЕЦ ИГРЫ')
      start()
  }
  else{
      nextLevel()
  }
}

function nextLevel (){
  levelIndex = levelIndex + 1
  renderLevel(levels[levelIndex])
}

function isEndGame (){
  if(levelIndex===levels.length-1){
      return true
  }
}
