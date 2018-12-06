import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary(){
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return{
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

export function getCount(){
    const request = axios.get(`${BASE_URL}/billingCycles/count`)
    return{
        type: 'BILLING_COUNT_FETCHED',
        payload: request
    }
}

export function getCountGroups(){
    const request = axios.get(`${BASE_URL}/groups/count`)
    return{
        type: 'GROUPS_COUNT_FETCHED',
        payload: request
    }
}