import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', padding: '0.5' }}>
                <h1>Movies App</h1>
                <h4 style={{ marginLeft: '1rem', marginTop: '1rem' }}>Favourite</h4>
            </div >
        )
    }
}
