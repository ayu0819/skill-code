import React from 'react';
import ReactDOM, { render } from 'react-dom'

class StepCard extends React.Component {
    render(){
        return(
<div>
<div className="card card__block m-2">
  <div className="card-body">
        <h5><i class={this.props.icon}></i><span className="pl-2">{this.props.lead}</span></h5>
      <img src={this.props.image} alt="smple" />
      <h6>{this.props.title}</h6>
    <p>{this.props.text}</p>
  </div>
</div>
</div>
        );
    }
}

export default StepCard;