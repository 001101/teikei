import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../common/InputField'
import i18n from '../i18n'

const ResetPassword = ({ handleSubmit, error }) => (
  <div className="user-account">
    <div className="user-container">
      <h1>Neues Passwort setzen</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <strong>{ error }</strong>
          <Field
            name="password"
            label={'Neues Password'}
            component={InputField}
            type="password"
            maxLength="100"
          />
          <Field
            name="password_confirmation"
            label={'Password bestätigen'}
            component={InputField}
            type="password"
            maxLength="100"
          />
        </div>
        <div className="form-actions">
          <input
            type="submit"
            className="button submit"
            value={'Passwort setzen'}
          />
        </div>
      </form>
    </div>
  </div>
)

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
}

ResetPassword.defaultProps = {
  error: '',
}

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = i18n.t('forms.validation.required')
  }
  return errors
}

export default reduxForm({ form: 'recoverpassword', validate })(ResetPassword)

