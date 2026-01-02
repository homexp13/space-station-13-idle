// Helper functions for i18n translations

/**
 * Get translated item name
 * @param {string} itemId - Item ID
 * @param {object} i18n - Vue i18n instance
 * @param {object} item - Item object (optional, for fallback)
 * @returns {string} Translated item name
 */
export function getItemName(itemId, i18n, item = null) {
  if (!i18n) return item?.name || itemId;
  
  const translationKey = `items.${itemId}`;
  const translated = i18n.t(translationKey);
  
  // If translation exists and is different from key, return it
  if (translated && translated !== translationKey) {
    return translated;
  }
  
  // Fallback to original name
  return item?.name || itemId;
}

/**
 * Get translated item description
 * @param {string} itemId - Item ID
 * @param {object} i18n - Vue i18n instance
 * @param {object} item - Item object (optional, for fallback)
 * @returns {string} Translated item description
 */
export function getItemDescription(itemId, i18n, item = null) {
  if (!i18n) return item?.description || '';
  
  const translationKey = `items.${itemId}.description`;
  const translated = i18n.t(translationKey);
  
  if (translated && translated !== translationKey) {
    return translated;
  }
  
  return item?.description || '';
}

/**
 * Get translated zone name
 * @param {string} zoneId - Zone ID
 * @param {object} i18n - Vue i18n instance
 * @param {object} zone - Zone object (optional, for fallback)
 * @returns {string} Translated zone name
 */
export function getZoneName(zoneId, i18n, zone = null) {
  if (!i18n) return zone?.name || zoneId;
  
  const translationKey = `zones.${zoneId}`;
  const translated = i18n.t(translationKey);
  
  if (translated && translated !== translationKey) {
    return translated;
  }
  
  return zone?.name || zoneId;
}

/**
 * Get translated upgrade name
 * @param {string} upgradeId - Upgrade ID
 * @param {object} i18n - Vue i18n instance
 * @param {object} upgrade - Upgrade object (optional, for fallback)
 * @returns {string} Translated upgrade name
 */
export function getUpgradeName(upgradeId, i18n, upgrade = null) {
  if (!i18n) return upgrade?.name || upgradeId;
  
  const translationKey = `upgrades.${upgradeId}`;
  const translated = i18n.t(translationKey);
  
  if (translated && translated !== translationKey) {
    return translated;
  }
  
  return upgrade?.name || upgradeId;
}

/**
 * Get translated purchase name
 * @param {string} purchaseId - Purchase ID
 * @param {object} i18n - Vue i18n instance
 * @param {object} purchase - Purchase object (optional, for fallback)
 * @returns {string} Translated purchase name
 */
export function getPurchaseName(purchaseId, i18n, purchase = null) {
  if (!i18n) return purchase?.name || purchaseId;
  
  const translationKey = `purchases.${purchaseId}`;
  const translated = i18n.t(translationKey);
  
  if (translated && translated !== translationKey) {
    return translated;
  }
  
  return purchase?.name || purchaseId;
}

/**
 * Get translated purchase description
 * @param {string} purchaseId - Purchase ID
 * @param {object} i18n - Vue i18n instance
 * @param {object} purchase - Purchase object (optional, for fallback)
 * @returns {string} Translated purchase description
 */
export function getPurchaseDescription(purchaseId, i18n, purchase = null) {
  if (!i18n) return purchase?.description || '';
  
  const translationKey = `purchases.${purchaseId}.description`;
  const translated = i18n.t(translationKey);
  
  if (translated && translated !== translationKey) {
    return translated;
  }
  
  return purchase?.description || '';
}

