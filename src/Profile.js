import React, { useState, useEffect } from "react";
import "./Profile.css";
import Navbar from "./Navbar.js";
const Profile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const fetchfromserver = await fetchProfiles();
      setProfile(fetchfromserver);
    };
    getData();
  }, []);
  console.log(profile);
  const fetchProfiles = async () => {
    const data = await fetch("https://tweets.free.beeceptor.com/profile");
    const result = await data.json();
    return result;
  };
  return (
    <div className="profile-screen">
      <Navbar />
      <div className="profile">
        <h3>Profile Information</h3>
        <div className="profile_elem">
          <h3>First Name</h3>
          <p>{profile.first_name}</p>
        </div>
        <div className="profile_elem">
          <h3>Last Name</h3>
          <p>{profile.last_name}</p>
        </div>
        <div className="profile_elem">
          <h3>Email</h3>
          <p>{profile.email}</p>
        </div>
        <div className="profile_elem">
          <h3>Gender</h3>
          <p>{profile.gender}</p>
        </div>
        <div className="profile_elem">
          <h3>Country</h3>
          <p>{profile.country}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
