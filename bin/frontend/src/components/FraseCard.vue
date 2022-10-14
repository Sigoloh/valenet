<template>
  <div class="card">
    <p class="frase" v-if="state.frase[props.fraseIndex]">
      {{ state.frase[props.fraseIndex].mensagem }}
    </p>
  </div>
</template>
<style scoped></style>
<script lang="ts">
import { reactive, onMounted, onBeforeMount } from "vue";
import axios from "axios";
const client = axios.create({
  baseURL: import.meta.env.VITE_API,
});
export default {
  props: ["fraseIndex"],
  setup(props) {
    const state = reactive({
      frase: [],
      updateFrases: async () => {
        state.frase = (await client.get("/get")).data;
      },
    });
    onBeforeMount(async () => {
      await state.updateFrases();
    });
    return {state, props};
  },
};
</script>
