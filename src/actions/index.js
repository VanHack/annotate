import fetch from 'cross-fetch'
import mock from '../html.json'

export const REQUEST_CONTENT = 'LOAD_CONTENT'
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT'
export const REQUEST_REJECTED = 'REQUEST_REJECTED'

export const IS_MOCKED = true

let nextId = 0;

function requestContent() {
  return {
    type: REQUEST_CONTENT
  }
}

function receiveContent(json) {
  return {
    type: RECEIVE_CONTENT,
    items: [Object.assign({}, json, {id: nextId++})]
  }
}

function requestRejected(reason) {
  return {
    type: REQUEST_REJECTED,
    reason: reason
  }
}

export function fetchContent() {
  return dispatch => {
    dispatch(requestContent())
    return fetch(`../html.json`)
      .then(
        response => dispatch(receiveContent(mock)),
        reason => dispatch(requestRejected(reason))
      )
  }
}