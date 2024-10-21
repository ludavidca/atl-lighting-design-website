import { initializeApp } from 'firebase/app'
import { getDatabase, Database } from 'firebase/database'

interface FirebaseConfig {
//   apiKey: string
//   authDomain: string
  databaseURL: string
//   projectId: string
//   storageBucket: string
//   messagingSenderId: string
//   appId: string
}

const firebaseConfig: FirebaseConfig = {
  databaseURL: 'https://atllightingdesign-default-rtdb.firebaseio.com/'
}

const app = initializeApp(firebaseConfig)
const db: Database = getDatabase(app)

export { db }
