// Reactをインポートしてください
import React from 'react'
import ReactDOM from 'react-dom'

// Languageクラスを定義してください
class Language extends React.Component {
  constructor(props){
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickLesson(){
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    document.getElementById("display").style.display = "none";
    this.setState({isModalOpen: false});
  }

  

  render() {

    let modal;
    if(this.state.isModalOpen){
      modal = (
        <div className='modal' id='display'>
<div className='modal-inner'>
  <div className='modal-header'></div>
  <div className='modal-introduction'>
    {/* レッスンの名前を表示してください */}
    <h2>{this.props.name}</h2>
    
    {/* レッスンの紹介文を表示してください */}
    <p>{this.props.introduction}</p>
    
  </div>
  <button
   className='modal-close-btn'
   onClick={() => {this.handleClickClose()}}
   >
    とじる
  </button>
</div>
</div>
      );
    }
    return (
    
      <div 
      className='language-item'
      onClick={() => {this.handleClickLesson()}}
      >
        <div className='language-name'>{this.props.name}</div>
        <img 
          className='language-image' 
          src={this.props.image} 
        />
        {modal}
</div>
    );
  }
}

export default Language;