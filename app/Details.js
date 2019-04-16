import React from 'react';
import ShowDetails from './js/components/showDetails/index';

export default (value) => {
  const { id } = value.match.params
  return (
    <div className="col-sm-5 offset-sm-1">
      <ShowDetails
        id={id}
      />
    </div>
  )
}
