const initialState = {
    name: "Indra"
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: 'Prasetyo'
        }
    }
    return state;    
}

export default globalReducer;