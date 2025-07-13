const addButton = document.getElementById('add-item');
const itemList = document.getElementById('item-list');


let itemCount = itemList.children.length;

addButton.addEventListener('click', () => {
  itemCount++;
  
  const li = document.createElement('li');
  li.innerHTML = `Item ${itemCount} <button class="delete-btn">Delete</button>`;
  
  itemList.appendChild(li);
});

itemList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.closest('li');
    if (li) {
      itemList.removeChild(li);
    }
  }
});
