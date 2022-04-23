console.log("Hello world, welcome to Console Log of my blog");

const navbar = document.getElementsByClassName("navbar")[0];
navbar.style.width = "85%";
navbar.style.margin = "20px";
navbar.style.padding = "35px";

const logo = document.getElementsByClassName("logo");
logo[0].style.width="120px";

const a = document.querySelectorAll("a");
for (let i=0; i<3; i++){
 a[i].style.color= "white";
 a[i].style.textDecoration= "none";
 a[i].style.textTransform= "uppercase";
}

var h1 = document.getElementsByTagName("h1");
h1[0].innerHTML="Hello World, Welcome !"
h1[0].style.color= "white";

var p = document.getElementsByTagName("p");
p[0].innerHTML="Mari lihat keseruan menggunakan Javascript DOM ini ;)";
p[0].style.color="white";

let blog = document.getElementById("blog");
blog.style.display="flex";
blog.style.justifyContent="center";
blog.style.flexDirection="column";
blog.style.alignItems="center";
blog.style.padding="40px";

let h3 = document.getElementsByTagName("h3")[0];
h3.innerHTML="Coba lihat postingan saya";
h3.style.color="#f15030";

let h6 = document.getElementsByTagName("h6");
for (let i=0; i<h6.length; i++){
    h6[i].style.color="#f15030";
    h6[i].style.fontSize="12px";
    h6[i].style.fontSize="12px";
    h6[i].style.marginTop="-20px";
}

const footer = document.getElementsByTagName("footer")[0];
footer.style.textAlign="center";
footer.style.padding="3px";
footer.style.backgroundColor ="#70270d";
footer.style.color="white";