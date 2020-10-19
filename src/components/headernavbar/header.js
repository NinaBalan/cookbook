import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src='assets/images/cookbook.png'/>
                <div className='header__links'>
                    
                        
                            return (
                                <a className='header__link' key={index} onClick={() => history.push(link.path)}>
                                    {link.title}
                                </a>    
                            )
                        
                    
                </div>
            </div>
        )
    }
}

export default Header;