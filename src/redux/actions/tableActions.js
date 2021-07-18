import { tableAPI } from '../../api/api';

export const SET_INITIALIZED = 'tableReducer/SET_INITIALIZED';
export const SET_CURRENT_PAGE = 'tableReducer/SET_CURRENT_PAGE';
export const FILTER = 'tableReducer/FILTER';
export const SORT = 'tableReducer/SORT';
export const SET_IS_ACTIVE_SORT = 'tableReducer/SET_IS_ACTIVE_SORT';

const setInitialized = data => ({
  type: SET_INITIALIZED,
  data,
});

export const initializeApp = () => dispatch => {
  tableAPI.getTableData().then(data => {
    dispatch(setInitialized(data));
  });
};

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  page,
});

export const filter = searchValue => ({
  type: FILTER,
  searchValue,
});

export const sort = direction => ({
  type: SORT,
  direction,
});
