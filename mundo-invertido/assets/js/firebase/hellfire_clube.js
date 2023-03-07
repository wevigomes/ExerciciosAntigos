import app from "./firebase/app.js"

import { getFireStore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'


export async function subscribeToHellfireClub(subscription){
    const db = getFireStore(app)
    const hellfireClubeCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubeCollection, subscription)
    return docRef.id
}