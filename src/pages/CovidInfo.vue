<template>
    <div class="flex flex-col items-center h-screen bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="/src/assets/redberry.svg" alt="Redberry name"/> 
                <p class="text-3xl font-bold">2/4</p>
            </div>
            <div class="flex">
                <Form class="flex" @submit="handleSubmit()">
                <div class="flex flex-col w-1/4">
                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">გაქვს გადატანილი Covid-19?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="had_covid" @change="setCovid" rules="required" value="yes" class="w-6 h-6" type="radio"  name="had_covid"/>
                            <label class="ml-5 text-xl" for="had_covid">კი</label>
                        </div>

                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="had_covid" @change="setCovid" value="no" class="w-6 h-6" type="radio" name="had_covid"/>
                            <label class="ml-5 text-xl" for="had_covid">არა</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="had_covid" @change="setCovid" value="have_right_now" class="w-6 h-6" type="radio" name="had_covid"/>
                            <label class="ml-5 text-xl" for="had_covid">ახლა მაქვს</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="had_covid" />
                    </div>

                    <div v-if="$store.state.had_covid === 'yes' ? true : false" class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
                       
                       <div class="mt-3 h-10 flex items-center">
                            <Field v-model="had_antibody_test" @change="setTest" rules="required_boolean" :value=true class="w-6 h-6" type="radio" name="had_antibody_test"/>
                            <label class="ml-5 text-xl" for="had_antibody_test">კი</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="had_antibody_test" @change="setTest" :value=false class="w-6 h-6" type="radio" name="had_antibody_test"/>
                            <label class="ml-5 text-xl" for="had_antibody_test">არა</label>
                            
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="had_antibody_test" />
                    </div>

                    <div v-if="$store.state.had_antibody_test" class="flex flex-col mt-8 w-[600px]"> 
                       <p class="text-[22px] font-bold">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და აინტისხეულების რაოდენობა*</p>
                       
                        <div class="mt-3">
                            <Field v-model="antibodies.test_date" @change="setDate" type="date" rules="required" name="test_date" placeholder="რიცხვი" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" />
                            <label class="ml-5 text-sm" for="test_date"></label>
                            <ErrorMessage class="text-[#F15524]" name="test_date" />
                        </div>
                        <div class="mt-3">
                            <Field v-model="antibodies.number" @change="setNumber" rules="required" name="number" placeholder="ანტისხეულების რაოდენობა" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" />
                            <label class="ml-5 text-sm" for="number"></label>
                            <ErrorMessage class="text-[#F15524]" name="number" />
                        </div>
                    </div> 

                    <div v-if="$store.state.had_covid === 'yes' && $store.state.had_antibody_test === false" class="flex flex-col mt-8 w-[600px]"> 
                       <p class="text-[22px] font-bold">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
                       
                        <div class="mt-3">
                            <Field v-model="covid_sickness_date" @change="setSickness" type="date" rules="required" name="covid_sickness_date" placeholder="რიცხვი" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" />
                            <label class="ml-5 text-sm" for="covid_sickness_date"></label>
                            <ErrorMessage class="text-[#F15524]" name="covid_sickness_date" />
                        </div>
                    </div> 

                </div>

            <div class="flex flex-col ml-60 w-1/2 h-max">
                <img v-motion :initial="{ opacity: 0, scale: 0.5, y: -50, x: 200, }" :enter="{ opacity: 1, scale: 1, y: 0, x: 0, }" class="transition-all duration-[0.5s] absolute z-0 mt-48 w-56" src="/src/assets/circle.svg" />
                <img class="h-[700px] z-50" src="/src/assets/covid.svg" alt="Covid"/> 
                <div class="ml-12">
                        <div class="flex justify-between w-28">
                            <router-link to="/info">
                                <img src="/src/assets/back.svg" /> 
                            </router-link>
                            <button>
                                    <img src="/src/assets/next.svg" />
                            </button>
                        </div>
                </div>
            
            </div>
        </Form>
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
            had_covid: this.$store.state.had_covid,
            had_antibody_test: this.$store.state.had_antibody_test,
            covid_sickness_date: this.$store.state.covid_sickness_date,
            antibodies: {
                test_date: this.$store.state.antibodies.test_date,
                number: this.$store.state.antibodies.number,
            },
            
        }
    },

    methods: {
        setCovid() {
            this.$store.commit('setCovid', {value: this.had_covid})
        },
        setTest() {
            this.$store.commit('setTest', {value: this.had_antibody_test})
        },
        setSickness() {
            this.$store.commit('setSickness', {value: this.covid_sickness_date})
        },
        setDate() {
            this.$store.commit('setDate', {value: this.antibodies.test_date})
        },
        setNumber() {
            this.$store.commit('setNumber', {value: this.antibodies.number})
        },
        handleSubmit() {
            this.$router.push('/vaccination')
        }
    },
}
</script> 