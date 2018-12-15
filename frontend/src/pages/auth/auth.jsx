import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'

import { login, signup } from '../auth/authActions'
import Row from '../../common/template/row'
import Grid from '../../common/layout/grid'
import If from '../../common/operator/if'
import Message from '../../common/msg/messages'
import Input from '../../common/form/inputAuth'

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = { loginMode: true }
    }

    changeMode(){
        this.setState({ loginMode: !this.state.loginMode})
    }

    onSubmit(values){
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }

    render(){
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return(
            <div></div>
        )
    }
}

