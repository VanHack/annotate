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
        default:
            return state
    }
}

function response(state = {}, action) {
    switch (action.type) {
        case REQUEST_REJECTED:
            console.log("rejected")
            console.log(action.reason)
            return Object.assign({}, state, {
                rejected: true,
                reasonForRejection: action.reason
            })
        case RECEIVE_CONTENT:
            console.log("accepted")
            console.log(action.items)
            var ns = Object.assign({}, state, {
                rejected: false,
                reasonForRejection: null,
                items: action.items
            })
            console.log(ns)
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