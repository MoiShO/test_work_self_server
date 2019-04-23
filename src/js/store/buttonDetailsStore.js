import { observable, action, computed} from 'mobx';
import api from './api';

export default class ButtonDetailsStore{

  @observable DelButtonStoreErrored = false;

  @observable noteIsDeleted = {};

  @action
  delArticle (data) {
    let set = { delete: true, id: data.id };
  
    this.noteIsDeleted = set;
  
    const url = `${api.delNoteById.endPoint}${data.id}`
  
    return fetch(url, { method: api.delNoteById.method })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
      })
    .then(() => {this.delListNote(data);  this.noteIsDeleted = { delete: false };})
    .catch(() => this.DelButtonStoreErrored = true)
  }
}