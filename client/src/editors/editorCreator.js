import React, { PropTypes } from 'react'
import DepotForm from './components/DepotForm'
import FarmForm from './components/FarmForm'
import InitiativeForm from './components/InitiativeForm'

const Form = ({ type, initialValues, onPlaceSubmit, farms, user }) => {
  if (type === 'depot') {
    return (
      <DepotForm
        onSubmit={onPlaceSubmit}
        farms={farms}
        initialValues={initialValues}
        user={user}
      />)
  } else if (type === 'farm') {
    return (
      <FarmForm
        onSubmit={onPlaceSubmit}
        initialValues={initialValues}
        user={user}
      />
    )
  } else if (type === 'initiative') {
    return (
      <InitiativeForm
        onSubmit={onPlaceSubmit}
        initialValues={initialValues}
        user={user}
      />
    )
  }
  return ''
}


const editor = (type) => {
  const Editor = ({ initialValues, onPlaceSubmit, farms, user, title }) => (
    <div className="entries-editor">
      <div className="entries-editor-container">

        <h1>{title}</h1>

        <Form
          type={type}
          onPlaceSubmit={onPlaceSubmit}
          farms={farms}
          initialValues={initialValues}
          user={user}
        />

      </div>
    </div>
  )

  Editor.propTypes = {
    onPlaceSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.shape(),
    user: PropTypes.shape().isRequired,
    farms: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
  }

  Editor.defaultProps = {
    initialValues: {},
  }

  return Editor
}

Form.propTypes = {
  type: PropTypes.oneOf(['depot', 'farm', 'initiative']).isRequired,
  onPlaceSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape(),
  user: PropTypes.shape().isRequired,
  farms: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Form.defaultProps = {
  initialValues: {},
}

export default editor
