// const con = document.getElementById("container")
// const arr=["deadpool.jpg","Deadpool2.webp","deadpool5.jpg","deadpool4.jpg"

// ]
// let changeimg=()=>{
//        con.style.backgroundImage=`url('${arr[i]}')`;           
//  }
//  let i=1;
//  let changeimg=()=>{
//      if(i==arr.length)+1
//      {
//          i=0;
//     }
//      con.style.backgroundImage= url(${arr[i]});
//      i++;
//  }
//  let changepho=()=>{
//      if(i==0)
//     {
//          i=arr.length-1;
//      }
//      con.style.backgroundImage=url(${arr[i]});
//      i--;
//  }

//  let click=(a)=>{
//        con.style.backgroundImage=url(${arr[a]});
// }
const con = document.getElementById('container')
const arr=[
"/deadpool.jpg",
"/Deadpool2.webp",
"/deadpool5.jpg",
"/deadpool4.jpg",

]

let i =0
let changeimg=()=>{
    if(i==arr.length)
    {
        i=0;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    i++;
    }

let changeleft=()=>{
    i--;
    if(i==-1)
    {
        i= 5;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    } 

let click1=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
} 

