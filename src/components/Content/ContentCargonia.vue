<template>
  <div>
    <content-header :text="$t('jobs.' + job.id)" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-2 sticky">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="mt-2 mt-md-0 col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>
      <job-info
        infoId="cargonia"
        :icon="require('@/assets/art/jobinfo/shop.png')"
        :title="$t('cargonia.title')"
        :options="[
          {key: 'Back', name: $t('cargonia.back')},
          {key: 'Join', name: $t('cargonia.join'), icon: require('@/assets/art/jobinfo/cargonia.png'), iconClass:'mx--0'},
          {key: 'Money?', name: $t('cargonia.moneyQuestion'), icon: require('@/assets/art/misc/coin.png'), iconClass:'mx--0'}
        ]"
      >
        <template slot="Back">
          <span>
            {{ $t('cargonia.backText1') }}
            <img
              :src="require('@/assets/art/cargonia/mineral2.png')"
              class="mx--0"
            />
            <b>{{ $t('cargonia.backText2') }}</b>
            {{ $t('cargonia.backText3') }}
          </span>
          <span>
            {{ $t('cargonia.backText4') }}
            <img
              :src="require('@/assets/art/combat/items/hand/gunR_naggant.png')"
              class="mx--0"
            />
            <b>{{ $t('cargonia.backText5') }}</b>
            {{ $t('cargonia.backText6') }}
            <img
              :src="require('@/assets/art/validhunting/guilty.png')"
              class="mx--2"
            />
            <b>{{ $t('cargonia.backText7') }}</b>
            {{ $t('cargonia.backText8') }}
          </span>
        </template>
        <template slot="Join">
          <span>
            {{ $t('cargonia.joinText1') }}
            <img
              :src="require('@/assets/art/misc/logo-square.png')"
            />
            <b>{{ $t('cargonia.joinText2') }}</b>
            {{ $t('cargonia.joinText3') }}
          </span>
          <span>
            {{ $t('cargonia.joinText4') }}
            <img :src="require('@/assets/art/shop/items/startcargonia.png')" class="mx--0" />
            <b>{{ $t('cargonia.joinText5') }}</b>
            {{ $t('cargonia.joinText6') }}
            <img :src="require('@/assets/art/shop/items/droppod.png')" class="mx--0"/>
            <b>{{ $t('cargonia.joinText7') }}</b>
            {{ $t('cargonia.joinText8') }}
          </span>
        </template>

        <template slot="Money?">
          <span>{{ $t('cargonia.moneyText1') }}</span>
          <span>{{ $t('cargonia.moneyText2') }}</span>
          <span>
            {{ $t('cargonia.moneyText3') }}
            <img
              :src="require('@/assets/art/shop/items/hatcrate.png')"
            />
            <b>{{ $t('cargonia.moneyText4') }}</b>
            {{ $t('cargonia.moneyText5') }}
          </span>
        </template>
      </job-info>

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('cargoniaTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'SMUGGLE'"
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
import { JOB } from "@/data/cargonia";
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
      return "cargonia";
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