<template>
  <div class="content-inventory">
    <content-header
      :text="$t('common.inventory')"
      :icon="require('@/assets/art/sidebar/backpack.png')"
      color="rgb(218, 125, 29)"
    />

    <div class="content-container">
      <job-info
        infoId="inventory"
        :icon="require('@/assets/art/jobinfo/inventory.png')"
        :title="$t('inventory.title')"
        :options="[
          {key: 'Back', name: $t('inventory.back')},
          {key: 'Inventory?', name: $t('inventory.inventoryQuestion'), icon: require('@/assets/art/sidebar/backpack.png'), iconClass:'mx--1'}
        ]"
      >
        <template slot="Back">
          <span>{{ $t('inventory.backText1') }}</span>
          <span>{{ $t('inventory.backText2') }}</span>
        </template>
        <template slot="Inventory?">
          <span>{{ $t('inventory.inventoryText1') }}</span>
          <span>{{ $t('inventory.inventoryText2') }}</span>
          <span>
            {{ $t('inventory.inventoryText3') }}
            <img
              class="mx--0"
              :src="require('@/assets/art/sidebar/cargo.png')"
            />
            <b>{{ $t('inventory.inventoryText4') }}</b>
            {{ $t('inventory.inventoryText5') }}
          </span>
          <span>
            {{ $t('inventory.inventoryText6') }}
            <img
              class="mx--2"
              :src="require('@/assets/art/misc/coin-padded.png')"
            />
            <b>{{ $t('inventory.inventoryText7') }}</b>
            {{ $t('inventory.inventoryText8') }}
          </span>
          <span>{{ $t('inventory.inventoryText9') }}</span>
        </template>
      </job-info>
      <div class="row">
        <div class="col-12">
          <div class="content-block d-flex flex-row justify-content-around">
            <div class="d-flex flex-row align-items-center">
              <span class="mr-1">{{ $t('inventory.spaceUsed') }}</span>
              <span
                :class="fakeItemCount ? 'primary-bubble' : 'danger-bubble' "
              >{{bankItemIds.length}}/{{bankSlots}}</span>
            </div>
            <div class="d-flex flex-row align-items-center">
              <span class="mr-1">{{ $t('inventory.bankValue') }}</span>
              <span class="primary-bubble">{{ bankValue | cleanNum}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12">
          <button class="btn btn-primary" @click="quickSort">{{ $t('inventory.sortBank') }}</button>
        </div>
        <div class="col-12 items d-flex flex-row flex-wrap">
          <div
            v-for="(itemId, index) in draggableItemIds"
            :key="itemId"
            draggable="true"
            @dragstart="onDragStart($event, itemId)"
            @dragover="onDragOver($event, index)"
            @dragend="onDragEnd"
          >
            <inventory-item :itemId="itemId" :popoversDisabled="draggingItem" />
          </div>
          <div class="fake-inventory-item" v-for="index in fakeItemCount" :key="index">
            <div />
            <span>&#8203;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { without } from "lodash";
import { mapGetters } from "vuex";
import ITEMS from "@/data/items";
import ContentAbstract from "@/components/Content/ContentAbstract";
import InventoryItem from "@/components/Content/Inventory/InventoryItem";
export default {
  extends: ContentAbstract,
  components: { InventoryItem },
  data() {
    return {
      draggingItem: null,
      dragOverIndex: null
    };
  },
  computed: {
    bankItemIds() {
      return this.$store.getters["inventory/bankItemIds"];
    },
    draggableItemIds() {
      let ids = this.bankItemIds;
      if (this.draggingItem && this.dragOverIndex !== null) {
        ids = without(ids, this.draggingItem);
        ids.splice(this.dragOverIndex, 0, this.draggingItem);
      }
      return ids;
    },
    bankValue() {
      let total = 0;
      this.bankItemIds.forEach(bankItemId => {
        if (!ITEMS[bankItemId]) console.log("BAD ITEM:", bankItemId);
        let sellPrice = ITEMS[bankItemId].sellPrice;
        if (sellPrice === undefined) return;
        total += sellPrice * this.$store.getters["inventory/bank"][bankItemId];
      });
      return total;
    },
    bankSlots() {
      return this.$store.getters["inventory/bankSlots"];
    },
    fakeItemCount() {
      return this.bankSlots - this.bankItemIds.length;
    }
  },
  methods: {
    quickSort() {
      this.$store.commit("inventory/quickSort");
    },
    onDragStart(event, itemId) {
      this.draggingItem = itemId;
      // Some browsers need the data transfer set, even if we're doing data ourselves
      event.dataTransfer.setData("text/plain", null);
    },
    onDragOver(event, index) {
      this.dragOverIndex = index;
    },
    onDragEnd(event) {
      if (this.draggingItem && this.dragOverIndex !== null) {
        this.$store.commit("inventory/orderItem", {
          itemId: this.draggingItem,
          index: this.dragOverIndex
        });
      }
      this.draggingItem = null;
      this.dragOverIndex = null;
    }
  }
};
</script>

<style scoped>
.items {
  margin: 0 -0.4rem;
}
@media (max-width: 576px) {
  .items {
    margin: 0 -0.25rem;
  }
}
.slots {
  color: white;
}
</style>