import firebase from 'firebase'


firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    appId: process.env.APP_ID
})
const db = firebase.firestore()


export const addUser = async (user) => {

    try {
        console.log("start")
        await db.collection('users').doc(user.name).set({
            name: user.name,
            email: user.email,
            birthdate: user.birthdate
        })
        console.log("All good! The data was saved!")
    } catch (error) {
        console.error("The data wasn't save! There is an error --> \n", error)
    }
}