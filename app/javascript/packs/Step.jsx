import React from 'react';
import ReactDOM, { render } from 'react-dom'
import StepCard from './StepCard';
// import Language from './Language';

class Step extends React.Component {
    render() {
const CardList = [
    {
        icon: 'fas fa-crown icon__colour-green',
        lead: 'Step1',
        image: 'https://placehold.jp/150x150.png',
        title: 'HTML・CSS・Javascript・Git',
        text : 'サイト制作の基礎である言語'
    },
    {
        icon: 'fas fa-crown icon__colour-blue',
        lead: 'Step2',
        image: 'https://placehold.jp/150x150.png',
        title: 'React・Vue・Anger・Node',
        text : 'Javascriptのモダンフレームワークとコマンド処理'
    },
    {
        icon: 'fas fa-crown icon__colour-gray',
        lead: 'Step3',
        image: 'https://placehold.jp/150x150.png',
        title: 'PHP・Ruby・API',
        text : 'フロントエンドだけでなくバックエンド・APIへの理解'
    },
    {
        icon: 'fas fa-crown icon__colour-yellow',
        lead: 'Step4',
        image: 'https://placehold.jp/150x150.png',
        title: 'Ruvy on Rails・Python・Go',
        text : '人工知能・他フレームワークなど、モダン言語への理解'
    }
]


      return (
    <div>
         <section className="bg-white text-center step">
         <div className="container">
<h3>Step</h3>
<p>アナタのスキルにあった、3つのコースを推奨しています。</p>
<div className="row justify-content-md-center py-5">
{CardList.map((CardItem)=>{
    return(
        <StepCard 
 icon = {CardItem.icon}       
 lead = {CardItem.lead}
 image = {CardItem.image}
 title = {CardItem.title}
 text =  {CardItem.text}
/>
    );
})}
</div>
</div>
         </section>
         
        </div>
      );
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Step />,
      document.getElementById('step'),
    )
  })
  
  
  export default Step;
  