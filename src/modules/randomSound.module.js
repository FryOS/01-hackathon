import {Module} from '../core/module';
export class RandomSoundModule extends Module {
        
    constructor (type, text) {
        super(type, text);
    }

    trigger(){   
        
        function randomSound() {
            const arrSound = ['./audio/Rex1.mp3', './audio/Rex2.mp3', './audio/Rex3.mp3', './audio/Rex4.mp3', './audio/Rex5.mp3'];
            const randomSound = Math.floor(Math.random() * arrSound.length);
            return new Audio(arrSound[randomSound]);
        }        

        const promise = randomSound().play();
        console.log(promise);
        if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.
          promise
            .then(() => {
                alert("Done!");
            })
            .catch(error => {
              console.log(error);
            });
        }
    }
} 