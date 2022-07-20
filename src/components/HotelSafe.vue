<template>
  <div class="hotel-safe">
    <div class="safe-body">
      <div class="column">
        <NumPad @safe-button-pressed="onSafeButtonPressed" />
      </div>
      <div class="column">
        <div class="row screen-row">
          <SafeScreen ref="SafeScreen" />
        </div>
        <div class="row light-row">
          <LockIndicatorLight ref="LockIndicatorLight" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumPad from './NumPad.vue';
import SafeScreen from './SafeScreen.vue';
import LockIndicatorLight from './LockIndicatorLight.vue';

export default {
  name: "HotelSafe",
  components: {
    NumPad,
    SafeScreen,
    LockIndicatorLight
  },
  data() {
    return {
      locked:     false,
      enteredPin: "",
      actualPin:  "",
    }
  },
  methods: {
    onSafeButtonPressed: function (value) {

      let screen  = this.$refs.SafeScreen;
      let light   = this.$refs.LockIndicatorLight;

      if (value === 'clear') {
        this.enteredPin = "";
        screen.update("");
        return;
      }

      if (this.enteredPin.length < 4) {
        if (!isNaN(value)) { // number keys only
          this.enteredPin += value;
          screen.update(this.enteredPin);
        }
      } 

      if (value === 'enter') {
        if (this.enteredPin.length == 4) {
          screen.update("");
          if (this.locked) {
            if (this.enteredPin === this.actualPin) {
              this.locked = false;
              light.turnGreen();
            } else {
              screen.update("INVALID");
            }
          } else {
            // set PIN and lock
            this.actualPin = this.enteredPin;
            screen.update("PIN SET");
            this.locked = true;
            light.turnRed();
          }

        } else {
          screen.update("INVALID");
        }

        setTimeout(() => screen.update(""), 500);
        this.enteredPin = "";
      }
    },
  },
}
</script>

<style scoped>
.column {
  float:  left;
  width:  50%;
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
