<template>
    <div class="flex flex-col items-center h-max bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="/src/assets/redberry.svg" alt="redberry-name"/> 
                <p class="text-3xl font-bold">3/4</p>
            </div>
            <div class="flex">
              
                <div class="flex flex-col w-1/4">
                    <div class="flex flex-col mt-8 w-[610px] text-[22px]">
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
                    <div class="flex flex-col mt-8 w-[622px]">
                       <p class="text-[22px] font-bold">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="non_formal_meetings" @change="setMeetings" value="twice_a_week" rules="required" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">კვირაში ორჯერ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="non_formal_meetings" @change="setMeetings" value="once_a_week" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">კვირაში ერთხელ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="non_formal_meetings" @change="setMeetings" value="once_in_a_two_weeks" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">ორ კვირაში ერთხელ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="non_formal_meetings" @change="setMeetings" value="once_in_a_month" class="w-6 h-6" type="radio" name="non_formal_meetings"/>
                            <label class="ml-5 text-xl" for="non_formal_meetings">თვეში ერთხელ</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="non_formal_meetings" />
                    </div>

                    <div class="flex flex-col mt-11 w-[622px]">
                       <p class="text-[22px] font-bold">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="number_of_days_from_office" @change="setDays" :value=0 rules="required_boolean" class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">0</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="number_of_days_from_office" @change="setDays" :value=1 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">1</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="number_of_days_from_office" @change="setDays" :value=2 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">2</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="number_of_days_from_office" @change="setDays" :value=3 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">3</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="number_of_days_from_office" @change="setDays" :value=4 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">4</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="number_of_days_from_office" @change="setDays" :value=5 class="w-6 h-6" type="radio" name="number_of_days_from_office"/>
                            <label class="ml-5 text-xl" for="number_of_days_from_office">5</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="number_of_days_from_office" />
                    </div>

                    <div class="flex flex-col mt-11 w-[622px] h-[200px]">
                        <p class="text-[22px] font-bold">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
                        <div class="mt-24 h-10 flex items-center">
                            <textarea v-model="what_about_meetings_in_live" @change="setGatherings" class="w-[622px] h-[184px] border-[1px] border-black bg-[#EAEAEA]" name="what_about_meetings_in_live"></textarea>
                            <label class="ml-5 text-xl" for="what_about_meetings_in_live"></label>
                        </div>
                    </div>

                    <div class="flex flex-col mt-11 w-[622px]">
                        <p class="mt-10 text-[22px] font-bold">რას ფიქრობ არსებულ გარემოზე:</p>
                        <p class="text-[22px] font-bold">რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</p>
                        <div class="mt-24 h-10 flex items-center">
                            <textarea v-model="tell_us_your_opinion_about_us" @change="setSituation" class="w-[622px] h-[184px] border-[1px] border-black bg-[#EAEAEA]" name="tell_us_your_opinion_about_us"></textarea>
                            <label class="ml-5 text-xl" for="tell_us_your_opinion_about_us"></label>
                        </div>
                    </div>

                    <div class="flex justify-center items-center rounded-3xl mt-[120px] ml-[430px] w-44 h-14 bg-[#208298]">
                        <button class="text-lg font-bold text-white">დასრულება</button>
                    </div>
                </Form>
                </div>

            <div class="flex ml-96 h-[703px] mt-[71px] w-1/2">
                <img class="" src="/src/assets/office.svg" alt="redberry-name"/> 
            </div>

        </div>
    </div>
</div>
</template>

<script>
import { Field, ErrorMessage, Form } from 'vee-validate';
export default {
    components: {
        Field,
        ErrorMessage,
        Form
    },
    data() {
        return {
            non_formal_meetings: '',
            number_of_days_from_office: null,
            what_about_meetings_in_live: '',
            tell_us_your_opinion_about_us: '',
        }
    },

    methods: {
    setMeetings() {
            this.$store.commit('setMeetings', {value: this. non_formal_meetings})
        },
        setDays() {
            this.$store.commit('setDays', {value: this.number_of_days_from_office})
        },
        setGatherings() {
            this.$store.commit('setGatherings', {value: this.what_about_meetings_in_live})
        },
        setSituation() {
            this.$store.commit('setSituation', {value: this.tell_us_your_opinion_about_us})
        },
        handleSubmit() {
            this.$router.push('/thanks')

            let data = {};
            data['first_name'] =  this.$store.state.first_name;
            data['last_name'] = this.$store.state.last_name;
            data['email'] = this.$store.state.email;
            data['had_covid'] = this.$store.state.had_covid;

            if(this.$store.state.had_covid === 'yes' && this.$store.state.had_antibody_test){
                data['had_antibody_test'] = this.$store.state.had_antibody_test
                data['antibodies'] = {}
                data['antibodies']['test_date'] = this.$store.state.antibodies.test_date
                data['antibodies']['number'] = this.$store.state.antibodies.number
                data['had_vaccine'] = this.$store.state.had_vaccine
                data['vaccination_stage'] = this.$store.state.vaccination_stage
                data['non_formal_meetings'] = this.$store.state.non_formal_meetings
                data['number_of_days_from_office'] = this.$store.state.number_of_days_from_office

                if(this.$store.state.what_about_meetings_in_live.length > 0 && this.$store.state.tell_us_your_opinion_about_us.length > 0) {
                    data['what_about_meetings_in_live'] = this.$store.state.what_about_meetings_in_live
                    data['tell_us_your_opinion_about_us'] = this.$store.state.tell_us_your_opinion_about_us
                };

                if(this.$store.state.what_about_meetings_in_live.length < 0 && this.$store.state.tell_us_your_opinion_about_us.length > 0) {
                    data['tell_us_your_opinion_about_us'] = this.$store.state.tell_us_your_opinion_about_us
                };

                if(this.$store.state.what_about_meetings_in_live.length > 0 && this.$store.state.tell_us_your_opinion_about_us.length < 0) {
                    data['what_about_meetings_in_live'] = this.$store.state.what_about_meetings_in_live
                };
            }

            if(this.$store.state.had_covid === 'yes' && this.$store.state.had_antibody_test === false){
                data['had_antibody_test'] = this.$store.state.had_antibody_test
                data['covid_sickness_date'] = this.$store.state.covid_sickness_date
                data['had_vaccine'] = this.$store.state.had_vaccine
                data['vaccination_stage'] = this.$store.state.vaccination_stage
                data['non_formal_meetings'] = this.$store.state.non_formal_meetings
                data['number_of_days_from_office'] = this.$store.state.number_of_days_from_office

                if(this.$store.state.what_about_meetings_in_live.length > 0 && this.$store.state.tell_us_your_opinion_about_us.length > 0) {
                    data['what_about_meetings_in_live'] = this.$store.state.what_about_meetings_in_live
                    data['tell_us_your_opinion_about_us'] = this.$store.state.tell_us_your_opinion_about_us
                };

                if(this.$store.state.what_about_meetings_in_live.length < 0 && this.$store.state.tell_us_your_opinion_about_us.length > 0) {
                    data['tell_us_your_opinion_about_us'] = this.$store.state.tell_us_your_opinion_about_us
                };

                if(this.$store.state.what_about_meetings_in_live.length > 0 && this.$store.state.tell_us_your_opinion_about_us.length < 0) {
                    data['what_about_meetings_in_live'] = this.$store.state.what_about_meetings_in_live
                };
            }

            if(this.$store.state.had_covid === 'no' || this.$store.state.had_covid === 'have_right_now'){
                data['had_vaccine'] = this.$store.state.had_vaccine
                data['vaccination_stage'] = this.$store.state.vaccination_stage
                data['non_formal_meetings'] = this.$store.state.non_formal_meetings
                data['number_of_days_from_office'] = this.$store.state.number_of_days_from_office

                if(this.$store.state.what_about_meetings_in_live.length > 0 && this.$store.state.tell_us_your_opinion_about_us.length > 0) {
                    data['what_about_meetings_in_live'] = this.$store.state.what_about_meetings_in_live
                    data['tell_us_your_opinion_about_us'] = this.$store.state.tell_us_your_opinion_about_us
                };

                if(this.$store.state.what_about_meetings_in_live.length < 0 && this.$store.state.tell_us_your_opinion_about_us.length > 0) {
                    data['tell_us_your_opinion_about_us'] = this.$store.state.tell_us_your_opinion_about_us
                };

                if(this.$store.state.what_about_meetings_in_live.length > 0 && this.$store.state.tell_us_your_opinion_about_us.length < 0) {
                    data['what_about_meetings_in_live'] = this.$store.state.what_about_meetings_in_live
                };
            }
            
            return fetch('https://covid19.devtest.ge/api/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((response) => {
                    if(!response.ok) {
                        throw new Error("Something went wrong");
                    } else {
                        console.log(data)
                        console.log(response)
                    }
                })
    },
},
}

</script>

