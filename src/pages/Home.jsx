
import React from 'react';
import { selectEmail, selectUser } from '../redux/userSlice';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Home = () => {
    const user = useSelector(selectUser)
    const email = useSelector(selectEmail)

  return <div>
      <h1>home screen {user}</h1>
      <h3> email = {email}</h3>

    <Link to="/login">Login form</Link>

  </div>;
};

export default Home;
