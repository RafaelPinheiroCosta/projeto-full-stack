import { db, collection, addDoc, getDocs,getDoc, deleteDoc, doc, updateDoc } from '../firebase/firebaseConfig';

export const addFirebaseItem = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};

export const updateFirebaseItem = async (collectionName, itemId, data) => {
  try {
    const docRef = doc(collection(db, collectionName), itemId);
    const  docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, data);
    } else {
      console.error(`Document with ID ${itemId} does not exist.`);
      throw new Error('Document not found');
    }
  } catch (error) {
    console.error('Error updating document: ', error);
    throw error;
  }
};

export const deleteFirebaseItem = async (collectionName, itemId) => {
  try {
    await deleteDoc(doc(collection(db, collectionName), itemId));
  } catch (error) {
    console.error('Error deleting document: ', error);
    throw error;
  }
};

export const getFirebaseItems = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error('Error getting documents: ', error);
    throw error;
  }
};
