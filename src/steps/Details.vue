<template>
  <div class="w-full">
    <Offer></Offer>
    <div class="px-2">
      <div id="form" class="pt-7 pb-5 space-y-7">
        <div class="space-y-2">
          <p class="text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1">First Name</p>
          <input :class="[`${error.field1 ? 'ring-error' : 'ring-white'} px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder`]" v-model="field1" type="text" placeholder="First Name" />
          <span class="text-sm leading-5 text-error" v-if="error.field1">{{ error.field1 }}</span>
        </div>
        <div class="space-y-2">
          <p class="text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1">Last Name</p>
          <input :class="[`${error.field2 ? 'ring-error' : 'ring-white'} px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder`]" v-model="field2" type="text" placeholder="Last Name" />
          <span class="text-sm leading-5 text-error" v-if="error.field2">{{ error.field2 }}</span>
        </div>
        <div class="space-y-2">
          <p class="text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1">Telephone</p>
          <input :class="[`${error.field3 ? 'ring-error' : 'ring-white'} px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder`]" v-model="field3" type="text" placeholder="Telephone" />
          <span class="text-sm leading-5 text-error" v-if="error.field3">{{ error.field3 }}</span>
        </div>
        <div class="space-y-2">
          <p class="text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1">Email Address</p>
          <input :class="[`${error.field4 ? 'ring-error' : 'ring-white'} px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder`]" v-model="field4" type="text" placeholder="Email Address" />
          <span class="text-sm leading-5 text-error" v-if="error.field4">{{ error.field4 }}</span>
        </div>
      </div>
      <div class="">
        <label class="flex gap-2.5">
          <div class="relative h-6">
            <input class="peer hidden" id="checkbox" v-model="acceptTerms" type="checkbox" />
            <div for="checkbox" class="w-6 h-6 rounded border-2 border-secondary peer-checked:bg-secondary"></div>
            <svg class="absolute top-0 bottom-0 right-0 left-0 m-auto hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M6.25001 7.10571C6.19652 7.1578 6.10993 7.1578 6.05644 7.10571L2.45907 3.60009L0 5.99907L3.59614 9.50669L6.15323 12L16 2.39717L13.5391 0L6.25001 7.10571Z" fill="white"/>
            </svg>
          </div>
          <p class="w-full text-xs leading-5 text-text2">If you would like to receive the best deals on Broadband and other offers from CF-Broadband.com, please tick this box.</p>
        </label>
        <span class="text-sm leading-5 text-error" v-if="error.acceptTerms">{{ error.acceptTerms }}</span>
      </div>
    </div>
  </div>

</template>

<script>
import Offer from '../components/Offer.vue'

export default {
  name: 'DetailsStep',
  components:{
    Offer,
  },

  data() {
    return {
      field1: this.getStoredField1() || '',
      field2: this.getStoredField2() || '',
      field3: this.getStoredField3() || '',
      field4: this.getStoredField4() || '',
      acceptTerms: false,
      error: {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        acceptTerms: '',
      },
    };
  },
  watch: {
    field1(newVal) {
      this.saveField1ToLocalStorage(newVal);
    },
    field2(newVal) {
      this.saveField2ToLocalStorage(newVal);
    },
    field3(newVal) {
      this.saveField3ToLocalStorage(newVal);
    },
    field4(newVal) {
      this.saveField4ToLocalStorage(newVal);
    }
  },
  methods: {
    validateFields() {
      let isValid = true;

      this.error = {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        acceptTerms: '',
      };

      if (!this.field1.trim()) {
        this.error.field1 = 'This field is required';
        isValid = false;
      }

      if (!this.field2.trim()) {
        this.error.field2 = 'This field is required';
        isValid = false;
      }

      if (!this.field3.trim()) {
        this.error.field3 = 'This field is required';
        isValid = false;
      }

      if (!this.field4.trim()) {
        this.error.field4 = 'This field is required';
        isValid = false;
      }

      if (!this.acceptTerms) {
        this.error.acceptTerms = 'You must accept.';
        isValid = false;
      }

      return isValid;
    },
    saveField1ToLocalStorage(field1) {
      localStorage.setItem('field1', field1);
    },
    getStoredField1() {
      return localStorage.getItem('field1');
    },
    saveField2ToLocalStorage(field2) {
      localStorage.setItem('field2', field2);
    },
    getStoredField2() {
      return localStorage.getItem('field2');
    },
    saveField3ToLocalStorage(field3) {
      localStorage.setItem('field3', field3);
    },
    getStoredField3() {
      return localStorage.getItem('field3');
    },
    saveField4ToLocalStorage(field4) {
      localStorage.setItem('field4', field4);
    },
    getStoredField4() {
      return localStorage.getItem('field4');
    }
  },
};
</script>




