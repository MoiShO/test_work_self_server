import { observable, action } from 'mobx';
import api from './api';

export default class ChangeFormStore{

  @observable changeFormStoreErrored = false;

  @observable change = false;

  @observable changeList = []

  @action
  changeArticle(data) {

    const url =  `${api.updateNoteById.endPoint}${data.id}`;

    this.change = { change: true , id: data.id};
  
    return fetch(url,
      {
        method: api.updateNoteById.method,
        body: JSON.stringify({ title: data.title })
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        this.change = {change: false}

        return response
      })
    .then((response) => response.json())
    .then((items) => {this.changeList = items})
    .catch(() => this.changeFormStoreErrored = true)
  }
}
