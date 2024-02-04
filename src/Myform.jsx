import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const Myform = () => {
  const formik = useFormik({
    initialValues:{
      username:"",
      email:"",
      password:"",
      confirmpassword:"",
    },
  
    validationSchema: Yup.object().shape({
        username:Yup.string().required("username is required"),
        email:Yup.string()
        .required("email is required")
        .email("Invalid email address"),
        password:Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 5 characters"),
        confirmpassword:Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password"), null], "Password confirmation must match password"),

    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="username">Username</label><br />
            <input 
            id='username' 
            type="text" 
            name="username"
            placeholder='Enter username'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             />
             <p>{formik.errors.username && formik.touched && formik.errors.username}</p>
        </div>
        <div>
            <label htmlFor="email">Email</label><br />
            <input id='email'
             type="email" 
             name="email"
             placeholder='Enter Email'
             value={formik.values.email}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur} 
             />
             <p>{formik.errors.email && formik.touched && formik.errors.email}</p>
        </div>
        <div>
            <label htmlFor="password">Password</label><br />
            <input 
            id='password' 
            type="text" 
            name="password"
            placeholder='Enter Email'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
             />
            <p>{formik.errors.password && formik.touched && formik.errors.password}</p>
        </div>
        <div>
            <label htmlFor="confirmpassword">Confirm Password</label><br />
            <input id='confirmpassword' type="text"  />
        </div>
        <div>
            <button>Claim your free trial</button>
            <p>By clicking this button, you are agreeing to our<span>Terms and Conditions</span></p>
        </div>
      </form>
    </div>
  )
}

export default Myform
