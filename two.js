// انتخاب دکمه‌ها
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

// انتخاب لیست پاراگراف‌ها
const paragraphList = document.getElementById('paragraphList');

// افزودن پاراگراف جدید
addButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This is a new paragraph';
  paragraphList.appendChild(newParagraph);
});

// حذف آخرین پاراگراف
removeButton.addEventListener('click', () => {
  const lastParagraph = paragraphList.lastElementChild;
  if (lastParagraph) {
    paragraphList.removeChild(lastParagraph);
  }
});
