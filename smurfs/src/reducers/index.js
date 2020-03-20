import axios from 'axios';


const initialState = {
    smurfs: [], 
    adding: false, 
    error:''
}


export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADDING_SMURFS_START":
            return{
                ...state, 
                adding:true
            }
        case 'ADDING_SMURFS_SUCCESS':
            return{
                ...state, 
                adding:false,
                smurfs: action.payload
            }
        default:
            return state;
    }
}