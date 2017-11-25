import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Card, CardTitle } from 'react-materialize';
import './Content.css'

const Content = ({ id, title, description, image }) => (
  <NavLink to={`/detail/${ id }`} role="navigation" aria-controls="article" tabIndex="0">
    <Card className="medium" role="article" header={<CardTitle image={`${image}`}>{title}</CardTitle>}>
      {description}
    </Card>
  </NavLink>
)

Content.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Content