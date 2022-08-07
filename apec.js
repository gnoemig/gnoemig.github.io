const app = document.getElementById('typewriter');
const typewriter = new Typewriter (app, {
loop: true,
delay: 75

});

typewriter
.typeString ('Queremos construir un mejor futuro para ti')
.pauseFor(200)
.start();

const apec = document.getElementById('uni');
const uni = new Typewriter (apec, {
loop: true,
delay: 75

});

uni
.typeString ('Contactanos al (809) 686-0021')
.pauseFor(800)
.start();