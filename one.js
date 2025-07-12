// 1. تغییر متن دکمه با آیدی my-button
const button = document.getElementById('my-button');
if (button) {
  button.textContent = 'Changed button text';
}

// 2. تغییر متن تمام پاراگراف‌هایی که کلاس text دارند
const paragraphs = document.getElementsByClassName('text');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = 'Changed paragraph text';
}

const input = document.getElementById('my-input');
if (input) {
  input.value = 'Changed input value';
}

const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
  item.textContent = `Changed item ${index + 1}`;
});
