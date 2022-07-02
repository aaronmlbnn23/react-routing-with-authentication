import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const userInfo = JSON.stringify(data)
        console.log(userInfo)
        try {
            axios.post('http://localhost:8000/api/register', data, {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((response) => {
              
                console.log(response)
            })
        } catch (err) {
            console.log(`error ${err}`)
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='formGroup'>
                <label htmlFor="name">Name</label>
                <input type="text" className="name" {...register("name", { required: true })} />
            </div>
            <div className='formGroup'>
                <label htmlFor="email">Email</label>
                <input type="email" className="email" {...register("email", { required: true })} />
            </div>
            <div className='formGroup'>
                <label htmlFor="password">Password</label>
                <input type="text" className="password" {...register("password", { required: true })} />
            </div>
            <div className='formGroup'>
                <label htmlFor="c_password">Confirm</label>
                <input type="text" className="c_password"{...register("c_password", { required: true })} />
            </div>
            <div className='formGroup'>
                <label htmlFor="role">Role</label>
                <input type="text" className="c_password"{...register("role", { required: true })} />
            </div>
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register