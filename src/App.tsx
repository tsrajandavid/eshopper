import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/pages/Index';
import { connect } from 'react-redux';
import { getPostByIdFunc, getPostsBulkFunc } from './redux/actionCreators/actions';

function App(props: any) {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className="App">
      <div className="App">
        <button onClick={() => {
          props.getPostById(1);
        }}>By Id</button>
        <button onClick={() => {
          props.getPostBulk();
        }}>In bulk</button>
      </div>
      {/* <Index /> */}
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPostById: getPostByIdFunc(dispatch),
    getPostBulk: getPostsBulkFunc(dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
