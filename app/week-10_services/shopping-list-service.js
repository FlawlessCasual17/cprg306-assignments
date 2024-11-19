const items = (await getDocs(query(collection(db, "users", userId, "items")))).docs.map(doc => ({ id: doc.id, ...doc.data() }))
