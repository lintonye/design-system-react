import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../components/icon-settings';
import Card from '../components/card';
import Button from '../components/button';

import Filtering from '../components/panel/__examples__/filtering';
import FilteringLocked from '../components/panel/__examples__/filtering-locked';
import FilteringError from '../components/panel/__examples__/filtering-error';

const ButtonInCard = () => (
	<Card>
		<Button label="Click me!" />
	</Card>
);

// Each .add() below adds a new *story* to the storybook
storiesOf('User stories', module)
	.add('Hello world!', () => <div>Hello Linc!</div>)
	.add('Button in card', () => <ButtonInCard />)
	.add('Filters', () => <Filtering />)
	.add('Filters Locked', () => <FilteringLocked />)
	.add('Filters Error', () => <FilteringError />);
