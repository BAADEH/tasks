// Get all the necessary elements
const buttons = document.querySelectorAll('button');
const gameStatus = document.getElementById('game-status');
let currentElement = document.querySelector('.child'); // First child with class 'child'

// Initialize the first child highlight on page load
document.addEventListener('DOMContentLoaded', () => {
    if (currentElement) {
        highlightElement();
        updateStatus();
    } else {
        console.error('No element with class "child" found.');
    }
});

// Add button click event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove highlight from current element
        if (currentElement) {
            currentElement.style.backgroundColor = '';
        }

        switch (button.id) {
            case 'go-to-parent':
                const parent = currentElement.parentNode;
                if (parent && parent !== document.body && parent.nodeType === 1) { // Ensure parent is a valid element
                    currentElement = parent;
                }
                break;
            case 'go-to-first-child':
                const firstChild = currentElement.querySelector('.child');
                if (firstChild) {
                    currentElement = firstChild;
                }
                break;
            case 'go-to-last-child':
                const children = currentElement.querySelectorAll('.child');
                if (children.length > 0) {
                    currentElement = children[children.length - 1];
                }
                break;
            case 'go-to-next-sibling':
                let nextSibling = currentElement.nextElementSibling;
                while (nextSibling && !nextSibling.classList.contains('child')) {
                    nextSibling = nextSibling.nextElementSibling;
                }
                if (nextSibling) {
                    currentElement = nextSibling;
                }
                break;
            case 'go-to-previous-sibling':
                let previousSibling = currentElement.previousElementSibling;
                while (previousSibling && !previousSibling.classList.contains('child')) {
                    previousSibling = previousSibling.previousElementSibling;
                }
                if (previousSibling) {
                    currentElement = previousSibling;
                }
                break;
        }

        // Highlight the new current element and update status
        highlightElement();
        updateStatus();
    });
});

// Highlight the current element
function highlightElement() {
    // Clear previous highlights
    document.querySelectorAll('.child, .parent').forEach(el => {
        el.style.backgroundColor = '';
    });
    // Apply highlight to current element
    if (currentElement) {
        currentElement.style.backgroundColor = '#e3f2fd';
    }
}

// Update the game status
function updateStatus() {
    if (currentElement) {
        const isParent = currentElement.classList.contains('parent');
        const className = isParent ? 'Parent' : 'Child';
        let index = '';
        if (!isParent) {
            const siblings = Array.from(currentElement.parentNode.querySelectorAll('.child'));
            index = siblings.indexOf(currentElement) + 1;
        }
        gameStatus.textContent = `Current position: ${className}${index ? ' ' + index : ''}`;
    } else {
        gameStatus.textContent = 'Current position: None';
    }
}