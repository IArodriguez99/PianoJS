const keys = document.querySelectorAll('.key')
const regulars = document.querySelectorAll('.key.white')
const sharps = document.querySelectorAll('.key.black')

keys.forEach((key)=> {
    key.addEventListener('click', () => playNote(key));
});

let playNote = (key) => {
    const noteSound = document.getElementBy(key.dataset.note);
    console.log(noteSound);
};

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.play();
};