import React, { Component } from 'react';
class InputField extends Component{
  render(){
    return(
        <div>
        	<p className="title">Find a book</p>
          <input type='text' className='inp-field' onKeyUp={this.props.inputBook} />
        <button onClick={this.props.prop2} >Search</button>
        </div>
      )
  }
}

export default InputField;