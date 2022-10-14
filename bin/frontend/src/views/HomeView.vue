<template>
  <main>
    <div class="frase">
      <FraseCard :frase-index="index"></FraseCard>
    </div>
    <div class="buttons">
      <button @click="downgradeIndex()">Frase anterior</button>
      <button @click="updateIndex()">Proxima frase</button>
    </div>
  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
}

button{
  margin-top: 50px;
  margin-right: 10px
}

.frase{
  max-height: 5vh;
  width: 50vw;
}

</style>

<script lang="ts">
import FraseCard from "../components/FraseCard.vue";
import { reactive } from "vue";
export default {
  components: {
      FraseCard
  },
  setup() {
    const state = reactive({
      index: 0,
      updateIndex: () => {
        state.index++;
      },
      downgradeIndex: () => {
        if(state.index > 0){
          state.index--;
        }
      }
    });
    return state;
  },
};
</script>