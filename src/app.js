import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module';
import {RandomSoundModule} from './modules/randomSound.module';

const contextMenu = new ContextMenu('#menu');
contextMenu.open();
contextMenu.close();

const backgroundModule = new BackgroundModule('background', 'Изменить цвет фона');
contextMenu.add(backgroundModule);
const randomSoundModule = new RandomSoundModule('randomMusic', 'Прослушать рандомный звук');
contextMenu.add(randomSoundModule);
