import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { handleClick, value, numValue, name, id } = this.props;
    return(
      <button
        className='button'
        type="button"
        name={ name }
        id={ id }
        onClick={ handleClick }
        value={ value }
      >
        {numValue}
      </button>
    )
  }
}

export default Button;