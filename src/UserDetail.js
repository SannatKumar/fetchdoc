import React from "react";
import FetchData from "./FetchData";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";

const UserDetail = () => {
  const { id } = useParams();
  const {items, error, isLoaded } = FetchData(`users/${id}`);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="displaycard">
          <div className="card">
            <div className="card-body">
              <p className="card-text">-name: {items.name}</p>
              <p className="card-text">-username: {items.username}</p>
              <p className="card-text">-email: {items.email}</p>
              <p className="card-text">-phone: {items.phone}</p>
              <p>-company: {items.company.name}</p>
              <p className="text">-website: {items.website}</p>
              <p className="text">address</p>
              <li>street: {items.address.street}</li>
              <li>suite: {items.address.suite}</li>
              <li>city: {items.address.city}</li>
              <li>zipcode: {items.address.zipcode}</li>
            </div>
          </div>
      </div>
    );
  }
};
export default UserDetail;
