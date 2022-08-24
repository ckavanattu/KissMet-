import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import axios from 'axios';

export const Register = (props) => {

    const [base64String, setBase64String] = useState('');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        description: '' 
      });


    const [addUser, { error }] = useMutation(ADD_USER, {
        variables: {
          name: formState.name,
          email: formState.email,
          password: formState.password,
          age: parseInt(formState.age),
          description: formState.description,
          // imageString: base64String

        }
      });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (event) => {
   formState.image = base64String
   setFormState(formState)
   console.log(formState);
    event.preventDefault();
    // console.log(formState)
    try {
      const { data } = await addUser();

      Auth.login(data.addUser.token);
      createChatUser()
    } catch (e) {
      console.error(e);
    }
  };
  
  function createChatUser(){
    var chatData = {
      "username": formState.email,
      "secret": formState.password,
      "first_name": formState.name
    };
    
    console.log(chatData)

    var config = {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
       	'PRIVATE-KEY': '1f46d540-e2f1-476f-8801-3194423c77d9'
       },
      data : chatData
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log('Chat New User Creation Success')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function imageUploaded() {
    var imgString = '';
    var file = document.querySelector(
        'input[type=file]')['files'][0];
  
    var reader = new FileReader();

      
    reader.onload = function () {
        
        imgString = 'data:image/png;base64,' + reader.result.replace("data:", "")
            .replace(/^.+,/, "");
        setBase64String(imgString)
        // console.log(base64String);
    }
    reader.readAsDataURL(file);

}



    return (
        <div className = "App">
            <div className="auth-form-container">
                <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                {/* <input value={name} onChange={(e) => setName(e.target.value)}type="Name" name="name" id="name" placeholder="Full Name" /> */}
                <input value={formState.name} onChange={handleChange} type="Name" name="name" id="name" placeholder="Full Name" />
                <label htmlFor="age">Age</label>
                <input value={formState.age} onChange={handleChange} type="Age" name="age" id="age" placeholder="Age" />
                <label htmlFor="email">Email</label>
                <input value={formState.email} onChange={handleChange} type="Email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={formState.password} onChange={handleChange} type="Password" placeholder="********" id="password" name="password" />
                <label htmlFor="description">Describe Yourself!</label>
                <input value={formState.description} onChange={handleChange} type="Description" placeholder="List hobbies, interests, etc!" id="description" name="description" />
                
                    <input type="file" name="" id="fileId" 
                    onChange={imageUploaded}>      
                    </input>
                  
                    <img src={base64String} alt="" />

              
                {/* <Link to="/createProfile"><button type="submit"> Sign Me Up! </button ></Link> */}
                <button type="submit"> Sign Me Up! </button >
                {error && <div>Sign up failed</div>}
            </form>
            <Link to="/login"><button className="link-btn"> Already have an account? Login here.</button ></Link>
            </div>
        </div>
    )


    // var axios = require('axios');
    // var data = {
    //   "username": formState.email,
    //   "secret": formState.password,
    //   "first_name": formState.name
    // };
    
    // var config = {
    //   method: 'post',
    //   url: 'https://api.chatengine.io/users/',
    //   // headers: {
    //   // 	'PRIVATE-KEY': '{{private_key}}'
    //   // },
    //   data : data
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
        
}
