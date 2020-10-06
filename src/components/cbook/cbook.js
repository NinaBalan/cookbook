import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Cbook extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        // fetch shop products action creator
        // fetch navbar links
            // set navbar links
            // filter products with links
    }
    render() {
        return (
            <div className='cbook'>
                {/* shop search bar */}
                {/* shop product */}
                {/* shop cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state } 
}

Cbook = connect(mapStateToProps, actions)(Cbook);

export default Cbook; 