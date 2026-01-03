<template>
  <div class="content-shop">
    <content-header :text="$t('common.cargo')" :icon="require('@/assets/art/sidebar/cargo.png')" color="#febb33" />
    <div class="content-container">
      <job-info
        infoId="shop"
        :icon="require('@/assets/art/jobinfo/shop.png')"
        :title="$t('shop.title')"
        :options="[
          {key: 'Back', name: $t('shop.back')},
          {key: 'Inventory?', name: $t('shop.inventoryQuestion'), icon: require('@/assets/art/sidebar/backpack.png'), iconClass:'mx--1'},
          {key: 'Seeds?', name: $t('shop.seedsQuestion'), icon: require('@/assets/art/botany/seed.png'), iconClass:'mx--1'},
          {key: 'New Jobs?', name: $t('shop.newJobsQuestion'), icon: require('@/assets/art/cooking/icon.png'), iconClass:'mx--1'},
          {key: 'Job Upgrades?', name: $t('shop.jobUpgradesQuestion'), icon: require('@/assets/art/mining/upgrade1.png'), iconClass:'mx--1'},
          {key: 'Gambling?', name: $t('shop.gamblingQuestion'), icon: require('@/assets/art/shop/items/hatcrate.png'), iconClass:'mx--1'},
          {key: 'Capes?', name: $t('shop.capesQuestion'), icon: require('@/assets/art/combat/items/cloak/capcloak.png'), iconClass:'mx--1'},
          {key: 'Resistance?', name: $t('shop.resistanceQuestion'), icon: require('@/assets/art/jobinfo/cargo_banner.png'), iconClass:'mx--1'}
        ]"
      >
        <template slot="Back">
          <span>{{ $t('shop.backText1') }}</span>
          <span>{{ $t('shop.backText2') }}</span>
        </template>
        <template slot="Inventory?">
          <span>
            {{ $t('shop.inventoryText1') }}
            <img class="mx--2" :src="require('@/assets/art/sidebar/backpack.png')" />
            <b>{{ $t('shop.inventoryText2') }}</b>
            {{ $t('shop.inventoryText3') }}
          </span>
          <span>{{ $t('shop.inventoryText4') }}</span>
        </template>
        <template slot="Seeds?">
          <span>
            {{ $t('shop.seedsText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/botany/icon.png')"
            />
            <b>{{ $t('shop.seedsText2') }}</b>
            {{ $t('shop.seedsText3') }}
          </span>
          <span>{{ $t('shop.seedsText4') }}</span>
        </template>
        <template slot="New Jobs?">
          <span>
            {{ $t('shop.newJobsText1') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/cooking/icon.png')"
            />
            <img class="mx--0" :src="require('@/assets/art/xenobio/icon.gif')" />
            <img class="mx--0" :src="require('@/assets/art/shitposting/icon.png')" />
            <b>{{ $t('shop.newJobsText2') }}</b>
          </span>
          <span>{{ $t('shop.newJobsText3') }}</span>
        </template>
        <template slot="Job Upgrades?">
          <span>{{ $t('shop.jobUpgradesText1') }}</span>
          <span>{{ $t('shop.jobUpgradesText2') }}</span>
          <span>
            {{ $t('shop.jobUpgradesText3') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/validhunting/icon.png')"
            />
            <b>{{ $t('shop.jobUpgradesText4') }}</b>
            {{ $t('shop.jobUpgradesText5') }}
          </span>
        </template>

        <template slot="Capes?">
          <span>
            {{ $t('shop.capesText1') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/cloak/capcloak.png')"
            />
            <b>{{ $t('shop.capesText2') }}</b>
            {{ $t('shop.capesText3') }}
          </span>
          <span>
            {{ $t('shop.capesText4') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/cloak/capcloak.png')"
            />
            <b>{{ $t('shop.capesText5') }}</b>
            {{ $t('shop.capesText6') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/upgrade1.png')"
            />
            <b>{{ $t('shop.capesText7') }}</b>
            {{ $t('shop.capesText8') }}
          </span>
        </template>
        <template slot="Gambling?">
          <span>{{ $t('shop.gamblingText1') }}</span>
          <span>{{ $t('shop.gamblingText2') }}</span>
          <span>
            {{ $t('shop.gamblingText3') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/shop/items/hatcrate.png')"
            />
            <b>{{ $t('shop.gamblingText4') }}</b>
            {{ $t('shop.gamblingText5') }}
          </span>
        </template>
        <template slot="Resistance?">
          <span>{{ $t('shop.resistanceText1') }}</span>
          <span>{{ $t('shop.resistanceText2') }}</span>
        </template>
      </job-info>

      <div class="row">
        <div class="col-12">
          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ShopSection from "@/components/Content/Shop/ShopSection";
import { SECTIONS } from "@/data/shop";
export default {
  extends: ContentAbstract,
  components: { ShopSection },
  computed: {
    sections() {
      return SECTIONS;
    }
  }
};
</script>