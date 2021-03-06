import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../../common/InputField'
import TextAreaField from '../../common/TextAreaField'
import i18n from '../../i18n'

const ContactForm = ({ handleSubmit, error, submitSucceeded }) => {
  if (submitSucceeded) {
    return (<form className="form-inputs" onSubmit={handleSubmit}>
      <b>Deine Nachricht wurde versandt.</b>
    </form>)
  }
  return (
    <form className="form-inputs" onSubmit={handleSubmit}>
      <strong>{ error }</strong>
      <Field
        name="name"
        label="Name und Vorname"
        component={InputField}
        maxLength="60"
        placeholder=""
        required
        type="text"
      />
      <Field
        name="email"
        label="E-Mail-Adresse"
        component={InputField}
        maxLength="100"
        placeholder=""
        required
        type="text"
      />
      <Field
        name="message"
        label="Deine Nachricht"
        component={TextAreaField}
        maxLength="1000"
        placeholder=""
        rows="8"
        required
        type="text"
      />
      <div className="form-actions">
        <button className="button submit" type="submit">Absenden</button>
      </div>
    </form>
  )
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitSucceeded: PropTypes.bool.isRequired,
}

ContactForm.defaultProps = {
  error: '',
  submitSucceeded: false,
}

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = i18n.t('forms.validation.required')
  }
  if (!values.email) {
    errors.email = i18n.t('forms.validation.required')
  }
  if (!values.message) {
    errors.message = i18n.t('forms.validation.required')
  }
  return errors
}

export default reduxForm({ form: 'contact' }, validate)(ContactForm)

