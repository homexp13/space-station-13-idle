<template>
  <div class="content-settings">
    <content-header
      :text="$t('common.chronosphere')"
      :icon="require('@/assets/art/chrono/icon.png')"
      color="#3ac5ff"
    />
    <div class="content-container">
      <job-info
        infoId="chronosphere1"
        :icon="require('@/assets/art/jobinfo/chronosphere.png')"
        :title="$t('chronosphere.title')"
        :options="[
					{key: 'Back', name: $t('chronosphere.back')},
					{key: 'Time Bank?', name: $t('chronosphere.timeBankQuestion'), icon: require('@/assets/art/chrono/timebank.png'), iconClass:'mx--0'},
					{key: 'Simulation Reset?', name: $t('chronosphere.simulationResetQuestion'), icon: require('@/assets/art/chrono/bluetime-empty.png'), iconClass:'mx--1'},
					{key: 'Chrono Shop?', name: $t('chronosphere.chronoShopQuestion'), icon: require('@/assets/art/chrono/bluetime.png'), iconClass:'mx--1'},
				]"
      >
        <template slot="Back">
          <div v-if="!$store.getters['chrono/previousResetPotential']">
            <p>{{ $t('chronosphere.backText1') }}</p>
            <p>{{ $t('chronosphere.backText2') }}</p>
          </div>
          <div v-else>
            <p>{{ $t('chronosphere.backText3') }}</p>
            <p>{{ $t('chronosphere.backText4') }}</p>
          </div>
        </template>
        <template slot="Time Bank?">
          <span>{{ $t('chronosphere.timeBankText1') }}</span>
          <span>
            {{ $t('chronosphere.timeBankText2') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/timebank.png')"
            />
            <b>{{ $t('chronosphere.timeBankText3') }}</b>
            {{ $t('chronosphere.timeBankText4') }}
          </span>
          <span>{{ $t('chronosphere.timeBankText5') }}</span>
          <span>
            {{ $t('chronosphere.timeBankText6') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/timebank.png')"
            />
            <b>{{ $t('chronosphere.timeBankText7') }}</b>
            {{ $t('chronosphere.timeBankText8') }}
          </span>
          <span>
            {{ $t('chronosphere.timeBankText9') }}
            <img class="mx--1" :src="require('@/assets/art/mining/icon.png')" />
            <b>{{ $t('chronosphere.timeBankText10') }}</b>
            {{ $t('chronosphere.timeBankText11') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/enemies/mouse.png')"
            />
            <b>{{ $t('chronosphere.timeBankText12') }}</b>
            {{ $t('chronosphere.timeBankText13') }}
          </span>
          <span>
            {{ $t('chronosphere.timeBankText14') }}
            <img class="mx--0" :src="require('@/assets/art/combat/health.gif')" />
            <b>{{ $t('chronosphere.timeBankText15') }}</b>
            {{ $t('chronosphere.timeBankText16') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/combat/health.gif')"
            />
            <b>{{ $t('chronosphere.timeBankText17') }}</b>
            {{ $t('chronosphere.timeBankText18') }}
          </span>
          <span>
            {{ $t('chronosphere.timeBankText19') }}
          </span>
        </template>
        <template slot="Simulation Reset?">
          <span>
            {{ $t('chronosphere.simulationResetText1') }}
            <img class="mx--0" :src="require('@/assets/art/chrono/bluetime-empty.png')" />
            <b>{{ $t('chronosphere.simulationResetText2') }}</b>
            {{ $t('chronosphere.simulationResetText3') }}
          </span>
          <span>
            {{ $t('chronosphere.simulationResetText4') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/combat/enemies/boss/doppleganger.png')"
            />
            <b>{{ $t('chronosphere.simulationResetText5') }}</b>
            {{ $t('chronosphere.simulationResetText6') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime-empty.png')"
            />
            <b>{{ $t('chronosphere.simulationResetText7') }}</b>
            {{ $t('chronosphere.simulationResetText8') }}
          </span>
          <span>
            {{ $t('chronosphere.simulationResetText9') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime-empty.png')"
            />
            <b>{{ $t('chronosphere.simulationResetText10') }}</b>
            {{ $t('chronosphere.simulationResetText11') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime.png')"
            />
            <b>{{ $t('chronosphere.simulationResetText12') }}</b>
            {{ $t('chronosphere.simulationResetText13') }}
          </span>
        </template>
        <template slot="Chrono Shop?">
          <span>
            {{ $t('chronosphere.chronoShopText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/bluetime.png')"
            />
            <b>{{ $t('chronosphere.chronoShopText2') }}</b>
            {{ $t('chronosphere.chronoShopText3') }}
          </span>
          <span>
            {{ $t('chronosphere.chronoShopText4') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/chrono/timebank.png')"
            />
            <b>{{ $t('chronosphere.chronoShopText5') }}</b>
            {{ $t('chronosphere.chronoShopText6') }}
            <img
              class="mx--1"
              :src="require('@/assets/art/mining/icon.png')"
            />
            <img class="mx--0" :src="require('@/assets/art/engineering/icon.png')" />
            <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
            <b>{{ $t('chronosphere.chronoShopText7') }}</b>
            {{ $t('chronosphere.chronoShopText8') }}
          </span>
          <span>
            {{ $t('chronosphere.chronoShopText9') }}
            <i>{{ $t('chronosphere.chronoShopText10') }}</i>
            {{ $t('chronosphere.chronoShopText11') }}
            <img class="mx--0" :src="require('@/assets/art/chrono/bluetime.png')" />
            <b>{{ $t('chronosphere.chronoShopText12') }}</b>
            {{ $t('chronosphere.chronoShopText13') }}
          </span>
        </template>
      </job-info>

      <div class="row my-4">
        <div class="col-12">
          <div class="d-flex flex-row justify-content-center">
            <div class="btn-group btn-group-toggle">
              <button
                class="btn btn-lg"
                @click="tab='bank'"
                :class="tab=='bank' ? 'btn-primary' : 'btn-outline-primary'"
              >{{ $t('chronosphere.timeBank') }}</button>
              <button
                class="btn btn-lg"
                @click="tab='reset'"
                :class="tab=='reset' ? 'btn-primary' : 'btn-outline-primary'"
              >{{ $t('chronosphere.simulationReset') }}</button>
              <button
                class="btn btn-lg"
                @click="tab='shop'"
                :class="tab=='shop' ? 'btn-primary' : 'btn-outline-primary'"
              >{{ $t('chronosphere.chronoShop') }}</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab=='bank'" class="row time-bank">
        <div class="col-12">
          <div class="content-block">
            <h5>{{ $t('chronosphere.timeBank') }}</h5>
            <hr />
            <div class="d-flex flex-column align-items-center">
              <h6 class="mb-2">{{ $t('chronosphere.desiredSpeed') }}:</h6>
              <div>
                <button
                  type="button"
                  class="btn"
                  v-for="speed in speeds"
                  :key="speed"
                  :class="[desiredChronoSpeed == speed ? 'btn-primary' : 'btn-secondary']"
                  @click="setDesiredChronoSpeed(speed)"
                >{{speed}}x</button>
              </div>
              <progress-bar
                class="mt-1 black-background chrono-bar"
                :progress="barPercent"
                :text="remainingTimeText"
                :customClass="active ? 'progress-bar-animated' : ''"
              />
              <span class="mt-1 max">{{ $t('chronosphere.max') }}: {{maxHours}} {{ $t('chronosphere.hours') }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab=='reset'" class="row">
        <div class="col-12">
          <div class="content-block">
            <h5>{{ $t('chronosphere.simulationReset') }}</h5>
            <hr />
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div class="audit py-3 px-4 mr-md-5">
                <h5 class="text-center mb-2">{{ $t('chronosphere.resetPotential') }}</h5>
                <div v-for="(section, index) in auditSections" :key="index" class="mb-3">
                  <p class="description text-uppercase" v-if="section.name">{{section.name}}</p>
                  <div
                    v-for="(threshold, thresholdIndex) in section.thresholds"
                    :key="'t'+thresholdIndex"
                    class="d-flex flex-row align-items-center justify-content-between my-1"
                    :class="{'disabled': threshold.disabled || threshold.count == 0}"
                  >
                    <span>{{threshold.name}}</span>
                    <div>
                      <span class="mr-1">+{{threshold.count}}</span>
                      <img :src="require('@/assets/art/chrono/bluetime.png')" class="mx--1" />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row align-items-center justify-content-between">
                  <span>{{ $t('chronosphere.total') }}</span>
                  <div>
                    <span class="mr-1">+{{$store.getters['chrono/resetPotential']}}</span>
                    <img :src="require('@/assets/art/chrono/bluetime.png')" class="mx--1" />
                  </div>
                </div>
              </div>
              <div class="my-2 my-md-0">
                <p>{{ $t('chronosphere.resetInfo1') }}</p>
                <p
                  class="my-1"
                >{{ $t('chronosphere.resetInfo2') }}</p>
                <p>{{ $t('chronosphere.resetInfo3') }}</p>
                <div class="reset-container my-2">
                  <shop-purchase purchaseId="resetSimulation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab=='shop'" class="row">
        <div class="col-12">
          <div class="content-block w-auto mb-3">
            <img :src="require('@/assets/art/chrono/bluetime.png')" class="mx--1" />
            x{{bluetimeCount}}
          </div>

          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ProgressBar from "@/components/ProgressBar";
import ShopSection from "@/components/Content/Shop/ShopSection";
import ShopPurchase from "@/components/Content/Shop/ShopPurchase";
import {
  SECTIONS,
  BASE_BONUS,
  ITEM_INTERVALS,
  ENEMY_INTERVALS,
  JOB_INTERVALS
} from "@/data/chrono";

function createAuditSection(name, percent, intervals, t) {
  let section = {
    name: t('chronosphere.bonusesTemplate', { name: name, percent: percent }),
    thresholds: []
  };
  intervals.forEach(interval =>
    section.thresholds.push({
      name: `${interval}%`,
      count: 1,
      disabled: percent < interval
    })
  );
  return section;
}

export default {
  extends: ContentAbstract,
  components: { ProgressBar, ShopSection, ShopPurchase },
  data() {
    return {
      tab: "bank"
    };
  },
  computed: {
    speeds(state, getters) {
      return this.$store.getters["chrono/speeds"];
    },
    chronoSpeed() {
      return this.$store.getters["chrono/speed"];
    },
    desiredChronoSpeed() {
      return this.$store.getters["chrono/desiredSpeed"];
    },
    remainingTimeText() {
      if (this.infinite) return this.$t('chronosphere.infiniteTime');
      return this.$store.getters["chrono/remainingTimeText"] + " " + this.$t('chronosphere.remaining');
    },
    barPercent() {
      if (this.infinite) return 1;
      return (
        this.$store.getters["chrono/remainingTime"] /
        this.$store.getters["chrono/maxDuration"]
      );
    },
    maxHours() {
      return this.$store.getters["chrono/maxHours"];
    },
    active() {
      return this.$store.getters["chrono/active"];
    },
    infinite() {
      return this.$store.getters["cheats/infiniteChrono"];
    },
    bluetimeCount() {
      let count = this.$store.getters["inventory/bank"]["bluetime"];
      return count ? count : 0;
    },
    sections() {
      // Переводим названия секций
      return SECTIONS.map(section => ({
        ...section,
        name: this.$t(`sections.${section.name}`)
      }));
    },
    itemPercent() {
      return this.$store.getters["completion/itemPercent"];
    },
    enemyPercent() {
      return this.$store.getters["completion/enemyPercent"];
    },
    jobPercent() {
      return this.$store.getters["completion/jobPercent"];
    },
    auditSections() {
      let sections = [
        {
          thresholds: [
            {
              name: this.$t('chronosphere.base'),
              count: BASE_BONUS
            },
            {
              name: this.$t('chronosphere.previousResets'),
              count: this.$store.getters["chrono/previousResetPotential"]
            }
          ]
        }
      ];

      sections.push(
        createAuditSection(this.$t('chronosphere.item'), this.itemPercent, ITEM_INTERVALS, this.$t.bind(this))
      );
      sections.push(
        createAuditSection(this.$t('chronosphere.enemy'), this.enemyPercent, ENEMY_INTERVALS, this.$t.bind(this))
      );
      sections.push(
        createAuditSection(this.$t('chronosphere.job'), this.jobPercent, JOB_INTERVALS, this.$t.bind(this))
      );

      return sections;
    }
  },
  methods: {
    setDesiredChronoSpeed(val) {
      this.$store.commit("chrono/setDesiredSpeed", val);
    }
  }
};
</script>

<style scoped>
.time-bank .btn {
  margin: 0.25rem;
}

.chrono-bar {
  max-width: 800px;
}

.max {
  font-size: 12px;
  color: gray;
}
.audit {
  background-color: rgba(128, 128, 128, 0.178);
  border-radius: 8px;
  min-width: 280px;
}
.disabled {
  opacity: 0.4;
}
.reset-container {
  background-color: rgba(119, 119, 119, 0.397);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
	max-width: 520px;
}
</style>