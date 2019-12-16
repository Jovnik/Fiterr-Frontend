import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import ProfileContext from '../../context/profile/profileContext'


const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext)
    
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated, loadUser } = authContext;
    const { getProfile } = profileContext

    useEffect(() => {

        if(isAuthenticated === null){
            console.log('attempting to load the user');
            loadUser();
            getProfile()
        }
        
        if(isAuthenticated){
            props.history.push('/');
        }

        // if(error === 'Invalid Credentials'){
        //     setAlert(error, 'danger');
        //     clearErrors();
        // }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser ] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user; //this is taken from the useState hook for user as seen above

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();
        if(email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            })
        }
    }

    return (
        <>
            <section className="body">
                <div className="container">
                    <div className='form-container'>
                        <h1>
                            Fiterr <span className="text-primary">Login</span>
                        </h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" name="email" value={email} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={password} onChange={onChange}/>
                            </div>
                            <input type="submit" value="Login" className='btn btn-primary btn-block'/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Login;
