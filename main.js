const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.nav-links li a  ');
const person_name=document.querySelector(".person_name");
const img=document.querySelector(".person_img");
const text=document.querySelector(".review_text");
const right=document.querySelector(".btn_right");
const left=document.querySelector(".btn_left");

let currentItem=0;

const item=[
  {
    img:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg",
    name:"Micheal Jordan",
    text:"Two Words- DREAM CAR, quality is great! An american classic. performance is more than expected, i love it. cost is next to nill, besides a few repairs now and again. it is more than fun to drive! like i said, dream car!"
  },
  {
    img:"https://cdnntr1.img.sputniknews.com/img/103424/27/1034242723_389:0:1656:1267_1920x0_80_0_0_c6ad242a21fb829517a13ac60d11b90d.jpg",
    name:"Roger Federer",
    text:" They don't build cars like these anymore. You want a sweet looking car that won't let you down this is it, it just might empty your wallet to fill up. It's a blast to drive. Also watch supernatural great show, they got my car."
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DiKtbF-wmeqYFjJRLOuICbFxk_jIpX_qow&usqp=CAU",
    name:"Lebron Raymond James",
    text:" Performance - acceleration, braking, handling: If it hooked it would be decently fast, brakes, umm, uhh, They don't do much lol, yet, handles better than some cars of the era.... Rides alright for live axel, probably cause of the coil overs."
  }
]

console.log(item.length);


window.onscroll = () => {
    if(document.documentElement.scrollTop > 80) {
      navbar.style.backgroundColor = "#000";
      navbar.style.boxShadow = "0 1px 2px rgba(0,0,0,.5)";
      links.forEach(link => {
        link.style.color = "#fff";
          });
}
   
     else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
      links.forEach(link=>{
          link.style.color="#333";
      })
      
    }
  }

right.addEventListener("click",()=>{
  currentItem=currentItem+1;
  if(currentItem===item.length){
  currentItem=0;
  img.src=item[currentItem].img;
  person_name.innerHTML=item[currentItem].name;
  text.innerHTML=item[currentItem].text;
  }
  else{
    console.log(currentItem);
      img.src=item[currentItem].img;
  person_name.innerHTML=item[currentItem].name;
  text.innerHTML=item[currentItem].text;
  }
  

})

left.addEventListener("click",()=>{
  currentItem=currentItem-1;
  
  if(currentItem<0){
    currentItem=item.length-1;
  img.src=item[currentItem].img;
  person_name.innerHTML=item[currentItem].name;
  text.innerHTML=item[currentItem].text;

  }
  else{
    img.src=item[currentItem].img;
  person_name.innerHTML=item[currentItem].name;
  text.innerHTML=item[currentItem].text;

  }
  
})
  
  