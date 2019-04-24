import React from 'react';
import Form from './js/components/form/index';
import ItemList from './js/components/list/index';
import i18next from 'i18next';

export default () => (
  <div className="row col-sm">
    <div className="home_page col-sm-5 offset-sm-1">
      <p className="home_page article_list">{i18next.t('notes')}</p>
      <ItemList />
    </div>

    <div className="col-sm-5 offset-sm-1">
      <p className="home_page article_add">{i18next.t('title-main')}</p>
      <Form />
    </div>
  </div>
)