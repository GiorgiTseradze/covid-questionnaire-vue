<template>
    <div class="flex flex-col items-center h-screen bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="@/assets/redberry.svg" alt="Redberry name"/> 
                <p class="text-3xl font-bold">3/4</p>
            </div>
            <div class="flex">
                <Form class="flex" @submit="handleSubmit()">
                <div class="flex flex-col w-1/4">
                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[1.3rem] font-bold">უკვე აცრილი ხარ?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="hadVaccine" @change="setVaccination" rules="required_boolean" class="w-6 h-6" type="radio" :value=true name="had_vaccine"/>
                            <label class="ml-5 text-xl" for="had_vaccine">კი</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="hadVaccine" @change="setVaccination" class="w-6 h-6" type="radio" :value=false name="had_vaccine"/>
                            <label class="ml-5 text-xl" for="had_vaccine">არა</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="had_vaccine" />
                    </div>

                    <div v-if="$store.state.hadVaccine === true ? true : false" class="flex flex-col mt-8 w-max">
                       <p class="text-[1.3rem] font-bold">აირჩიე რა ეტაპზე ხარ*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="vaccinationStage" @change="setStage" rules="required" value="first_dosage_and_registered_on_the_second" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="vaccinationStage" @change="setStage" value="fully_vaccinated" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">სრულიად აცრილი ვარ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="vaccinationStage" @change="setStage" value="first_dosage_and_not_registered_yet" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="vaccination_stage" />
                        
                    </div>

                    <div v-if="$store.state.vaccinationStage === 'first_dosage_and_not_registered_yet' && $store.state.hadVaccine === true ? true : false" class="flex flex-col ml-10 mt-10 w-[37.5rem]">
                      <p class="text-xl">რომ არ გადადო,</p>
                      <p class="text-xl">ბარემ ახლავე დარეგისტრირდი</p>
                      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                    </div>

                    <div v-if="$store.state.hadVaccine === false ? true : false" class="flex flex-col mt-8 w-max">
                       <p class="text-[1.3rem] font-bold">რას ელოდები?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="iAmWaiting" @change="setWaiting" rules="required" value="registered_and_waiting" class="w-6 h-6" type="radio" name="i_am_waiting"/>
                            <label class="ml-5 text-xl" for="i_am_waiting">დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="iAmWaiting" @change="setWaiting" value="not_planning" class="w-6 h-6" type="radio" name="i_am_waiting"/>
                            <label class="ml-5 text-xl" for="i_am_waiting">არ ვგეგმავ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="iAmWaiting" @change="setWaiting" value="had_covid_and_planning_to_be_vaccinated" class="w-6 h-6" type="radio" name="i_am_waiting"/>
                            <label class="ml-5 text-xl" for="i_am_waiting">გადატანილი მაქვს და ვგეგმავ აცრას</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="i_am_waiting" />
                    </div>

                    <div v-if="$store.state.iAmWaiting === 'had_covid_and_planning_to_be_vaccinated' && $store.state.hadVaccine === false ? true : false" class="flex flex-col ml-10 mt-10 w-[37.5rem]">
                        <p class="text-xl">ახალი პროტოკოლით კოვიდის გადატანიდან 1</p>
                        <p class="text-xl">თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
                        <div class="mt-4">
                            <p>👉 რეგისტრაციის ბმული</p>
                            <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                        </div>
                    </div>
                </div>  

            <div class="flex flex-col ml-60 w-1/2">
                <img v-motion :initial="{ opacity: 0, scale: 0.5, y: 0, x: 0, }" :enter="{ opacity: 1, scale: 1, y: -200, x: 70, }" class="duration-[0.2s] absolute z-0 mt-48 w-56" src="@/assets/star.svg" />
                <img class="h-[43.7rem] z-50" src="@/assets/vax.svg" alt="Doctor with a needle"/> 
                <div class="flex justify-between w-28 z-50">
                    <router-link to="covid">
                        <img src="@/assets/back.svg" /> 
                    </router-link>
                    <button>
                        <img src="@/assets/next.svg" />
                    </button>
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
            hadVaccine: this.$store.state.hadVaccine,
            vaccinationStage: this.$store.state.vaccinationStage,
            iAmWaiting: this.$store.state.IAmWaiting,
        }
    },

    methods: {
        setVaccination() {
            this.$store.commit('setVaccination', {value: this.hadVaccine})
        },
        setStage() {
            this.$store.commit('setStage', {value: this.vaccinationStage})
        },
        setWaiting() {
            this.$store.commit('setWaiting', {value: this.iAmWaiting})
        },
        handleSubmit() {
            this.$router.push('opinion')
        },
    }
}
</script>