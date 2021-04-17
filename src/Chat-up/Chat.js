import React, { useRef, useState ,useEffect } from 'react';
import {Card, CardContent ,TextField ,Button, CardActions } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import Chatroom from "./Chatroom";
import {database} from "../Config/Firebase";
import {v4 as uuidv4} from "uuid";
import SendIcon from '@material-ui/icons/Send';
import {useAuth} from "../Config/AuthProvider";

const useStyles = makeStyles({
   
    card:{
        width:'450px',
        maxWidth:'450px',
        
        
    },
    flow:{
        overflow:'auto',
        margin:'15px'
    },
    position:{
        position:'fixed',
        bottom:'30px',
        
    },
    ref:{
        marginTop:'150px',
    }
})
function Chat(props) {
    const classes = useStyles();
    const divref =useRef();
    const {currentUser} =useAuth();
    const [value ,setValue] =useState('');
    const [chat,setChat]=useState(new Array());
    const submitter = (e)=>{
        e.preventDefault();
        if(value){
            database.ref('chats').push({
                text:value,
                id:uuidv4(),
                name:currentUser.email,
            
            });
            divref.current.scrollIntoView(true);
            setValue('');

        }
       
        
        
    }
    // useEffect((e)=>{
    //     database.ref('chats').on('value',(snapshot)=>{
    //         let arr =[];
    //         snapshot.forEach((snap)=>{
    //             arr.push(snap.val())
    //             setChat(arr);
    //         })
    //     })
    //     divref.current.scrollIntoView(true);
    // },[value])


    useEffect((e)=>{
       database.ref('chats').on('value',(snapshot)=>{
            let arr =[];
            snapshot.forEach((snap)=>{
                arr.push(snap.val())
                setChat(arr);
            })
        })
        divref.current.scrollIntoView(true);
    },[])
    
    const changer =(e)=>{
        e.preventDefault();
        setValue(e.target.value)
    }
    return (
        <>
          <Card className={classes.card}>
            <CardContent className={classes.flow}>
              {chat && chat.map((chat) => {
                  return (
                      <Chatroom key ={chat.id} chat={chat}/>
                  )
              })}    
                 <div className={classes.ref} ref ={divref}/>

              <form onSubmit={submitter} className={classes.position}>
                  <TextField textColor='white' value={value} label='send msg'  onChange={changer} color='secondary'/>
                  <Button onClick={submitter} variant='outlined' fontSize='small' color='secondary'> <SendIcon /> </Button>
              </form>     
            </CardContent>  
           
          </Card>  
            
        </>
    );
}

export default Chat;