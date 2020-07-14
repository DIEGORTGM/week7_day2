import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

    constructor() {
        super()
        this.state = {
            text: 'Enviar información',
            background: '#fff'
        }
    }

    handleSubmit = () => this.setState({ text: 'Enviado', background: '#54da0059' })

    render() {
        return <button onClick={this.handleSubmit} style={{ backgroundColor: this.state.background }} className="button" >{this.state.text}</button>
    }
}

export default Button