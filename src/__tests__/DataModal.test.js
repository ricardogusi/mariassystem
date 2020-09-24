
import React from 'react';
import renderer from 'react-test-renderer'
import DataModal from '../Components/DataModal/DataModal.jsx'



it('Renderiza corretamente', () => {
    const tree = renderer
      .create(<DataModal /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  

  