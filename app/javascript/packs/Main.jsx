import React from 'react';
import ReactDOM from 'react-dom'
// import Language from './Language';

class Main extends React.Component {
    render() {
      return (
    <div>
          <div className="main">
            <div className="container main__items">
              <h1 className="text-white">Skill Hub</h1>
              <button onclick="location.href='login'" type="button" className="mx-3 btn btn-primary rounded-pill">ログイン</button>
              <button onclick="location.href='signup'" type="button" className="mx-3 btn btn-outline-primary rounded-pill">新規登録</button>
               </div>
            <div className="wave"></div>
          </div>
        </div>
      );
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Main />,
      document.getElementById('main'),
    )
  })
  
  
  export default Main;
  