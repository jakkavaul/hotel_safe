<template>
  <div class="hotel-safe">
    <div class="safe-body">
      <div class="column">
        <NumPad />
      </div>
      <div class="column">
        <div class="row screen-row">
          <SafeScreen />
        </div>
        <div class="row light-row">
          <SafeLight />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumPad from './NumPad.vue';
import SafeScreen from './SafeScreen.vue';
import SafeLight from './SafeLight.vue';

export default {
    name: "HotelSafe",
    components: {
      NumPad,
      SafeScreen,
      SafeLight
    },
    data() {
      return {
        locked: {
          type: Boolean,
          default: false,
        }
      }
    }
}
</script>

<style scoped>

.column {
  float :left;
  width: 50%;
}

.row {
  height: 50%;
}

.screen-row {
  padding: 30px 0 00;
}

.light-row {
  padding-top: 30px;
  display: flex;
  justify-content: center;
}

.safe-body {
  width: 1230px;
  height: 305px;  
  background-color: #293F55;
  border: 10px solid #FFF;
}
</style>
