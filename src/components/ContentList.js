import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { fetchContent } from '../actions'
import Content from './Content'

class ContentList extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchContent())
  }

  render() {
    const { items } = this.props
    return (
      <div role="list" aria-live="polite">
        {items.map(item => (
          <Content key={item.id} {...item} />
        ))}
      </div>
    )
  }
}

ContentList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          author_url: PropTypes.string.isRequired
      
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => {
  return {
    items: state.response.items || []
  }
}

export default connect(mapStateToProps)(ContentList)