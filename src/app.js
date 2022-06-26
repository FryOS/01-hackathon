import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module';
import {ShowMessage} from './modules/showMessage.module';

const contextMenu = new ContextMenu('#menu');
contextMenu.open();
contextMenu.close();

const backgroundModule = new BackgroundModule('background', 'Изменить цвет фона');
contextMenu.add(backgroundModule);

const showMessage = new ShowMessage('showmessage', 'Вызвать сообщение');
contextMenu.add(showMessage);