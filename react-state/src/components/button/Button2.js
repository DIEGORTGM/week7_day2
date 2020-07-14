import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

    constructor() {
        super()
        this.state = { active: false }
    }

    swhitchButton = () => this.setState({ active: !this.state.active })

    render() {
        return <button onClick={this.swhitchButton} style={{ opacity: this.state.active ? 1 : .3 }} className="button" >{this.state.active ? 'Activo' : 'Inactivo'}</button>
    }
}

export default Button