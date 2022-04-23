console.log ("Hello");

const a = document.querySelectorAll("a");
for (let i=0; i<a.length; i++){
 a[i].style.color= "salmon";
 a[i].style.fontFamily= "times new roman";
 a[i].style.fontSize= "20px";
}

var judul = document.querySelector(".heading1");
judul.innerHTML="Welcome!!!";
judul.style.fontSize="70px";
judul.style.fontFamily="Times New Roman";
judul.style.marginBottom= "60px";
judul.style.color= "pink";

const p = document.getElementsByTagName('p')
p[0].style.color= "white";

const card = document.getElementsByClassName("card");
card[0].style.backgroundColor="pink";
card[1].style.backgroundColor="pink";

const h4 = document.getElementsByTagName("h4");
h4[0].style.color= "lightcoral";
h4[1].style.color= "lightcoral";

const h2 = document.getElementById("sub");
h2.style.color= "lightcoral";
h2.style.fontSize= "25px";

const h3 = document.getElementById("right");
h3.style.color= "lightcoral";
h3.style.fontSize= "25px";

const button = document.getElementsByClassName('button');
button[0].style.backgroundColor= "lightcoral";
button[1].style.backgroundColor= "lightcoral";