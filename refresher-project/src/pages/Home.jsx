import React from 'react'
import { useDispatch } from 'react-redux'
import { setEmployee } from '../slices/EmployeeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = React.useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    console.log(e.target.name,':', e.target.value);
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  }
  console.log(formInput);

  const addEmployee = (e) => {
    e.preventDefault();
    dispatch(setEmployee(formInput));
    console.log('Employee added');
  }

  return (
    <>
    <div>Home</div>
    <form>
      <label>Name:</label>
      <input name='name' type="text" value={formInput.name} placeholder="Enter your name" onChange={handleChange}/>
      <br/>
      <label>Age:</label>
      <input name='age' type="text" value={formInput.age} placeholder="Enter your age" onChange={handleChange} />
      <br/>
      <label>Email:</label>
      <input name='email' type="email" value={formInput.email} placeholder="Enter your email" onChange={handleChange}/>
      <br/>
      <button onClick={addEmployee}>Submit</button>
    </form>
    </>
    
  )
}

export default Home