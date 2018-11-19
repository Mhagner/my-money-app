const INITIAL_STATE = { summary: { credit:0, debt: 0 }, count: { value: 0 } }

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data } 
        case 'BILLING_COUNT_FETCHED':
            return { ...state, count: action.payload.data}
        default:
            return state    
    }
}