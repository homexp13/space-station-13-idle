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
        infoId="chemistry"
        :icon="require('@/assets/art/jobinfo/chemistry.png')"
        :title="$t('chemistry.title')"
        :options="[
          {key: 'Back', name: $t('chemistry.back')},
          {key: 'Power?', name: $t('chemistry.powerQuestion'), icon: require('@/assets/art/engineering/power.png'), iconClass:'mx--0'},
          {key: 'Bases?', name: $t('chemistry.basesQuestion'), icon: require('@/assets/art/chemistry/chemOil.png'), iconClass:'mx--1'},
          {key: 'CHEMs?', name: $t('chemistry.chemsQuestion'), icon: require('@/assets/art/chemistry/faunaPerfume.png'), iconClass:'mx--1'},
          {key: 'Pills?', name: $t('chemistry.pillsQuestion'), icon: require('@/assets/art/combat/items/pill1.png'), iconClass:'mx--0'},
        ]"
      >
        <template slot="Back">
          <span>{{ $t('chemistry.backText1') }}</span>
          <span>{{ $t('chemistry.backText2') }}</span>
        </template>
        <template slot="Power?">
          <span>
            {{ $t('chemistry.powerText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>{{ $t('chemistry.powerText2') }}</b>
            {{ $t('chemistry.powerText3') }}
          </span>
          <span>
            {{ $t('chemistry.powerText4') }}
            <i>{{ $t('chemistry.powerText5') }}</i>
            {{ $t('chemistry.powerText6') }}
            <img class="mx--2" :src="require('@/assets/art/engineering/icon.png')" />
            <b>{{ $t('chemistry.powerText7') }}</b>
            {{ $t('chemistry.powerText8') }}
          </span>
        </template>
        <template slot="Bases?">
          <span>
            {{ $t('chemistry.basesText1') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/faunaPerfume.png')"
            />
            <b>{{ $t('chemistry.basesText2') }}</b>
            {{ $t('chemistry.basesText3') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/chemOil.png')"
            />
            <b>{{ $t('chemistry.basesText4') }}</b>
            {{ $t('chemistry.basesText5') }}
          </span>
          <span>
            {{ $t('chemistry.basesText6') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chemistry/upgrade1.png')"
            />
            <b>{{ $t('chemistry.basesText7') }}</b>
            {{ $t('chemistry.basesText8') }}
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>{{ $t('chemistry.basesText9') }}</b>
            {{ $t('chemistry.basesText10') }}
          </span>
        </template>
        <template slot="CHEMs?">
          <span>
            <img class="mx--2" :src="require('@/assets/art/chemistry/faunaPerfume.png')" />
            <b>{{ $t('chemistry.chemsText1') }}</b>
            {{ $t('chemistry.chemsText2') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/icon.png')"
            />
            <img class="mx--0" :src="require('@/assets/art/engineering/icon.png')" />
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>{{ $t('chemistry.chemsText3') }}</b>
            {{ $t('chemistry.chemsText4') }}
          </span>
          <span>
            {{ $t('chemistry.chemsText5') }}
            <img class="mx--2" :src="require('@/assets/art/chemistry/faunaPerfume.png')" />
            <b>{{ $t('chemistry.chemsText6') }}</b>
            {{ $t('chemistry.chemsText7') }}
          </span>
          <span>
            {{ $t('chemistry.chemsText8') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/chemistry/faunaPerfume.png')"
            />
            <b>{{ $t('chemistry.chemsText9') }}</b>
            {{ $t('chemistry.chemsText10') }}
          </span>
        </template>
        <template slot="Pills?">
          <span>{{ $t('chemistry.pillsText1') }}</span>
          <span>
            {{ $t('chemistry.pillsText2') }}
            <img class="mx--2" :src="require('@/assets/art/chemistry/icon.png')" />
            <b>{{ $t('chemistry.pillsText3') }}</b>
            {{ $t('chemistry.pillsText4') }}
            <i>{{ $t('chemistry.pillsText5') }}</i>
            {{ $t('chemistry.pillsText6') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/pill1.png')"
            />
            <b>{{ $t('chemistry.pillsText7') }}</b>
            {{ $t('chemistry.pillsText8') }}
          </span>
          <span>
            {{ $t('chemistry.pillsText9') }}
            <i>{{ $t('chemistry.pillsText10') }}</i>
            {{ $t('chemistry.pillsText11') }}
            <img class="mx--2" :src="require('@/assets/art/combat/items/pill1.png')" />
            <b>{{ $t('chemistry.pillsText12') }}</b>
            {{ $t('chemistry.pillsText13') }}
            <img class="mx--0" :src="require('@/assets/art/combat/precision.png')" />
            <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
            <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
            <b>{{ $t('chemistry.pillsText14') }}</b>
            {{ $t('chemistry.pillsText15') }}
            <img class="mx--2" :src="require('@/assets/art/combat/items/melee_c4.png')" />
            <b>{{ $t('chemistry.pillsText16') }}</b>
            {{ $t('chemistry.pillsText17') }}
          </span>
          <span>{{ $t('chemistry.pillsText18') }}</span>
          <span>{{ $t('chemistry.pillsText19') }}</span>
        </template>
      </job-info>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('chemistryTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'SYNTHESIZE'"
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
import { JOB } from "@/data/chemistry";
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
      return "chemistry";
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