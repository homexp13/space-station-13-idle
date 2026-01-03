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
        infoId="bartending"
        :icon="require('@/assets/art/jobinfo/bartending.png')"
        :title="$t('bartending.title')"
        :options="[
          {key: 'Back', name: $t('bartending.back')},
          {key: 'Drinks?', name: $t('bartending.drinksQuestion'), icon: require('@/assets/art/bartending/arnoldpalmer.png'), iconClass:'mx--2'},
          {key: 'Mixing?', name: $t('bartending.mixingQuestion'), icon: require('@/assets/art/bartending/icon.png'), iconClass:'mx--1'},
          {key: 'Getting Drunk?', name: $t('bartending.gettingDrunkQuestion'), icon: require('@/assets/art/bartending/anim/gargleblaster.gif'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
            <i>{{ $t('bartending.backText1') }}</i>
          </span>
          <span>
            {{ $t('bartending.backText2') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/bartending/anim/singulo.gif')"
            />
            <b>
              <i>{{ $t('bartending.backText3') }}</i>
            </b>
            {{ $t('bartending.backText4') }}
          </span>
          <span>{{ $t('bartending.backText5') }}</span>
        </template>
        <template slot="Drinks?">
          <span>
            {{ $t('bartending.drinksText1') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/bartending/whiterussian.png')"
            />
            <b>{{ $t('bartending.drinksText2') }}</b>
            {{ $t('bartending.drinksText3') }}
          </span>
        </template>
        <template slot="Mixing?">
          <span>{{ $t('bartending.mixingText1') }}</span>
          <span>
            {{ $t('bartending.mixingText2') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/bartending/silencer.png')"
            />
            <b>{{ $t('bartending.mixingText3') }}</b>
            {{ $t('bartending.mixingText4') }}
          </span>
        </template>
        <template slot="Getting Drunk?">
          <span>
            {{ $t('bartending.gettingDrunkText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/bartending/anim/changelingsting.gif')"
            />
            <b>{{ $t('bartending.gettingDrunkText2') }}</b>
            {{ $t('bartending.gettingDrunkText3') }}
          </span>
        </template>
      </job-info>

      <div class="row my-3" v-if="this.$store.getters['upgrades/get']('drinkTable')">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="content-block">
            <div class="d-flex flex-row align-items-center">
              <img :src="require('@/assets/art/bartending/upgrade1.png')" />
              <h5 class="mb-1">{{ $t('common.upgrades') }}</h5>
            </div>
            <p>
              <b>{{ $t('bartending.uniqueDrinks') }}:</b>
              {{$store.getters['bartending/drinkTableCount']}}/{{$store.getters['bartending/drinkTableMax']}}
            </p>
            <p>
              <b>{{ $t('bartending.bonus') }}:</b>
              {{(100*$store.getters["bartending/drinkTableBonus"]).toFixed()}}%
            </p>
          </div>
        </div>
      </div>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('bartendingTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action :jobId="jobId" :actionName="'MIX'" :action="action" :actionId="actionId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findLastIndex } from "lodash";
import { JOB } from "@/data/bartending";
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
      return "bartending";
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