console.log("Selamat Datang Du Konsol web saya");

const navbar = document.getElementsByClassName("navbar")[0];
navbar.style.width = "85%";
navbar.style.margin = "20px";
navbar.style.padding = "35px";

const logo = document.getElementsByClassName("logo");
logo[0].style.width="100px";
 
const a = document.querySelectorAll("a");
for (let i=0; i<3; i++){
 a[i].style.color= "white";
 a[i].style.textDecoration= "none";
 a[i].style.textTransform= "uppercase";
}

var h1 = document.getElementsByTagName("h1");
h1[0].innerHTML="Selamat Datang Sobat Diksi"
h1[0].style.color= "white";

var p = document.getElementsByTagName("p");
p[0].innerHTML="<b>Semua luka hanya canda yang terbungkus rapi dengan rasa <br> Teruslah Mengagumi hingga memiliki</b>";
p[0].style.color="white";

let blog = document.getElementById("blog");
blog.style.display="flex";
blog.style.justifyContent="center";
blog.style.flexDirection="column";
blog.style.alignItems="center";
blog.style.padding="40px";

let h3 = document.getElementsByTagName("h3")[0];
h3.innerHTML="Kumpulan Diksi";
h3.style.color="#f15030";

let h6 = document.getElementsByTagName("h6");
for (let i=0; i<h6.length; i++){
    h6[i].style.color="#f15030";
    h6[i].style.fontSize="12px";
}

const footer = document.getElementsByTagName("footer")[0];
footer.style.textAlign="center";
footer.style.padding="3px";
footer.style.backgroundColor ="#964b00";
footer.style.color="white";