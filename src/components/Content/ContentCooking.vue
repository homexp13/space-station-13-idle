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
        infoId="cooking"
        :icon="require('@/assets/art/jobinfo/cooking.png')"
        :title="$t('cooking.title')"
        :options="[
          {key: 'Back', name: $t('cooking.back')},
          {key: 'Produce?', name: $t('cooking.produceQuestion'), icon: require('@/assets/art/botany/PlantPepperhot.png'), iconClass:'mx--2'},
          {key: 'Meat?', name: $t('cooking.meatQuestion'), icon: require('@/assets/art/cooking/meatAnimal.png'), iconClass:'mx--1'},
          {key: 'Quality?', name: $t('cooking.qualityQuestion'), icon: require('@/assets/art/cooking/upgrade1.png'), iconClass:'mx--0'},
          {key: 'Cannibalism?', name: $t('cooking.cannibalismQuestion'), icon: require('@/assets/art/cooking/meatFoot.png'), iconClass:'mx--2'}
        ]"
      >
        <template slot="Back">
          <span>
            <i>{{ $t('cooking.backText1') }}</i>
            <img
              class="mx--2"
              :src="require('@/assets/art/cooking/pasta1.png')"
            />
            <b>
              <i>{{ $t('cooking.backText2') }}</i>
            </b>
            {{ $t('cooking.backText3') }}
          </span>
        </template>
        <template slot="Produce?">
          <span>
            {{ $t('cooking.produceText1') }}
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>{{ $t('jobs.botany') }}</b>
            {{ $t('cooking.produceText2') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/botany/PlantPepperhot.png')"
            />
            <b>{{ $t('cooking.produceText3') }}</b>
            <i>{{ $t('cooking.produceText4') }}</i>
          </span>
        </template>
        <template slot="Meat?">
          <span>{{ $t('cooking.meatText1') }}</span>
          <span>
            {{ $t('cooking.meatText2') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/cooking/meatAnimal.png')"
            />
            <b>{{ $t('cooking.meatText3') }}</b>
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/enemies/pete.png')"
            />
            <b>{{ $t('cooking.meatText4') }}</b>
          </span>
          <span>
            <i>{{ $t('cooking.meatText5') }}</i>
          </span>
        </template>
        <template slot="Quality?">
          <span>
            {{ $t('cooking.qualityText1') }}
            <img class="mx--2" :src="require('@/assets/art/cooking/upgrade1.png')" />
            <b>{{ $t('cooking.qualityText2') }}</b>
            <i>{{ $t('cooking.qualityText3') }}</i>
          </span>
          <span>
            {{ $t('cooking.qualityText4') }}
            <img class="mx--2" :src="require('@/assets/art/misc/coin-padded.png')" />
            <b>{{ $t('cooking.qualityText5') }}</b>
            <img class="mx--0" :src="require('@/assets/art/combat/health.gif')" />
            <b>{{ $t('cooking.qualityText6') }}</b>
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/precision.png')"
            />
            <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
            <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
            <b>{{ $t('cooking.qualityText7') }}</b>
          </span>
          <span>
            <i>{{ $t('cooking.qualityText8') }}</i>
          </span>
        </template>
        <template slot="Cannibalism?">
          <span>
            <i>{{ $t('cooking.cannibalismText1') }}</i>
            <img
              class="mx--0"
              :src="require('@/assets/art/jobinfo/shitcurity.png')"
            />
            <b>
              <i>{{ $t('cooking.cannibalismText2') }}</i>
            </b>
            {{ $t('cooking.cannibalismText3') }}
          </span>
          <span>
            {{ $t('cooking.cannibalismText4') }}
            <i>{{ $t('cooking.cannibalismText5') }}</i>
          </span>
        </template>
      </job-info>

      <div class="row my-3" v-if="this.$store.getters['upgrades/get']('fryCooking')">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="content-block">
            <div class="d-flex flex-row align-items-center">
              <img :src="require('@/assets/art/cooking/upgrade1.png')" />
              <h5 class="mb-1">{{ $t('common.upgrades') }}</h5>
            </div>
            <div class="custom-control custom-switch mt-1">
              <input
                v-model="upgradeEnabled"
                type="checkbox"
                class="custom-control-input"
                id="fryCookingEnabled"
              />
              <label class="custom-control-label" for="fryCookingEnabled">{{ $t('cooking.fryCookingEnabled') }}</label>
            </div>
          </div>
        </div>
      </div>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('cookingTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'COOK'"
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
import { JOB } from "@/data/cooking";
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
      return JOB.id;
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
		},
    upgradeEnabled: {
      get() {
        return this.$store.getters["cooking/upgradeEnabled"];
      },
      set(value) {
        this.$store.commit("cooking/setUpgradeEnabled", value);
      }
    },
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