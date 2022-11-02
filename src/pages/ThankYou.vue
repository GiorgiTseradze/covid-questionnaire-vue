<template>
    <div class="flex flex-col items-center justify-center h-screen bg-[#232323]">
        <div>
            <div>
                <img v-motion :initial="{ opacity: 0, scale: 0.5, y: 100, x: 100, }" :enter="{ opacity: 1, scale: 1, y: 0, x: 0, }" class="duration-[0.2s] z-0 ml-8 w-[52px] h-[52px]" src="/src/assets/bigstar.svg" />
            </div>
            <div>
                <p class="text-[64px] font-bold text-white">მ ა დ ლ ო ბ ა</p>
            </div>
            <div>
                <img v-motion :initial="{ opacity: 0, scale: 0.5, y: -100, x: -100, }" :enter="{ opacity: 1, scale: 1, y: 0, x: 0, }" class="duration-[0.2s] absolute z-0 ml-[330px] mb-6 w-[33px] h-[33px]" src="/src/assets/smallstar.svg" />
            </div>
        </div>
    </div>
</template>