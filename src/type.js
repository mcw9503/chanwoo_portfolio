'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
}) // Devleopler
.move(13)
.move(null, {to: 'END'})
.delete(13)
.type('Front-end')
.pause(1000)
.delete(10)
.type('back-end')
.pause(1000)
.delete(13)
.go();