import { addDoc, collection, getDocs, query } from 'firebase/firestore'
import { db } from '../_utils/firebase'

async function getItems(userId) {
    const items = []
    const querySnapshot = await getDocs(
        query(collection(db, 'users', userId, 'items')))

    querySnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() })
    })

    return items
}

// async function addItem(userId, item) {
//     const docRef = await addDoc(
//         collection(db, 'users', userId, 'items'), item)
//     return docRef.id
// }

const addItem = async (userId, item) => (await addDoc(
    collection(db, 'users', userId, 'items'), item)).id

export { getItems, addItem }
