import React from 'react';
import ReactDOM from 'react-dom';
import AnnotateRoot from './AnnotateRoot';

it('renders deep root', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnnotateRoot />, div);
});
