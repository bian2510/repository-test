import React, { useState } from 'react';
import Router from 'next/router';
import axios from 'axios'

export const AuthContext = React.createContext();

const fakeUserData = {
  id: 1,
  name: 'Jhon Doe',
  avatar:
    'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  roles: ['USER', 'ADMIN'],
};

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const signIn = (params) => {
    console.log(params, 'sign in form Props'); 
        setUser(fakeUserData);
        setLoggedIn(true);
        Router.push(`/`);
  };

  const signUp = async (params, setErrorObject) => {
    const { username, lastName, email, phone, password, document, documentType } = params
    let phoneNumber = parseInt(phone)
    try {
      const response = await axios.post('http://localhost:4000/api/users/signup', {
        user: {
          name: username,
          last_name: lastName,
          email,
          phone: phoneNumber,
          password,
          document,
          document_type: documentType,
          type: 'client'
        },
      })
      const { data } = response
      setUser(data.user);
      setLoggedIn(true);
      Router.push(`/`);
    } catch (err) {
      setErrorObject(err.response.data.error)
    }
  };

  const logOut = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        user,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
