const message = document.querySelector(".message")
const button = document.querySelectorAll("button")
const coin = ["Heads","Tail"]
let scor = [0,0]

for(let i = 0; i <button.length ; i++ ){
    console.log(button[i]);
    button[i].addEventListener("click",toss)

}

function toss(e) {

    let player = e.target.innerText
    let realToss = Math.floor(Math.random()*2)
    let real = coin[realToss]
    message.innerHTML = "computer selected " + real
    let output;
    if(player === real){
        output = " player win ";
        scor[0]++;
    }else{
        output = " computerwin ";
        scor[1]++;

    }
message.innerHTML += output + "<br> player : "+ scor[0] + "computer" + scor[1];

}