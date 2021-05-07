import firebase from 'firebase'


firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    appId: process.env.APP_ID
})
const db = firebase.firestore()

export const addSurvey = async (data) => {

    const { user, charity, favoriteFeature, transparency, impactInitiator, creativeCreatures, travelTripsters } = data

    try {
        const userRef = db.collection('Survey').doc(user.email)

        userRef.set({
            user: {
                name: user.name,
                email: user.email,
                birthdate: user.birthdate
            },
            generalAnswers: {
                charity: {
                    howMuch: charity.howMuch,
                    vmentor: charity.mentor,
                    comfort: charity.subscription.emotion,
                    price: charity.subscription.price 
                },
                favoriteFeature: {
                    name: favoriteFeature.name,
                    why: favoriteFeature.why
                },
                transparency: transparency,
            },
            featuresAnswers: {
                creativeCreatures: {
                    liking: creativeCreatures.feeling,
                    probability: creativeCreatures.probability,
                    price: creativeCreatures.price
                },
                impactInitiator: {
                    liking: impactInitiator.feeling,
                    probability: impactInitiator.probability,
                    price: impactInitiator.price
                },
                travelTripsters: {
                    liking: travelTripsters.feeling,
                    probability: travelTripsters.probability,
                    price: travelTripsters.price
                }
            }
        })
        return {error: null}
    } catch (error) {
        console.log(error)
        return { error }
    }
}

const addFeaturesAnswers = async (data) => {

    const { impactInitiator, creativeCreatures, travelTripsters, user } = data

    try {
        const featuresRef = db.collection('Features').doc(user.email)
        featuresRef.set({
            user: featuresRef.id,
            creativeCreatures: {
                liking: creativeCreatures.feeling,
                probability: creativeCreatures.probability,
                price: creativeCreatures.price
            },
            impactInitiator: {
                liking: impactInitiator.feeling,
                probability: impactInitiator.probability,
                price: impactInitiator.price
            },
            travelTripsters: {
                liking: travelTripsters.feeling,
                probability: travelTripsters.probability,
                price: travelTripsters.price
            },
        }, {merge: true})

        return {error: null}
    } catch (error) {
        console.error('Something went wrong!', error)
        return {error}
    }
}

export const addReview = async (data) => {

    try {
        const userRef = db.collection('Survey').doc(data.user.email)
        userRef.update({
            review: data.review
        })
        return {error: null}
    } catch (error) {
        console.log('Something went wrong!', error)
        return {error}
    }
}