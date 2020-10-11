<template>
  <div class="NuxtLogo">
    <slot />
  </div>
</template>

<style>
.NuxtLogo {
  display: flex;
  justify-content: flex-start;
  animation: 2s appear;
  margin: 6px 10px;
  font-size: 28px;
  font-weight: bold;
  /*text-shadow: 1px 1px 2px #a8a8a8;*/
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
}
</style>
