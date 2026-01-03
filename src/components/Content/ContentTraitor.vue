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
        infoId="traitor"
        :icon="require('@/assets/art/jobinfo/traitor.png')"
        :title="$t('traitor.title')"
        :options="[
          {key: 'Back', name: $t('traitor.back')},
          {key: 'Telecrystal?', name: $t('traitor.telecrystalQuestion'), icon: require('@/assets/art/shop/items/telecrystal.png'), iconClass:'mx--0'},
          {key: 'Extra?', name: $t('traitor.extraQuestion'), icon: require('@/assets/art/traitor/telecrystal.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
            {{ $t('traitor.backText1') }}
            <img
              :src="require('@/assets/art/shop/items/telecrystal.png')"
              class="mx--2"
            />
            <b>{{ $t('traitor.backText2') }}</b>
            {{ $t('traitor.backText3') }}
          </span>
          <span>
            {{ $t('traitor.backText4') }}
            <img
              :src="require('@/assets/art/traitor/telecrystal.png')"
              class="mx--2"
            />
            <b>{{ $t('traitor.backText5') }}</b>
            {{ $t('traitor.backText6') }}
          </span>
        </template>
        <template slot="Telecrystal?">
          <span>{{ $t('traitor.telecrystalText1') }}</span>
          <span>{{ $t('traitor.telecrystalText2') }}</span>
          <span>
            {{ $t('traitor.telecrystalText3') }}
            <img
              :src="require('@/assets/art/traitor/telecrystal.png')"
              class="mx--2"
            />
            <b>{{ $t('traitor.telecrystalText4') }}</b>
            {{ $t('traitor.telecrystalText5') }}
          </span>
        </template>

        <template slot="Extra?">
          <span>
            {{ $t('traitor.extraText1') }}
            <img
              :src="require('@/assets/art/combat/enemies/boss/OPl6.png')"
            />
            <b>{{ $t('traitor.extraText2') }}</b>
            {{ $t('traitor.extraText3') }}
          </span>
        </template>
      </job-info>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('traitorTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'PURCHASE'"
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
import { JOB } from "@/data/traitor";
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
      return "traitor";
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