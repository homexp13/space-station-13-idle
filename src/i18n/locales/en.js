export default {
  common: {
    settings: "Settings",
    inventory: "Inventory",
    cargo: "Cargo",
    combat: "Combat",
    jobs: "Jobs",
    other: "Other",
    player: "Player",
    chronosphere: "Chronosphere",
    completion: "Completion",
    about: "About",
    discord: "Discord",
    language: "Language",
    english: "English",
    russian: "Russian"
  },
  settings: {
    title: "SETTINGS",
    resetTutorials: "Reset Dismissed Tutorials",
    inventoryFullStop: "Stop Actions when Full Inventory",
    pocketsEmptyStop: "Stop Combat when Pockets Empty",
    darkMode: "Dark Mode",
    chronoPanelEnabled: "Show Mini Chrono Panel when Time is Banked",
    showVirtualLevels: "Show Virtual Levels Beyond {maxLevel}",
    showXPNeeded: "Show how much XP is needed to level up in XP bars",
    showFullValues: "Display Full Item Counts in Jobs (may look ugly with huge numbers)",
    showCompletionLines: "Underline actions/fights you haven't fully completed yet (may affect performance)",
    hideLockedJobs: "Hide locked jobs from the sidebar",
    allButOne: "Show an option to sell all but one of an item in your inventory",
    exportData: "Export Data",
    importData: "Import Data",
    resetData: "Reset ALL Data",
    cheats: "CHEATS",
    enableCheats: "Enable Cheats",
    openItemSpawner: "Open Item Spawner",
    getCash: "Get $1,000,000",
    showAllActions: "Show All Actions",
    unlockAllJobs: "Unlock All Jobs",
    infiniteChrono: "Infinite Chronosphere Time",
    extraChronoOptions: "Extra Chronosphere Options",
    levelIndividualJobs: "Level Individual Jobs",
    maxAllJobs: "Max All Jobs",
    completeValidhuntingTask: "Complete Current Validhunting Task",
    giveResearchPoints: "Give 100 Research Bounty Points"
  },
  messages: {
    tutorialsReset: "Tutorials reset!",
    dataExported: "Data exported!",
    dataImported: "Data imported!",
    noFileToImport: "No file to import!",
    taskComplete: "Task Complete!",
    pointsAdded: "Points added!",
    exportBonus: "30 minute Export Bonus gained!"
  },
  jobs: {
    mining: "Mining",
    engineering: "Engineering",
    fabrication: "Fabrication",
    research: "R&D",
    graytiding: "Graytiding",
    tinkering: "Tinkering",
    botany: "Botany",
    cooking: "Cooking",
    bartending: "Bartending",
    xenobiology: "Xenobiology",
    chemistry: "Chemistry",
    shitposting: "Shitposting",
    cargonia: "Cargonia",
    traitor: "Traitor",
    cult: "Cult",
    ling: "Changeling",
    precision: "Precision",
    meleePower: "Melee Power",
    rangedPower: "Ranged Power",
    evasion: "Evasion",
    command: "Command",
    validhunting: "Validhunting"
  },
  action: {
    locked: "LOCKED",
    level: "LEVEL",
    needsResearch: "NEEDS RESEARCH",
    chemReduced: "CHEM REDUCED",
    uses: "USES",
    gives: "GIVES",
    chronoProhibited: "Chrono Prohibited",
    xpPerSeconds: "XP /",
    seconds: "SECONDS",
    chanceToFail: "chance to fail and lose",
    health: "health",
    costs: "Costs"
  },
  // Items translations - add more as needed
  // Format: items.{itemId}: "Translated Name"
  // For descriptions: items.{itemId}.description: "Translated Description"
  items: {
    // Mining resources
    glass: "Glass",
    iron: "Iron",
    silver: "Silver",
    gold: "Gold",
    titanium: "Titanium",
    uranium: "Uranium",
    plasma: "Plasma",
    diamond: "Diamond",
    alienalloy: "Alien Alloy",
    bluespace: "Bluespace Crystal",
    bananium: "Bananium",
    // Botany items
    plantSeed: "Plant Seeds",
    // Tier 1 plants (3 seeds)
    potato: "Potato",
    tomato: "Tomato",
    banana: "Banana",
    flowerSun: "Sunflower",
    mushroom: "Mushroom",
    pepper: "Pepper",
    // Tier 2 plants (5 seeds)
    potatoBattery: "Potato Battery",
    tomatoBlue: "Blue Tomato",
    bananaMime: "Mime Banana",
    flowerMoon: "Moonflower",
    mushroomRed: "Red Mushroom",
    peppercold: "Cold Pepper",
    // Tier 3 plants (7 seeds)
    orange: "Orange",
    tomatoBluespace: "Bluespace Tomato",
    bananaBlue: "Blue Banana",
    flowerNova: "Nova Flower",
    mushroomShadow: "Shadow Mushroom",
    pepperGhost: "Ghost Pepper",
    // Растения 4-го тира (10 семян)
    orange3d: "3D Orange",
    companionKillerTomato: "Killer Tomato Companion",
    // Add more items as needed...
  },
  // Purchases translations
  purchases: {
    // Add purchase translations as needed
    // Format: purchases.{purchaseId}: "Translated Name"
    // For descriptions: purchases.{purchaseId}.description: "Translated Description"
  },
  // Zones translations
  zones: {
    // Add zone translations as needed
    // Format: zones.{zoneId}: "Translated Name"
  },
  // Upgrades translations
  upgrades: {
    // Add upgrade translations as needed
    // Format: upgrades.{upgradeId}: "Translated Name"
  }
}

