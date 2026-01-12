gameseq=[]
userseq=[]

btns = ["green","orange","red","yellow"]

let start=false;
let level=0;

let h3=document.querySelector("h3")

document.addEventListener("keypress",function(){
    if(start==false){
        start=true
        console.log("game started")
        h3.innerText = `game started`
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function levelup(){
    level+=1;
    h3.innerText = `level is up to ${level}`;
    let ranidx = Math.floor(Math.random()*4);
    let randcolor = btns[ranidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    console.log(ranidx)
    console.log(randcolor)
    console.log(randbtn)
    btnflash(randbtn);

}

function btnpress() {
    console.log("btn was pressed")
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}
