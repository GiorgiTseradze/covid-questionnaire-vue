<template>
    <div class="flex flex-col items-center h-max bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="@/assets/redberry.svg" alt="Redberry name"/> 
                <p class="text-3xl font-bold">3/4</p>
            </div>
            <div class="flex">
              
                <div class="flex flex-col w-1/4">
                    <div class="flex flex-col mt-8 w-[38.1rem] text-[1.3rem]">
                        <p>
                        რედბერის მთავარი ღირებულება ჩვენი გუნდის
                        თითოეული წევრია. გარემო, რომელსაც ჩვენი
                        თანამშრომლები ვქმნით, ბევრისთვის არის და ყოფილა
                        წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის
                        მიზეზი, ბევრისთვის კი - ჩვენთან გადმოსვლის.
                        </p>
                        <p class="mt-5">
                        პანდემიის პერიოდში ერთმანეთსაც იშვიათად
                        ვნახულობდით პირისპირ და ყოველდღიური კომუნიკაციაც
                        გაიშვიათდა.
                        </p>
                    </div>
                    <Form class="pb-52" @submit="handleSubmit()">
                    <div class="flex flex-col mt-8 w-[38.8rem]">
                       <p class="text-[1.3rem] font-bold">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="nonFormalMeetings" @change="setMeetings" value="twice_a_week" rules="required" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">კვირაში ორჯერ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="nonFormalMeetings" @change="setMeetings" value="once_a_week" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">კვირაში ერთხელ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="nonFormalMeetings" @change="setMeetings" value="once_in_a_two_weeks" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">ორ კვირაში ერთხელ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="nonFormalMeetings" @change="setMeetings" value="once_in_a_month" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">თვეში ერთხელ</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="non_formal_meetings" />
                    </div>

                    <div class="flex flex-col mt-11 w-[39.1rem]">
                       <p class="text-[1.3rem] font-bold">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="numberOfDaysFromOffice" @change="setDays" :value=0 rules="required_boolean" class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">0</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="numberOfDaysFromOffice" @change="setDays" :value=1 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">1</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="numberOfDaysFromOffice" @change="setDays" :value=2 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">2</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="numberOfDaysFromOffice" @change="setDays" :value=3 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">3</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="numberOfDaysFromOffice" @change="setDays" :value=4 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">4</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="numberOfDaysFromOffice" @change="setDays" :value=5 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">5</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="number_of_days_from_office" />
                    </div>

                    <div class="flex flex-col mt-11 w-[38.8rem] h-[12.5rem]">
                        <p class="text-[1.3rem] font-bold">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
                        <div class="mt-24 h-10 flex items-center">
                            <textarea v-model="whatAboutMeetingsInLive" @change="setGatherings" class="w-[38.8rem] h-[11.5rem] border-[0.06rem] border-black bg-[#EAEAEA]" name="what_about_meetings_in_live"></textarea>
                            <label class="ml-5 text-xl" for="what_about_meetings_in_live"></label>
                        </div>
                    </div>

                    <div class="flex flex-col mt-11 w-[38.8rem]">
                        <p class="mt-10 text-[1.3rem] font-bold">რას ფიქრობ არსებულ გარემოზე:</p>
                        <p class="text-[1.3rem] font-bold">რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</p>
                        <div class="mt-24 h-10 flex items-center">
                            <textarea v-model="tellUsYourOpinionAboutUs" @change="setSituation" class="w-[38.8rem] h-[11.5rem] border-[0.06rem] border-black bg-[#EAEAEA]" name="tell_us_your_opinion_about_us"></textarea>
                            <label class="ml-5 text-xl" for="tell_us_your_opinion_about_us"></label>
                        </div>
                    </div>

                    <div class="flex justify-center items-center rounded-3xl mt-[7.5rem] ml-[26.8rem] w-44 h-14 bg-[#208298]">
                        <button class="text-lg font-bold text-white">დასრულება</button>
                    </div>
                </Form>
                </div>

            <div class="flex ml-96 h-[43.9rem] mt-[4.4rem] w-1/2">
                <img v-motion :initial="{ opacity: 0, scale: 0.5, y: 0, x: 0, }" :enter="{ opacity: 1, scale: 1, y: -130, x: 100, }" class="transition-all duration-[0.5s] absolute z-0 mt-48 w-48" src="@/assets/heart.svg" />
                <img class="z-50" src="/src/assets/office.svg" alt="Boy riding a bike"/> 
            </div>

        </div>
    </div>
</div>
</template>

<script>
import { Field, ErrorMessage, Form } from 'vee-validate';
import axios from 'axios';

export default {
    components: {
        Field,
        ErrorMessage,
        Form
    },
    data() {
        return {
            nonFormalMeetings: this.$store.state.nonFormalMeetings,
            numberOfDaysFromOffice: this.$store.state.numberOfDaysFromOffice,
            whatAboutMeetingsInLive: this.$store.state.whatAboutMeetingsInLive,
            tellUsYourOpinionAboutUs: this.$store.state.tellUsYourOpinionAboutUs,
        }
    },

    methods: {
    setMeetings() {
            this.$store.commit('setMeetings', {value: this. nonFormalMeetings})
        },
        setDays() {
            this.$store.commit('setDays', {value: this.numberOfDaysFromOffice})
        },
        setGatherings() {
            this.$store.commit('setGatherings', {value: this.whatAboutMeetingsInLive})
        },
        setSituation() {
            this.$store.commit('setSituation', {value: this.tellUsYourOpinionAboutUs})
        },
        handleSubmit() {

            let data = {};
            data['first_name'] =  this.$store.state.firstName;
            data['last_name'] = this.$store.state.lastName;
            data['email'] = this.$store.state.email;
            data['had_covid'] = this.$store.state.hadCovid;

            if(this.$store.state.hadCovid === 'yes' && this.$store.state.hadAntibodyTest){
                data['had_antibody_test'] = this.$store.state.hadAntibodyTest
                data['antibodies'] = {}
                data['antibodies']['test_date'] = this.$store.state.antibodies.testDate
                data['antibodies']['number'] = this.$store.state.antibodies.number
            }

            if(this.$store.state.hadCovid === 'yes' && this.$store.state.hadAntibodyTest === false){
                data['had_antibody_test'] = this.$store.state.hadAntibodyTest
                data['covid_sickness_date'] = this.$store.state.covidSicknessDate
            }

            if(this.$store.state.hadVaccine === true) {
                data['had_vaccine'] = this.$store.state.hadVaccine
                data['vaccination_stage'] = this.$store.state.vaccinationStage
            }

            if(this.$store.state.hadVaccine === false) {
                data['had_vaccine'] = this.$store.state.hadVaccine
                data['i_am_waiting'] = this.$store.state.iAmWaiting
            }
            
            data['non_formal_meetings'] = this.$store.state.nonFormalMeetings
            data['number_of_days_from_office'] = this.$store.state.numberOfDaysFromOffice

            if(this.$store.state.whatAboutMeetingsInLive.length > 0) {
                data['what_about_meetings_in_live'] = this.$store.state.whatAboutMeetingsInLive
            };

            if(this.$store.state.tellUsYourOpinionAboutUs.length > 0) {
                data['tell_us_your_opinion_about_us'] = this.$store.state.tellUsYourOpinionAboutUs
            };

            return axios
                .post('https://covid19.devtest.ge/api/create', data)
                .then((response) => {
                    console.log(response)
                    if(!response.status === 201) {
                        throw new Error("Something went wrong");
                    } else {
                        this.$router.push('thanks')
                        console.log(response)
                        console.log(data)
                    }
                })
    },
},
}

</script>

<!-- return axios
                .post("https://covid19.devtest.ge/api/create", data)
                .then(function (response) {
                    this.$router.push('thanks')
                    console.log(response.status);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }, -->