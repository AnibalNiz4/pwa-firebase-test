import { collection, getDocs, query, addDoc, doc } from "firebase/firestore";
import { db } from "src/config/firebase";

export async function getTasksFirebase() {
  try {
    const ref = query(collection(db, "tasks"));
    const querySnapshot = await getDocs(ref);
    const tasksObject = {};
    querySnapshot.forEach((doc) => {
      tasksObject[doc.id] = doc.data();
    });
    return {
      status: 200,
      data: tasksObject,
    };
  } catch (error) {
    console.log(error);
    return 400;
  }
}

export async function addTaskFireba(task) {
  try {
    await addDoc(collection(db, "tasks"), {
      task,
    });

    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return 400;
  }
}
