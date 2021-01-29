import React from 'react';
import PropTypes from 'prop-types';
import FilterMenu from './FilterMenu/FilterMenu';
import FilterResults from './FilterResults/FilterResults';

const Filter = ({ as: Element = "div", setCategory, data, categoryMenu, display }) => {
  return (
    <Element>
      <FilterMenu categoryMenu={categoryMenu} setCategory={setCategory} display={display} />
      <FilterResults data={data} display={display} setCategory={setCategory} categoryMenu={categoryMenu} />
    </Element>
  )
}

Filter.propTypes = {
  as: PropTypes.elementType
};
export default Filter;
