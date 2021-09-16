import React from 'react';
import {useForm} from 'react-hook-form'
const ContactPage = () => {
    const {register,handleSubmit,errors} = useForm()
    const onSubmit = (data) => {
  console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="email" name="email" ref={register}/>
        <input type='password' placeholder="Password" name="password" ref={register}/>
        <input type='submit'/>
     
    </form>
  );
}

export default ContactPage ;
