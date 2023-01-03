import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./auth/exports";
import { UserCollectionsSection, UserLikesSection } from "./index";
import { View, Library, Album, Lyrics, Profile } from "../Pages";
import RequireAuth from "../page-protection/RequireAuth";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<View />} />
        <Route
          path="/Library"
          element={
            <RequireAuth>
              <Library />
            </RequireAuth>
          }
        >
          <Route path="collections" element={<UserCollectionsSection />} />
          <Route path="likes" element={<UserLikesSection />} />
        </Route>
        <Route path="/Album/:chartId" element={<Album />} />
        <Route path="/Lyrics/:i" element={<Lyrics />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
