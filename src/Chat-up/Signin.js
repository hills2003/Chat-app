import React,{useState ,useEffect} from 'react';
import { Grid , Button ,Card ,Paper ,TextField, CardMedia, CardContent ,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import blue from "../image/blue.jpg";
import { Link } from "react-router-dom";
import {useAuth} from "../Config/AuthProvider";
import {useHistory} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})
function Signin(props) {
    const classes =useStyles();
    const history =useHistory();
    const {login,currentUser } =useAuth();
    const [error,setError]=useState('');
    const [button,setButton] = useState(false);
    const [eyes,setEyes] =useState(true);

    const eyer =(e) =>{
        setEyes(!eyes);
    }
    
    const formik =useFormik({
        initialValues:{
        email:'',
        password:'',
        },
        validationSchema:Yup.object({
            email:Yup.string().email('invalid email type').required('email is required'),
            password:Yup.string().required('password is required'),
           
        }),

       onSubmit :async (values)=>{
           try{
               setError('');
               setButton(true);
               await login(formik.values.email,formik.values.password);
               history.push('/');
           }catch{
               setError('failed to login');

           }
           setButton(false);
       }
    })
    return (
        <div className={classes.center}>
            <Card style={{width:'500px'}}>
            
               <form onSubmit={formik.handleSubmit}>
                   <bold>Log In</bold>
                   {error ?<Alert severity="error">{error} </Alert> :''}
               <Grid container>   
                <Grid item xs={2}> <label style={{fontSize:'18px'}}> Email:</label> </Grid>
                            <Grid item xs={10}>
                                <Input label='email' name='email' onBlur={formik.handleBlur} style={{margin:'20px'}} variant='outlined' color='primary' value={formik.values.email} onChange={formik.handleChange} />
                                {formik.touched.email && formik.errors.email ?<Alert severity="error">{formik.errors.email}</Alert>:''}
                            </Grid>
                        
                        <Grid item xs={2}> <label style={{fontSize:'18px'}}> password: </label></Grid>
                            <Grid item xs={10}>
                                    <Input label='password' type={eyes ? 'password' :'text'} endAdornment={<InputAdornment>{eyes ? <VisibilityIcon onClick={eyer}/> : <VisibilityOffIcon onClick={eyer}/>}</InputAdornment>} name='password' onBlur={formik.handleBlur} variant='outlined' style={{margin:'20px'}} color='primary' value={formik.values.password} onChange={formik.handleChange} />
                                     {formik.touched.password && formik.errors.password ? <Alert severity="error">{formik.errors.password}</Alert>:''}
                                </Grid>
                         
                       
                        <Grid item xs={2}>
                            <Button disabled={button} size='small' variant='outlined' color='primary' type='submit'>Log In</Button>
                        </Grid>
                        
                        </Grid>          
               </form>
               <h5>  <Link to="/signup">Need an account </Link> </h5>
               <h5> <Link to="/forgot-password">Forgotten password </Link></h5> 
            </Card>
        </div>
    );
}

export default Signin;