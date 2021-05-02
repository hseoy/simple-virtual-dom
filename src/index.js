import { updateElement } from './core';
import App from './App';

const $root = document.querySelector('#root');
updateElement($root, App());
