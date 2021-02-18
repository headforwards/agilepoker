import * as React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import TabOneScreen from '../../screens/TabOneScreen';

describe('display of cards', () => {
    it('displays cards 1-21', () => {
        const cards = renderer.create(<TabOneScreen />);
        expect(cards).toBeDefined();
    });
});