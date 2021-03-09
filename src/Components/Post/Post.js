import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Post = (props) => {
    const {id,title,body}=props.post;
    const style={
 border: '2px dotted grey',
 margin: '10px',
 padding: '10px',
 color: 'blue',
 fontSize: '15px'

    }
const history=useHistory();
const handleClick=(id)=>{
    const url=`/postDetails/${id}`;
    history.push(url);
}


    return (
        <div style={style}>
            <h1>ID : {id}</h1>
            <h2>Title  : {title}</h2>
            <p> {body}</p>
          <Link to={`/postDetails/${id}`}>click for details</Link>
          <br></br>
          <button onClick={() => handleClick(id)}>show details</button>
        </div>
    );
};

export default Post;