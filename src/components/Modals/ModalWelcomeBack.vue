<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
    <h3 class="text-center mb-3">{{ $t('chronoModal.welcomeBack') }}</h3>
    <span>
      {{ $t('chronoModal.offlineTimeConverted') }}
      <img
        :src="require('@/assets/art/chrono/icon.png')"
        class="mx--1"
      />
      <b>{{ $t('common.chronosphere') }}</b>
      {{ $t('chronoModal.offlineTimeConverted2') }}
    </span>
    <span class="mt-2 description">{{ $t('chronoModal.totalTimeAvailable') }}</span>
    <span>{{remainingTimeText}}</span>
    <span v-if="oldExport"><br><b class="chrono">{{ $t('chronoModal.exportBonus') }}</b><br>
       {{ $t('chronoModal.exportBonusDescription') }}</span>
    <button class="btn btn-primary mt-3" @click="confirmationClicked">{{ $t('common.ok') }}</button>
  </div>
</template>

<script>
export default {
  computed: {
    remainingTimeText() {
      return this.$store.getters["chrono/remainingTimeText"];
    },
    oldExport() {
      return this.$store.getters["chrono/oldExport"];
    }
  },
  methods: {
    confirmationClicked() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.chrono {
  color: rgb(28, 160, 221);
  max-width: 130px;
  font-size: 14px;
}
</style>