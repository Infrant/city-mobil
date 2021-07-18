import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import { sort } from '../../redux/actions/tableActions';
import style from './Table.module.scss';

const TableContainer = ({
  tableDataFiltered,
  sort,
  sortingMode,
  isActiveSort,
}) => {
  const handleSort = event => {
    sort();
  };

  const [choosenCar, setChoosenCar] = useState('');

  const handleChooseCar = (event, data) => {
    if (data[2] !== undefined) {
      setChoosenCar(() => data);
    } else {
      setChoosenCar(() => '');
    }
  };

  const choosenCarEl =
    choosenCar?.length === 3 ? (
      <div className={style.choosenCar}>
        Выбран автомобиль {`${choosenCar[0]} ${choosenCar[1]}`}{' '}
        {choosenCar[2] ? choosenCar[2] + ' года выпуска' : null}
      </div>
    ) : (
      ''
    );

  const [standart, comfort, business, comfort_, econom, mini, light] =
    tableDataFiltered.tariffs_list;

  const sortHeadingList = [
    econom,
    comfort,
    comfort_,
    standart,
    business,
    mini,
    light,
  ];

  const tableHeading = (
    <div className={style.tableRowHeading}>
      <div className={style.tableRowHeadingCell} onClick={() => handleSort()}>
        Марка и модель
        <div
          className={`${style.tableRowHeadingSort} ${
            sortingMode === '' ? '' : style.tableRowHeadingSortAscending
          } ${isActiveSort ? style.tableRowHeadingSortVisible : ''}`}
        ></div>
      </div>
      {sortHeadingList.map((heading, idx) => (
        <div key={idx} className={style.tableRowHeadingCell}>
          {heading}
        </div>
      ))}
    </div>
  );

  const tableEl = tableDataFiltered.cars.map((car, idx) => (
    <div className={style.tableRow} key={idx}>
      <div
        className={`${style.tableRowCell} tableRowCellHover`}
        onClick={event => handleChooseCar(event, [car.mark, car.model, ''])}
      >
        {car.mark} {car.model}
      </div>
      <div
        className={`${style.tableRowCell} ${
          car.tariffs.Эконом?.year ? 'tableRowCellHover' : null
        }`}
        onClick={event =>
          handleChooseCar(event, [
            car.mark,
            car.model,
            car.tariffs.Эконом?.year,
          ])
        }
      >
        {car.tariffs.Эконом?.year || '-'}
      </div>
      <div
        className={`${style.tableRowCell} ${
          car.tariffs.Комфорт?.year ? 'tableRowCellHover' : null
        }`}
        onClick={event =>
          handleChooseCar(event, [
            car.mark,
            car.model,
            car.tariffs.Комфорт?.year,
          ])
        }
      >
        {car.tariffs.Комфорт?.year || '-'}
      </div>
      <div
        className={`${style.tableRowCell} ${
          car.tariffs['Комфорт+']?.year ? 'tableRowCellHover' : null
        }`}
        onClick={event =>
          handleChooseCar(event, [
            car.mark,
            car.model,
            car.tariffs['Комфорт+']?.year,
          ])
        }
      >
        {car.tariffs['Комфорт+']?.year || '-'}
      </div>
      <div
        className={`${style.tableRowCell} ${
          car.tariffs.Стандарт?.year ? 'tableRowCellHover' : null
        }`}
        onClick={event =>
          handleChooseCar(event, [
            car.mark,
            car.model,
            car.tariffs.Стандарт?.year,
          ])
        }
      >
        {car.tariffs.Стандарт?.year || '-'}
      </div>
      <div
        className={`${style.tableRowCell} ${
          car.tariffs.Бизнес?.year ? 'tableRowCellHover' : null
        }`}
        onClick={event =>
          handleChooseCar(event, [
            car.mark,
            car.model,
            car.tariffs.Бизнес?.year,
          ])
        }
      >
        {car.tariffs.Бизнес?.year || '-'}
      </div>
      <div
        className={`${style.tableRowCell} ${
          car.tariffs.Минивен?.year ? 'tableRowCellHover' : null
        }`}
        onClick={event =>
          handleChooseCar(event, [
            car.mark,
            car.model,
            car.tariffs.Минивен?.year,
          ])
        }
      >
        {car.tariffs.Минивен?.year || '-'}
      </div>
      <div
        className={`${style.tableRowCell} ${
          car.tariffs.Лайт?.year ? 'tableRowCellHover' : null
        }`}
        onClick={event =>
          handleChooseCar(event, [car.mark, car.model, car.tariffs.Лайт?.year])
        }
      >
        {car.tariffs.Лайт?.year || '-'}
      </div>
    </div>
  ));

  return (
    <Table
      tableDataFiltered={tableDataFiltered}
      tableHeading={tableHeading}
      tableEl={tableEl}
      choosenCarEl={choosenCarEl}
    />
  );
};

const mapStateToProps = store => ({
  tableDataFiltered: store.table.tableDataFiltered,
  isActiveSort: store.table.isActiveSort,
  sortingMode: store.table.sortingMode,
});

TableContainer.propTypes = {
  tableDataFiltered: PropTypes.shape({
    cars: PropTypes.arrayOf(
      PropTypes.shape({
        mark: PropTypes.string,
        model: PropTypes.string,
        tariffs: PropTypes.objectOf(PropTypes.object),
      })
    ),
    tariffs_list: PropTypes.arrayOf(PropTypes.string),
  }),
  sortingMode: PropTypes.string,
  isActiveSort: PropTypes.bool,
  sort: PropTypes.func,
};

export default connect(mapStateToProps, { sort })(TableContainer);
