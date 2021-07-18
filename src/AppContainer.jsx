import { connect } from 'react-redux';
import { initializeApp } from './redux/actions/tableActions';
import App from './App';
import { useEffect } from 'react';

const AppContainer = ({ isInitialized, initializeApp }) => {
  useEffect(() => initializeApp(), []);
  return <App isInitialized={isInitialized} />;
};

const mapStateToProps = store => ({
  isInitialized: store.table.isInitialized,
});

export default connect(mapStateToProps, { initializeApp })(AppContainer);
