<template>
    <div class="flex flex-col items-center h-screen bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="../assets/redberry.svg" alt="redberry-name"/> 
                <p class="text-3xl font-bold">1/4</p>
            </div>
            <div class="flex">
                <div class="flex w-1/4">
                    <div>
                        <form>
                            <div class="flex flex-col mt-8">
                                <label class="text-[22px] font-bold" for="first_name">სახელი*</label>
                                <input v-model="first_name" @change="setFirstName" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="firstName" type="username" placeholder="იოსებ" />
                                <p class="text-red-500 font-bold text-2xl">{{$store.state.first_name}}</p>
                                </div>

                            <div class="flex flex-col mt-8">
                                <label class="text-[22px] font-bold" for="last_name">გვარი*</label>
                                <input v-model="last_name" @change="setLastName" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="last_name" type="username" placeholder="ჯუღაშვილი"/>
                            </div>
                            <p class="text-red-500 font-bold text-2xl">{{$store.state.last_name}}</p>


                            <div class="flex flex-col mt-8">
                                <label class="text-[22px] font-bold" for="email">მეილი*</label>
                                <input v-model="email" @change="setEmail" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="email" type="email" placeholder="fbi@redberry.ge"/>
                            </div>
                            <p class="text-red-500 font-bold text-2xl">{{$store.state.email}}</p>

                        </form>
                        <div class="mt-28 w-60 border-t-2 border-black">
                            <p class="w-72 mt-5">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
                        </div>
                    </div>
                </div>

            <div class="flex ml-60 w-1/2">
                <img class="" src="../assets/couple.png" alt="redberry-name"/> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
        }
    },
    computed: {
        setFirstName() {
            this.$store.commit('setFirstName', {value: this.first_name})
        },
        setLastName() {
            this.$store.commit('setLastName', {value: this.last_name})
        },
        setEmail() {
            this.$store.commit('setEmail', {value: this.email})
        }
    }
}
</script>