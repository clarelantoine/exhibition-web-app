'use client'

import Image from "next/image";
import styles from "./login-form.module.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/user.context";
import { useRouter } from "next/navigation";

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

    if((username === 'admin' || username === 'Admin') && password === '123') {
        handleUserLogin(username)
        resetFormFields()
      
    } else {
      alert('login error')
    }

    
  }

  return (
    <main className={styles.main}>
      <div className={styles.helicopter}>
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
      </div>
      <div className="home">
        <div className={styles.login__container}>
        
          <figure className={styles.logo}>
          <Image
            src='/images/logo.png' 
            fill
            alt="sami logo"
            priority
          />
          </figure>
          
          <form className={styles.login__form} onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="username" 
              value={username}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password" 
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
