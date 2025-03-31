<template>
  <div class="flex flex-col space-y-7 w-full">
    <h1 class="font-secondary text-32 lg:text-42 tracking-1 font-extrabold leading-10 lg:leading-48 max-w-wrapper-572">Get a Better Broadband and WiFi Deal at your Home</h1>
    <div class="space-y-5">
      <div class="space-y-1">
        <p class="text-26 lg:text-32 lg:leading-42 font-bold leading-35 tracking-1">What’s your postcode?</p>
        <p class="text-base lg:text-sm lg:leading-7 leading-7">Enter your postcode and click ‘Continue’. </p>
      </div>   
      <div class="flex flex-col gap-2">
        <input :class="[`${errorMessage ? 'ring-error' : 'ring-white'} px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder`]" 
          type="text" 
          v-model="postcode" 
          placeholder="eg. SW1A 1AA"/>
        <span class="text-sm leading-5 text-error" v-if="errorMessage">{{ errorMessage }}</span>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'PostcodeStep',
  data() {
    return {
      postcode: this.getStoredPostcode() || '',
      errorMessage: '',
    };
  },
  watch: {
    postcode(newVal) {
      this.savePostcodeToLocalStorage(newVal);
      this.errorMessage = '';
    }
  },
  methods: {
    isValid() {
      if (this.postcode.trim() === '') {
        this.errorMessage = 'This field is required';
        return false;
      }
      return true;
    },
    savePostcodeToLocalStorage(postcode) {
      localStorage.setItem('postcode', postcode);
    },
    getStoredPostcode() {
      return localStorage.getItem('postcode');
    }
  }
}
</script>
