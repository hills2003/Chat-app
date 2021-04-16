import React, { useState } from 'react';
import {Button } from "@material-ui/core";
import {useAuth} from "../Config/AuthProvider";
import {auth } from "../Config/AuthProvider";
import {useHistory} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

function Signout(props) {
    const {Logout} =useAuth();
    const history =useHistory();
    const [error,setError]= useState('')
    const signout = async ()=>{
        try{
           await Logout();
           history.push('/')


        }catch{
           setError('failed to log out')
        }
    }
    return (
        <>
            {error ? <div>{error}</div> : ''}
            <IconButton edge="end" onClick={signout}>
               <ExitToAppIcon />
            </IconButton>
        </>
    );
}

export default Signout;