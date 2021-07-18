import PropTypes from 'prop-types';
import style from './Table.module.scss';

const Table = ({ tableEl, tableHeading, choosenCarEl }) => {
  return (
    <>
      <div className={style.table}>
        {tableHeading}
        {tableEl}
      </div>
      {choosenCarEl}
    </>
  );
};

Table.propTypes = {
  tableEl: PropTypes.array,
  tableHeading: PropTypes.object,
  choosenCarEl: PropTypes.string,
};

export default Table;
