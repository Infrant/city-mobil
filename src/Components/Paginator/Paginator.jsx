import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import style from './Paginator.module.scss';

const Paginator = ({ count, currentPage, handlePage }) => {
  return (
    <Pagination
      className={style.paginator}
      count={count}
      page={currentPage}
      onChange={(event, page) => handlePage(page)}
      variant='outlined'
      shape='rounded'
    />
  );
};

Paginator.propTypes = {
  count: PropTypes.number,
  currentPage: PropTypes.number,
  handlePage: PropTypes.func,
};

export default Paginator;
