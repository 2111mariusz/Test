<script>
export default {
  name: 'TheOffer',
}
</script>


<template>
    <div class="relative flex flex-col mt-11 pt-8 pb-5 px-5 bg-white shadow-shprimary rounded-10">
      <div class="absolute -top-4 flex left-0 right-0 w-63 mx-auto gap-2 py-1 px-3 bg-secondary rounded-full">
        <p class="text-xl leading-6 font-bold text-offer2">1</p>
        <p class="text-base leading-6 font-bold text-white">We’ve found you an offer!</p>
      </div>
      <div class="flex pb-3.5 gap-2 mx-auto">
        <p class="text-text text-sm leading-5">Offered by:</p>
        <img src="/TalkTalk-black.svg" alt="TalkTalk" width="62" height="26"/>
      </div>
      <div class="flex flex-col pt-3.5 pb-5 rounded items-center bg-background">
        <p class="text-offer text-sm leading-7 font-bold">FIBRE PACKAGE + AMAZON TECH PACK</p>
        <p class="text-white text-xs leading-5">Available on Selected Deals*</p>
        <div class="pt-2">
          <img src="/offer.png" srcset="offer.png 1x, offer@2x.png 2x, offer@3x.png 3x" alt="ad" width="245" height="86"/>
        </div>
      </div>
      <div class="pt-3.5 space-y-2 pb-2">
        <p class="text-sm leading-5 text-text">Monthly Cost From:</p>
        <p class="text-64 text-Cold-Blue-600 leading-56 font-bold tracking-1">£17.95</p>
      </div>
      <div class="space-y-3.5">
        <p class="text-sm text-text leading-5">Features included:</p>
        <div class="space-y-2">
          <div class="flex items-start gap-2">
            <img src="/check.svg" alt="check" width="15" height="15"/>
            <p class="text-sm leading-5">Unlimited Superfast Broadband</p>
          </div>
          <div class="flex items-start gap-2">
            <img src="/check.svg" alt="check" width="15" height="15"/>
            <p class="text-sm leading-5">No Price Increases</p>
          </div>
          <div class="flex items-start gap-2">
            <img src="/check.svg" alt="check" width="15" height="15"/>
            <p class="text-sm leading-5"><strong>Amazon Echo Dot</strong> and <strong>Amazon Smart Plug</strong> Included on selected deals</p>
          </div>
        </div>
      </div>
      <a href="#form">
        <button class="mt-3.5 py-4 w-full rounded-full bg-button hover:bg-button-hover text-2xl text-white leading-6 font-bold">Find out more</button>
      </a>
    </div>
</template>


