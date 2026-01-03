<template>
  <div
    class="content-block p-1 my-1 d-flex flex-column flex-md-row align-items-center"
    :class="[canPurchase ? 'clickable' :'locked']"
    @click="buy"
  >
    <img
      :id="'purchase'+id"
      :src="icon"
      class="mr-2 purchase-icon d-md-block"
      :class="{'d-none': hideChain}"
    />

    <item-popover
      v-if="purchase.item"
      :target="'purchase'+id"
      :itemId="purchase.item"
      placement="right"
    />

    <div class="d-flex flex-column w-100">
      <span class="name">{{name}}</span>
      <span class="description">{{description}}</span>
      <div v-if="canOpen">
        <button class="my-1 btn btn-primary btn-sm" @click.stop="viewOdds">{{ $t('shop.viewOdds') }}</button>
      </div>
      <div v-if="upgradeChain.length > 1 && upgradeChain.length < 99 && !hideChain">
        <button class="my-1 btn btn-primary btn-sm" @click.stop="viewChain">{{ $t('shop.viewChain') }}</button>
      </div>
      <div class="requires d-flex flex-row align-items-center flex-wrap">
        <span class="requires mr-1">{{ $t('shop.requires') }}:</span>
        <div
          v-for="(pair, index) in Object.entries(requiredLevels)"
          :key="'level'+index"
          class="d-flex flex-row align-items-center"
        >
          {{ $t('jobs.' + pair[0]) }}
          <img :src="allJobs.find(job => job.id == pair[0]).icon" />
          <span>{{ $t('shop.level') }}{{pair[1]}}</span>
        </div>
        <div
          v-for="(pair, index) in Object.entries(requiredItems)"
          :key="'item'+index"
          class="d-flex flex-row align-items-center mr-1"
        >
          <img :id="id+index" :src="items[pair[0]].icon" />
          <item-popover :target="id+index" :itemId="pair[0]" />
          <span>x{{pair[1] | cleanNum}}</span>
        </div>
        <div 
          v-if="purchase.requiredResearchPoints"
          class="d-flex flex-row align-items-center mr-1"
        >
          <span><img :src="require('@/assets/art/research/researchIcon.png')" />x{{purchase.requiredResearchPoints}}</span>
        </div>
        <div 
          v-if="purchase.otherText"
          class="d-flex flex-row align-items-center mr-1"
        >
          <span>{{otherTextTranslated}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import PURCHASES from "@/data/purchases";
import ItemPopover from "@/components/ItemPopover";
import ModalItemChance from "@/components/Modals/ModalItemChance";
import ModalPurchaseChain from "@/components/Modals/ModalPurchaseChain";
import { ALL_JOBS } from "@/data/jobs";
export default {
  name: "shop-purchase",
  components: { ItemPopover },
  props: ["purchaseId", "hideChain"],
  computed: {
    id() {
      return this._uid.toString();
    },
    item() {
      return ITEMS[this.purchase.item];
    },
    items() {
      return ITEMS;
    },
    allJobs() {
      return ALL_JOBS;
    },
    purchase() {
      return PURCHASES[this.purchaseId];
    },
    icon() {
      if (this.purchase.icon) return this.purchase.icon;
      if (this.item) return this.item.icon;
      return null;
    },
    name() {
      if (this.purchase.name) {
        // Для вложенной структуры: purchases.chronoToCash.name
        const nameKey = `purchases.${this.purchaseId}.name`;
        const nameTranslated = this.$t(nameKey);
        if (nameTranslated && nameTranslated !== nameKey) return nameTranslated;
        
        // Для Job Blitz покупок
        if (this.purchase.name.startsWith("Level ")) {
          const match = this.purchase.name.match(/Level (.+?) (\d+)-(\d+)/);
          if (match) {
            const jobName = match[1];
            const from = match[2];
            const to = match[3];
            
            const job = ALL_JOBS.find(j => 
              j.name.toLowerCase() === jobName.toLowerCase() || 
              j.id.toLowerCase() === jobName.toLowerCase().replace(/\s+/g, '')
            );
            
            if (job) {
              const translatedJobName = this.$t(`jobs.${job.id}`);
              return this.$t('purchases.levelJobTemplate.name', {
                job: translatedJobName,
                from: from,
                to: to
              });
            }
          }
        }
        
        return this.purchase.name;
      }
      if (this.item) {
        const translationKey = `items.${this.itemId}`;
        const translated = this.$t(translationKey);
        return (translated && translated !== translationKey) ? translated : this.item.name;
      }
      return this.$t('shop.missingName');
    },
    
    description() {
      if (this.purchase.description) {
        // Для вложенной структуры: purchases.chronoToCash.description
        const descKey = `purchases.${this.purchaseId}.description`;
        const descTranslated = this.$t(descKey);
        if (descTranslated && descTranslated !== descKey) return descTranslated;
        
        // Для Job Blitz покупок
        if (this.purchase.description.includes("experience, enough to level from")) {
          const match = this.purchase.description.match(/Gain ([\d,]+) (.+?) experience, enough to level from (\d+) to (\d+)/);
          if (match) {
            const xp = match[1];
            const jobName = match[2];
            const from = match[3];
            const to = match[4];
            
            const job = ALL_JOBS.find(j => 
              j.name.toLowerCase() === jobName.toLowerCase() || 
              j.id.toLowerCase() === jobName.toLowerCase().replace(/\s+/g, '')
            );
            
            if (job) {
              const translatedJobName = this.$t(`jobs.${job.id}`);
              return this.$t('purchases.levelJobTemplate.description', {
                xp: xp,
                job: translatedJobName,
                from: from,
                to: to
              });
            }
          }
        }
        
        return this.purchase.description;
      }
      return '';
    },
    
    otherTextTranslated() {
      if (this.purchase.otherText) {
        const otherTextKey = `purchases.${this.purchaseId}.otherText`;
        const otherTextTranslated = this.$t(otherTextKey);
        if (otherTextTranslated && otherTextTranslated !== otherTextKey) return otherTextTranslated;
        return this.purchase.otherText;
      }
      return '';
    },
    canPurchase() {
      return this.$store.getters["inventory/canPurchase"](this.purchase);
    },
    requiredItems() {
      if (!this.purchase.requiredItems) return {};
      return this.purchase.requiredItems;
    },
    requiredLevels() {
      if (!this.purchase.requiredLevels) return {};
      return this.purchase.requiredLevels;
    },
    requiredResearchPoints(){
      return this.purchase.requiredResearchPoints;
    },
    canOpen() {
      if (!this.item) return false;
      if (this.item.itemTable || this.item.itemTables) return true;
      return false;
    },
    upgradeChain() {
      if (!this.purchase.upgrade) return [];
      return Object.entries(PURCHASES).filter(
        entry => entry[1].upgrade == this.purchase.upgrade
      );
    }
  },
  methods: {
    buy() {
      if (!this.canPurchase) return;
      this.$store.dispatch("inventory/purchase", this.purchase);
    },
    viewOdds() {
      this.$modal.show(
        ModalItemChance,
        { itemId: this.purchase.item },
        { height: "auto", width: "420px" }
      );
    },
    viewChain() {
      this.$modal.show(
        ModalPurchaseChain,
        { purchaseIds: this.upgradeChain.map(entry => entry[0]) },
        { height: "auto", width: "350px" }
      );
    }
  }
};
</script>

<style>
.purchase-icon {
  width: 64px;
  min-width: 64px;
}
.name {
  font-size: 18px;
}
.description {
  color: rgb(144, 144, 144);
  font-size: 14px;
}
.locked .description {
  color: rgb(214, 214, 214);
}
.dark-mode .locked .description {
  color: rgb(151, 151, 151);
}
.requires {
  color: rgb(97, 97, 97);
  font-size: 15px;
}
.dark-mode .requires {
  color: rgb(195, 195, 195);
}
.locked .requires {
  color: rgb(241, 241, 241);
}
.dark-mode .locked .requires {
  color: rgb(119, 119, 119);
}
.requires img {
  width: 32px;
}
</style>