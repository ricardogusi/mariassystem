
import React from 'react';
import * as ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Card from '../Components/Card/Card.jsx'



it('Renderiza corretamente', () => {
    const tree = renderer
      .create(<Card /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });







