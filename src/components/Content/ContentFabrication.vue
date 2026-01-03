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
        infoId="fabrication"
        :icon="require('@/assets/art/jobinfo/fabrication.png')"
        :title="$t('fabrication.title')"
        :options="[
          {key: 'Back', name: $t('fabrication.back')},
          {key: 'Resources?', name: $t('fabrication.resourcesQuestion'), icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'},
          {key: 'Guns?', name: $t('fabrication.gunsQuestion'), icon: require('@/assets/art/combat/items/gune_energy.png'), iconClass:'mx--0'},
          {key: 'Ammo?', name: $t('fabrication.ammoQuestion'), icon: require('@/assets/art/combat/items/ammo_b1.png'), iconClass:'mx--2'},
          {key: 'Mechs?', name: $t('fabrication.mechsQuestion'), icon: require('@/assets/art/fabrication/mechripley.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>{{ $t('fabrication.backText1') }}</span>
          <span>{{ $t('fabrication.backText2') }}</span>
        </template>
        <template slot="Resources?">
          <span>
            {{ $t('fabrication.resourcesText1') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetIron.png')"
            />
            <b>{{ $t('items.iron') }}</b>
            {{ $t('fabrication.resourcesText2') }}
            <img class="mx--0" :src="require('@/assets/art/engineering/power.png')" />
            <b>{{ $t('items.power') }}</b>
            {{ $t('fabrication.resourcesText3') }}
          </span>
          <span>
            {{ $t('fabrication.resourcesText4') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetIron.png')"
            />
            <b>{{ $t('items.iron') }}</b>
            {{ $t('fabrication.resourcesText5') }}
            <img class="mx--0" :src="require('@/assets/art/mining/icon.png')" />
            <b>{{ $t('jobs.mining') }}</b>
          </span>
          <span>
            {{ $t('fabrication.resourcesText7') }}
            <img class="mx--0" :src="require('@/assets/art/engineering/power.png')" />
            <b>{{ $t('items.power') }}</b>
            {{ $t('fabrication.resourcesText8') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/engineering/icon.png')"
            />
            <b>{{ $t('jobs.engineering') }}</b>
            {{ $t('fabrication.resourcesText9') }}
          </span>
        </template>
        <template slot="Guns?">
          <span>
            {{ $t('fabrication.gunsText1') }}
            <img class="mx--2" :src="require('@/assets/art/combat/items/melee_b2.png')" />
            <b>{{ $t('fabrication.gunsText2') }}</b>
            <img class="mx--2" :src="require('@/assets/art/tinkering/icon.png')" />
            <b>{{ $t('jobs.tinkering') }}</b>
            {{ $t('fabrication.gunsText3') }}
            <img class="mx--0" :src="require('@/assets/art/combat/items/gune_energy.png')" />
            <b>{{ $t('fabrication.gunsText4') }}</b>
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/precision.png')"
            />
            <b>{{ $t('fabrication.gunsText5') }}</b>
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/brute-damage.png')"
            />
            <b>{{ $t('fabrication.gunsText6') }}</b>
            <img class="mx--0" :src="require('@/assets/art/combat/burn-damage.png')" />
            <b>{{ $t('fabrication.gunsText7') }}</b>
          </span>
          <span>
            {{ $t('fabrication.gunsText8') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/ammo_b1.png')"
            />
            <b>{{ $t('fabrication.gunsText9') }}</b>
          </span>
        </template>
        <template slot="Ammo?">
          <span>
            {{ $t('fabrication.ammoText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/gune_energy.png')"
            />
            <b>{{ $t('fabrication.ammoText2') }}</b>
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/ammo_b1.png')"
            />
            <b>{{ $t('fabrication.ammoText3') }}</b>
          </span>
          <span>
            {{ $t('fabrication.ammoText4') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/ammo_b1.png')"
            />
            <b>{{ $t('fabrication.ammoText5') }}</b>
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/gune_energy.png')"
            />
            <b>{{ $t('fabrication.ammoText6') }}</b>
          </span>
        </template>
        <template slot="Mechs?">
          <span>
            {{ $t('fabrication.mechsText1') }}
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b3.png')" />
            <b>{{ $t('fabrication.mechsText2') }}</b>
            <img class="mx--2" :src="require('@/assets/art/tinkering/icon.png')" />
            <b>{{ $t('jobs.tinkering') }}</b>
            {{ $t('fabrication.mechsText3') }}
            <img class="mx--0" :src="require('@/assets/art/fabrication/mechripley.png')" />
            <b>{{ $t('fabrication.mechsText4') }}</b>
          </span>
          <span>
            {{ $t('fabrication.mechsText5') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/mechripley.png')"
            />
            <b>{{ $t('fabrication.mechsText6') }}</b>
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/black_shoes.png')"
            />
            <b>{{ $t('fabrication.mechsText7') }}</b>
            <img class="mx--0" :src="require('@/assets/art/combat/evasion.png')" />
            <b>{{ $t('fabrication.mechsText8') }}</b>
          </span>
        </template>
      </job-info>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('fabricationTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'FABRICATE'"
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
import { JOB } from "@/data/fabrication";
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
      return "fabrication";
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