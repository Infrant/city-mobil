import { CircularProgress } from '@material-ui/core';
import './App.scss';
import FilterContainer from './Components/Filter/FilterContainer';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PaginatorContainer from './Components/Paginator/PaginatorContainer';
import Sidebar from './Components/Sidebar/Sidebar';
import TableContainer from './Components/Table/TableContainer';

const App = ({ isInitialized }) => {
  return !isInitialized ? (
    <div className='loaderWrapper'>
      <CircularProgress className='loader' />
    </div>
  ) : (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='tableWrapper'>
          <FilterContainer />
          <PaginatorContainer />
          <TableContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
