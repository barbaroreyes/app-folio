import React from 'react';
const ContactPage = () => {
   
    const onSubmit = (data) => {
  console.log(data)
    }
  return (
    <form >
        <input type="text" placeholder="email" name="email" />
        <input type='password' placeholder="Password" name="password" />
        <input type='submit'/>
     
    </form>
  );
}

export default ContactPage ;
