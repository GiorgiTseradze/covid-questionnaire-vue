import { createRouter, createWebHistory } from "vue-router";
import TheLanding from '../pages/TheLanding.vue';
import PersonalInfo from '../pages/PersonalInfo.vue';
import CovidInfo from '../pages/CovidInfo.vue';
import VaccinationInfo from '../pages/VaccinationInfo.vue';
import TheOpinion from '../pages/TheOpinion.vue';
import ThankYou from '../pages/ThankYou.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: TheLanding
    },
    { 
      path: "/info",
      name: "info",
      component: PersonalInfo
    },
    { 
      path: "/covid",
      name: "covid",
      component: CovidInfo
    },
    { 
      path: "/vaccination",
      name: "vaccination",
      component: VaccinationInfo
    },
    { 
      path: "/opinion",
      name: "opinion",
      component: TheOpinion
    },
    { 
      path: "/thanks",
      name: "thanks",
      component: ThankYou
    },
  ],
});

export default router;
