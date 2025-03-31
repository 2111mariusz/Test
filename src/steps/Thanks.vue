<script>
export default {
  name: 'ThanksStep',
  props: {
    msg: String
  }
}
</script>



<template>
  <div class="flex flex-col font-secondary text-3xl gap-6">
    <div class="flex justify-center bg-primary p-5 mt-1">
      <p class="text-22 text-center text-white font-bold">Thank you for using CF Broadband</p>
    </div>
    <div class="text-center space-y-2">
      <p class="text-2xl font-bold">What's next?</p>
      <p class="text-lg">An advisor from CF Broadband will call you shortly.</p>
    </div>
  </div>
</template>


