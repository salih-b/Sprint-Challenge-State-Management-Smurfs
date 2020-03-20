
import axios from 'axios';

export const addingSmurfs = (newName, newAge, newHeight) =>{
    return dispatch => {
dispatch({type: 'ADDING_SMURFS_START'});
axios.post('http://localhost:3333/smurfs', {
    name: `${newName}`,
    age: `${newAge}`,
    height:`${newHeight}`
  })
.then( res =>
    console.log("post request response", res)
)
.catch(err =>console.log("WE GOT AN", err));
    };
};