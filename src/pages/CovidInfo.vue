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
                            <input class="w-6 h-6" type="radio" name="covid"/>
                            <label class="ml-5 text-xl" for="covid">კი</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="covid"/>
                            <label class="ml-5 text-xl" for="covid">არა</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="covid"/>
                            <label class="ml-5 text-xl" for="covid">ახლა მაქვს</label>
                        </div>
                    </div>

                    <div class="flex flex-col mt-8 w-max">
                       <p class="text-[22px] font-bold">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
                       
                       <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="test"/>
                            <label class="ml-5 text-xl" for="test">კი</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="test"/>
                            <label class="ml-5 text-xl" for="test">არა</label>
                        </div>
                    </div>


                    <div class="flex flex-col mt-8 w-[600px]">
                       <p class="text-[22px] font-bold">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და აინტისხეულების რაოდენობა*</p>
                       
                        <div class="mt-3">
                            <input class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="date" placeholder="რიცხვი"/>
                            <label class="ml-5 text-sm" for="date"></label>
                        </div>
                        <div class="mt-3">
                            <input class="p-2 mt-2 bg-[#EAEAEA] border-[1px] border-[#232323] w-[513px]" name="quantity" placeholder="ანტისხეულების რაოდენობა"/>
                            <label class="ml-5 text-sm" for="quantity"></label>
                        </div>
                    </div>

                </div>

            <div class="flex ml-60 w-1/2">
                <img class="" src="../assets/covid.svg" alt="redberry-name"/> 
            </div>
        </div>
    </div>
</div>
</template>