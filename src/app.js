import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module';
import {ImagesModule} from './modules/images.module';

const contextMenu = new ContextMenu('#menu');
contextMenu.open();
contextMenu.close();

const backgroundModule = new BackgroundModule('background', 'Изменить цвет фона');
contextMenu.add(backgroundModule);

const imagesModule = new ImagesModule('images', 'Посмотреть картинки');
contextMenu.add(imagesModule);
