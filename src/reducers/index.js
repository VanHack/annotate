import { combineReducers } from 'redux'
import {
    REQUEST_CONTENT,
    RECEIVE_CONTENT,
    REQUEST_REJECTED
} from '../actions'

function request(state = {}, action) {
    switch (action.type) {
        case REQUEST_CONTENT:
            return Object.assign({}, state, {
                isLoadingContent: true
            })
        case REQUEST_REJECTED:
        case RECEIVE_CONTENT:
            return Object.assign({}, state, {
                isLoadingContent: false
            })
        default:
            return state
    }
}

function response(state = {}, action) {
    switch (action.type) {
        case REQUEST_REJECTED:
            return Object.assign({}, state, {
                rejected: true,
                reasonForRejection: action.reason
            })
        case RECEIVE_CONTENT:
            var ns = Object.assign({}, state, {
                rejected: false,
                reasonForRejection: null,
                items: action.items
            })
            return ns
        default:
            return state;
    }
}

const annotateReducer = combineReducers({
    request,
    response
})

export default annotateReducer