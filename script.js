const text = "Siti Adelia Safitri";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();

function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

function openModal(src){
  document.getElementById("myModal").style.display="flex";
  document.getElementById("modalImg").src=src;
}

function closeModal(){
  document.getElementById("myModal").style.display="none";
}
