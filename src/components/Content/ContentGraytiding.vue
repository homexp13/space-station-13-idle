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
        infoId="graytiding"
        :icon="require('@/assets/art/jobinfo/graytiding.png')"
        :title="$t('graytiding.title')"
        :options="[
          {key: 'Back', name: $t('graytiding.back')},
          {key: '&quot;Graytiding&quot;?', name: $t('graytiding.graytidingQuestion'), icon: require('@/assets/art/graytiding/icon.png'), iconClass:'mx--0'},
          {key: 'Loot?', name: $t('graytiding.lootQuestion'), icon: require('@/assets/art/graytiding/junk.png'), iconClass:'mx--0'},
          {key: 'Risk?', name: $t('graytiding.riskQuestion'), icon: require('@/assets/art/jobinfo/shitcurity.png'), iconClass:'mx--1'},
          {key: '&quot;Cleaning&quot;?', name: $t('graytiding.cleaningQuestion'), icon: require('@/assets/art/jobinfo/janitor.png'), iconClass:'mx--1'},
        ]"
      >
        <template slot="Back">
          <span>
            {{ $t('graytiding.backText1') }}
            <img class="mx--0" :src="require('@/assets/art/graytiding/icon.png')" />
            <b>{{ $t('graytiding.backText2') }}</b>
            {{ $t('graytiding.backText3') }}
            <i>{{ $t('graytiding.backText4') }}</i>
            {{ $t('graytiding.backText5') }}
          </span>
          <span>{{ $t('graytiding.backText6') }}</span>
          <span>{{ $t('graytiding.backText7') }}</span>
        </template>
        <template slot="&quot;Graytiding&quot;?">
          <span>{{ $t('graytiding.graytidingText1') }}</span>
          <span>{{ $t('graytiding.graytidingText2') }}</span>
          <span>
            <img class="mx--0" :src="require('@/assets/art/jobinfo/shitcurity.png')" />
            <b>{{ $t('graytiding.graytidingText3') }}</b>
            {{ $t('graytiding.graytidingText4') }}
            <i>{{ $t('graytiding.graytidingText5') }}</i>
          </span>
        </template>
        <template slot="Loot?">
          <span>
            {{ $t('graytiding.lootText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>{{ $t('graytiding.lootText2') }}</b>
            {{ $t('graytiding.lootText3') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/jobinfo/shitcurity.png')"
            />
            <b>{{ $t('graytiding.lootText4') }}</b>
            {{ $t('graytiding.lootText5') }}
          </span>
          <span>
            {{ $t('graytiding.lootText6') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/tinkering/icon.png')"
            />
            <b>{{ $t('graytiding.lootText7') }}</b>
          </span>
          <span>
            {{ $t('graytiding.lootText8') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/Mining.png')"
            />
            <b>{{ $t('graytiding.lootText9') }}</b>
            {{ $t('graytiding.lootText10') }}
          </span>
          <span>
            {{ $t('graytiding.lootText11') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/limb/glove_yellow.png')"
            />
            <b>{{ $t('graytiding.lootText12') }}</b>
            {{ $t('graytiding.lootText13') }}
            <img class="mx--2" :src="require('@/assets/art/combat/items/limb/shoe_jackboots.png')" />
            <b>{{ $t('graytiding.lootText14') }}</b>
            {{ $t('graytiding.lootText15') }}
          </span>
        </template>
        <template slot="Risk?">
          <span>{{ $t('graytiding.riskText1') }}</span>
          <span>
            {{ $t('graytiding.riskText2') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/jobinfo/shitcurity.png')"
            />
            <b>{{ $t('graytiding.riskText3') }}</b>
            {{ $t('graytiding.riskText4') }}
          </span>
          <span>
            {{ $t('graytiding.riskText5') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/cooking/burger1.png')"
            />
            <b>{{ $t('graytiding.riskText6') }}</b>
            {{ $t('graytiding.riskText7') }}
            <img class="mx--0" :src="require('@/assets/art/combat/health.gif')" />
            <b>{{ $t('graytiding.riskText8') }}</b>
            {{ $t('graytiding.riskText9') }}
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>{{ $t('graytiding.riskText10') }}</b>
            {{ $t('graytiding.riskText11') }}
            <img class="mx--0" :src="require('@/assets/art/cooking/icon.png')" />
            <b>{{ $t('graytiding.riskText12') }}</b>
            {{ $t('graytiding.riskText13') }}
          </span>
          <span>
            {{ $t('graytiding.riskText14') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/upgrades/autoeat.png')"
            />
            <b>{{ $t('graytiding.riskText15') }}</b>
            {{ $t('graytiding.riskText16') }}
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>{{ $t('graytiding.riskText17') }}</b>
          </span>
        </template>
        <template slot="&quot;Cleaning&quot;?">
          <span>
            {{ $t('graytiding.cleaningText1') }}
            <img class="mx--0" :src="require('@/assets/art/graytiding/icon.png')" />
            <b>{{ $t('graytiding.cleaningText2') }}</b>
            {{ $t('graytiding.cleaningText3') }}
          </span>
          <span>
            {{ $t('graytiding.cleaningText4') }}
            <img class="mx--0" :src="require('@/assets/art/jobinfo/janitor.png')" />
            <b>{{ $t('graytiding.cleaningText5') }}</b>
          </span>
          <span>
            {{ $t('graytiding.cleaningText6') }}
            <img class="mx--0" :src="require('@/assets/art/chemistry/lube.png')" />
            <b>{{ $t('graytiding.cleaningText7') }}</b>
            {{ $t('graytiding.cleaningText8') }}
          </span>
          <span>
            {{ $t('graytiding.cleaningText9') }}
            <img class="mx--0" :src="require('@/assets/art/research/galoshes.png')" />
            <b>{{ $t('graytiding.cleaningText10') }}</b>
            {{ $t('graytiding.cleaningText11') }}
            {{ $t('graytiding.cleaningText12') }}
            <img class="mx--0" :src="require('@/assets/art/research/researchJobIcon.png')" />
            <b>{{ $t('graytiding.cleaningText13') }}</b>
            {{ $t('graytiding.cleaningText14') }}
          </span>
        </template>
      </job-info>


      <!-- Health/food box -->
      <div class="row food my-2">
        <div class="col-12 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
          <div class="content-block">
            <progress-bar
              class="mb-2 black-background"
              :progress="health / maxHealth"
              :text="`${Math.round(health)}/${maxHealth}`"
              :customClass="'bg-danger'"
            />
            <food-panel />
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('graytidingTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'GRAYTIDE'"
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
import { JOB } from "@/data/graytiding";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import GenericAction from "@/components/Content/GenericAction";
import PotionHeader from "@/components/Content/PotionHeader";
import ProgressBar from "@/components/ProgressBar";
import FoodPanel from "@/components/Content/Combat/FoodPanel";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: {
    GenericAction,
    ExperienceHeader,
    PotionHeader,
    ProgressBar,
    FoodPanel
  },
  computed: {
    jobId() {
      return "graytiding";
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
    health() {
      return this.$store.getters["playerMob/health"];
    },
    maxHealth() {
      return this.$store.getters["playerMob/stats"].maxHealth;
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