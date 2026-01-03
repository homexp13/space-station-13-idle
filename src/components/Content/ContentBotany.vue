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
        infoId="botany"
        :icon="require('@/assets/art/jobinfo/botany.png')"
        :title="$t('botany.title')"
        :options="[
          {key: 'Back', name: $t('botany.back')},
          {key: 'Seeds?', name: $t('botany.seedsQuestion'), icon: require('@/assets/art/botany/seed.png'), iconClass:'mx--2'},
          {key: 'Plants?', name: $t('botany.plantsQuestion'), icon: require('@/assets/art/botany/PlantPepperhot.png'), iconClass:'mx--2'},
          {key: 'Stats?', name: $t('botany.statsQuestion'), icon: require('@/assets/art/combat/precision.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
            {{ $t('botany.backText1') }}
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>{{ $t('botany.backText2') }}</b>
            {{ $t('botany.backText3') }}
          </span>
          <span>
            {{ $t('botany.backText4') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>{{ $t('botany.backText5') }}</b>
            {{ $t('botany.backText6') }}
          </span>
        </template>
        <template slot="Seeds?">
          <span>
            {{ $t('botany.seedsText1') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>{{ $t('botany.seedsText2') }}</b>
            {{ $t('botany.seedsText3') }}
          </span>
          <span>
            {{ $t('botany.seedsText4') }}
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>{{ $t('botany.seedsText5') }}</b>
            {{ $t('botany.seedsText6') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/misc/coin-padded.png')"
            />
            <b>{{ $t('botany.seedsText7') }}</b>
            {{ $t('botany.seedsText8') }}
          </span>
        </template>
        <template slot="Plants?">
          <span>
            {{ $t('botany.plantsText1') }}
            <img class="mx--2" :src="require('@/assets/art/botany/PlantPepperhot.png')" />
            <b>{{ $t('botany.plantsText2') }}</b>
            {{ $t('botany.plantsText3') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/health.gif')"
            />
            <b>{{ $t('botany.plantsText4') }}</b>
            {{ $t('botany.plantsText5') }}
          </span>
          <span>
            {{ $t('botany.plantsText6') }}
            <i>{{ $t('botany.plantsText7') }}</i>
            {{ $t('botany.plantsText8') }}
            <img class="mx--2" :src="require('@/assets/art/cooking/icon.png')" />
            <b>{{ $t('botany.plantsText9') }}</b>
            {{ $t('botany.plantsText10') }}
          </span>
        </template>
        <template slot="Stats?">
          <span>{{ $t('botany.statsText1') }}</span>
          <span>
            {{ $t('botany.statsText2') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>{{ $t('botany.statsText3') }}</b>
            {{ $t('botany.statsText4') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/precision.png')"
            />
            <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
            <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
            <b>{{ $t('botany.statsText5') }}</b>
            {{ $t('botany.statsText6') }}
          </span>
          <span>
            {{ $t('botany.statsText7') }}
            <img class="mx--0" :src="require('@/assets/art/combat/precision.png')" />
            <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
            <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
            <b>{{ $t('botany.statsText8') }}</b>
            {{ $t('botany.statsText9') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>{{ $t('botany.statsText10') }}</b>
            {{ $t('botany.statsText11') }}
          </span>
        </template>
      </job-info>

      <div class="row my-3" v-if="this.$store.getters['upgrades/get']('botanyTrays')">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="content-block">
            <div class="d-flex flex-row align-items-center">
              <img :src="require('@/assets/art/botany/upgrade1.png')" />
              <h5 class="mb-1">{{ $t('common.upgrades') }}</h5>
            </div>
            <div class="custom-control custom-switch mt-1">
              <input
                v-model="upgradeLeftEnabled"
                type="checkbox"
                class="custom-control-input"
                id="upgradeLeftEnabled"
              />
              <label class="custom-control-label" for="upgradeLeftEnabled">{{ $t('botany.upgradeLeftEnabled') }}</label>
            </div>
            <div
              class="custom-control custom-switch mt-1"
              v-if="this.$store.getters['upgrades/get']('botanyTrays') > 1"
            >
              <input
                v-model="upgradeRightEnabled"
                type="checkbox"
                class="custom-control-input"
                id="upgradeRightEnabled"
              />
              <label class="custom-control-label" for="upgradeRightEnabled">{{ $t('botany.upgradeRightEnabled') }}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="tier row" v-for="(tierEntries, tier) in viewableTieredActions" :key="tier">
        <div class="col-12">
          <span class="tier-text">{{ $t('botany.tier') }} {{tier+1}}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in tierEntries"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'GROW'"
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
import { JOB } from "@/data/botany";
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
      return "botany";
    },
    job() {
      return JOB;
    },
    viewableTieredActions() {
      let entries = this.$store.getters[this.jobId + "/filteredActionEntries"];

      let highestTier = 0;
      entries.forEach(entry => {
        highestTier = Math.max(entry[1].tier, 0);
      });
      let tiers = [];
      for (let t = 0; t < highestTier; t++) tiers.push([]);

      for (let entry of entries) {
        let tier = entry[1].tier;
        tiers[tier - 1].push(entry);
      }

      return tiers;
    },
    upgradeLeftEnabled: {
      get() {
        return this.$store.getters["botany/upgradeLeftEnabled"];
      },
      set(value) {
        this.$store.commit("botany/setUpgradeLeftEnabled", value);
      }
    },
    upgradeRightEnabled: {
      get() {
        return this.$store.getters["botany/upgradeRightEnabled"];
      },
      set(value) {
        this.$store.commit("botany/setUpgradeRightEnabled", value);
      }
    }
  }
};
</script>

<style scoped>
.tier-text {
  font-size: 20;
  font-weight: bold;
  color: rgba(245, 245, 245, 0.555);
}
</style>