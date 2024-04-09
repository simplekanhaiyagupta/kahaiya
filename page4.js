const checkboxes = document.querySelectorAll('.checkbox');
const paragraphs = document.querySelectorAll('.hiddenParagraph');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      paragraphs[index].style.display = 'block';
    } else {
      paragraphs[index].style.display = 'none';
    }
  });
});