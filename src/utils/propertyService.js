import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "./firebase";

// PUBLIC PROPERTIES
export const getAvailableProperties = async () => {
  const q = query(
    collection(db, "properties"),
    where("status", "==", "available")
  );

  const snap = await getDocs(q);
  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// RENT PROPERTY
export const rentProperty = async (propertyId, tenantId) => {
  const ref = doc(db, "properties", propertyId);

  await updateDoc(ref, {
    status: "rented",
    tenantId
  });
};
