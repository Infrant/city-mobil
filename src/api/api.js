import * as axios from 'axios';

const URL_PATH = 'https://city-mobil.ru/api/cars';

export const tableAPI = {
  getTableData: () => axios.get(URL_PATH).then(response => response.data),
};
