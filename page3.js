var imageUrl = localStorage.getItem('uploadedImage');
if (imageUrl) {
  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  document.getElementById('imageContainer').appendChild(imageElement);
}

// const params = new URLSearchParams(window.location.search);
// const name = imageUrl.get('name');

// // Display the name on the page
// document.getElementById('name').innerText = name;