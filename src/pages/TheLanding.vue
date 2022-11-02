<template>
    <div className="flex flex-col justify-center items-center h-screen bg-[#EAEAEA]">
  <div>
    <img v-motion :initial="{ opacity: 0, y: 100, width: 1000 }" :enter="{ opacity: 1, y: 0, width: 100 }" class="transition-all duration-100 ease-in-out" src="/src/assets/redberry-logo.svg" alt="Redberry logo"/>
  </div>
  <div>
    <router-link to="/info">
      <div className="flex flex-col justify-center items-center w-10 mt-16">
        <img v-motion :initial="{ opacity: 0, y: -20  }" :enter="{ opacity: 1, y: 0 }" class="transition-all duration-[2s] absolute mt-[5px] ml-[3px]" src="/src/assets/start1.svg" />
        <img class="absolute mt-[6px] ml-[5px] z-10 opacity-0 hover:opacity-100" src="/src/assets/start.svg" />
      </div>
    </router-link>
  </div>
</div>
</template>