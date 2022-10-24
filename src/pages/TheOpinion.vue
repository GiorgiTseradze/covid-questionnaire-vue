<template>
    <div class="flex flex-col items-center h-max bg-[#EAEAEA]">
        <div class="w-4/5">
            <div class="flex justify-between mt-24 border-b-2 border-black">
                <img class="mb-6" src="../assets/redberry.svg" alt="redberry-name"/> 
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

                    <form class="pb-52">
                    <div class="flex flex-col mt-8 w-[622px]">
                       <p class="text-[22px] font-bold">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">კვირაში ორჯერ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">კვირაში ერთხელ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">ორ კვირაში ერთხელ</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">თვეში ერთხელ</label>
                        </div>
                    </div>

                    <div class="flex flex-col mt-11 w-[622px]">
                       <p class="text-[22px] font-bold">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>
                       
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">0</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">1</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">2</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">3</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">4</label>
                        </div>
                        <div class="mt-3 h-10 flex items-center">
                            <input class="w-6 h-6" type="radio" name="stage"/>
                            <label class="ml-5 text-xl" for="test">5</label>
                        </div>
                    </div>

                    <div class="flex flex-col mt-11 w-[622px] h-[200px]">
                        <p class="text-[22px] font-bold">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
                        <div class="mt-24 h-10 flex items-center">
                            <textarea class="w-[622px] h-[184px] border-[1px] border-black bg-[#EAEAEA]" name="gathering"></textarea>
                            <label class="ml-5 text-xl" for="gathering"></label>
                        </div>
                    </div>

                    <div class="flex flex-col mt-11 w-[622px]">
                        <p class="mt-10 text-[22px] font-bold">რას ფიქრობ არსებულ გარემოზე:</p>
                        <p class="text-[22px] font-bold">რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</p>
                        <div class="mt-24 h-10 flex items-center">
                            <textarea class="w-[622px] h-[184px] border-[1px] border-black bg-[#EAEAEA]" name="situation"></textarea>
                            <label class="ml-5 text-xl" for="situation"></label>
                        </div>
                    </div>

                    <div class="flex justify-center items-center rounded-3xl mt-[120px] ml-[430px] w-44 h-14 bg-[#208298]">
                        <button class="text-lg font-bold text-white" type="submit">დასრულება</button>
                    </div>
                </form>
                </div>

            <div class="flex ml-96 h-[703px] mt-[71px] w-1/2">
                <img class="" src="../assets/office.svg" alt="redberry-name"/> 
            </div>
        </div>
    </div>
</div>
</template>