<template>
  <div>
    <content-header :text="$t('jobs.' + job.id)" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-4 sticky">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="mt-2 mt-md-0 col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <job-info
        infoId="engineering"
        :icon="require('@/assets/art/jobinfo/engineering.png')"
        :title="$t('engineering.title')"
        :options="[
          {key: 'Back', name: $t('engineering.back')},
          {key: 'Generating Power?', name: $t('engineering.generatingPower'), icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'},
          {key: 'Uses For Power?', name: $t('engineering.usesForPower'), icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>{{ $t('engineering.backText1') }}</span>
          <span>{{ $t('engineering.backText2') }}</span>
          <span>{{ $t('engineering.backText3') }}</span>
        </template>
        <template slot="Generating Power?">
          <span>
            {{ $t('engineering.generatingPower1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>{{ $t('items.power') }}</b>
            {{ $t('engineering.generatingPower2') }}
          </span>
          <span>
            {{ $t('engineering.generatingPower3') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/chemOil.png')"
            />
            <b>{{ $t('engineering.generatingPower4') }}</b>,
            <img class="mx--0" :src="require('@/assets/art/tinkering/burnjunk.png')" />
            <b>{{ $t('engineering.generatingPower5') }}</b>,
            <img class="mx--2" :src="require('@/assets/art/botany/PlantPotatobattery.png')" />
            <b>{{ $t('items.plantSeed') }}</b>
            {{ $t('engineering.generatingPower6') }}
          </span>
          <span>{{ $t('engineering.generatingPower7') }}</span>
        </template>
        <template slot="Uses For Power?">
          <span>
            {{ $t('engineering.usesForPower1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>{{ $t('items.power') }}</b>
            {{ $t('engineering.usesForPower2') }}
          </span>
          <span>
            {{ $t('engineering.usesForPower3') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>{{ $t('jobs.fabrication') }}</b>
            {{ $t('engineering.usesForPower4') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/chemistry/icon.png')"
            />
            <b>{{ $t('jobs.chemistry') }}</b>
            {{ $t('engineering.usesForPower5') }}
          </span>
        </template>
      </job-info>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('engineeringTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'ELECTRIFY'"
            :action="action"
            :actionId="actionId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findLastIndex } from "lodash";
import { JOB } from "@/data/engineering";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: { GenericAction, ExperienceHeader, PotionHeader },
  computed: {
    jobId() {
      return "engineering";
    },
    job() {
      return JOB;
    },
    viewableTypedActionEntries() {
      let entries = this.$store.getters[this.jobId + "/filteredActionEntries"];

      let toReturn = {}; // type: [entries]
      for (let entry of entries) {
        let type = entry[1].type;
        if (!toReturn[type]) toReturn[type] = [entry];
        else toReturn[type].push(entry);
      }

      return toReturn;
    }
  }
};
</script>

<style scoped>
.type-text {
  font-size: 20;
  font-weight: bold;
  color: rgba(245, 245, 245, 0.555);
}
</style>