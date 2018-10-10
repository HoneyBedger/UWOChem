import React, {Component} from 'react';

class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    if (this.formEl.checkValidity() === false) {
      for (let el of this.formEl) {
        const errorLabel = el.parentNode.querySelector(".invalid-feedback");
        if (errorLabel && el.nodeName.toLowerCase() !== 'button') {
          if (!el.validity.valid) {
            errorLabel.textContent = el.validationMessage;
            el.classList.add("is-invalid");
          } else {
            errorLabel.textContent = '';
            el.classList.remove("is-invalid");
          }
        }
      }
      return false;
    } else {
      for (let el of this.formEl) {
        const errorLabel = el.parentNode.querySelector(".invalid-feedback");
        if (errorLabel && el.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = '';
          if (el.classList.contains("is-invalid")) el.classList.remove("is-invalid");
        }
      }
      return true;
    }
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log("validated. submitting");
      this.props.submit();
    }
    this.setState({isValidated: true});
  }

  render() {
    let props = {...this.props};
    delete props.submit;

    return (
      <form ref={form => {this.formEl = form}} onSubmit={this.submitHandler} {...props} noValidate>
          {this.props.children}
      </form>
    );
  }
}

export default ValidatedForm;
