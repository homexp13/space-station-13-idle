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
        infoId="mining"
        :icon="require('@/assets/art/jobinfo/mining.png')"
        :title="$t('mining.title')"
        :options="[
          {key: 'Back', name: $t('mining.back')},
          {key: 'Mining?', name: $t('mining.miningQuestion'), icon: require('@/assets/art/mining/icon.png'), iconClass:'mx--0'},
          {key: 'Ore?', name: $t('mining.oreQuestion'), icon: require('@/assets/art/mining/SheetIron.png'), iconClass:'mx--2'}
        ]"
      >
        <template slot="Back">
          <span>
            {{ $t('mining.backText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/icon.png')"
            />
            <b>{{ $t('action.MINE') }}</b>
            {{ $t('mining.backText2') }}
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>{{ $t('items.iron') }}</b>
            {{ $t('mining.backText3') }}
          </span>
        </template>
        <template slot="Mining?">
          <span>{{ $t('mining.miningText1') }}</span>
          <span>
            <img class="mx--0" :src="require('@/assets/art/mining/icon.png')" />
            <b>{{ $t('jobs.mining') }}</b>
            {{ $t('mining.miningText2') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/OreIron.png')"
            />
            <b>{{ $t('mining.miningText3') }}</b>
          </span>
          <span>
            {{ $t('mining.miningText4') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetIron.png')"
            />
            <b>{{ $t('items.iron') }}</b>
            {{ $t('mining.miningText5') }}
          </span>
          <span>
            {{ $t('mining.miningText6') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/OreGlass.png')"
            />
            <b>{{ $t('items.glass') }}</b>
            {{ $t('mining.miningText7') }}
            <img class="mx--2" :src="require('@/assets/art/mining/SheetGlass.png')" />
            <b>{{ $t('items.glass') }}</b>
            {{ $t('mining.miningText8') }}
          </span>
          <span>
            {{ $t('mining.miningText9') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/mining/SheetGold.png')"
            />
            <img class="mx--1" :src="require('@/assets/art/mining/SheetUranium.png')" />
            <img class="mx--1" :src="require('@/assets/art/mining/SheetDiamond.png')" />
            <b>{{ $t('mining.miningText10') }}</b>
          </span>
          <span></span>
        </template>
        <template slot="Ore?">
          <span>
            {{ $t('mining.oreText1') }}
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>{{ $t('items.iron') }}</b>
            {{ $t('mining.oreText2') }}
          </span>
          <span>{{ $t('mining.oreText3') }}</span>
          <span>
            {{ $t('mining.oreText4') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>{{ $t('jobs.fabrication') }}</b>
            {{ $t('mining.oreText5') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/gune_energy.png')"
            />
            <b>{{ $t('mining.oreText6') }}</b>
            <img
              class="mx--0"
              :src="require('@/assets/art/sidebar/cargo.png')"
            />
            <b>{{ $t('common.cargo') }}</b>
          </span>
          <span>
            {{ $t('mining.oreText8') }}
            <img class="mx--2" :src="require('@/assets/art/mining/SheetIron.png')" />
            <b>{{ $t('items.iron') }}</b>
            {{ $t('mining.oreText9') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/misc/coin-padded.png')"
            />
            <b>{{ $t('items.money') }}</b>
            {{ $t('mining.oreText10') }}
            <img class="mx--2" :src="require('@/assets/art/sidebar/backpack.png')" />
            <b>{{ $t('common.inventory') }}</b>
            {{ $t('mining.oreText11') }}
          </span>
          <span>
            {{ $t('mining.oreText12') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/upgrade1.png')"
            />
            <b>{{ $t('mining.oreText13') }}</b>
          </span>
        </template>
      </job-info>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in viewableActions"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'MINE'"
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
import { JOB } from "@/data/mining";
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
      return "mining";
    },
    job() {
      return JOB;
    },
    viewableActions() {
      return this.$store.getters[this.jobId + "/filteredActionEntries"];
    }
  }
};
</script>

<style scoped>
img {
  width: 32px;
}
</style>