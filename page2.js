const image = document.querySelector('img');
const input = document.querySelector('input');
input.addEventListener('change',(e)=>{
    image.src = URL.createObjectURL(e.target.files[0]);
});
document.getElementById('uploadForm').addEventListener('submit', function(event) {
event.preventDefault();
var file = document.getElementById('file').files[0];
if (file) {
var reader = new FileReader();
reader.onload = function(event) {
  var imageUrl = event.target.result;
  localStorage.setItem('uploadedImage', imageUrl);
  window.location.href = 'page3.html';
};
reader.readAsDataURL(file);
}
});