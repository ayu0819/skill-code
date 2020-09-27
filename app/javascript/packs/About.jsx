import React from 'react';
import ReactDOM from 'react-dom'
// import Language from './Language';

class About extends React.Component {
    render() {
      return (
    <div>
        
<section className="bg-light text-center about" id="about">

<div className="container">

<h3>About</h3>
  
<div className="container">
    <div className="row justify-content-md-center py-5">
        <div className="col col-lg-4">
           <div className="pt-2">
           <h4><small><i className="mr-2 fas fa-code"></i>自己学習</small></h4>
            <p>つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）</p>
            </div>
            <div className="pt-2">
            <h4><small><i className="mr-2 fas fa-plus-circle"></i>アウトプット</small></h4>
            <p>つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）</p>
            </div>
        </div>
        <div className="col-md-auto">
            Variable width content
        </div>
        <div className="col col-lg-4">
        <div className="pt-2">
            <h4><small><i className="mr-2 fas fa-share-alt"></i>コンテンツの共有</small></h4>
            <p>つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）</p>
        </div>
        <div className="pt-2"> 
            <h4><small><i className="mr-2 fas fa-star"></i>投稿への反応</small></h4>
            <p>つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）</p>
         </div>   
        </div>
    </div>
    </div>

  </div>
</section>

    </div>
      );
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <About />,
      document.getElementById('about'),
    )
  })
  
  
  export default About;
  