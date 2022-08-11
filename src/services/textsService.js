import { collection, getDocs } from "firebase/firestore";
import { db } from "src/config/firebase";

export async function getTextsFirebase() {
  const querySnapshot = await getDocs(collection(db, "text"));
  const docArray = [];
  querySnapshot.forEach((doc) => {
    docArray.push(doc.data());
  });
  return docArray;
}
