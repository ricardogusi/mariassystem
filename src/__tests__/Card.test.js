
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

it('Verifica se contém o título correto', ()=>{
    const root = document.createElement('div');
    ReactDom.render(<Card />, root);
    expect(root.querySelector('h1').textContent).toBe('Just do it!')

})
