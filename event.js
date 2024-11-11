const card=document.querySelector("div");
card.innerHTML=`<img src="https://t3.ftcdn.net/jpg/07/13/90/18/360_F_713901847_h5KagO2okUsvaKr9RjJYV4IglfVEskJl.jpg"width="300px"/>
  <p>Biryani Image</p>
  <button>Explore More</button>  `
card.style.border="2px solid black";
card.style.backgroundColor="lightgrey";
card.style.display="inline-block";
card.style.padding="10px";
card.style.textAlign="center";


const card1=document.getElementById("one");
card1.innerHTML=`<img src="https://cdn.britannica.com/35/225835-050-A5CC289A/Indian-one-pot-meal-for-party.jpg" width="300px" />'
 <p>Biryani</p>
<button>Explore More</button>` 
 card1.style.border="2px solid black";
 card1.style.backgroundColor="lightgrey";
 card1.style.display="inline-block";
 card1.style.padding="10px";
 card1.style.textAlign="center";


const newcard=document.createElement("div");
newcard.innerHTML=`<img src="https://t3.ftcdn.net/jpg/07/13/90/18/360_F_713901847_h5KagO2okUsvaKr9RjJYV4IglfVEskJl.jpg"width="300px"/> 
  <p>Biryani Image</p>
  <button>Explore More</button> `
newcard.style.border="2px solid black";
newcard.style.backgroundColor="lightgrey";
newcard.style.display="inline-block";
newcard.style.padding="10px";
console.log(newcard);
document.body.appendChild(newcard)
newcard.style.textAlign="center";

var newcard1=document.createElement("div")
newcard1.innerHTML=`<img src="https://cdn.britannica.com/35/225835-050-A5CC289A/Indian-one-pot-meal-for-party.jpg" width="300px" />
<p>Biryani</p>
<button>Explore More</button>`
newcard1.style.border="2px solid black";
newcard1.style.backgroundColor="lightgrey";
newcard1.style.display="inline-block";
newcard1.style.padding="10px";
newcard1.style.textAlign="center";
// newcard1.style.gap="30px";
console.log(newcard1)
document.body.appendChild(newcard1)
document.body.style.gap="20px"