<template>
  <div class="shitposting">
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
        infoId="shitposting"
        :icon="require('@/assets/art/jobinfo/shitposting.png')"
        :title="$t('shitposting.title')"
        :options="[
          {key: 'Back', name: $t('shitposting.back')},
          {key: 'Shitposting?', name: $t('shitposting.shitpostingQuestion'), icon: require('@/assets/art/shitposting/icon.png'), iconClass:'mx--1'},
          {key: 'OK?', name: $t('shitposting.okQuestion')},
          {key: 'I\'m leaving now', name: $t('shitposting.leavingQuestion')},
        ]"
      >
        <template slot="Back">
          <span>{{ $t('shitposting.backText') }}</span>
        </template>
        <template slot="Shitposting?">
          <span>{{ $t('shitposting.shitpostingText') }}</span>
        </template>
        <template slot="OK?">
          <span>{{ $t('shitposting.okText') }}</span>
        </template>
        <template slot="I'm leaving now">
          <span>{{ $t('shitposting.leavingText') }}</span>
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
            :actionName="'DISCUSS'"
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
import { JOB } from "@/data/shitposting";
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
      return "shitposting";
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
</style>