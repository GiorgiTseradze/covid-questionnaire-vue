import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            hadCovid: '',
            hadAntibodyTest: null,
            covidSicknessDate: '',
            antibodies: {
                testDate: '',
                number: '',
            },
            hadVaccine: null,
            vaccinationStage: '',
            iAmWaiting: '',
            nonFormalMeetings: '',
            numberOfDaysFromOffice: null,
            whatAboutMeetingsInLive: '',
            tellUsYourOpinionAboutUs: '',
        };
    },
    mutations: {
        setFirstName(state, payload) {
            state.firstName = payload.value;
        },
        setLastName(state, payload) {
            state.lastName = payload.value;
        },
        setEmail(state, payload) {
            state.email = payload.value;
        },
        setCovid(state, payload) {
            state.hadCovid = payload.value;
        },
        setTest(state, payload) {
            state.hadAntibodyTest = payload.value;
        },
        setSickness(state, payload) {
            state.covidSicknessDate = payload.value
        },
        setDate(state, payload) {
            state.antibodies.testDate = payload.value;
        },
        setNumber(state, payload) {
            state.antibodies.number = payload.value;
        },
        setVaccination(state, payload) {
            state.hadVaccine = payload.value;
        },
        setStage(state, payload) {
            state.vaccinationStage = payload.value;
        },
        setWaiting(state, payload) {
            state.iAmWaiting = payload.value;
        },
        setMeetings(state, payload) {
            state.nonFormalMeetings = payload.value;
        },
        setDays(state, payload) {
            state.numberOfDaysFromOffice = payload.value;
        },
        setGatherings(state, payload) {
            state.whatAboutMeetingsInLive = payload.value;
        },
        setSituation(state, payload) {
            state.tellUsYourOpinionAboutUs = payload.value;
        },
        
    }
});

export default store;