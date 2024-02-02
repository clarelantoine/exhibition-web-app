'use client'

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/user.context";
import { useRouter } from "next/navigation";

import "./login-form.styles.scss";


const defaultFormFields = {
  username: '',
  password: ''
}

export default function LoginForm() {

  const router = useRouter()

  const {currentUser, setCurrentUser, handleUserLogin} = useContext(UserContext)

  const [formFields, setFormFields] = useState(defaultFormFields)

  const {username, password}  = formFields
  
  const resetFormFields = () => setFormFields(defaultFormFields)

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const {username, password} = formFields

    if(((username === 'admin' || username === 'Admin') && password === '123') || ((username === 'booking' || username === 'Booking') && password === 'wds@sami2024')) {
        handleUserLogin(username)
        resetFormFields()
      
    } else {
      alert('Wrong credentials')
    }

    
  }

  return (
    <main className="main">
      {/* <div className={styles.helicopter}>
        <Image 
          src="/images/helicopter.png"
          fill
          alt="helicopter"
        />
      </div>
      <div className={styles.truck}>
        <Image 
          src="/images/truck.png"
          fill
          alt="truck"
        />
      </div> */}
      <div className="home">
        <div className="login__container">
        
          <figure className="logo">
          <Image
            src='/images/logo.png' 
            fill
            alt="sami logo"
            priority
          />
          </figure>
          
          <form className="login__form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            <input 
              type="submit" 
              value="sign in"
            />
          </form>

        </div>
      </div>
    </main>
  );
}
