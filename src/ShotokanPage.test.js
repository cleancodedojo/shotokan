import React from 'react';
import ReactDOM from 'react-dom';
import ShotokanPage from './ShotokanPage';

describe("ShotokanPage", () => {
    it('shall render', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShotokanPage />, div);
    });
});
