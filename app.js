// Get the modal
var modal = document.getElementById("myModalUno");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgUno");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("captionUno");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModalDos");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgDos");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("captionDos");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("myModalTres");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgTres");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("captionTres");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}