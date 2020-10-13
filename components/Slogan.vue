<template>
  <div class="NuxtLogo">
    <slot />
  </div>
</template>

<style>
.NuxtLogo {
  display: flex;
  justify-content: center;
  animation: 2s appear ease;
  margin: 6px 20px;
  font-size: 28px;
  font-weight: bold;
}

@keyframes appear {
  0% {
    opacity: 0;
    /*margin-top: 80px;*/

    transform: translateY(90px);
  }
}
</style>
