<template>
  <div class="animate_button">
    <slot />
  </div>
</template>

<style>
.animate_button {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 5px;
  background: url('~assets/button_bac.png') no-repeat left/0 100%;
  transition: background 0.2s;
}
.animate_button:hover{
  cursor: pointer;
  color: white;
  background: url('~assets/button_bac.png') no-repeat left/100% 100%;
}

@keyframes appear {

}
</style>