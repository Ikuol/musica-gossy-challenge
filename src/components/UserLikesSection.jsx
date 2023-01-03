import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../context/authContext";
import SongC from "./SongC";
import { db } from "../firebase";
import { onSnapshot, doc } from "firebase/firestore";

const UserLikesSection = () => {
  const { user } = useContext(authContext);

  const [likedSongs, setLikedSongs] = useState(null);
  useEffect(() => {
    onSnapshot(doc(db, "users", user), doc => {
      setLikedSongs(doc.data().likes);
    });
  }, [user]);
  return <>{likedSongs && likedSongs.map((song, index) => <SongC key={index} song={song} />)}</>;
};

export default UserLikesSection;
