import React, { Component } from 'react'
import UserCard from './User-card'

class UsersList extends Component {
    constructor() {
        super()
        this.state = {
            userA: {
                firstName: "Harper",
                lastName: "Perez",
                avatarUrl:
                    "https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg"
            },
            userB: {
                firstName: "Stephanie",
                lastName: "Hello",
                avatarUrl:
                    "https://api.time.com/wp-content/uploads/2018/01/stephanie-schriock-motto.jpg"
            },
            counter: 0,
            color: 'black'
        }
    }

    handleCounterClick = () => {
        this.state.counter < 10 ? this.setState({ counter: ++this.state.counter }) : this.setState({ color: 'red' })
    }

    render() {
        return (
            <>
                <UserCard name={this.state.userA.firstName} image={this.state.userA.avatarUrl} color={this.state.color} />
                <UserCard name={this.state.userB.firstName} image={this.state.userB.avatarUrl} color={this.state.color} />
                <p>El botón se ha presionado {this.state.counter} veces</p>
                <button onClick={this.handleCounterClick}>Hazme click</button>
                <hr></hr>
            </>
        )
    }
}

export default UsersList