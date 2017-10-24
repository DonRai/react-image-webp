import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-webp';

class TestImage extends Component {
    /**
     * Render jsx to html
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h1>Check in network what image webp or png</h1>
                <Image
                    className="image"
                    style={{width: '550px'}}
                    title="text"
                    alt="Alternate title"
                    src="./modules/images/1.jpg"
                    webp="./modules/images/1.webp"
                />
            </div>
        );
    }
}

ReactDOM.render(<TestImage/>, document.getElementById('root'));
