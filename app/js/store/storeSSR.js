import {RouterStore} from 'mobx-react-router';

import ButtonDetailsStore from './buttonDetailsStore';
import ChangeFormStore from './changeFormStore';
import DelButtonStore from './delButtonStore';
import FormStore from './FormStore';
import ListStore from './listStore';
import SwitchLanguageStore from './switchLanguagestore';

export default (state) => ({
  routing: new RouterStore(this, state.routing),
  buttonDetailsStore: new ButtonDetailsStore(this, state.buttonDetailsStore),
  changeFormStore: new ChangeFormStore(this, state.changeFormStore),
  delButtonStore: new DelButtonStore(this, state.delButtonStore),
  formStore: new FormStore(this, state.formStore),
  listStore: new ListStore(this, state.listStore),
  switchLanguageStore: new SwitchLanguageStore(this, state.switchLanguageStore),
})
