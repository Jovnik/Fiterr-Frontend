import React, {useReducer, useContext} from 'react';
import PageContext from './pageContext';
import pageReducer from './pageReducer';
import { SET_PAGE, SET_CURRENT_PAGE_ROLE, SET_MY_PAGE, SET_MY_PAGE_FAIL } from '../types'
import request from '../../utils/axios-config'
import AuthContext from '../auth/authContext';
import AlertContext from '../alert/alertContext'

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const PageState = props => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const initialState = {
        currentPage: null,
        roleOnPage: null,
        myPage: null
    }

    const [state, dispatch] = useReducer(pageReducer, initialState)

    const authContext = useContext(AuthContext)
    const {user} = authContext

    const createPage = async(body) => {
        try {
            const response = await request.post('/api/pages/create', body, config);

            dispatch({
                type: SET_MY_PAGE,
                payload: response.data
            })


        } catch (err) {
            console.error(err);
            setAlert(err.response.data.msg, err.response.data.type);

            dispatch({
                type: SET_MY_PAGE_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    const getPage = async(handle) => {
        const response = await request.get(`/api/pages/get-page/${handle}`)
        console.log(response.data)
        dispatch({
            type: SET_PAGE,
            payload: response.data
        })
    }

    const findRole = async(handle) => {
        const response = await request.get(`/api/pages/find-role/${handle}`)
        dispatch({
            type: SET_CURRENT_PAGE_ROLE,
            payload: response.data
        })
    }
    const updateAbout = async(body)=> {
        const response = await request.put('/api/pages/about', body, config)
        dispatch({
            type: SET_PAGE,
            payload: response.data
        })
    }

    return(
        <PageContext.Provider
            value={{
                currentPage: state.currentPage,
                roleOnPage: state.roleOnPage,
                getPage,
                findRole,
                createPage,
                updateAbout
            }}>
                {props.children}
        </PageContext.Provider>
    )
}

export default PageState