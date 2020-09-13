import React from 'react';
import ReactDOM from 'react-dom'

const Conversion = () => {
    return(
     <div className="bg-white text-center py-5">
     <section className="container">
     <button onclick="location.href='/login'" type="button" className="mx-3 btn btn-primary rounded-pill">ログイン</button>
<button onclick="location.href='/signup'" type="button" className="mx-3 btn btn-outline-primary rounded-pill">新規登録</button>
         </section>
     </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Conversion />,
      document.getElementById('conversion'),
    )
  })

export default Conversion;



