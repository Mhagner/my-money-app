import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../pages/dashboard/dashboard'
import BillingCycle from '../pages/billingCycle/billingCycles'
import Group from '../pages/group/group'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp} />
        <Route path='/billingCycles' component={BillingCycle}/>
        <Route path='/groups' component={Group} />
        <Redirect from='*' to='/' />
    </Router>
)
