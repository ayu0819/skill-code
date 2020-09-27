import React from 'react';
import ReactDOM from 'react-dom'
// import Language from './Language';
class Jumbotron extends React.Component {
    render() {
      return (
        <div>
        <div className="main">
          <div className="container main__items">
            <h1 className="text-white">Skill Hub</h1>
            <button onclick="location.href='users/:id" type="button" className="mx-3 btn btn-primary rounded-pill">マイページ</button>
            <button onclick="location.href='posts/new" type="button" className="mx-3 btn btn-outline-primary rounded-pill">新規投稿</button>
             </div>
          <div className="wave"></div>
        </div>
      </div>
      );
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Jumbotron />,
      document.getElementById('jumbotron'),
    )
  })
  
  
  export default Jumbotron;
  