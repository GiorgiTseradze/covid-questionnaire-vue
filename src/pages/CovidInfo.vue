<template>
    <div class="flex flex-col items-center h-screen bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="../assets/redberry.svg" alt="redberry-name"/> 
                <p class="text-3xl font-bold">2/4</p>
            </div>
            <div class="flex">
                <div class="flex flex-col w-1/4">
                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">გაქვს გადატანილი Covid-19?*</p>
                       
                       <div class="mt-3 h-10 flex items-center">
                            <input v-model="had_covid" @change="setCovid" value="yes" class="w-6 h-6" type="radio"  name="had_covid"/>
                            <label class="ml-5 text-xl" for="had_covid">კი</label>
                        </div>

                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="had_covid" @change="setCovid" value="no" class="w-6 h-6" type="radio" name="had_covid"/>
                            <label class="ml-5 text-xl" for="had_covid">არა</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="had_covid" @change="setCovid" value="have_right_now" class="w-6 h-6" type="radio" name="had_covid"/>
                            <label class="ml-5 text-xl" for="had_covid">ახლა მაქვს</label>
                        </div>
                        <p class="text-red-500 font-bold text-2xl">{{$store.state.had_covid}}</p>
                    </div>

                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
                       
                       <div class="mt-3 h-10 flex items-center">
                            <input v-model="had_antibody_test" @change="setTest" :value=true class="w-6 h-6" type="radio" name="had_antibody_test"/>
                            <label class="ml-5 text-xl" for="had_antibody_test">კი</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input v-model="had_antibody_test" @change="setTest" :value=false class="w-6 h-6" type="radio" name="had_antibody_test"/>
                            <label class="ml-5 text-xl" for="had_antibody_test">არა</label>
                        </div>
                        <p class="text-red-500 font-bold text-2xl">{{$store.state.had_antibody_test}}</p>
                    </div>


                    <div class="flex flex-col mt-8 w-[600px]">
                       <p class="text-[22px] font-bold">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და აინტისხეულების რაოდენობა*</p>
                       
                        <div class="mt-3">
                            <input v-model="antibodies.test_date" @change="setDate" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="test_date" placeholder="რიცხვი"/>
                            <label class="ml-5 text-sm" for="test_date"></label>
                        </div>
                        <p class="text-red-500 font-bold text-2xl">{{$store.state.antibodies.test_date}}</p>
                        <div class="mt-3">
                            <input v-model="antibodies.number" @change="setNumber" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="number" placeholder="ანტისხეულების რაოდენობა"/>
                            <label class="ml-5 text-sm" for="number"></label>
                        </div>
                        <p class="text-red-500 font-bold text-2xl">{{$store.state.antibodies.number}}</p>
                    </div>

                </div>

            <div class="flex ml-60 w-1/2">
                <img class="" src="../assets/covid.svg" alt="redberry-name"/> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            had_covid: '',
            had_antibody_test: null,
            antibodies: {
                test_date: '',
                number: '',
            }
           
        }
    },
    computed: {
        setCovid() {
            this.$store.commit('setCovid', {value: this.had_covid})
        },
        setTest() {
            this.$store.commit('setTest', {value: this.had_antibody_test})
        },
        setDate() {
            this.$store.commit('setDate', {value: this.antibodies.test_date})
        },
        setNumber() {
            this.$store.commit('setNumber', {value: this.antibodies.number})
        }
    }
}
</script>