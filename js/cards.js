const tarotCards = [
    {
        id: "garden",
        image: "garden.webp",
        category: "Survival",

        name: {
            ru: "Сад",
            en: "The Garden"
        },

        shortEffect: {
            ru: "Полностью исцеляет вас и ваших напарников",
            en: "Fully heals you and your teammates"
        },

        description: {
            ru: "Полностью восстанавливает здоровье вам и вашим напарникам, а также снимает эффекты Яда, Кровотечения и Горения.",
            en: "Fully heals you and your teammates, removing Poison, Bleeding, and Burning."
        },

        keywords: {
            ru: [
                "лечение",
                "исцеление",
                "яд",
                "кровотечение",
                "горение",
                "команда"
            ],
            en: [
                "heal",
                "healing",
                "poison",
                "bleeding",
                "burning",
                "team"
            ]
        }
    },

    {
        id: "judgement",
        image: "judgement.webp",
        category: "Buff",

        name: {
            ru: "Суд",
            en: "Judgement"
        },

        shortEffect: {
            ru: "Удваивает время действия всех текущих усилений",
            en: "Doubles the duration of all current buffs"
        },

        warning: {
            ru: "Снижает здоровье охотника до 1",
            en: "Reduces your Hunter's HP to 1"
        },

        description: {
            ru: "Удваивает оставшееся время действия всех текущих усилений, но снижает здоровье вашего охотника до 1. Особенно полезна при нескольких активных усилениях.",
            en: "Extends the remaining duration of every active buff, but immediately reduces your Hunter to 1 HP. Best used when you have several valuable buffs active."
        },

        keywords: {
            ru: [
                "усиление",
                "бафф",
                "время",
                "здоровье",
                "1 хп",
                "стамина",
                "регенерация"
            ],
            en: [
                "buff",
                "duration",
                "health",
                "1 hp",
                "stamina",
                "regen"
            ]
        }
    },

    {
        id: "chariot",
        image: "chariot.webp",
        category: "Utility",

        name: {
            ru: "Колесница",
            en: "The Chariot"
        },

        shortEffect: {
            ru: "Меняет местами заблокированные и открытые точки эвакуации",
            en: "Swaps locked and unlocked Extraction Points"
        },

        description: {
            ru: "Меняет местами заблокированные и открытые точки эвакуации для всех команд в режиме «Охота за головами». Уничтожает 1 полоску здоровья. Имеет глобальное время восстановления 5 минут и не может быть использована в последние 5 минут миссии.",
            en: "Swaps the locked and unlocked Extraction Points for all teams in Bounty Hunt. Destroys 1 Health Chunk. Has a 5-minute global cooldown and cannot be used during the final 5 minutes of the Mission."
        },

        keywords: {
            ru: [
                "эвакуация",
                "точка эвакуации",
                "охота за головами",
                "здоровье",
                "полоска здоровья",
                "экстракт"
            ],
            en: [
                "extraction",
                "extract",
                "bounty hunt",
                "health chunk",
                "escape"
            ]
        }
    },

    {
        id: "devil",
        image: "devil.webp",
        category: "Combat",

        name: {
            ru: "Дьявол",
            en: "The Devil"
        },

        shortEffect: {
            ru: "Уменьшает раскачивание и разброс оружия",
            en: "Reduces weapon sway and spread"
        },

        description: {
            ru: "Уменьшает раскачивание и разброс оружия, кроме дробовиков, пока ваш охотник не будет сбит. После падения уничтожается дополнительная полоска здоровья.",
            en: "Reduces sway and spread for weapons except shotguns until your Hunter is downed. When downed, an additional Health Chunk is destroyed."
        },

        keywords: {
            ru: [
                "бой",
                "раскачивание",
                "разброс",
                "точность",
                "оружие",
                "дробовик",
                "падение",
                "здоровье"
            ],
            en: [
                "combat",
                "sway",
                "spread",
                "accuracy",
                "weapons",
                "downed",
                "health chunk"
            ]
        }
    },

    {
        id: "empress",
        image: "empress.webp",
        category: "Traits",

        name: {
            ru: "Императрица",
            en: "The Empress"
        },

        shortEffect: {
            ru: "Даёт Катализатор, Некроманта и случайный навык",
            en: "Grants Catalyst, Necromancer and a random Trait"
        },

        description: {
            ru: "Даёт три навыка в следующем порядке: Катализатор, Некромант и один случайный Сгорающий или Редкий навык. Навыки не могут превысить максимальное количество навыков охотника.",
            en: "Grants three Traits in sequence: Catalyst, Necromancer, and one random Burn or Scarce Trait. Traits cannot exceed your Hunter's maximum Trait capacity."
        },

        keywords: {
            ru: [
                "катализатор",
                "некромант",
                "навык",
                "сгорающий",
                "редкий",
                "черта"
            ],
            en: [
                "catalyst",
                "necromancer",
                "trait",
                "burn trait",
                "scarce trait"
            ]
        }
    },

    {
        id: "fool",
        image: "fool.webp",
        category: "Utility",

        name: {
            ru: "Шут",
            en: "The Fool"
        },

        shortEffect: {
            ru: "Копирует последнюю использованную карту Таро",
            en: "Copies the last Tarot Card used this Mission"
        },

        description: {
            ru: "При использовании становится копией последней карты Таро, которую вы использовали в этой миссии. Это позволяет повторно получить эффект предыдущей карты.",
            en: "Creates a copy of the last Tarot Card you personally used during the current Mission, allowing you to use the same Tarot ability again."
        },

        keywords: {
            ru: [
                "копия",
                "дубликат",
                "карта",
                "повтор",
                "утилита"
            ],
            en: [
                "copy",
                "duplicate",
                "card",
                "utility"
            ]
        }
    },

    {
        id: "hanged-man",
        image: "hanged-man.webp",
        category: "Information",

        name: {
            ru: "Повешенный",
            en: "The Hanged Man"
        },

        shortEffect: {
            ru: "Позволяет наблюдать за ближайшим вражеским охотником",
            en: "Lets you spectate the nearest enemy Hunter"
        },

        description: {
            ru: "На ограниченное время переключает вас на наблюдение за ближайшим вражеским охотником, позволяя узнать его местоположение и действия. После этого наблюдаемый охотник получает предупреждение.",
            en: "Temporarily switches your view to the nearest enemy Hunter, giving you information about their position and actions. The spectated Hunter receives a warning afterwards."
        },

        keywords: {
            ru: [
                "враг",
                "охотник",
                "наблюдение",
                "информация",
                "разведка",
                "слежка"
            ],
            en: [
                "enemy",
                "hunter",
                "spectate",
                "information",
                "intel"
            ]
        }
    },

    {
        id: "magician",
        image: "magician.webp",
        category: "Utility",

        name: {
            ru: "Маг",
            en: "The Magician"
        },

        shortEffect: {
            ru: "Создаёт обманку Тёмного зрения в вашей позиции",
            en: "Places a Dark Sight Decoy at your location"
        },

        warning: {
            ru: "Накладывает сильное кровотечение",
            en: "Causes Heavy Bleeding"
        },

        description: {
            ru: "Создаёт в вашей позиции обманку Тёмного зрения, которая выглядит как вражеский охотник для противников. Обманка также активирует красные улики и шёпот цели-босса для вражеских команд. Использование карты вызывает сильное кровотечение.",
            en: "Creates a Dark Sight Decoy that appears as an enemy Hunter to opposing players using Dark Sight Boost. It also activates Red Clue effects and Boss Target whispers for enemy teams. Using the card causes Heavy Bleeding."
        },

        keywords: {
            ru: [
                "тёмное зрение",
                "обманка",
                "кровотечение",
                "сильное кровотечение",
                "красная улика",
                "цель-босс",
                "обман"
            ],
            en: [
                "dark sight",
                "decoy",
                "bleeding",
                "heavy bleeding",
                "red clue",
                "boss target",
                "misdirection"
            ]
        }
    },

    {
        id: "moon",
        image: "moon.webp",
        category: "Information",

        name: {
            ru: "Луна",
            en: "The Moon"
        },

        shortEffect: {
            ru: "Даёт 2 секунды усиленного Тёмного зрения",
            en: "Grants 2 seconds of Dark Sight Boost"
        },

        description: {
            ru: "Даёт короткий импульс усиленного Тёмного зрения продолжительностью 2 секунды. Подходит для быстрого получения информации о ситуации вокруг.",
            en: "Provides a short burst of Dark Sight Boost. The effect lasts 2 seconds and is useful for a quick information check."
        },

        keywords: {
            ru: [
                "тёмное зрение",
                "усиленное тёмное зрение",
                "информация",
                "разведка"
            ],
            en: [
                "dark sight",
                "dark sight boost",
                "information",
                "dsb"
            ]
        }
    },

    {
        id: "sun",
        image: "sun.webp",
        category: "Survival",

        name: {
            ru: "Солнце",
            en: "The Sun"
        },

        shortEffect: {
            ru: "Увеличенная регенерация на 90 секунд",
            en: "Increased regeneration for 90 seconds"
        },

        description: {
            ru: "Увеличивает восстановление здоровья на 90 секунд. Позволяет восстанавливать здоровье со временем и экономить другие средства лечения.",
            en: "Applies an enhanced Regeneration effect for 90 seconds, allowing your Hunter to recover health over time without using another healing item."
        },

        keywords: {
            ru: [
                "здоровье",
                "лечение",
                "регенерация",
                "восстановление",
                "выживание"
            ],
            en: [
                "health",
                "heal",
                "regeneration",
                "survival"
            ]
        }
    },

    {
        id: "tower",
        image: "tower.webp",
        category: "Combat",

        name: {
            ru: "Башня",
            en: "The Tower"
        },

        shortEffect: {
            ru: "Убивает ИИ и наносит урон целям в радиусе 65 м",
            en: "Kills AI and damages Targets within 65 meters"
        },

        warning: {
            ru: "Ваш охотник загорается",
            en: "Your Hunter catches fire"
        },

        description: {
            ru: "Убивает монстров и наносит урон целям в радиусе 65 метров. Также наносит дополнительный урон целям-боссам и убивает дикие цели. При использовании ваш охотник загорается.",
            en: "A powerful area-effect card that kills Monsters and damages Targets within a 65 meter radius. It also deals additional damage to Boss Targets and kills Wild Targets. Your Hunter catches fire when the card is used."
        },

        keywords: {
            ru: [
                "бой",
                "урон",
                "ии",
                "монстры",
                "босс",
                "цель",
                "65 м",
                "огонь",
                "горение"
            ],
            en: [
                "combat",
                "damage",
                "ai",
                "boss",
                "target",
                "65m",
                "fire",
                "burning"
            ]
        }
    },

    {
        id: "world",
        image: "world.webp",
        category: "Information",

        name: {
            ru: "Мир",
            en: "The World"
        },

        shortEffect: {
            ru: "Показывает всех целей-боссов",
            en: "Reveals all Boss Targets"
        },

        description: {
            ru: "Показывает местоположение всех целей-боссов на карте. За каждую обнаруженную цель-босса также выдаётся награда за улику.",
            en: "Reveals every Boss Target on the map. Each Boss Target discovered with the card also provides a Clue reward."
        },

        keywords: {
            ru: [
                "босс",
                "цель-босс",
                "информация",
                "местоположение",
                "карта",
                "улика"
            ],
            en: [
                "boss",
                "boss target",
                "information",
                "location",
                "dark sight"
            ]
        }
    },

    {
        id: "high-priestess",
        image: "high-priestess.webp",
        category: "Information",

        name: {
            ru: "Верховная жрица",
            en: "The High Priestess"
        },

        shortEffect: {
            ru: "Показывает направление к ближайшему вражескому охотнику",
            en: "Reveals the direction of the nearest enemy Hunter"
        },

        description: {
            ru: "В течение 30 секунд показывает направление к ближайшему вражескому охотнику с помощью эффекта в мире и временного маркера на компасе. Если врагов нет, карта исчезает без эффекта.",
            en: "Points toward the closest enemy Hunter for 30 seconds using a world effect and a temporary compass marker. If no enemy Hunter is present, the card dissipates without an effect."
        },

        keywords: {
            ru: [
                "враг",
                "охотник",
                "направление",
                "информация",
                "разведка",
                "компас",
                "30 секунд"
            ],
            en: [
                "enemy",
                "hunter",
                "direction",
                "information",
                "intel",
                "30 seconds"
            ]
        }
    },

    {
        id: "pathfinder",
        image: "pathfinder.webp",
        category: "Information",

        name: {
            ru: "Следопыт",
            en: "The Pathfinder"
        },

        shortEffect: {
            ru: "Подсвечивает все использованные улики на карте",
            en: "Highlights all used Clues on the map"
        },

        description: {
            ru: "Показывает все уже использованные улики на карте. Использованные улики подсвечиваются красным на некоторое время, помогая отследить маршруты других охотников.",
            en: "Reveals Clues that have already been used by Hunters on the map. Used Clues are highlighted in red for a short time, helping you trace where other Hunters may have travelled."
        },

        keywords: {
            ru: [
                "улики",
                "улика",
                "информация",
                "отслеживание",
                "карта",
                "разведка",
                "след"
            ],
            en: [
                "clues",
                "clue",
                "information",
                "tracking",
                "map",
                "scouting"
            ]
        }
    }
];