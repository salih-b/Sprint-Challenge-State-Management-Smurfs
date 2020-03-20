import React, {useState} from 'react';
import {connect} from 'react-redux';

import Smurf from './Smurf';
import {addingSmurfs} from '../actions'
import Axios from 'axios';

const Smurfs = props => {

    const [newNameText, setNewNameText] = useState('');
    const [newAgeText, setNewAgeText] = useState('');
    const [newHeightText, setNewHeightText] = useState('');

    const handleNameChanges = (e) => {
        setNewNameText(e.target.value);
        }

    const handleAgeChanges = (e) => {
        setNewAgeText(e.target.value);
        }
    const handleHeightChanges = (e) => {
        setNewHeightText(e.target.value);
        }
const handleSubmit = e =>{
    e.preventDefault();
    props.addingSmurfs(newNameText,newAgeText,newHeightText)

}

console.log("this is props in Smurfs",props);
    return (
        <div>
            <button onClick={handleSubmit}>Add a Smurf</button>
            <input
            placeholder="smurf name"
            type="text"
            name="smurf_name"
            value={newNameText}
            onChange={handleNameChanges}
            />
            <input
            placeholder="smurf age"
            type="text"
            name="smurf_age"
            value={newAgeText}
            onChange={handleAgeChanges}
            />
            <input
            placeholder="smurf height"
            type="text"
            name="smurf_height"
            value={newHeightText}
            onChange={handleHeightChanges}
            />

            {props.smurfs.map(smurf=>(
                <Smurf smurf={smurf}/>
    ))}
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        smurfs: state.smurfs, 
        adding: state.adding, 
        error:state.error
    }
}

export default connect(mapStateToProps, {addingSmurfs})(Smurfs);