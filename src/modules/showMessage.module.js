import {Module} from '../core/module'

export class ShowMessage extends Module {
    constructor (type, text) {
        super(type, text);
    }

    trigger(){
        
    document.body.insertAdjacentHTML('afterend', `
        <div class="popup-bg">
        <div class="popup">
            <p>Введите сообщение:</p>
            <form action="">
                <input id = "popup" type="text">
                <button>Показать сообщение</button>
            </form>
        </div>
        </div>
    `);
    
    const input = document.querySelector('#popup');
    const button = document.querySelector('button');

    button.addEventListener('click', (event) => {
        event.preventDefault();
        const divPopup = document.querySelector('.popup-bg');
        const div = document.createElement('div');
        div.className = 'show-message';
        div.textContent = input.value;
        document.body.append(div);
        divPopup.remove();        

        setTimeout(() => {
            div.remove();
    }, 3000)
})
}
}
