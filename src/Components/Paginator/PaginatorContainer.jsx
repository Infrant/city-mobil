import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/actions/tableActions';
import Paginator from './Paginator';

const PaginatorContainer = ({
  totalCarsCount,
  pageSize,
  currentPage,
  setCurrentPage,
}) => {
  const count = Math.ceil(totalCarsCount / pageSize);

  const handlePage = page => setCurrentPage(page);

  return (
    <Paginator
      count={count}
      handlePage={handlePage}
      currentPage={currentPage}
    />
  );
};

const mapStateToProps = store => ({
  totalCarsCount: store.table.totalCarsCount,
  pageSize: store.table.pageSize,
  currentPage: store.table.currentPage,
});

PaginatorContainer.propTypes = {
  totalCarsCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default connect(mapStateToProps, { setCurrentPage })(PaginatorContainer);
