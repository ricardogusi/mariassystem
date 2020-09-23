
import React from 'react';
import renderer from 'react-test-renderer'
import CardData from '../Components/CardData/CardData.jsx'



it('Renderiza corretamente', () => {
    const tree = renderer
      .create(<CardData /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  


