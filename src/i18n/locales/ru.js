export default {
  common: {
    settings: "Настройки",
    inventory: "Инвентарь",
    cargo: "Карго",
    combat: "Бой",
    jobs: "Работы",
    other: "Прочее",
    player: "Игрок",
    chronosphere: "Хроносфера",
    completion: "Завершение",
    about: "О игре",
    discord: "Discord",
    language: "Язык",
    english: "Английский",
    russian: "Русский"
  },
  settings: {
    title: "НАСТРОЙКИ",
    resetTutorials: "Сбросить пропущенные обучающие подсказки",
    inventoryFullStop: "Останавливать действия при полном инвентаре",
    pocketsEmptyStop: "Останавливать бой при пустых карманах",
    darkMode: "Тёмный режим",
    chronoPanelEnabled: "Показывать мини-панель хроносферы при накопленном времени",
    showVirtualLevels: "Показывать виртуальные уровни выше {maxLevel}",
    showXPNeeded: "Показывать сколько опыта нужно для повышения уровня в полосах опыта",
    showFullValues: "Отображать полное количество предметов в работах (может выглядеть некрасиво с большими числами)",
    showCompletionLines: "Подчёркивать действия/бои, которые вы ещё не полностью завершили (может повлиять на производительность)",
    hideLockedJobs: "Скрывать заблокированные работы из боковой панели",
    allButOne: "Показывать опцию продажи всех предметов кроме одного в вашем инвентаре",
    exportData: "Экспортировать данные",
    importData: "Импортировать данные",
    resetData: "Сбросить ВСЕ данные",
    cheats: "ЧИТЫ",
    enableCheats: "Включить читы",
    openItemSpawner: "Открыть спавнер предметов",
    getCash: "Получить $1,000,000",
    showAllActions: "Показывать все действия",
    unlockAllJobs: "Разблокировать все работы",
    infiniteChrono: "Бесконечное время хроносферы",
    extraChronoOptions: "Дополнительные опции хроносферы",
    levelIndividualJobs: "Повысить уровень отдельных работ",
    maxAllJobs: "Максимизировать все работы",
    completeValidhuntingTask: "Завершить текущее задание валидхантинга",
    giveResearchPoints: "Дать 100 очков исследовательских наград"
  },
  messages: {
    tutorialsReset: "Обучающие подсказки сброшены!",
    dataExported: "Данные экспортированы!",
    dataImported: "Данные импортированы!",
    noFileToImport: "Нет файла для импорта!",
    taskComplete: "Задание завершено!",
    pointsAdded: "Очки добавлены!",
    exportBonus: "Получен бонус за экспорт за 30 минут!"
  },
  jobs: {
    mining: "Добыча",
    engineering: "Инженерия",
    fabrication: "Производство",
    research: "Н&И",
    graytiding: "Грейтайдинг",
    tinkering: "Ремонт",
    botany: "Ботаника",
    cooking: "Кулинария",
    bartending: "Барменство",
    xenobiology: "Ксенобиология",
    chemistry: "Химия",
    shitposting: "Шитпостинг",
    cargonia: "Каргония",
    traitor: "Предатель",
    cult: "Культ",
    ling: "Генокрад",
    precision: "Точность",
    meleePower: "Сила ближнего боя",
    rangedPower: "Сила дальнего боя",
    evasion: "Уклонение",
    command: "Командование",
    validhunting: "Валидхантинг"
  },
  action: {
    locked: "ЗАБЛОКИРОВАНО",
    level: "УРОВЕНЬ",
    needsResearch: "ТРЕБУЕТ ИССЛЕДОВАНИЯ",
    chemReduced: "СНИЖЕНО ХИМИЕЙ",
    uses: "ИСПОЛЬЗУЕТ",
    gives: "ДАЁТ",
    chronoProhibited: "Запрещено хроносферой",
    xpPerSeconds: "ОПЫТ /",
    seconds: "СЕКУНДЫ",
    chanceToFail: "шанс провала и потери",
    health: "здоровья",
    costs: "Стоимость"
  },
  // Items translations - add more as needed
  // Format: items.{itemId}: "Translated Name"
  // For descriptions: items.{itemId}.description: "Translated Description"
  items: {
    // Mining resources
    glass: "Стекло",
    iron: "Железо",
    silver: "Серебро",
    gold: "Золото",
    titanium: "Титан",
    uranium: "Уран",
    plasma: "Плазма",
    diamond: "Алмаз",
    alienalloy: "Инопланетный сплав",
    bluespace: "Кристалл блюспейса",
    bananium: "Бананиум",
    // Botany items
    plantSeed: "Семена растений",
    potato: "Картофель",
    tomato: "Помидор",
    banana: "Банан",
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

