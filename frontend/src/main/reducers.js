import { combineReducers } from 'redux' 
import DashboardReducers from '../pages/dashboard/dashboardReducer'
import TabReducers from '../common/tab/tabReducer'
import BillingCyclesReducers from '../pages/billingCycle/billingCycleReducer'
import GroupReducers from '../pages/group/groupReducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducers,
    billingCycle: BillingCyclesReducers,
    form: formReducer,
    toastr: toastrReducer,
    group: GroupReducers
})

export default rootReducer