<template>
  <div>

    <!-- Top bar with job icon/name (values loaded from src/data/research.js) -->
    <content-header :text="$t('jobs.' + job.id)" :icon="job.icon" :color="job.color" />


    <div class="content-container">

      <!-- XP bar and chem slot -->
      <div class="row mb-4 sticky">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="mt-2 mt-md-0 col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <!-- Tutorial box -->
      <job-info
        infoId="research"
        :icon="require('@/assets/art/jobinfo/research.png')"
        :title="$t('research.title')"
        :options="[
          {key: 'Back', name: $t('research.back')},
          {key: 'Research?', name: $t('research.researchQuestion'), icon: require('@/assets/art/research/researchIcon.png'), iconClass:'mx--0'},
          {key: 'Development?', name: $t('research.developmentQuestion'), icon: require('@/assets/art/research/protolathe.png'), iconClass:'mx--0'},
          {key: 'TOOLs?', name: $t('research.toolsQuestion'), icon: require('@/assets/art/research/tools/toolGraytiding.png'), iconClass:'mx--0'},
          {key: 'Destructive Analyzer?', name: $t('research.destructiveAnalyzerQuestion'), icon: require('@/assets/art/research/destructive_analyzer.gif'), iconClass:'mx--0'},
          {key: 'Points Bank?', name: $t('research.pointsBankQuestion'), icon: require('@/assets/art/research/points_bank.gif'), iconClass:'mx--0'},
        ]"
      >
        <template slot="Back">
          <span>
            {{ $t('research.backText1') }}
            <img
              :src="require('@/assets/art/mining/SheetDiamond.png')"
            />
            <b>{{ $t('research.backText2') }}</b>
            {{ $t('research.backText3') }}
          </span>
        </template>
        <template slot="Research?">
          <span>{{ $t('research.researchText1') }}</span>
          <span>
            {{ $t('research.researchText2') }}
            <img
              :src="require('@/assets/art/research/destructive_analyzer.gif')"
            />
            <b>{{ $t('research.researchText3') }}</b>
            {{ $t('research.researchText4') }}
          </span>
          <span>{{ $t('research.researchText5') }}</span>
        </template>
        <template slot="Development?">
          <span>
            {{ $t('research.developmentText1') }}
            <img
              :src="require('@/assets/art/research/tools/toolGraytiding.png')"
            />
            <b>{{ $t('research.developmentText2') }}</b>
            {{ $t('research.developmentText3') }}
          </span>
          <span>{{ $t('research.developmentText4') }}</span>
        </template>
        <template slot="TOOLs?">
          <span>
            {{ $t('research.toolsText1') }}
            <img
               class="mx--2" :src="require('@/assets/art/chemistry/faunaPerfume.png')" 
            />
            <b>{{ $t('research.toolsText2') }}</b>
            {{ $t('research.toolsText3') }}
          </span>
          <span>{{ $t('research.toolsText4') }}</span>
          <span>{{ $t('research.toolsText5') }}</span>
        </template>
        <template slot="Destructive Analyzer?">
          <span>{{ $t('research.destructiveAnalyzerText1') }}</span>
          <span>
            {{ $t('research.destructiveAnalyzerText2') }}
            <img
              :src="require('@/assets/art/research/destructive_analyzer.gif')"
            />
            <b>{{ $t('research.destructiveAnalyzerText3') }}</b>
            {{ $t('research.destructiveAnalyzerText4') }}
          </span>
          <span>{{ $t('research.destructiveAnalyzerText5') }}</span>
          <span>{{ $t('research.destructiveAnalyzerText6') }}</span>
        </template>
        <template slot="Points Bank?">
          <span>
            {{ $t('research.pointsBankText1') }}
            <img
              :src="require('@/assets/art/research/researchIcon.png')"
            />
            <b>{{ $t('research.pointsBankText2') }}</b>
            {{ $t('research.pointsBankText3') }}
          </span>
          <span>
            {{ $t('research.pointsBankText4') }}
            <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
            <b>{{ $t('research.pointsBankText5') }}</b>
            {{ $t('research.pointsBankText6') }}
          </span>
          <span>{{ $t('research.pointsBankText7') }}</span>
        </template>
      </job-info>

      <!-- Research bank bar -->
      <div class="row mb-2">
        <div class="col-md-8 col-lg-9 col-xl-12">
          <research-bank :color="job.color" :jobId="jobId" />
        </div>
      </div>

      <!-- Bounty Box -->
      <div class="content-block d-flex flex-column align-items-center">
        <h5>
          <img
            :src="require('@/assets/art/research/destructive_analyzer.gif')"
          />
          <b> {{ $t('research.destructiveAnalyzerTitle') }} </b>
          <img
            :src="require('@/assets/art/research/destructive_analyzer.gif')"
          />
        </h5>

        <div class="enemies w-100 mt-2">
          <research-bounty
          />
        </div>

      </div>

      <!-- Actions (generated from actions defined in src/data/research.js) -->

      <div
        class="tier row"
        v-for="(typedEntry, tier) in Object.entries(viewableTypedActionEntries)"
        :key="tier"
      >
        <div class="col-12">
          <span class="type-text text-uppercase">{{ $t('researchTypes.' + typedEntry[0]) }}</span>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2"
          v-for="[actionId, action] in typedEntry[1]"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'DEVELOP'"
            :action="action"
            :actionId="actionId"
          />
        </div>
      </div>

      <!-- Shop sections -->
      <div class="row">
        <div class="col-12">
          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { findLastIndex } from "lodash";
import { JOB } from "@/data/research";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import ResearchBank from "@/components/Content/ResearchBank";
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
import ShopSection from "@/components/Content/Shop/ShopSection";
import { SECTIONS } from "@/data/recipesShop";//Dictates which file to load shop sections from
import ResearchBounty from "@/components/Content/ResearchBounty";
export default {
  extends: ContentAbstract,
  components: { GenericAction, ExperienceHeader, ResearchBank, PotionHeader, ShopSection, ResearchBounty },
  computed: {
    jobId() {
      return "research";
    },
    job() {
      return JOB;
    },
    viewableActions() {
      return this.$store.getters[this.jobId + "/filteredActionEntries"];
    },
    sections() {//Enables shop sections to load properly
      return SECTIONS;
    },
    rndPoints() {
      return this.$store.getters["research/rndPoints"];
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
  }
};
</script>

<style scoped>
.type-text {
  font-size: 20;
  font-weight: bold;
  color: rgba(245, 245, 245, 0.555);
}
img {
  width: 32px;
}
</style>