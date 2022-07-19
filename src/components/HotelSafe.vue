<template>
  <div class="hotel-safe">
    <div class="safe-body">
      <div class="column">
        <NumPad @safe-button-pressed="onSafeButtonPressed"/>
      </div>
      <div class="column">
        <div class="row screen-row">
          <SafeScreen ref="SafeScreen"/>
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
      locked: false,
      pin: "",
      numDigits: 0,
    }
  },
  methods: {
    onSafeButtonPressed: function (value) {
      if (value === 'clear') {
          this.numDigits = 0;
          this.pin = "";
          this.$refs.SafeScreen.update(this.pin);
      } else if (!this.locked) {

        if (this.numDigits < 4) {
          this.numDigits++;
          console.log(value, this.numDigits);
          this.pin += value;
          this.$refs.SafeScreen.update(this.pin);
        } else {
          console.log(this.pin);
        }
      } else {
        console.log('locked!');
      }
    },
  },
}
</script>

<style scoped>
.column {
  float: left;
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
