
import axios from 'axios';

export const addingSmurfs = (newName, newAge, newHeight) => dispatch => {
dispatch({type: 'ADDING_SMURFS_START'});
axios.post('http://localhost:3333/smurfs', {
    name: `${newName}`,
    age: `${newAge}`,
    height:`${newHeight}`
  })
.then( res => 
    // console.log("post request response", res),
    //res.data = [{}, ... {}]
    dispatch({type:'ADDING_SMURFS_SUCCESS', payload: res.data})

)
.catch(err =>console.log("WE GOT AN", err));
    };

export const renderSmurfs = (info) => {
    return {type:'RENDER_FIRST', payload:info }};
