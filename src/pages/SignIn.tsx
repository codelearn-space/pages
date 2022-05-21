import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = () => {
  return {email: '', password: ''};
}

export function SignIn() {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const onChange = (event: any) => { 
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  }
  

  const Submit = async (event: any) => {
    event.preventDefault();

    const data = await fetch(
      `/signin`,
      {
        method: "POST",
        body: JSON.stringify(values),
      }
    )
    .then(response => {
      navigate('/dashboard');
      console.log(response);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <form className="border border-brand-100 p-4 rounded w-72 mt-10">
        <h1 className="text-lg text-center mb-4">Sign in to Code and Learn</h1>
        <div>
          <label htmlFor="email_field">Username or email address</label>
          <input 
            type="text" 
            name="email" 
            value={values.email}
            onChange={onChange} 
            id="email_field" 
          />
        </div>
        <div>
          <label htmlFor="password_field">Password</label>
          <input 
            type="password" 
            name="password" 
            value={values.password}
            onChange={onChange} 
            id="password_field" 
          />
        </div>
        <button 
          onClick={Submit}
          type="submit" 
          className="text-sm font-semibold bg-brand-500 text-white w-full p-1 rounded-md hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}