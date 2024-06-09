import { useContext } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value; 
        loginUser(email, password)
        .then(result=>{
            console.log(result.user);
            e.target.reset()
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
        })
        
    }

    return (
        <div className="w-[40%] mx-auto border-2 border-gray-400 p-4 rounded-xl">
            <h1 className="text-3xl font-bold p-4 text-center">Please Login</h1>
            <Form onSubmit={handleLogin} className="space-y-3">

                <div>
                    <h2>Email</h2>
                    <input className="p-4 bg-gray-100 rounded-xl w-full" type="email" placeholder="Your Email" name="email" id="" />
                </div>
                <div>
                    <h2>Password</h2>
                    <input className="p-4 bg-gray-100 rounded-xl w-full" type="password" placeholder="Your Password" name="password" id="" />
                </div>
                <input className="w-full btn mt-4 btn-secondary" type="submit" value="Login" />
            </Form>
            <p>New Here Please? <Link to='/register'><button className="btn-link">Register</button></Link></p>
        </div>
    );
};

export default Login;