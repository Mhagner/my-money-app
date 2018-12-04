import React, { Component } from 'react'

class UserList extends Component {
    render() {  
        return (
            <li>
                <img src={this.props.img} alt="User Image" />
                <a className="users-list-name">{this.props.name}</a>
                <span className="users-list-date">{this.props.descMonth}/{this.props.year}</span>
            </li>
        )
    }
}

export default UserList