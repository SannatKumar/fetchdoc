import React from "react";
import Button from "./Button.js";
import FetchData from "./FetchData";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const ListUser = () => {
  const { items, error, isLoaded } = FetchData('users');
  if(error) 
  {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded)
  {
    return <div>Loading...</div>;
  } 
  else
  {
    return(
      <div className="userlisting">
          {items.map((item) => (
          <div className="card">
            <div className="card-body">
              <div className="circle">
              <h2>{item.name[0]}</h2>
              </div>
              <h5 className="name">{item.name}</h5>
              <p className="username">@{item.username}</p>
              <p className="userwebsite">https://{item.website}</p>
            </div>
                <Button id={item.id} />
            </div>
        ))}
      </div>
    );
}  
}
export default ListUser;
