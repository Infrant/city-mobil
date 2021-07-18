import {
  FILTER,
  SET_CURRENT_PAGE,
  SET_INITIALIZED,
  SORT,
} from '../actions/tableActions';

const initialStore = {
  isInitialized: false,
  currentPage: 1,
  totalCarsCount: 0,
  pageSize: 15,
  tableData: [],
  tableDataFiltered: [],
  isActiveSort: false,
  sortingMode: 'ascending',
};

const tableReducer = (store = initialStore, action) => {
  let minIdx;
  let maxIdx;
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...store,
        tableData: action.data,
        tableDataFiltered: {
          tariffs_list: [...action.data.tariffs_list],
          cars: action.data.cars.slice(0, store.pageSize),
        },
        isInitialized: true,
        totalCarsCount: action.data.cars.length,
      };

    case SET_CURRENT_PAGE:
      minIdx = (action.page - 1) * store.pageSize;
      maxIdx = minIdx + store.pageSize;
      return {
        ...store,
        isActiveSort: false,
        sortingMode: 'ascending',
        currentPage: action.page || store.currentPage,
        tableDataFiltered: {
          ...store.tableDataFiltered,
          cars: store.tableData.cars.filter(
            (car, idx) => idx >= minIdx && idx < maxIdx
          ),
        },
      };

    case FILTER:
      minIdx = (store.currentPage - 1) * store.pageSize;
      maxIdx = minIdx + store.pageSize;
      return {
        ...store,
        isActiveSort: false,
        sortingMode: 'ascending',
        tableDataFiltered: {
          ...store.tableDataFiltered,
          cars: store.tableData.cars
            .filter((car, idx) => idx >= minIdx && idx < maxIdx)
            .filter(car =>
              Object.values(car).some(carValue => {
                let searchValue = action.searchValue.toLowerCase();
                if (typeof carValue === 'string') {
                  carValue = carValue.toLowerCase();
                  return carValue.includes(searchValue);
                }
                if (typeof carValue === 'object') {
                  return Object.values(carValue).some(tariff =>
                    tariff.year.toString().includes(searchValue)
                  );
                }
                return false;
              })
            ),
        },
      };

    case SORT:
      return {
        ...store,
        isActiveSort: true,
        sortingMode: store.sortingMode === 'ascending' ? '' : 'ascending',
        tableDataFiltered: {
          ...store.tableDataFiltered,
          cars: store.tableDataFiltered.cars.sort((a, b) => {
            if (a.mark.toLowerCase() < b.mark.toLowerCase()) {
              return store.sortingMode === 'ascending' ? -1 : 1;
            }
            if (a.mark.toLowerCase() > b.mark.toLowerCase()) {
              return store.sortingMode === 'ascending' ? 1 : -1;
            }
            return 0;
          }),
        },
      };

    default:
      return store;
  }
};

export default tableReducer;
