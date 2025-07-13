function logClick(elementName) {
  return function (event) {
    console.log(`${elementName} clicked`);
    
    if (elementName === 'inner div') {
      event.stopPropagation();
    }
  };
}

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');
const deepInner = document.getElementById('deep-inner');

outer.addEventListener('click', logClick('outer div'), true);
middle.addEventListener('click', logClick('middle div'), true);
inner.addEventListener('click', logClick('inner div'), true);
deepInner.addEventListener('click', logClick('deep inner div'), true);
