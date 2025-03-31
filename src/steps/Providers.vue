<template>
  <div class="space-y-7">
    <div class="relative w-full space-y-2 lg:space-y-4">
      <label class="text-base lg:text-2xl lg:leading-7 font-bold tracking-1 leading-7" for="provider1">Who provides your current Broadband?</label>
      <div class="relative lg:max-w-wrapper-326">
        <select class="px-4 h-14 w-full rounded shadow-shprimary text-sm leading-6 outline-none appearance-none cursor-pointer bg-white" v-model="provider1">
          <option value="" disabled>Please select</option>
          <option value="provider1">Sky</option>
          <option value="provider2">BT</option>
          <option value="provider3">EE</option>
          <option value="provider3">Virgin Media</option>
          <option value="provider3">Other</option>
          <option value="provider3">Don’t have one</option>
        </select>
          <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-all" xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
            <path d="M2.34205 0.421258C1.08903 -0.856118 -0.847462 1.05995 0.40556 2.33732L6.55676 8.60808C7.06936 9.13064 7.92369 9.13064 8.43629 8.60808L14.5875 2.33732C15.8405 1.05995 13.961 -0.856119 12.651 0.421257L7.525 5.70495L2.34205 0.421258Z" fill="#216CF6"/>
          </svg>
      </div>
      <span v-if="error.provider1" class="text-sm leading-5 text-error">{{ error.provider1 }}</span>
    </div>

    <div class="relative w-full space-y-2 lg:space-y-4">
      <label class="text-base lg:text-2xl lg:leading-7 font-bold tracking-1 leading-7" for="provider2">What’s your ideal speed?</label>
      <div class="relative lg:max-w-wrapper-326">
        <select class="px-4 h-14 w-full rounded shadow-shprimary text-sm leading-6 outline-none appearance-none cursor-pointer bg-white" v-model="provider2">
          <option value="" disabled>Please select</option>
          <option value="provider1">0 - 30 mbps</option>
          <option value="provider2">30 - 60 mbps</option>
          <option value="provider3">60 mbps +</option>
        </select>
          <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-all" xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
            <path d="M2.34205 0.421258C1.08903 -0.856118 -0.847462 1.05995 0.40556 2.33732L6.55676 8.60808C7.06936 9.13064 7.92369 9.13064 8.43629 8.60808L14.5875 2.33732C15.8405 1.05995 13.961 -0.856119 12.651 0.421257L7.525 5.70495L2.34205 0.421258Z" fill="#216CF6"/>
          </svg>
      </div>
      <span v-if="error.provider1" class="text-sm leading-5 text-error">{{ error.provider2 }}</span>
    </div>

    <div class="relative w-full space-y-2 lg:space-y-4">
      <label class="text-base lg:text-2xl lg:leading-7 font-bold tracking-1 leading-7" for="provider3">Which Broadband type do you need?</label>
      <div class="relative lg:max-w-wrapper-326">
        <select class="px-4 h-14 w-full rounded shadow-shprimary text-sm leading-6 outline-none appearance-none cursor-pointer bg-white" v-model="provider3">
          <option value="" disabled>Please select</option>
          <option value="provider1">Fibre</option>
          <option value="provider2">Standard</option>
          <option value="provider3">Not Sure</option>
        </select>
          <svg class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all" xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
            <path d="M2.34205 0.421258C1.08903 -0.856118 -0.847462 1.05995 0.40556 2.33732L6.55676 8.60808C7.06936 9.13064 7.92369 9.13064 8.43629 8.60808L14.5875 2.33732C15.8405 1.05995 13.961 -0.856119 12.651 0.421257L7.525 5.70495L2.34205 0.421258Z" fill="#216CF6"/>
          </svg>
      </div>
      <span v-if="error.provider1" class="text-sm leading-5 text-error">{{ error.provider3 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProvidersStep",
  data() {
    return {
      provider1: this.getStoredItem("provider1") || "",
      provider2: this.getStoredItem("provider2") || "",
      provider3: this.getStoredItem("provider3") || "",
      error: {
        provider1: "",
        provider2: "",
        provider3: "",
      },
    };
  },
  watch: {
    provider1(newVal) {
      this.saveToLocalStorage("provider1", newVal);
    },
    provider2(newVal) {
      this.saveToLocalStorage("provider2", newVal);
    },
    provider3(newVal) {
      this.saveToLocalStorage("provider3", newVal);
    },
  },
  methods: {
    validateFields() {
      let isValid = true;
      this.error = { provider1: "", provider2: "", provider3: ""};

      if (!this.provider1) {
        this.error.provider1 = "You must select a provider.";
        isValid = false;
      }
      if (!this.provider2) {
        this.error.provider2 = "You must select a provider.";
        isValid = false;
      }
      if (!this.provider3) {
        this.error.provider3 = "You must select a provider.";
        isValid = false;
      }
      return isValid;
    },
    saveToLocalStorage(key, value) {
      localStorage.setItem(key, value);
    },
    getStoredItem(key) {
      return localStorage.getItem(key);
    },
  },
};
</script>

