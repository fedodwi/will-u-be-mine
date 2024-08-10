document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('mousemove', function(event) {
    let button = document.getElementById('noButton');
    let container = document.querySelector('.container');
    let rect = container.getBoundingClientRect();
    
    // Dapatkan posisi tombol no
    let offsetX = Math.random() * (rect.width - button.offsetWidth);
    let offsetY = Math.random() * (rect.height - button.offsetHeight);

    // Set posisi baru dari tombol no
    button.style.position = 'absolute';
    button.style.left = offsetX + 'px';
    button.style.top = offsetY + 'px';
});

document.getElementById('noButton').addEventListener('click', function() {
    alert("Please give it another thought :)");
});
