import {Module} from '../core/module';
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
            const divPopup = document.querySelector('.popup-bg');
            const div = document.createElement('div');
            div.className = 'show-message';
            div.textContent = `Вы ввели ${input.value} минут(а)`;
            document.body.append(div);
            divPopup.remove();  
            let startMin = +input.value * 60;
            start(startMin);  
            
            setTimeout(() => {
                div.remove();
            }, (startMin+2)*1000);          
    })

        function startTimer(duration, selector) {
            let timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                selector.textContent = minutes + ":" + seconds;
        
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
        
        function start (value) {
            const display = document.querySelector('.show-message');
            startTimer(value, display);
        };       

    }
} 