import {RouterStore} from 'mobx-react-router';
import ButtonDetailsStore from './buttonDetailsStore';
import ChangeFormStore from './changeFormStore';
import DelButtonStore from './delButtonStore';
import FormStore from './FormStore';
import ListStore from './listStore';
import { toJS } from 'mobx';

const routingStore = new RouterStore();

export default (state) => ({
  routing: toJS(routingStore),
  buttonDetailsStore: toJS(new ButtonDetailsStore(state.buttonDetailsStore)),
  changeFormStore: toJS(new ChangeFormStore(state.changeFormStore)),
  delButtonStore: toJS(new DelButtonStore(state.delButtonStore)),
  formStore: toJS(new FormStore(state.formStore)),
  listStore: toJS(new ListStore(state.listStore)),
})
