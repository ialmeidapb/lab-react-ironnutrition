import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import foods from '../foods.json'
import FoodBox from './FoodBox'


class FoodList extends React.Component {
    state={
        foodList: [],
    };
    
    handleAdd = (item) => {
        const foodBasket = [...this.state.foodList, item];
        this.setState({ foodList: foodBasket });
    };
    
    render() {
        return (
        <div class="columns">
        <div class="column">
        {foods.map((x) => {
        return (
        <div>
        <FoodBox
            name={x.name}
            calories={x.calories}
            image={x.image}
            onClick={this.handleAdd}
          />
        </div>
        );
    })}
    </div>
    <div class="column content">
          <div className="box">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            {this.state.foodList.map((x)=>{
                return(
                    <li>
                {this.props.quantity} {x.name} = {x.calories}</li>
                );
            })} 
          </ul>
          <strong>Total:  cal</strong>
        </div>
      </div>
    </div>
        );
    }
}

export default FoodList;