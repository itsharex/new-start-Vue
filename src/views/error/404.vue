<template>
  <div class="h-full not_found_page">
    <img :src="img_404" alt="" class="m-auto" />
    <el-button @click="goBackHome" class="m-auto">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">
import img_404 from "@/assets/system/404.png";
import { useRouter } from "vue-router";

const router = useRouter();

const goBackHome = () => {
  router.push("/home/index");
};
</script>

<style lang="scss" scoped>
.not_found_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
