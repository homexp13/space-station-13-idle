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
        infoId="xenobiology"
        :icon="require('@/assets/art/jobinfo/xenobiology.png')"
        :title="$t('xenobiology.title')"
        :options="[
          {key: 'Back', name: $t('xenobiology.back')},
          {key: 'Slimes?', name: $t('xenobiology.slimesQuestion'), icon: require('@/assets/art/xenobio/SlimeGrey.gif'), iconClass:'mx--1'},
          {key: 'Slow?', name: $t('xenobiology.slowQuestion'), icon: require('@/assets/art/xenobio/upgrade1.png'), iconClass:'mx--1'},
          {key: 'Benefits?', name: $t('xenobiology.benefitsQuestion'), icon: require('@/assets/art/combat/health.gif'), iconClass:'mx--0'},
          {key: 'Command?', name: $t('xenobiology.commandQuestion'), icon: require('@/assets/art/combat/command.png'), iconClass:'mx--1'},
          {key: 'Z?', name: $t('xenobiology.zQuestion'), icon: require('@/assets/art/jobinfo/xenobiology.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>{{ $t('xenobiology.backText1') }}</span>
          <span>
            <img class="mx--1" :src="require('@/assets/art/xenobio/icon.gif')" />
            <b>{{ $t('xenobiology.backText2') }}</b>
            {{ $t('xenobiology.backText3') }}
          </span>
          <span>{{ $t('xenobiology.backText4') }}</span>
          <span>{{ $t('xenobiology.backText5') }}</span>
        </template>
        <template slot="Slimes?">
          <span>
            {{ $t('xenobiology.slimesText1') }}
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeGrey.gif')" />
            <b>{{ $t('xenobiology.slimesText2') }}</b>
            {{ $t('xenobiology.slimesText3') }}
          </span>
          <span>
            {{ $t('xenobiology.slimesText4') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>{{ $t('xenobiology.slimesText5') }}</b>
            {{ $t('xenobiology.slimesText6') }}
          </span>
          <span>
            {{ $t('xenobiology.slimesText7') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeOrange.gif')"
            />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimePurple.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeBlue.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeMetal.gif')" />
            <b>{{ $t('xenobiology.slimesText8') }}</b>
            {{ $t('xenobiology.slimesText9') }}
          </span>
          <span>
            {{ $t('xenobiology.slimesText10') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeBluespace.gif')"
            />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeSepia.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeCerulean.gif')" />
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimePyrite.gif')" />
            <b>{{ $t('xenobiology.slimesText11') }}</b>
            {{ $t('xenobiology.slimesText12') }}
          </span>
        </template>

        <template slot="Slow?">
          <span>
            {{ $t('xenobiology.slowText1') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/upgrade1.png')"
            />
            <b>{{ $t('xenobiology.slowText2') }}</b>
            {{ $t('xenobiology.slowText3') }}
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>{{ $t('xenobiology.slowText4') }}</b>
            {{ $t('xenobiology.slowText5') }}
          </span>
          <span>
            {{ $t('xenobiology.slowText6') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>{{ $t('xenobiology.slowText7') }}</b>
            {{ $t('xenobiology.slowText8') }}
          </span>
        </template>
        <template slot="Benefits?">
          <span>
            {{ $t('xenobiology.benefitsText1') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>{{ $t('xenobiology.benefitsText2') }}</b>
            {{ $t('xenobiology.benefitsText3') }}
          </span>
          <span>
            {{ $t('xenobiology.benefitsText4') }}
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeGrey.gif')" />
            <b>{{ $t('xenobiology.benefitsText5') }}</b>
            {{ $t('xenobiology.benefitsText6') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/skull.png')"
            />
            <b>{{ $t('xenobiology.benefitsText7') }}</b>
            {{ $t('xenobiology.benefitsText8') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/burn-damage.png')"
            />
            <b>{{ $t('xenobiology.benefitsText9') }}</b>
            {{ $t('xenobiology.benefitsText10') }}
            <img class="mx--1" :src="require('@/assets/art/combat/evasion.png')" />
            <b>{{ $t('xenobiology.benefitsText11') }}</b>
            {{ $t('xenobiology.benefitsText12') }}
          </span>
          <span>
            {{ $t('xenobiology.benefitsText13') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/command.png')"
            />
            <b>{{ $t('xenobiology.benefitsText14') }}</b>
            {{ $t('xenobiology.benefitsText15') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/command.png')"
            />
            <b>{{ $t('xenobiology.benefitsText16') }}</b>
            {{ $t('xenobiology.benefitsText17') }}
          </span>
        </template>
        <template slot="Command?">
          <span>
            {{ $t('xenobiology.commandText1') }}
            <img class="mx--1" :src="require('@/assets/art/xenobio/SlimeGrey.gif')" />
            <b>{{ $t('xenobiology.commandText2') }}</b>
            {{ $t('xenobiology.commandText3') }}
          </span>
          <span>
            {{ $t('xenobiology.commandText4') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/command.png')"
            />
            <b>{{ $t('xenobiology.commandText5') }}</b>
            {{ $t('xenobiology.commandText6') }}
          </span>
          <span>
            {{ $t('xenobiology.commandText7') }}
            <img class="mx--1" :src="require('@/assets/art/combat/command.png')" />
            <b>{{ $t('xenobiology.commandText8') }}</b>
            {{ $t('xenobiology.commandText9') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/xenobio/SlimeGrey.gif')"
            />
            <b>{{ $t('xenobiology.commandText10') }}</b>
            {{ $t('xenobiology.commandText11') }}
          </span>
        </template>
        <template slot="Z?">
          <span>{{ $t('xenobiology.zText') }}</span>
        </template>
      </job-info>

      <div class="tier row" v-for="(tierEntries, tier) in viewableTieredActions" :key="tier">
        <div class="col-12">
          <span class="tier-text">{{ $t('xenobiology.tier') }} {{tier+1}}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in tierEntries"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'RAISE'"
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
import { JOB } from "@/data/xenobiology";
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
      return "xenobiology";
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