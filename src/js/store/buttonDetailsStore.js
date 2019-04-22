import { observable, action, computed} from 'mobx';
import api from './api';

export default class ButtonDetailsStore{

  @observable DelButtonStoreErrored = false;

  @observable noteIsDeleted = {};

  @observable show;

  @computed get isOpen() {
    return this.show;
  }

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

        this.noteIsDeleted = { delete: false };
        this.arcticleHasErrored = false;
      })
    .then(() => this.delListNote(data))
    .catch(() => this.DelButtonStoreErrored = true)
  }
}