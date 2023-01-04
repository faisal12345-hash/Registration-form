import React from 'react'

export default function Register(props) {
    const btnStyle = {
        backgroundColor:"green",
        color: "white",

    };
    let btnText,passBoxType;
    if(props.showPass === true) {
        btnStyle.backgroundColor="red";
        btnText="Hide Password";
        passBoxType="text"
    }else {
        btnText="Show Password";
        passBoxType="password" 
    }
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input className='form-control' required type="text" name="name"/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input className='form-control' required type="email" name="email"/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input className='form-control'required type={passBoxType} name="password"/>
            </div>
            <button className='btn btn-primary m-1' type='submit'>
                Register
            </button>
            <button type='button' 
            className='btn m-1' style={btnStyle}
            onClick={props.click}
            >
               {btnText}
            </button>
        </form>
    </div>
  )
}
