import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchPost } from '../Actions/postActions';

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  console.log(data);

  useEffect(() => {
    dispatch(fetchPost());
  },[]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <h2>Social Media For Travelers</h2>
      <div className='searchBox'>
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder='Search here...'/>
      </div>
      <div className="card-container">
        {data && data.map((post) => (
          <div className='card' key={post.id}>
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
            <h3>{post.title.slice(0, 20)}{post.title.length > 20 ? '...' : ''}</h3>
            <div className="bottom">
              <p>{post.body.slice(0, 100)} <NavLink to={`/item/${post.id}`}>Read More...</NavLink></p>
              <img src="./images/right-arrow.png" alt="" />
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Home;
