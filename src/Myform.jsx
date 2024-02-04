import React from 'react';

const Myform = () => {
  return (
    <div>
      <form action="">
        <div>
            <label htmlFor="username">Username</label><br />
            <input id='username' type="text" className="username" />
        </div>
        <div>
            <label htmlFor="email">Email</label><br />
            <input id='email' type="email" className="email" />
        </div>
        <div>
            <label htmlFor="password">Password</label><br />
            <input id='password' type="text" className="password" />
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
