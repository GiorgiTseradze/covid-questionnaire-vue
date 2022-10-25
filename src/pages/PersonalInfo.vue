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
                                <label class="text-[22px] font-bold" for="firstName">სახელი*</label>
                                <input class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="firstName" type="username" placeholder="იოსებ" />
                            </div>

                            <div class="flex flex-col mt-8">
                                <label class="text-[22px] font-bold" for="firstName">გვარი*</label>
                                <input class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="lastName" type="username" placeholder="ჯუღაშვილი"/>
                            </div>

                            <div class="flex flex-col mt-8">
                                <label class="text-[22px] font-bold" for="firstName">მეილი*</label>
                                <input class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="password" type="email" placeholder="fbi@redberry.ge"/>
                            </div>
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