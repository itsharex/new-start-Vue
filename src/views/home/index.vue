<template>
  <div class="wrapper-page">
    <div class="relative w-full h-full flex-c bg-slate-400">
      <div :class="styles.container">
        <img :src="welcome" class="z-10 home-img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import welcome from "@/assets/system/ProjectManager1.png";
import styles from "./home.module.scss";
</script>

<style lang="scss" scoped>
.home-img {
  $s: 30%; /* image size */
  $b: 55px; /* border thickness */
  $c: #d8bfc3; /* border color */

  $g: 50% / calc(100% / var(--f)) 100% no-repeat content-box;
  $o: calc((1 / var(--f) - 1) * $s / 2 - $b);

  --f: 1; /* initial scale */

  width: $s;
  padding-top: calc($s / 5);
  transform: scale(var(--f));
  transition: 0.5s;
  border-radius: 0 0 calc($s / 2) calc($s / 2);
  outline: $b solid $c;
  outline-offset: $o;
  background: radial-gradient(
      circle closest-side,
      #ecd078 calc(99% - $b),
      $c calc(100% - $b) 99%,
      #0000
    )
    $g;
  cursor: pointer;
  aspect-ratio: 1;
  /* stylelint-disable-next-line scss/operator-no-newline-after */
  mask:
    linear-gradient(#000 0 0) no-repeat 50% calc(-1 * $o) /
      calc(100% / var(--f) - 2 * $b) 50%,
    radial-gradient(circle closest-side, #000 99%, #0000) $g;

  &:hover {
    --f: 1.6; /* hover scale */
  }
}
</style>
