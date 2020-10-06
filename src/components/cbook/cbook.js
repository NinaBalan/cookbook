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
      
        // fetch navbar links
            // set navbar links
            
    }
    render() {
        return (
            <div className='cbook'>
                {/* search bar recipes */}
                {/* recipes */}
                {/* add new recipes */}
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state } 
}

Cbook = connect(mapStateToProps, actions)(Cbook);

export default Cbook; 