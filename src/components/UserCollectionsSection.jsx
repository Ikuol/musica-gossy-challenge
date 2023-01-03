import React, { useState, useEffect, useContext } from "react";
import Collection from "./Collection";
import { db } from "../firebase";
import { authContext } from "../context/authContext";
import { doc, onSnapshot } from "firebase/firestore";

const UserCollectionsSection = () => {
  const { user } = useContext(authContext);
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    onSnapshot(doc(db, "users", user), doc => {
      setCollections(doc.data().collection);
    });
  }, [user]);
  return (
    <>
      {collections &&
        collections.map(collected => <Collection key={collected.id} collected={collected} />)}
    </>
  );
};

export default UserCollectionsSection;
