import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', padding: '0.5' }}>
                <Link to='/' style={{ textDecoration: 'none' }}><h1>Movies App</h1></Link>
                <Link to='/favourites' style={{ textDecoration: 'none' }}><h4 style={{ marginLeft: '1rem', marginTop: '1rem' }}>Favourite</h4></Link>
            </div >
        )
    }
}
