import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import { filter } from '../../redux/actions/tableActions';

const FlterContainer = ({ filter, currentPage }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleInputValue = event => {
    const value = event.target.value;
    setSearchInputValue(value);
    filter(value);
  };

  useEffect(() => {
    filter(searchInputValue);
  }, [searchInputValue, filter, currentPage]);

  return (
    <Filter
      searchInputValue={searchInputValue}
      handleInputValue={handleInputValue}
    />
  );
};

const mapStateToProps = store => ({
  currentPage: store.table.currentPage,
});

FlterContainer.propTypes = {
  currentPage: PropTypes.number,
  filter: PropTypes.func,
};

export default connect(mapStateToProps, { filter })(FlterContainer);
