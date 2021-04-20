import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import foods from '../foods.json'


class FoodBox extends React.Component{
state ={
    quantity:0,
}

handleQuantity=(event)=>{
    this.setState({quantity: event.target.value});
}


render=()=>{
return(
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input 
          name="quantity"
          onChange={this.handleQuantity}
          className="input" 
          type="number" 
          value={this.state.quantity}
          min="0"/>
        </div>
        <div className="control">
          <button 
          className="button is-info"
          onClick={()=> this.props.onClick(this.props)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
)
}

}

export default FoodBox;