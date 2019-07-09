import React, { useState } from 'react';
import * as firebase from 'firebase';

export default function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { error, login, loading } = props;
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password)
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    props.history.push('./')
                }
            })
        } catch (error) {

        }
        // console.log(props)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassWord = (e) => {
        setPassword(e.target.value)
    }
    const onRegister = () => {
        props.history.push('./register')
    }
    return (
        <main>
            {/* breadcrumb-area-start */}
            <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>Login</h1>
                                <ul className="breadcrumb-menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><span>Login</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb-area-end */}
            {/* login Area Strat*/}
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Login From Here</h3>
                                <p className="text-danger">{error}</p>
                                <form onSubmit={onSubmit}>
                                    <label htmlFor="name">Email Address <span>**</span></label>
                                    <input id="name"
                                        value={email}
                                        type="text"
                                        placeholder="Enter Username or Email address..."
                                        onChange={onChangeEmail} />
                                    <label htmlFor="pass">Password <span>**</span></label>
                                    <input id="pass"
                                        type="password"
                                        value={password}
                                        placeholder="Enter password..."
                                        onChange={onChangePassWord} />
                                    <div className="login-action mb-20 fix">
                                        <span className="log-rem f-left">
                                            <input id="remember" type="checkbox" />
                                            <label htmlFor="remember">Remember me!</label>
                                        </span>
                                        <span className="forgot-login f-right">
                                            <a href="_blank">Lost your password?</a>
                                        </span>
                                    </div>
                                    <button className="btn theme-btn-2 w-100">Login Now</button>
                                    <div className="or-divide"><span>or</span></div>
                                    <button className="btn theme-btn w-100" onClick={onRegister}>Go to Register Page</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* login Area End*/}
        </main>
    );
}
