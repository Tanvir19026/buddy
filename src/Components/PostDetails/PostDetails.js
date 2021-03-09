import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const PostDetails = () => {
    const history=useHistory();
    const handleBackButton=()=>{
    }
    const [posts,setPosts]=useState({});
    const [comment,setComment]=useState([]);
    const {id}=useParams();
    useEffect(()=> {
    const url=`https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  
    },[id])

    useEffect(()=> {
     const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
     fetch(url)
     .then(res => res.json())
     .then(data => setComment(data))

    },[id])
    
    return (
        <div>
            <h1>this is post details :{posts.id}</h1>
            <h3>Comment : {comment.length}</h3>
            {
                comment.map(cmnt => <li>{cmnt.name}:{cmnt.email}</li>)
            }
            <h2>title : {posts.title}</h2>
            <h3>{posts.body}</h3>

           <button style={{color:'red',backgroundColor:'cyan'}}><Link to="/home">Back</Link></button> 

            {/* <button onClick={() => handleBackButton}>Back To Home</button> */}
        </div>
    );
};

export default PostDetails;