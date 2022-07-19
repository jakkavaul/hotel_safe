<template>
  <div class="num-pad">
      <SafeButton v-for='n in 9' :value='n' v-bind:key='n'/>
      <SafeButton value='CLR' />
      <SafeButton :value='0' />
      <SafeButton value='&#8680;' fontSize='20px' />
  </div>
</template>

<script>
import SafeButton from './SafeButton.vue';

export default {
    name: "NumPad",
    components: { SafeButton }
}
</script>

<style scoped>
  .num-pad {
    display: grid;
    grid-template-columns: repeat(3, minmax(30px, 130px));
    gap: 5px;
    width: 385px;
    height: 220px;  
    padding: 20px;
    background-color: #666;
    border: 3px solid black;
    margin: 20px 0 0 60px;
  }
</style>
