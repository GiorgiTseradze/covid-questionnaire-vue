import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            had_covid: '',
            had_antibody_test: null,
            covid_sickness_date: '',
            antibodies: {
                test_date: '',
                number: '',
            },
            had_vaccine: null,
            vaccination_stage: '',
            non_formal_meetings: '',
            number_of_days_from_office: null,
            what_about_meetings_in_live: '',
            tell_us_your_opinion_about_us: '',
        };
    },
    mutations: {
        setFirstName(state, payload) {
            state.first_name = payload.value;
        },
        setLastName(state, payload) {
            state.last_name = payload.value;
        },
        setEmail(state, payload) {
            state.email = payload.value;
        },
        setCovid(state, payload) {
            state.had_covid = payload.value;
        },
        setTest(state, payload) {
            state.had_antibody_test = payload.value;
        },
        setSickness(state, payload) {
            state.covid_sickness_date = payload.value
        },
        setDate(state, payload) {
            state.antibodies.test_date = payload.value;
        },
        setNumber(state, payload) {
            state.antibodies.number = payload.value;
        },
        setVaccination(state, payload) {
            state.had_vaccine = payload.value;
        },
        setStage(state, payload) {
            state.vaccination_stage = payload.value;
        },
        setMeetings(state, payload) {
            state.non_formal_meetings = payload.value;
        },
        setDays(state, payload) {
            state.number_of_days_from_office = payload.value;
        },
        setGatherings(state, payload) {
            state.what_about_meetings_in_live = payload.value;
        },
        setSituation(state, payload) {
            state.tell_us_your_opinion_about_us = payload.value;
        },
        
    }
});

export default store;