import {GET_DOGS, GET_DOGS_BY_NAME, GET_ID, GET_DOGS_BY_TEMPERAMENT, FILTER_CREATED, SORT_BY_NAME} from "../acctions/const";
const initialState = {
    dogs: [],
    alldogs: []
}

const rootReducer = function (state = initialState, action) {
    switch(action.type) {
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                alldogs: action.payload
            }
        case GET_DOGS_BY_NAME:
            return{
                ...state,
                dogs: action.payload
            }
        case GET_DOGS_BY_TEMPERAMENT:
            return{
                ...state,
                dogs: action.payload
            }
        case FILTER_CREATED:
            const filtered = action.payload === "created" ? state.alldogs.filter(ele => ele.createdInDb) :
            state.alldogs.filter(ele => !ele.createdInDb)
            return{
                ...state,
                dogs: action.payload === "all" ? state.alldogs : filtered
            }
        case SORT_BY_NAME: 
        let sortedArray = action.payload === "asc"? 
            state.dogs.sort(function(a,b){
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0
            }) :
            state.dogs.sort(function(a,b){
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0
            });
            return {
                ...state,
                dogs: sortedArray
            }
            default: return state;
    }
}

export default rootReducer;