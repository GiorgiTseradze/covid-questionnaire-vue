<template>
    <div class="flex flex-col items-center h-screen bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="../assets/redberry.svg" alt="redberry-name"/> 
                <p class="text-3xl font-bold">3/4</p>
            </div>
            <div class="flex">
                <Form class="flex" @submit="handleSubmit()">
                <div class="flex flex-col w-1/4">
                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">უკვე აცრილი ხარ?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="had_vaccine" @change="setVaccination" rules="required" value="yes" class="w-6 h-6" type="radio" :value=true name="had_vaccine"/>
                            <label class="ml-5 text-xl" for="had_vaccine">კი</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="had_vaccine" @change="setVaccination" value="no" class="w-6 h-6" type="radio" :value=false name="had_vaccine"/>
                            <label class="ml-5 text-xl" for="had_vaccine">არა</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="had_vaccine" />
                    </div>

                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">აირჩიე რა ეტაპზე ხარ*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="vaccination_stage" @change="setStage" rules="required" value="first_dosage_and_registered_on_the_second" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="vaccination_stage" @change="setStage" value="fully_vaccinated" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">სრულიად აცრილი ვარ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <Field v-model="vaccination_stage" @change="setStage" value="first_dosage_and_not_registered_yet" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                        </div>
                        <ErrorMessage class="text-[#F15524]" name="vaccination_stage" />
                    </div>

                    <div class="flex flex-col ml-10 mt-10 w-[600px]">
                      <p class="text-xl">რომ არ გადადო,</p>
                      <p class="text-xl">ბარემ ახლავე დარეგისტრირდი</p>
                      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                    </div>

                </div>

            <div class="flex flex-col mt-14 ml-60 w-1/2">
                <img class="h-[700px]" src="../assets/vax.svg" alt="redberry-name"/> 
                <div class="flex justify-between w-28">
                    <router-link to="/covid">
                        <img src="../assets/back.svg" /> 
                    </router-link>
                    <button>
                        <img src="../assets/next.svg" />
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
            had_vaccine: null,
            vaccination_stage: '',
        }
    },
    computed: {
        setVaccination() {
            this.$store.commit('setVaccination', {value: this.had_vaccine})
        },
        setStage() {
            this.$store.commit('setStage', {value: this.vaccination_stage})
        },
    },
    methods: {
        handleSubmit() {
            this.$router.push('/opinion')
        }
    }
}
</script>