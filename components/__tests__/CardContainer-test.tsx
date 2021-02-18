import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../Card';

import { CardContainer } from '../CardContainer';

describe('<CardContainer/>', () => {
    it('renders', () => {
        const container = renderer.create(<CardContainer />);

        expect(container).toBeTruthy();
    });

    it('contains cards', () => {
        const container = renderer.create(<CardContainer />).root;
        
        expect(container.findByType(Card)).toBeTruthy();
    });
});