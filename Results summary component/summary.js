const reminder = document.querySelector('button');

function screenSize() {
    const size = innerWidth;
    window.alert(size);
}

reminder.onclick = screenSize;