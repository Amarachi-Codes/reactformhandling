import React from 'react'

const Myform = () => {
  return (
    <div>
      <form action="">
        <div>
            <label htmlFor="username">Username</label>
            <input id='username' type="text" className="username" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" className="email" />
        </div>
      </form>
    </div>
  )
}

export default Myform
