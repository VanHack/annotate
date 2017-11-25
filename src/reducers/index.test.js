import annotateReducer from './'
import {
  REQUEST_CONTENT,
  RECEIVE_CONTENT,
  REQUEST_REJECTED
} from '../actions'


  it('should return the initial state', () => {
    expect(annotateReducer(undefined, {})).toEqual({
      request: {},
      response: {}
    })
  })

  it('should handle REQUEST_CONTENT', () => {
    expect(
      annotateReducer({}, {
        type: REQUEST_CONTENT
      })
    ).toEqual({
      request: {isLoadingContent: true},
      response: {}
    })
  })

  it('should handle REQUEST_REJECTED', () => {
    expect(
      annotateReducer({}, {
        type: REQUEST_REJECTED,
        reason: "The request failed because this is a test."
      })
    ).toEqual({
      request: {
        isLoadingContent: false
      },
      response: {
        rejected: true,
        reasonForRejection: "The request failed because this is a test."
      }
    })
  })

  it('should overwrite relevant state values on REQUEST_REJECTED', () => {
    expect(
      annotateReducer({
        request: {
          isLoadingContent: true
        },
        response: {
          rejected: false,
          reasonForRejection: null,
          items: [{id: 100}]
        }
      }, {
        type: REQUEST_REJECTED,
        reason: "The request failed again!"
      })
    ).toEqual({
      request: {
        isLoadingContent: false
      },
      response: {
        rejected: true,
        reasonForRejection: "The request failed again!",
        items: [{id: 100}]
      }
    })
  })

  it('should handle RECEIVE_CONTENT', () => {
    expect(
      annotateReducer({}, {
        type: RECEIVE_CONTENT,
        items: [
          {id: 0, title: "A great pdf article." },
          {id: 1, title: "A great html article."}
        ]
      })
    ).toEqual({
      request: {
        isLoadingContent: false
      },
      response: {
        rejected: false,
        reasonForRejection: null,
        items: [
          {id: 0, title: "A great pdf article." },
          {id: 1, title: "A great html article."}
        ]
      }
    })
  })

  it('should overwrite relevant state values on RECEIVE_CONTENT', () => {
    expect(
      annotateReducer({
        request: {
          isLoadingContent: true
        },
        response: {
          rejected: true,
          reasonForRejection: "The last request was rejected for this reason.",
          items: [{id: 100}]
        }
      }, {
        type: RECEIVE_CONTENT,
        items: [
          {id: 0, title: "A great pdf article." },
          {id: 1, title: "A great html article."}
        ]
      })
    ).toEqual({
      request: {
        isLoadingContent: false
      },
      response: {
        rejected: false,
        reasonForRejection: null,
        items: [
          {id: 0, title: "A great pdf article." },
          {id: 1, title: "A great html article."}
        ]
      }
    })
  })
