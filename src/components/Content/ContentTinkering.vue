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
        infoId="tinkering"
        :icon="require('@/assets/art/jobinfo/tinkering.png')"
        :title="$t('tinkering.title')"
        :options="[
          {key: 'Back', name: $t('tinkering.back')},
          {key: 'Junk?', name: $t('tinkering.junkQuestion'), icon: require('@/assets/art/graytiding/junk.png'), iconClass:'mx--0'},
          {key: 'Recycling?', name: $t('tinkering.recyclingQuestion'), icon: require('@/assets/art/tinkering/burnjunk.png'), iconClass:'mx--0'},
          {key: 'Weaponsss?', name: $t('tinkering.weaponsQuestion'), icon: require('@/assets/art/combat/items/melee_c4.png'), iconClass:'mx--1'},
          {key: 'Armor?', name: $t('tinkering.armorQuestion'), icon: require('@/assets/art/combat/items/arm_b2.png'), iconClass:'mx--1'}
        ]"
      >
        <template slot="Back">
          <span>
            {{ $t('tinkering.backText1') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/fabrication/icon.png')"
            />
            <b>{{ $t('tinkering.backText2') }}</b>
            {{ $t('tinkering.backText3') }}
          </span>
          <span>
            {{ $t('tinkering.backText4') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/melee_c4.png')"
            />
            <b>{{ $t('tinkering.backText5') }}</b>
            {{ $t('tinkering.backText6') }}
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b2.png')" />
            <b>{{ $t('tinkering.backText7') }}</b>
            {{ $t('tinkering.backText8') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>{{ $t('tinkering.backText9') }}</b>
            {{ $t('tinkering.backText10') }}
          </span>
        </template>
        <template slot="Junk?">
          <span>
            <img class="mx--0" :src="require('@/assets/art/graytiding/junk.png')" />
            <b>{{ $t('tinkering.junkText1') }}</b>
          </span>
          <span>
            {{ $t('tinkering.junkText2') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>{{ $t('tinkering.junkText3') }}</b>
            {{ $t('tinkering.junkText4') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/items/melee_c4.png')"
            />
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b2.png')" />
            <b>{{ $t('tinkering.junkText5') }}</b>
            {{ $t('tinkering.junkText6') }}
          </span>
          <span>
            {{ $t('tinkering.junkText7') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/junk.png')"
            />
            <b>{{ $t('tinkering.junkText8') }}</b>
            {{ $t('tinkering.junkText9') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/graytiding/icon.png')"
            />
            <b>{{ $t('tinkering.junkText10') }}</b>
            {{ $t('tinkering.junkText11') }}
          </span>
        </template>
        <template slot="Recycling?">
          <span>
            {{ $t('tinkering.recyclingText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/tinkering/burnjunk.png')"
            />
            <b>{{ $t('tinkering.recyclingText2') }}</b>
            {{ $t('tinkering.recyclingText3') }}
          </span>
          <span>
            {{ $t('tinkering.recyclingText4') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/engineering/power.png')"
            />
            <b>{{ $t('tinkering.recyclingText5') }}</b>
            {{ $t('tinkering.recyclingText6') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/engineering/icon.png')"
            />
            <b>{{ $t('tinkering.recyclingText7') }}</b>
            {{ $t('tinkering.recyclingText8') }}
          </span>
        </template>
        <template slot="Weaponsss?">
          <span>
            {{ $t('tinkering.weaponsText1') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/melee_c4.png')"
            />
            <b>{{ $t('tinkering.weaponsText2') }}</b>
            {{ $t('tinkering.weaponsText3') }}
          </span>
          <span>
            {{ $t('tinkering.weaponsText4') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/items/gune_energy.png')"
            />
            <b>{{ $t('tinkering.weaponsText5') }}</b>
            {{ $t('tinkering.weaponsText6') }}
          </span>
        </template>
        <template slot="Armor?">
          <span>
            {{ $t('tinkering.armorText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/fabrication/mechripley.png')"
            />
            <b>{{ $t('tinkering.armorText2') }}</b>
            {{ $t('tinkering.armorText3') }}
          </span>
          <span>
            {{ $t('tinkering.armorText4') }}
            <img class="mx--2" :src="require('@/assets/art/combat/items/arm_b3.png')" />
            <b>{{ $t('tinkering.armorText5') }}</b>
            {{ $t('tinkering.armorText6') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/black_shoes.png')"
            />
            <b>{{ $t('tinkering.armorText7') }}</b>
            {{ $t('tinkering.armorText8') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/evasion.png')"
            />
            <b>{{ $t('tinkering.armorText9') }}</b>
            {{ $t('tinkering.armorText10') }}
          </span>
        </template>
      </job-info>

      <div class="row my-3" v-if="this.$store.getters['upgrades/get']('tinkeringSpirits')">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="content-block">
            <div class="d-flex flex-row align-items-center">
              <img :src="require('@/assets/art/tinkering/upgrade1.png')" />
              <h5 class="mb-1">{{ $t('common.upgrades') }}</h5>
            </div>
            <p>
              <b>{{ $t('tinkering.streak') }}:</b>
              {{$store.getters['tinkering/streak']}}
            </p>
            <p>
              <b>{{ $t('tinkering.bonus') }}:</b>
              {{(100*$store.getters["tinkering/streakBonus"]).toFixed()}}% / {{(100*$store.getters["tinkering/streakCap"]).toFixed()}}%
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
          <span class="type-text text-uppercase">{{ $t('tinkeringTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'CRAFT'"
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
import { JOB } from "@/data/tinkering";
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
      return "tinkering";
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