
import {RouterStore} from 'mobx-react-router';
import ButtonDetailsStore from './buttonDetailsStore';
import ChangeFormStore from './changeFormStore';
import DelButtonStore from './delButtonStore';
import FormStore from './FormStore';
import ListStore from './listStore';
import { observable } from 'mobx';


export default class RootStore {
  constructor(initialState) {
    this.routing = new RouterStore(initialState.routing),
    this.buttonDetailsStore = new ButtonDetailsStore(initialState.buttonDetailsStore),
    this.changeFormStore = new ChangeFormStore(initialState.changeFormStore),
    this.delButtonStore = new DelButtonStore(initialState.delButtonStore),
    this.formStore = new FormStore(initialState.formStore),
    this.listStore = new ListStore(
        observable.array(initialState.listStore.list),
        observable(initialState.listStore.list_check)
      )
  }
}
