let button = document.getElementById('search-button');
let modal = document.getElementById('search');

modal.style.display = 'none';

button.onclick = function() {
    if (modal.style.display === 'none') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}