import React,{useState,useEffect} from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state);
  const post = data.find((item) => item.id.toString() === id);
  const [showButton1Text, setShowButton1Text] = useState(true);
  const [showButton2Text, setShowButton2Text] = useState(false);

  const handleButtonClick1 = () => {
    setShowButton1Text(true);
    setShowButton2Text(false);
  };

  const handleButtonClick2 = () => {
    setShowButton1Text(false);
    setShowButton2Text(true);
  };
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[post])

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container">
      <div className="selected-post">
        <div className="title">
        <NavLink to={"/"}><span class="material-symbols-outlined">arrow_back</span></NavLink> 
          <h1>Post Number {id}</h1>
        </div>
        <div className="detailing">
          <div className="left">
            <div className="img">
              <img src={`https://picsum.photos/200?random=${id}`} alt="" />
            </div>
            <div className="spec">
              <span>{post.title.slice(0,20)}</span>
              <div className="icon">
                <span class="material-symbols-outlined">share</span>
                <span class="material-symbols-outlined">favorite</span>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="button">
              <button className={showButton1Text ? "act": "btn"} onClick={handleButtonClick1} >Detail</button>
              <button className={showButton1Text ? "btn": "act"} onClick={handleButtonClick2} >User Info</button>
            </div>
            <div>
              {showButton1Text && <p>{post.body}</p>}
              {showButton2Text && <p>Post was posted by {post.userId}</p>}
            </div>
           
          </div>
        </div>
      </div>
      <h3>More Posts</h3>
      <div className="card-container">
        {data &&
          data.map((post) => (
            <div className="card" key={post.id}>
              <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
              <h3>
                {post.title.slice(0, 20)}
                {post.title.length > 20 ? "..." : ""}
              </h3>
              <div className="bottom">
                <p>{post.body.slice(0, 100)} <NavLink to={`/item/${post.id}`}>Read More...</NavLink></p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Detail;
