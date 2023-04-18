const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn=document.getElementById("btn");
const color=document.querySelector(".color");


btn.addEventListener("click",function(){

       let randomnumber=getrandomNumber();
        //console.log(randomnumber);

       document.body.style.backgroundColor=colors[randomnumber];
       color.textContent=colors[randomnumber];
})

function getrandomNumber()
{
    return Math.floor(Math.random()*colors.length);
}