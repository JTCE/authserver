import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render(){
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email: </label>
          <input className="form-control" {...email} />
          <label>Password: </label>
          <input className="form-control" {...password} type="password" />
          <label>Password Confirm: </label>
          <input className="form-control" {...passwordConfirm}  type="password" />
        </fieldset><button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  console.log(formProps);

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email','password','passwordConfirm'],
  validate
})(Signup);
