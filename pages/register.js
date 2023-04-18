import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import createUser  from './api/createUser';
import * as yup from 'yup'


export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Validate password entry
    function validatePassword(event) {
        // Assert equality between both inputs and validate password.
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (!password || !confirmPassword){
          alert('Please enter both passwords');
          event.preventDefault();
          return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            event.preventDefault();
        }
      };


    // Validate email input

    function validateEmail(email) {
      const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
      });
      
      const formData = {
        email: email
      };
      
      schema.validate(formData)
        .then(valid => console.log(valid))
        .catch(err => console.log(err));
      
    }
    
    // Handles the Submit 
    const handleSubmit = async (event) => {
        event.preventDefault();  
        validateEmail(email);  
        validatePassword(event);
      
        try {
          //Create an object with email and password properties.
          const data = {
            //username: 'testuser',
            email: email,
            password: password
          };
          // Send the data object as the reqeust body. 
          await createUser(data);
        } catch (error) {
          console.error(error);
          alert('An error occured while trying to register.', error)
        };
        console.log(email)

        // Write to database
        // console.log('Email:', email);
        // console.log('Password:', password);
        

    };

    return (
      
      <div className={styles.loginBox}>
        <h1>Register</h1>  
        <form onSubmit={handleSubmit}>
        
        <label>
        <div className={styles.email}>
        
          <input type="email" placeholder="Email address 📧" value={email} onChange={(event) => setEmail(event.target.value)} id="email" />
        </div>
          
        </label>
        
        <label>
          <div className={styles.password}>
          Create a password<br></br>
          <input type="password" placeholder="Password 🔐" value={password} onChange={(event) => setPassword(event.target.value)} id="password" /> 

          <br></br>
        <input type="password" placeholder="Re-enter password 🔐" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} id="confirm-password" /> 
          </div>
        </label>

        <br></br>
        <div className={styles.signup}>
        <input type="submit" value="Create Account" />
        </div>
        <div className={styles.signup}>
          <p>Already have an account?</p>
          <Link href="/login">
            Login
          </Link>
        </div>
        
      </form>
      </div>
    );
    }

