<template>
    <div class="flex flex-col items-center h-screen bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="../assets/redberry.svg" alt="redberry-name"/> 
                <p class="text-3xl font-bold">1/4</p>
            </div>
            <div class="flex">
                <Form class="flex" @submit="handleSubmit()">
                    <div class="flex w-1/4">
                        <div>
                                <div class="flex flex-col mt-8">
                                    <label class="text-[22px] font-bold" for="first_name">სახელი*</label>
                                    <Field v-model="first_name" @change="setFirstName" rules="required|min_name:3|max_name:255|name_alpha" name="first_name" type="text" placeholder="იოსებ" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]"  />
                                    <ErrorMessage name="first_name" class="text-[#F15524]" />
                                </div>

                                <div class="flex flex-col mt-8">
                                    <label class="text-[22px] font-bold" for="last_name">გვარი*</label>
                                    <Field v-model="last_name" @change="setLastName" rules="required|min_last_name:3|max_last_name:255|last_name_alpha" name="last_name" type="text" placeholder="ჯუღაშვილი" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" />
                                    <ErrorMessage name="last_name" class="text-[#F15524]" />
                                </div>

                                <div class="flex flex-col mt-8">
                                    <label class="text-[22px] font-bold" for="email">მეილი*</label>
                                    <Field v-model="email" @change="setEmail" rules="required|email|email_redberry" type="email" name="email" placeholder="fbi@redberry.ge" class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]"/>
                                    <ErrorMessage name="email" class="text-[#F15524]" />
                                </div>
                
                            <div class="mt-28 w-60 border-t-2 border-black">
                                <p class="w-72 mt-5">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col ml-60 w-1/2">
                        <img src="../assets/couple.png" alt="redberry-name"/> 
                        <div class="ml-32">
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
import {Field, ErrorMessage, Form} from 'vee-validate';

export default {
    components: {
        Field, 
        ErrorMessage,
        Form
    },
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
    }, 
    methods: {
        handleSubmit() {
            this.$router.push('/covid')
        }
    }
}
</script>