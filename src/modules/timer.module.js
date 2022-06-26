import {Module} from '../core/module';
import {startTimer} from '../utils';
export class TimerModule extends Module {
        
    constructor (type, text) {
        super(type, text);
    }

    trigger(){   
        
        document.body.insertAdjacentHTML('afterend', `<div class="popup-bg">
        <div class="popup">
            <p>Введите количество минут от 1 до 10:</p>
            <form action="">
                <input id = "popup" type="text">
                <button>Отправить</button>
            </form>
        </div>
        </div>`);

        const input = document.querySelector('#popup');
        const button = document.querySelector('button');

        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            if(!document.querySelector('.show-timer')){                
                const divPopup = document.querySelector('.popup-bg');
                const div = document.createElement('div');
                div.className = 'show-timer';
                div.textContent = `Вы ввели ${input.value} минут(а)`;
                document.body.append(div);
                divPopup.remove();  
                let startMin = +input.value * 60;
                start(startMin);  
                
                setTimeout(() => {
                    div.remove();
                }, (startMin+2)*1000); 
            }
            else if(document.querySelector('.show-timer')){
                const divPopup = document.querySelector('.popup-bg');
                alert("Таймер уже запущен. Дождитесь окончания");
                divPopup.remove();
            }                     
    });
             
        function start (value) {
            const display = document.querySelector('.show-timer');
            startTimer(value, display);
        };       

    }
} 