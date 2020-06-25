import React from 'react';

class CoordinatesButton extends React.Component { 
   handleClick = (event) => {
    this.props.onReceiveCoordinates([event.x, event.y]);
}

 render() {
    return(
        <button onClick={this.handleClick}>Coordinates</button>
    );
  }
}

export default CoordinatesButton 