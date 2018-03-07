import { configure } from '@storybook/react';

function loadStories () {
	require('../user-stories');
	// You can comment out the line below to remove default stories
	require('../components/storybook-stories'); // eslint-disable-line global-require
}

configure(loadStories, module);
