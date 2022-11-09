import React, { useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const useFirestore = (collect:any) => {
  const [ document, setDocument ] = useState([])
  React.useEffect(() => {
    const unsub = onSnapshot(collection(db, collect), snapshot =>{
      const docs:any = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      setDocument(docs)
    });
    
    return () => unsub();
  }, []);

  return document
};

export default useFirestore;
