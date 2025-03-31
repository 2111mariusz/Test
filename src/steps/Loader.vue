<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="flex gap-2 items-center">
      <div class="bg-secondary w-7 h-7 animate-loop1  rounded-full"></div>
      <div class="bg-secondary/60 w-7 h-7 animate-loop1  [animation-delay:-0.33s] rounded-full"></div>
      <div class="bg-secondary/40 w-7 h-7 animate-loop1  [animation-delay:-0.66s] rounded-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoaderStep',
}
</script>
