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
        infoId="ling"
        :icon="require('@/assets/art/jobinfo/ling_anim.gif')"
        :title="$t('ling.title')"
        :options="[
          {key: 'Back', name: $t('ling.back')},
          {key: 'Ook?', name: $t('ling.ookQuestion'), icon: require('@/assets/art/jobinfo/ling_anim.gif'), iconClass:'mx--0'},
          {key: 'Cultivate', name: $t('ling.cultivate'), icon: require('@/assets/art/jobinfo/heart_anim.gif'), iconClass:'mx--0'},
          {key: 'Parasite', name: $t('ling.parasite'), icon: require('@/assets/art/ling/headcrab.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>{{ $t('ling.backText') }}</span>
        </template>
        <template slot="Ook?">
          <span>
            {{ $t('ling.ookText1') }}
            <img
              :src="require('@/assets/art/jobinfo/heart_anim.gif')"
              class="mx--2"
            />
            <b>{{ $t('ling.ookText2') }}</b>
            {{ $t('ling.ookText3') }}
            <img :src="require('@/assets/art/ling/headcrab.png')" class="mx--1" />
            <b>{{ $t('ling.ookText4') }}</b>
          </span>
          <span>{{ $t('ling.ookText5') }}</span>
        </template>
        <template slot="Cultivate">
          <span>{{ $t('ling.cultivateText1') }}</span>
          <span>
            {{ $t('ling.cultivateText2') }}
            <img
              :src="require('@/assets/art/cooking/meatAnimal.png')"
              class="mx--0"
            />
            <b>{{ $t('ling.cultivateText3') }}</b>
            {{ $t('ling.cultivateText4') }}
          </span>
          <span>{{ $t('ling.cultivateText5') }}</span>
        </template>
        <template slot="Parasite">
          <span>{{ $t('ling.parasiteText1') }}</span>
          <span>
            {{ $t('ling.parasiteText2') }}
            <img
              :src="require('@/assets/art/shop/items/seccrate.png')"
              class="mx--0"
            />
            <b>{{ $t('ling.parasiteText3') }}</b>
            {{ $t('ling.parasiteText4') }}
          </span>
          <span>
            {{ $t('ling.parasiteText5') }}
            <b>{{ $t('ling.parasiteText6') }}</b>
          </span>
        </template>
      </job-info>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('lingTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'FORM'"
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
import { JOB } from "@/data/ling";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: {
    GenericAction,
    ExperienceHeader,
    PotionHeader
  },
  computed: {
    jobId() {
      return "ling";
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