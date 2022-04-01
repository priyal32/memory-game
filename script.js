

// Global Constants
var clueHoldTime; // how long to hold each clue's light
const cluePauseTime = 333;
const nextClueWaitTime = 2000;
var StartingMinutes = 2;
var defaultMode = true;



// Global variables
var holdTime;
var pattern = [2, 2, 4, 3, 2, 1, 2, 4]; // pattern of the buttons
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;
var strikes;
var clockOn;
var time = StartingMinutes*60;

const countdown = document.getElementById("clock");
var minutes = Math.floor(time/60);
var seconds = time % 60;
var easy = false;
var medium = false;
var hard = false;
var btnAudio;

function easyMode(){
  stopGame();
  easy = true;
  medium = false;
  hard = false;
  document.getElementById("button6").classList.add("hidden"); 
  document.getElementById("button7").classList.add("hidden"); 
  document.getElementById("button8").classList.add("hidden"); 
  document.getElementById("button9").classList.add("hidden"); 
  document.getElementById("button10").classList.add("hidden"); 
}
function mediumMode(){
  stopGame();
  medium = true;
  easy = false;
  hard = false;
  document.getElementById("button6").classList.remove("hidden"); 
  document.getElementById("button7").classList.remove("hidden"); 
  document.getElementById("button8").classList.add("hidden"); 
  document.getElementById("button9").classList.add("hidden"); 
  document.getElementById("button10").classList.add("hidden"); 

}
function hardMode(){
stopGame();
hard = true;
easy = false;
medium = false;
document.getElementById("button6").classList.remove("hidden"); 
document.getElementById("button7").classList.remove("hidden"); 
document.getElementById("button8").classList.remove("hidden"); 
document.getElementById("button9").classList.remove("hidden"); 
document.getElementById("button10").classList.remove("hidden"); 
}
function timer(){

 minutes = Math.floor(time/60);
 seconds = time % 60;

  if(seconds < 10){
    seconds = "0" + seconds;
  }
  
    countdown.innerHTML = minutes + ":" + seconds;
    time--; 

    if(minutes == 0 && seconds == 0){
      alert("Game Over! Out of time!⏲")
      time = StartingMinutes * 60;
      clearInterval(clockOn);
      stopGame();
      return;
    }
}
function getRandomTiles(){
  var num;

  if(easy)
  num = 4;

  if(medium)
  num = 6;

  if(hard)
  num = 9;

  for(let i = 0; i < 8; i++){
    pattern[i] = Math.ceil(Math.random() * num) + 1;
  }

}
function startGame(){
  // inititlize game variables
  if(defaultMode){
    easy = true;
    easyMode();
    defaultMode = false;
  }
  
  
  time = StartingMinutes*60; 
  clockOn = setInterval(timer, 1000);

  clueHoldTime = 1000;
  getRandomTiles();

  
  progress = 0;
  gamePlaying = true;
  strikes = 0;
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden"); // hide start button
  document.getElementById("stopBtn").classList.remove("hidden"); // display stop button
  playClueSequence();
}

function stopGame(){
  time = StartingMinutes * 60;
  clearInterval(clockOn);
  
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden"); // hide start button
  document.getElementById("stopBtn").classList.add("hidden"); // display stop button

}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//setTimeout = built in function for scheduling code to call at some point in future
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
     
   }
   if(clueHoldTime != 300){
    clueHoldTime -= 60;
    delay += cluePauseTime;
  }
}
//Win/loss notifications


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//Handling Guesses

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        
        winGame();
      }else{
        
        progress++;
        playClueSequence();
      }
    }else{
      
      guessCounter++;
    }
  }else{
    strikes++;
    if(strikes < 3){
      alert("Strike " + strikes + "!");
    }else{
    //GAME OVER: LOSE!
    loseGame();
    }
  }
}    
  
  
  
// Sound Synthesis Functions
const freqMap = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0
}
function playTone(btn,len){ 
  btnAudio  = document.getElementById("button"+btn+"Audio");
  o.frequency.value = freqMap[btn]
  if(btn == 1){
    
    btnAudio.play();
  }
  if(btn == 2){
    btnAudio.play();

  }
  if(btn == 3){
    btnAudio.play();
  }
  if(btn == 4){
    btnAudio.play();

  }
  if(btn == 5){
    btnAudio.play();

  }
  if(btn == 6){
    btnAudio.play();

  }
  if(btn == 7){
    btnAudio.play();

  }
  if(btn == 8){
    btnAudio.play();

  }
  if(btn == 9){
    btnAudio.play();

  }
  if(btn == 10){
    btnAudio.play();

  }

  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}


function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    
    btnAudio  = document.getElementById("button"+btn+"Audio");

    if(btn == 1){
      btnAudio.loop = true;
      btnAudio.play();
    }
    if(btn == 2){
      btnAudio.loop = true;
      btnAudio.play();

    }
    if(btn == 3){
      btnAudio.loop = true;
      btnAudio.play();
    }
    if(btn == 4){
      btnAudio.loop = true;
      btnAudio.play();

    }
    if(btn == 5){
      btnAudio.loop = true;
      btnAudio.play();

    }
    if(btn == 6){
      btnAudio.loop = true;
      btnAudio.play();
  
    }
    if(btn == 7){
      btnAudio.loop = true;
      btnAudio.play();
  
    }
    if(btn == 8){
      btnAudio.loop = true;
      btnAudio.play();
  
    }
    if(btn == 9){
      btnAudio.loop = true;
      btnAudio.play();
  
    }
    if(btn == 10){
      btnAudio.loop = true;
      btnAudio.play();
  
    }

    g.gain.setTargetAtTime(volume,context.currentTime + 0.02,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  btnAudio.loop = false;
  g.gain.setTargetAtTime(0,context.currentTime + 0.02,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)