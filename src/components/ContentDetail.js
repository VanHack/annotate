import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'hypothesis'  
import './ContentDetail.css'

const ContentDetail = ({ item }) => (
    <div className="article" role="article">
        <h3>{item.title}</h3>
        <div dangerouslySetInnerHTML={{__html: item.content}}>
        </div>
    </div>
)

ContentDetail.propTypes = {
    item: PropTypes.shape({
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
}

const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.match.params.id
    const item = state.response.items.filter(item => item.id === id)
    return {
      item: item[0]
    }
}

export default connect(mapStateToProps)(ContentDetail)