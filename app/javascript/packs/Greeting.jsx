import React from 'react';
import ReactDOM from 'react-dom'

const Greeting = () => {
    return(
     <div className="bg-white text-center py-5">
     <section className="container">
      
     <div className="row justify-content-md-center py-5">
        <div className="col col-lg-4">
           画像
        </div>

        <div className="col col-lg-4">
           <p>Hello World</p>
           </div>
    </div>

     </section>
     </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Greeting />,
      document.getElementById('greeting'),
    )
  })

export default Greeting;