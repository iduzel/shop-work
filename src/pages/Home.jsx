
import React from 'react';
import { selectUser } from '../redux/userSlice';
import {useSelector} from 'react-redux'

const Home = () => {
    const user = useSelector(selectUser)

  return <div>
      <h1>home screen {user}</h1>


  </div>;
};

export default Home;
