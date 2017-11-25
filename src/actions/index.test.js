import * as actions from '../actions'

describe('actions', () => {
  it('should return promise on fetch content', () => {
    const text = 'Finish docs'
    expect(actions.fetchContent(text)).type === Promise.type
  })
})