import React from 'react';
import * as ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import App from '../App'



it('Renderiza corretamente', () => {
    const tree = renderer
      .create(<App /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Verifica se a div possui a classe correta', ()=>{
    const root = document.createElement('div');
    ReactDom.render(<App />, root);
    expect(root.querySelector('div').className).toBe('container')

})