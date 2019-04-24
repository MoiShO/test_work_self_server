import { observable, action, autorun } from 'mobx';
import api from './api';

export default class ListStore {
  
  @observable load = false;

  @observable title = '';

  @observable arcticleIsLoading = false;

  @observable arcticleHasErrored = false;

  constructor(list, list_check, CheckHasErrored){
    list? this.list = list : this.list = [];
    list_check? this.list_check = list_check : this.list_check = {};
    this.CheckHasErrored = CheckHasErrored;
  }

  @action
  addListNewNote = (data) => {
    this.arcticleIsLoading = true
    this.list = observable.array(this.list.concat(data[data.length-1]))
    this.arcticleIsLoading = false
  }

  @action
  setListCheck = (data) => {
    this.arcticleIsLoading = true
    this.list_check = data
    this.arcticleIsLoading = false
  }

  @action.bound
  delListNote(data) {
    this.list.replace(this.list.filter((el) => Number(el.id) !== Number(data.id)))
  }

  @action.bound
  changeNote(data) {
    this.list.replace(
      this.list.filter((el) => {
        if (el.id == Number(data.id)) {
        el.title = data.title
        return el
        } else { return el }
      })
    )
  }

  @action.bound
  getNoteById(data) {
    this.arcticleIsLoading = true

    const url = `${api.getNoteById.endPoint}${data.id}`
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
  
      return response
    })
    .then((response) => response.json())
    .then((items) => {
      this.list_check = observable(items);
      this.arcticleIsLoading = false
      this.CheckHasErrored = false
    })
    .catch(() => {this.CheckHasErrored = true})
  }
  @action.bound
  randomNotes(data) {
      this.arcticleIsLoading = true
      this.load = true;

      const url = `${api.getNotes.endPoint}/random/${data.num}`
  
      return fetch(url).then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        
        this.arcticleHasErrored = false
  
        return response
      })
      .then((response) => response.json())
      .then((items)=> {
        this.list = observable.array(this.list.concat(items), { deep: false });
        this.arcticleIsLoading = false;
      })
      .catch(() => {
        this.arcticleHasErrored = true;
        this.arcticleIsLoading = false;
      })
  }
}
