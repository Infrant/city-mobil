import PropTypes from 'prop-types';
import style from './Filter.module.scss';

const Filter = ({ handleInputValue, searchInputValue }) => {
  return (
    <div className={style.inputSearchWrapper}>
      <input
        value={searchInputValue}
        onChange={handleInputValue}
        placeholder='Найти'
        className={style.inputSearch}
      />
    </div>
  );
};

Filter.propTypes = {
  searchInputValue: PropTypes.string,
  handleInputValue: PropTypes.func,
};

export default Filter;
