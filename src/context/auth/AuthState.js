import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
   
    // Load user
    const loadUser = async () => {
        
    }

    // Register user
    const register = async (formData) => {
        
    }

    // Login user
    const login = async (formData) => {
    
    }

    // Logout user 
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    // Clear errors
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }


    return (
        <AuthContext.Provider
         value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors
         }}>
            { props.children }
        </AuthContext.Provider>
    );
};

export default AuthState;