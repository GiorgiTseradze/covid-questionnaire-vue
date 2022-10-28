<template>
    <div class="flex flex-col items-center h-screen bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="../assets/redberry.svg" alt="redberry-name"/> 
                <p class="text-3xl font-bold">3/4</p>
            </div>
            <div class="flex">
                <div class="flex flex-col w-1/4">
                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">უკვე აცრილი ხარ?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="had_vaccine" @change="setVaccination" value="yes" class="w-6 h-6" type="radio" :value=true name="had_vaccine"/>
                            <label class="ml-5 text-xl" for="had_vaccine">კი</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="had_vaccine" @change="setVaccination" value="no" class="w-6 h-6" type="radio" :value=false name="had_vaccine"/>
                            <label class="ml-5 text-xl" for="had_vaccine">არა</label>
                        </div>
                        <p class="text-red-500 font-bold text-2xl">{{$store.state.had_vaccine}}</p>
                    </div>

                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">აირჩიე რა ეტაპზე ხარ*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="vaccination_stage" @change="setStage" value="first_dosage_and_registered_on_the_second" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="vaccination_stage" @change="setStage" value="fully_vaccinated" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">სრულიად აცრილი ვარ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="vaccination_stage" @change="setStage" value="first_dosage_and_not_registered_yet" class="w-6 h-6" type="radio" name="vaccination_stage"/>
                            <label class="ml-5 text-xl" for="vaccination_stage">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                        </div>
                        <p class="text-red-500 font-bold text-2xl">{{$store.state.vaccination_stage}}</p>
                    </div>

                    <div class="flex flex-col ml-10 mt-10 w-[600px]">
                      <p class="text-xl">რომ არ გადადო,</p>
                      <p class="text-xl">ბარემ ახლავე დარეგისტრირდი</p>
                      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                    </div>

                </div>

            <div class="flex mt-14 ml-60 w-1/2">
                <img class="" src="../assets/vax.svg" alt="redberry-name"/> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
    }
}
</script>