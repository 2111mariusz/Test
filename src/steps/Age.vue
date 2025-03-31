<template>
  <div>
    <h3 class="text-base lg:text-2xl leading-7 lg:leading-7 font-bold tracking-1">What is your age?</h3>
    <div class="flex flex-wrap max-w-wrapper-350 gap-3 py-7">
      <div class="flex flex-wrap gap-2">
        <div>
          <input id="18-24" class="peer hidden" type="radio" v-model="selectedAge" value="18-25"/>
          <label for="18-24" class="flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18">
            18-25
          </label>
        </div>     
        <div>
          <input id="25-34" class="peer hidden" type="radio" v-model="selectedAge" value="25-34"/>
          <label for="25-34" class="flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18">
            25-34
          </label>
        </div>  
      </div>
      <div class="flex flex-wrap gap-2">
        <div>
          <input id="35-44" class="peer hidden" type="radio" v-model="selectedAge" value="35-44"/>
          <label for="35-44" class="flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18">
            35-44
          </label>
        </div>       
        <div>
          <input id="45-54" class="peer hidden" type="radio" v-model="selectedAge" value="45-54"/>
          <label for="45-54" class="flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18">
            45-54
          </label>
        </div>  
      </div>
      <div class="flex flex-wrap gap-2">
        <div>
          <input id="55-64" class="peer hidden" type="radio" v-model="selectedAge" value="55-64"/>
          <label for="55-64" class="flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18">
            55-64
          </label>
        </div>       
        <div>
          <input id="65+" class="peer hidden" type="radio" v-model="selectedAge" value="65+"/>
          <label for="65+" class="flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18">
            65+
          </label>
        </div>  
      </div>
    </div>
    <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'AgeStep',
  data() {
    return {
      selectedAge: this.getStoredAge() || '',
      errorMessage: '',
    };
  },
  watch: {
    selectedAge(newValue) {
      if (newValue) {
        this.errorMessage = '';
        this.saveAgeToLocalStorage();
        this.$emit('age-selected', newValue);
        this.$emit('next');
      }
    }
  },
  methods: { 
    saveAgeToLocalStorage() {
      localStorage.setItem('selectedAge', this.selectedAge);
    },
    getStoredAge() {
      return localStorage.getItem('selectedAge');
    }
  },
};
</script>
