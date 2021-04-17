import React, { useEffect } from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useAuth } from "../Config/AuthProvider";
import { storage ,database} from '../Config/Firebase';
import {useHistory} from "react-router-dom";

function Upload(props) {
const [pics,setPics]=React.useState();
const [real,setReal] =React.useState();
const {currentUser} =useAuth();
const history =useHistory();

    var email = currentUser.email;
    var index = email.indexOf('@');
    var name =email.slice(0,index);

     
    const profile =async (e)=>{
        await setPics(e.target.files[0]);
        const pictures = storage.ref(`user-photos/${name}`);

        const update = pictures.put(pics);
        update.on('state_changed',(snapshot)=>{},(error)=>{},
         (complete)=>{
             storage.ref(`userphotos/${name}`).getDownloadURL().then((url)=>{
                setReal(url);
                database.ref(`profile/${name}`).set({
                    image:real
                })
            })

        })

    }
    return (
        <>
                    <input type="file" onChange={profile} accept="image/*"  id='input' style={{display:'none'}} />
                    <label htmlFor='input'>
                        <AddAPhotoIcon color="secondary"/>
                    </label>
        
            
        </>
    );
}

export default Upload;