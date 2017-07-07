import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-webp';

class TestImage extends React.Component {
    /**
     * Render jsx to html
     * @returns {XML}
     */
    render() {
        return (
            <Image
                src={require('./images/1.jpg')}
                webp={require('./images/1.webp')}
            />
        );
    }
}

ReactDOM.render(
    <TestImage />,
    document.getElementById('root')
);
