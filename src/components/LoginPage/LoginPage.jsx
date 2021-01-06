import React from "react";
import s from "./LoginPage.module.css"
import {Field}  from "redux-form";
import {reduxForm} from "redux-form"
const onSubmit=(values)=>{
    window.alert (JSON.stringify (values));
}
const LoginPage = ()=>{
    return(<div>
        <div className={s.container}>
            <div className={s.header}>
                <div>
                    Login
                </div>
            </div>
            <div>
                <LoginFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    </div>)
}

const LoginForm =(props)=>{
    return  (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className={s.formContainer}>
                <div>
                    <Field className={s.field} type="login" name="email" placeholder="Login" component={"input"} />
                </div>
                <div>
                    <Field className={s.field} type="password" name="password" placeholder="Password" component={"input"}/>
                </div>
                </div>






                <button className={s.btn} type={"submit"}>Login</button>
                <div className={s.registerBlock}>
                    <p>Don’t have an account yet? <a href={"https://www.facebook.com/"}><b>Register</b></a></p>
                </div>

            </form>


        </div>
    )
}
 const LoginFormRedux = reduxForm({form:"login"})(LoginForm)




export default LoginPage;