let head=document.getElementById("rgbclr");
let box=document.querySelectorAll(".clrbox");
let bar=document.getElementById("text");
let clrbos4=document.getElementById("clrbox4");
let clrbos5=document.getElementById("clrbox5");
let clrbos6=document.getElementById("clrbox6");
function defaultbg(){
    bar.style.background='orange';
    document.getElementById("playbtn").innerText="Start Guessing";
    document.getElementById("bartxt1").innerText="Play"
}
hard();
function generaterandomcolors(){
    let rgb='rgb'+'('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
    return rgb;
}
function hard()
{
    document.getElementById("easy").style.background="none";
    document.getElementById("hard").style.background="red";
    defaultbg();
    clrbos4.style.display="block";
    clrbos5.style.display="block";
    clrbos6.style.display="block";
let clr_arr=[];
for (let i=0;i<6;i++){
clr_arr.push(generaterandomcolors());
box[i].style.background=clr_arr[i];
}
head.innerText=clr_arr[Math.floor(Math.random()*6)];
for ( let boxes of box){
    boxes.addEventListener('click',(e)=>{
        let txt=(e.target.style.background);
        txt=txt.replaceAll(' ','')
        if(txt==(head.innerText))
        {
            document.getElementById("playbtn").style.color="green"
       
            document.getElementById("playbtn").innerText="Cheers! You Won";
              bar.style.background=head.innerText;
              document.getElementById("bartxt1").innerText="Play again"
            for (let i=0;i<6;i++){
                box[i].style.background=head.innerText;
            }
        }
        else{
            e.target.style.background="black"
            document.getElementById("playbtn").style.color="red"
            document.getElementById("playbtn").innerText="You lost! Try again";
        }
    })
}
};
function easy()
{
    document.getElementById("easy").style.background="red";
    document.getElementById("hard").style.background="none";
    defaultbg();
    clrbos4.style.display="none";
    clrbos5.style.display="none";
    clrbos6.style.display="none";
let clr_arr=[];
for (let i=0;i<3;i++){
clr_arr.push(generaterandomcolors());
box[i].style.background=clr_arr[i];
}
head.innerText=clr_arr[Math.floor(Math.random()*3)];
for ( let boxes of box){
    boxes.addEventListener('click',(e)=>{
        let txt=(e.target.style.background);
        txt=txt.replaceAll(' ','')
        if(txt==(head.innerText))
        {
            document.getElementById("playbtn").style.color="green"
            document.getElementById("playbtn").innerText="Cheers! You Won";
              bar.style.background=head.innerText;
              document.getElementById("bartxt1").innerText="Play again"

            for (let i=0;i<3;i++){
                box[i].style.background=head.innerText;
            }
        }
        else{
            e.target.style.background="black"
            document.getElementById("playbtn").style.color="red"
            document.getElementById("playbtn").innerText="You lost! Try again";
        }
    })
}
};



