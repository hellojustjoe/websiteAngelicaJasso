// Language Switcher Script
const enButton = document.getElementById('en-button');
const esButton = document.getElementById('es-button');
const elementsToTranslate = document.querySelectorAll('[data-en][data-es]');

enButton.addEventListener('click', () => {
    elementsToTranslate.forEach(el => {
        el.textContent = el.getAttribute('data-en');
    });
});

esButton.addEventListener('click', () => {
    elementsToTranslate.forEach(el => {
        el.textContent = el.getAttribute('data-es');
    });
});
