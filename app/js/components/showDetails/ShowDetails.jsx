import React, { Component } from 'react'
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import ButtonDetails from '../buttonDetails/index';
import Preloder from '../../../preloader/25.gif';
import stores from '../../store';

@inject('listStore', 'changeFormStore')
@observer
class ConnectedDetails extends Component {

  componentDidMount () {
    const { listStore, id } =  this.props;
    if(!listStore.load){
      listStore.allNotes();
    }
    listStore.getNoteById({id})
  }

  render () {
    const { id, listStore, changeFormStore } = this.props

    const note = listStore.list_check

    return (
      <div>
        {Number(id) ===  Number(changeFormStore.change.id) ?
          <img src={Preloder} alt="loading..." /> : <h1>{note ? note.title : null}</h1>
        }
        {listStore.CheckHasErrored ?
        <h1> Page not found </h1>
        : <ButtonDetails
          id={id}
          /> 
        }
      </div>
    )
  }
}

ConnectedDetails.defaultProps = {
  id: '',
  changeFormStore: stores.changeFormStore,
  listStore: stores.listStore,
};

ConnectedDetails.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  changeFormStore: mobxPropTypes.objectOrObservableObject,
  listStore: mobxPropTypes.objectOrObservableObject,
}

export default ConnectedDetails
