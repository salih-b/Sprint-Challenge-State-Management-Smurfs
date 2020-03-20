import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import Smurf from './Smurf';
import {addingSmurfs, renderSmurfs} from '../actions'
import Axios from 'axios';

const Smurfs = props => {

    useEffect(()=>{
        Axios.get('http://localhost:3333/smurfs')
    .then(res => props.renderSmurfs(res.data))
    .catch(err => console.log(err));
    }, []);


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
    props.addingSmurfs(newNameText,newAgeText,newHeightText);
    setNewNameText('');
    setNewAgeText('');
    setNewHeightText('');
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
    // const [newSmurfs, setNewSmurfs] = useState([]);
    // Axios.get('http://localhost:3333/smurfs')
    // .then(res => setNewSmurfs(res.data))
    // .catch(err => console.log(err));
    console.log(state);
    return {
        smurfs: state.smurfs, 
        adding: state.adding, 
        error:state.error
    }
}

export default connect(mapStateToProps, {addingSmurfs, renderSmurfs})(Smurfs);