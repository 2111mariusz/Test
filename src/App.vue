<template>
  <div id="app" :class="[`flex flex-col ${currentRoute == '/loader' ? 'h-screen ' : 'min-h-screen'} font-primary justify-between text-primary bg-grprimary lg:bg-grsecondary`]">
    <div :class="[` ${currentRoute == '/loader' ? 'pb-0 overflow-hidden' : 'pb-14'} ${currentRoute == '/details' ? 'lg:pb-21' : 'pb-14' } h-full`]">
      <Header></Header>
      <div :class="[`h-full ${currentRoute == '/thanks' ? '' : 'lg:max-w-wrapper-824 px-4'} mx-auto`]">
        <div :class="[`items-center pt-3.5 mx-auto ${currentRoute == '/loader' || currentRoute == '/thanks' ? 'hidden' : 'flex'}`]">
          <div>
            <p class="w-5 h-5 bg-secondary rounded-full text-sm font-bold text-center leading-5 text-white">1</p>
          </div>
          <div :class="[`${currentStepIndex > 0 ? 'bg-blue-600' : 'bg-primary'} w-full h-0.5 transition-colors duration-1000`]"></div>
          <div :class="[`${currentStepIndex > 0 ? 'bg-secondary border-secondary text-white' : 'border-primary'} border-2 flex items-center rounded-full w-5 h-5 transition-colors duration-1000`]">
            <p class="w-5 h-5 text-sm text-center font-bold leading-5 rounded-full">2</p>
          </div>
          <div :class="[`${currentStepIndex > 1 ? 'bg-blue-600' : 'bg-primary'} w-full h-0.5 transition-colors duration-1000`]"></div>
          <div :class="[`${currentStepIndex > 1 ? 'bg-secondary border-secondary text-white' : 'border-primary'} border-2 flex items-center rounded-full w-5 h-5 transition-colors duration-1000`]">
            <p class="w-5 h-5 text-sm text-center font-bold leading-5 rounded-full">3</p>
          </div>
          <div :class="[`${currentStepIndex > 2 ? 'bg-blue-600' : 'bg-primary'} w-full h-0.5 transition-colors duration-1000`]"></div>
          <div :class="[`${currentStepIndex > 2 ? 'bg-secondary border-secondary text-white' : 'border-primary'} border-2 flex items-center rounded-full w-5 h-5 transition-colors duration-1000`]">
            <p class="w-5 h-5 text-sm text-center font-bold leading-5 rounded-full">4</p>
          </div>
        </div>
        <div :class="[` ${currentRoute == '/loader' || currentRoute == '/thanks' || currentRoute == '/details' ? 'hidden' : 'flex'} max-w-wrapper-510 justify-between py-7 px-2`]">
          <img class="lg:w-13 lg:h-8" src="/Sky.svg" alt="Sky" width="40" height="24"/>
          <img class="lg:w-8 lg:h-8" src="/Bt.svg" alt="Bt" width="24" height="24"/>
          <img class="lg:w-16 lg:h-7" src="/TalkTalk.svg" alt="TalkTalk" width="52" height="22"/>
          <img class="lg:w-11 lg:h-7" src="/VirginMedia.svg" alt="VirginMedia" width="38" height="23"/>
          <img class="lg:w-11 lg:h-8" src="/Vodafone.svg" alt="Vodafone" width="34" height="24"/>
        </div>
        <div :class="[`${currentRoute == '/details' ? 'max-w-wrapper-343 mx-auto' : ''} h-full`]">
            <div class="relative h-full">
              <transition name="slide">
                  <component :is="ViewComponent" :ref="getRefForStep" @next="navigate('next')" />
              </transition>  
            </div>
            <nav :class="[`flex ${currentRoute == '/details' ? 'flex-col-reverse' : 'flex-row items-center'} ${currentRoute == '/' ? 'lg:justify-end lg:max-w-wrapper-343' : ''} lg:max-w-wrapper-326 justify-between`]">
            <button :class="[`flex items-center gap-2.5 text-text2 text-base leading-4`]" v-if="currentStepIndex > 0 && currentRoute !== '/loader' && currentRoute !== '/thanks'" @click.prevent="navigate('back')">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="8" viewBox="0 0 21 8" fill="none">
                <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM21 3.5L1 3.5V4.5L21 4.5V3.5Z" fill="#666666"/>
              </svg>
              Back
              <div v-if="currentRoute == '/age'" class="h-14 mt-7 mb-5 w-1"></div>
            </button>
              <p v-if="currentRoute == '/details'" class="text-xs leading-5 text-text text-center mb-12">By clicking “Continue”, you agree to our Privacy Policy and to be contacted by phone, email and SMS by a Broadband Advisor</p>
              <button :class="[`${currentStepIndex > 0 && currentStepIndex < 3 ? 'max-w-40 text-xl' : 'text-2xl lg:text-xl'} ${currentRoute == '/details' ? 'mb-3' : ''} ${currentRoute == '/' ? 'lg:max-w-51' : ''} my-7 py-4 w-full rounded-full bg-button hover:bg-button-hover text-white leading-8 lg:leading-6 font-bold`]" v-if="(currentRoute === '/age' && storageData.selectedAge) || (currentRoute !== '/loader' && currentRoute !== '/thanks' && currentRoute !== '/age')" @click.prevent="navigate('next')">Continue</button>
          </nav>
          <div :class="[` ${currentRoute == '/providers' || currentRoute == '/age' || currentRoute == '/details' ? 'flex' : 'hidden'} ${currentRoute == '/details' ? 'mt-11 flex' : ''}  justify-between lg:max-w-wrapper-326`]">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                <path d="M8.92857 4.8125H8.39286V3.26562C8.39286 1.46523 6.87054 0 5 0C3.12946 0 1.60714 1.46523 1.60714 3.26562V4.8125H1.07143C0.479911 4.8125 0 5.27441 0 5.84375V9.96875C0 10.5381 0.479911 11 1.07143 11H8.92857C9.52009 11 10 10.5381 10 9.96875V5.84375C10 5.27441 9.52009 4.8125 8.92857 4.8125ZM5.89286 8.42188C5.89286 8.89668 5.4933 9.28125 5 9.28125C4.5067 9.28125 4.10714 8.89668 4.10714 8.42188V7.39062C4.10714 6.91582 4.5067 6.53125 5 6.53125C5.4933 6.53125 5.89286 6.91582 5.89286 7.39062V8.42188ZM6.60714 4.8125H3.39286V3.26562C3.39286 2.4127 4.11384 1.71875 5 1.71875C5.88616 1.71875 6.60714 2.4127 6.60714 3.26562V4.8125Z" fill="#001429"/>
              </svg>
              <p class="text-10 leading-5">Safe  |  Secure  |  Privacy Protected</p>
            </div>
            <img src="/Encrypt.svg" alt="Encrypt" width="65" height="49"/>
          </div>
          <p :class="[`${currentStepIndex == 0 ? 'block' : 'hidden'} text-xs leading-5 text-text lg:max-w-wrapper-468`]">
            Find a better Broadband and WiFi deal in your area. Choose from big providers such as TalkTalk, Virgin, Sky and Shell. Unlimited, Superfast deals with speeds up to 900mbps. Find out the top speed at your address. Enter your postcode and find deals in your area. 
          </p>
        </div>      
      </div>
    </div>
    <div v-if="currentRoute !== '/loader'">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Postcode from './steps/Postcode.vue'
import Providers from './steps/Providers.vue'
import Age from './steps/Age.vue'
import Loader from './steps/Loader.vue'
import Details from './steps/Details.vue'
import Thanks from './steps/Thanks.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': Postcode,
  '/providers': Providers,
  '/age': Age,
  '/loader': Loader,
  '/details': Details,
  '/thanks': Thanks,
}

export default {
  name: 'App',
  components:{
    Header,
    Footer,
  },
  data() {
    return {
      currentRoute: window.location.pathname,
      steps: ['/', '/providers', '/age', '/details', '/thanks'],
      currentStepIndex: 0,
      storageData: {},
    };
  },
  computed: {   
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },

    getRefForStep() {
      if (this.currentRoute === '/') return 'postcodeStep';
      if (this.currentRoute === '/providers') return 'providersStep';
      if (this.currentRoute === '/age') return 'ageStep';
      if (this.currentRoute === '/loader') return 'loaderStep';
      if (this.currentRoute === '/details') return 'detailsStep';
      if (this.currentRoute === '/thanks') return 'thanksStep';
      return '';
    }
  },

  mounted() {
    window.addEventListener("popstate", this.handlePopState);
    this.storageData = this.GetStorageData()
  },

  methods: {
    GetStorageData() {
      const items = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        items[key] = value;
      }
      return items;
    },
    handlePopState() {
      const newRoute = window.location.pathname;
      if (localStorage.getItem('reachedThanks') === 'true' && newRoute === '/loader') {
        window.history.pushState({}, '', '/details');
        this.currentRoute = '/details';
        this.currentStepIndex = this.steps.indexOf('/details');
        return;
      }
      this.currentRoute = newRoute;
      this.currentStepIndex = this.steps.indexOf(newRoute);
    },

    getStoredItem(key) {
      return localStorage.getItem(key) || '';
    },

    navigate(direction) {
      if (direction === 'next') {
        const routeActions = {
          '/': () => this.validateAndProceed(this.$refs.postcodeStep, 'postcode', 'This field cannot be empty.'),
          '/providers': () => this.validateAndProceed(this.$refs.providersStep, 'validateFields', 'You must select a provider.'),
          '/age': () => this.navigateWithDelay('/details'),
          '/details': () => this.validateAndProceed(this.$refs.detailsStep, 'validateFields', '', () => this.navigateWithDelay('/thanks')),
        };

        if (routeActions[this.currentRoute]) {
          routeActions[this.currentRoute]();
        } else {
          this.updateRoute(1);
        }
      } else if (direction === 'back') {
        this.updateRoute(-1);
      }
    },

    validateAndProceed(component, field, errorMessage, callback) {
      if (typeof component[field] === 'function' ? !component[field]() : !component[field].trim()) {
        component.errorMessage = errorMessage;
      } else {
        callback ? callback() : this.updateRoute(1);
      }
    },

    navigateWithDelay(targetRoute) {
      this.currentRoute = '/loader';
      window.history.pushState({}, '', this.currentRoute);
      setTimeout(() => {
        this.currentRoute = targetRoute;
        this.currentStepIndex = this.steps.indexOf(targetRoute);
        window.history.pushState({}, '', this.currentRoute);
      }, 2000);
    },

    updateRoute(stepChange) {
      this.currentStepIndex = Math.max(0, Math.min(this.currentStepIndex + stepChange, this.steps.length - 1));
      this.currentRoute = this.steps[this.currentStepIndex];
      window.history.pushState({}, '', this.currentRoute);
    },
  },

  watch: {
    currentRoute(newRoute) {
      this.storageData = this.GetStorageData()
      if (newRoute === '/thanks') {
        console.log("All Collected Data:", this.storageData);
      }
    }
  },

  created() {
    this.currentStepIndex = this.steps.indexOf(this.currentRoute);
  }
}
</script>
<style>
.slide-enter-active,
.slide-leave-active{
  transition: 0.5s;
}
.slide-enter{
  transform:translate(100%)
}
.slide-leave { 
  transform:translate(-100%)
}
</style>
