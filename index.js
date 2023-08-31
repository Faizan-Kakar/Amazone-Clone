// Crausal
const crausalItem = document.querySelectorAll(".crausalItem");

crausalItem.forEach((img,index) => {
    img.style.left = `${index*100}%`
});
let counter = 1;
let counter1 = 2;

const slideImage = ()=>{
    console.log("run");
    if (counter<3) {
        crausalItem[counter].style.transform = `translateX(-${counter*100}%)`;
        console.log("this is running");
        counter++;
    }
    else {
        if(counter1>0){
           crausalItem[counter1].style.transform = `translateX(${counter1*100}%)`;
           counter1--;
          }
          else{
            counter=1;
            counter1=2;
          }
    }
}

setInterval(slideImage, 3000);
// Crausal extends.

// Sidebar showing and hidding
let hamburger = document.getElementById("hamburger");
let cross = document.getElementById("cross");

let sidebar = document.getElementById('sideBar');
let backDrop = document.getElementById("backDrop");

hamburger.addEventListener('click', ()=>{
    sidebar.classList.remove('disp_none');
   backDrop.classList.remove('disp_none');
   cross.classList.remove('disp_none');
});
cross.addEventListener('click', ()=>{
    sidebar.classList.add('disp_none');
   backDrop.classList.add('disp_none')
   cross.classList.add('disp_none')
});
backDrop.addEventListener('click', ()=>{
    sidebar.classList.add('disp_none');
   backDrop.classList.add('disp_none')
   cross.classList.add('disp_none')
})