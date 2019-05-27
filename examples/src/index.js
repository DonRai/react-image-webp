import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-webp';

class TestImage extends Component {
    /**
     * Render jsx to html
     * @returns {XML}
     */
    render() {
        return (
            <Fragment>
                <h1>Check in browser network which type of image was rendered.</h1>
                <Image
                    className="image"
                    style={{width: '550px'}}
                    title="text"
                    alt="Alternate title"
                    src={require("./../static/images/1.jpg")}
                    webp={require("./../static/images/1.webp")}
                />
            </Fragment>
        );
    }
}

ReactDOM.render(<TestImage/>, document.getElementById('root'));
