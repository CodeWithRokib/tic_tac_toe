console.log('Welcome to Tic tac Toe');

let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver=new  Audio('gameover.mp3');
let isgameover = false;
let trn = 'X';

//fucntion to change to turn
const changeTurn = ()=>{
    return trn === "X"?"0":"X";
}

//function to check for a win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtest');
     let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
     ]
     wins.forEach(e =>{
          if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + ' Won';
            isgameover=true;

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='200px';

          }
          //((boxtext[e[0]].innerText === boxtest[e[1]].innerText) && (boxtest[e[2]].innerText === boxtest[e[1]].innerText) && (boxtest[e[0]].innerText !== '')
     })
     if(checkWin()===ture){
        gameOver.play();
     }
}

//game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtest');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
           boxtext.innerText=trn
           trn = changeTurn();
           audioTurn.play();
           checkWin();
           if(!isgameover){
             document.getElementsByClassName('info')[0].innerText = 'Turn for' + trn;
            //document.getElementsByClassName('info')[0].innerText='Turn for '+trn;
            
           }
        }
    })
})
 

//add onclick listener to reset button
reset.addEventListener('click',()=>{
   let boxtests = document.querySelectorAll('.boxtest');
   Array.from(boxtests).forEach(element =>{
    element.innerText='';
   })
   trn = 'X'
   isgameover=false
   document.getElementsByClassName('info')[0].innerText='Turn for '+trn;
   document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='0px';

})





