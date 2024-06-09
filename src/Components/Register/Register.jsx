import { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const { registerUser, setUser } = useContext(AuthContext)
    const [error, setError] = useState(''); 
    const [success, setSuccess]= useState('')



    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const currentPassword = e.target.currentPassword.value;
        console.log(name, photo, email, password, currentPassword);

        setError(''); 
        setSuccess('')
        if (password.length < 6) {
            setError('Password must be 6 Charectar')
            return
        } 
        if(password !== currentPassword){
            setError("Password Don't Match")
            return
        }
        if(!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)){
            setError('Password must upercase and last one number')
            return
        }

        registerUser(email, password)
        .then(result=>{
            setUser(result.user)
            setSuccess('User Create Successfully');
        })
        .catch(error=>{
            console.error(error);
            
        })
        
 
    }


    return (
        <div className="w-[40%] mx-auto border-2 border-gray-400 p-4 rounded-xl">
            <h1 className="text-3xl font-bold p-4 text-center">Please Register</h1>
            <Form onSubmit={handleRegister} className="space-y-3">
                <div>
                    <h2>Name</h2>
                    <input className="p-4 bg-gray-100 rounded-xl w-full" type="text" placeholder="Your Name" name="name" id="" />
                </div>
                <div>
                    <h2>Photo</h2>
                    <input className="p-4 bg-gray-100 rounded-xl w-full" type="photo" placeholder="Your Photo" name="photo" id="" />
                </div>
                <div>
                    <h2>Email</h2>
                    <input className="p-4 bg-gray-100 rounded-xl w-full" type="email" placeholder="Your Email" name="email" id="" />
                </div>
                <div>
                    <h2>Password</h2>
                    <input className="p-4 bg-gray-100 rounded-xl w-full" type="password" placeholder="Your Password" name="password" id="" />
                </div>
                <div>
                    <h2>Current Password</h2>
                    <input className="p-4 bg-gray-100 rounded-xl w-full" type="password" placeholder="Your Current Password" name="currentPassword" id="" />
                </div>
                <input className="w-full btn mt-4 btn-secondary" type="submit" value="Register" />
            </Form>
            <p>Alrady Haven Account Please? <Link to='/login'><button className="btn-link">Login</button></Link></p>
            {
                error && <p className="text-red-500">{error}</p>
            }  
            {
                success && <p className="text-green-500">{success}</p>
            }
        </div>
    );
};

export default Register;