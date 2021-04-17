import React, { useState } from 'react';
import { Grid , Button ,Card ,Paper ,TextField, CardMedia, CardContent ,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import blue from "../image/blue.jpg";
import { Link } from "react-router-dom";
//import {signup} from "../Config/AuthProvider";
import {useAuth }from "../Config/AuthProvider";
import {useHistory} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles({
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})
function Signup(props) {
    const classes =useStyles();
    const [error,setError]=useState('');
    const [button,setButton]=useState(false);
    const history =useHistory();
    const {signup} =useAuth();
    const [eye,setEye] =useState(true);
    const [eye1,setEye1] =useState(true);

    const eyer =()=>{
        setEye(!eye);
    }

    const eyer1 =()=>{
        setEye1(!eye1);
    }
    const formik =useFormik({
        initialValues:{
        email:'',
        password:'',
        passwordconfig:''
        },
        validationSchema:Yup.object({
            email:Yup.string().email('invalid email type').required('email is required'),
            password:Yup.string().required('password is required'),
            passwordconfig:Yup.string().required('required')
        }),

       onSubmit :async (values)=>{
           if (formik.values.password !== formik.values.passwordconfig){
               return setError('passwords do not match');
           }
           try{
              setError('');
              setButton(true);
              await signup(formik.values.email,formik.values.password);
              history.push('/')
           }
           catch{
               setError('failed to sign up')
           }
           setButton(false);
       }
    })
    return (
        <div className={classes.center}>
            
            <Card>
            
               <form onSubmit={formik.handleSubmit}>
                   <Typography>Sign up </Typography>
                   {error ?<Alert severity="error">{error}</Alert> :''}
               <Grid container>   
                    <Grid item xs={2}> <label style={{fontSize:'18px'}}> Email:</label> </Grid>
                            <Grid item xs={10}>
                                <Input label='email' name='email' onBlur={formik.handleBlur} style={{margin:'20px'}} variant='outlined' color='primary' value={formik.values.email} onChange={formik.handleChange} />
                                {formik.touched.email && formik.errors.email ?<Alert severity="error">{formik.errors.email}</Alert>:''}
                            </Grid>
                        
                        <Grid item xs={2}> <label style={{fontSize:'18px'}}> password: </label></Grid>
                            <Grid item xs={10}>
                                    <Input name='password' label='password' type={eye ? 'password' :'text'} endAdornment={eye ? <VisibilityIcon onClick={eyer} /> : <VisibilityOffIcon onClick={eyer} />} onBlur={formik.handleBlur} variant='outlined' style={{margin:'20px'}} color='primary' value={formik.values.password} onChange={formik.handleChange} />
                                     {formik.touched.password && formik.errors.password ? <Alert severity="error">{formik.errors.password}</Alert>:''}
                                </Grid>
                         
                        <Grid item xs={2}><label style={{fontSize:'18px'}}>
                                password-confirm:</label>
                            </Grid>
                            <Grid item xs={10}>
                                <Input label='password-confirm' type={eye1 ? 'password' :'text'} endAdornment={eye1 ? <VisibilityIcon onClick={eyer1} /> : <VisibilityOffIcon onClick={eyer1} />} name='passwordconfig'  onBlur={formik.handleBlur} style={{margin:'20px'}} variant='outlined' color='primary' value={formik.values.passwordconfig} onChange={formik.handleChange} />  
                                 {formik.touched.passwordconfig && formik.errors.passwordconfig ? <Alert severity="error">{formik.errors.passwordconfig}</Alert>:''}
                            </Grid>
                            
                        <br />
                        <Grid item xs={2}>
                            <Button disabled={button} variant='outlined' color='primary' type='submit'>Sign up</Button>
                        </Grid>

                        
                        
                  </Grid>          
               </form>
               <h5> <Link to="/signin" >already have an account </Link></h5>
               
                    
            </Card>
        </div>
    );
}

export default Signup;