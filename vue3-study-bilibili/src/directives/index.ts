import { App } from '@vue/runtime-core';
import pin from './pin';

export default {
  install(app: App) {
    app.directive('pin', pin);
  }
}