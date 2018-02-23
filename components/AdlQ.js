import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import renderField from './renderField';

const AdlQ = props => {
	const { handleSubmit } = props;
	return(
		<form onSubmit={handleSubmit}>
			<div className= "questionsCon">
	      <label>Sex</label>
	      <div>
	        <label>
	          <Field name="Sex" component="input" type="radio" value="Yes" /> Yes
	        </label>
	        <label>
	          <Field name="Sex" component="input" type="radio" value="No" /> No
	        </label>
	        <label>
	          <Field name="Sex" component="input" type="radio" value="Idk" /> Idk
	        </label>
	      </div>
    </div>
    </form>
	)
}

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(AdlQ);