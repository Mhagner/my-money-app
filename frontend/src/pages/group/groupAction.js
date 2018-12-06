import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { selectTab, showTabs } from '../../common/tab/tabAction';
//import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/groups?sort=-_id`)
    return {
        type: 'GROUPS_FETCHED',
        payload: request
    }
}
