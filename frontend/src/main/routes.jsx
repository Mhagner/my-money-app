import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../pages/dashboard/dashboard'
import BillingCycle from '../pages/billingCycle/billingCycles'
import Groups from '../pages/groups/groups'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle}/>
        <Route path='/groups' component={Groups} />
        <Redirect from='*' to='/' />
    </Router>
)
