import React from "react";
import { Outlet } from "react-router-dom";

//le composant outlet rend les sous-routes
//d'une route principale, par exemple
// /profile/login, elle rend la route
//login au travers de son parent /profile

const Profile = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Profile;
