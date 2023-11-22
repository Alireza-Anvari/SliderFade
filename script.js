let controls=document.querySelectorAll("#controls > span")

let dots=document.querySelectorAll("#dots > span")




 let slides=document.querySelectorAll("#slides > div")
let textSlide;
 let selectSlide=undefined;
  let index=0;
  
  
  
  
 let play=()=>{
 console.log("index",index)
   let boxWhite=document.querySelectorAll(".boxWhite");

  // (index>=3) ?  index=0: null;
      (index>=3) ?  index=0: index < 0 ? index=2 : null ;

 for(slide of slides){
  // console.log(index,"0")
slide.classList.remove("slide")
slide.lastElementChild.classList.remove("textSlide")


}


 for(d of dots){
  // console.log(index,"0")
d.style.background="#f1f5f9"

}


 for(box of boxWhite){
  // console.log(index,"0")
box.classList.remove("boxWhite");


}



   // console.log(index,"1")
  
slides[index].classList.add("slide")
//textSlide=document.querySelector(".textSlide");
//textSlide.classList.remove("textSlide")
slides[index].lastElementChild.classList.add("textSlide")
dots[index].style.background="#202020"
selectSlide=slides[index].children

  index++;
   selectSlide=Array.from(selectSlide)
 
 
 setTimeout(()=>{
 let first=[]
 let arr=[]
for(let i=0;i<15;i++)
  {
    first[i]=i
    
  }
  
  
  for(let i=0;i<15;i++){
 let rand=Math.floor((Math.random() * 15)+0 )

      if(first[rand]!=="0"){
        arr[i]=first[rand];
        first.splice(rand,1,"0")
      }
      else{
        i--
              
    }
}


 arr.forEach((value,ind)=>{
   arr[ind]=selectSlide[value]
 })
arr.forEach(function(obj,index){
  
  setTimeout(()=>{obj.classList.add("boxWhite")},40*index)
  
})

 },100)

  
 }
  
   let clearSlide=setInterval(play,5000)

  play();


controls.forEach((control,ind)=>{
control.addEventListener("click",()=>{
if(ind===1)
{index=index-2;

console.log(index,"----")}
clearInterval(clearSlide)

  play();
clearSlide=setInterval(play,5000)

})
})

dots.forEach((dot,ind)=>{
dot.addEventListener("click",()=>{
if(ind===0){index=0;}
else if(ind===1){index=1}
else if (ind===2){index=2}
console.log(index,"----")
clearInterval(clearSlide)

  play();
clearSlide=setInterval(play,5000)

})
})
