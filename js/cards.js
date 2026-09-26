const tarotCards = [

  {
    id: "magician",
    name: "The Magician",
    image: "magician.webp",
    category: "Utility",
    shortEffect: "Places a Dark Sight Decoy at your location",
    description:
        "Places a Dark Sight Decoy at your location. Using the card causes Heavy Bleeding.",
    keywords: [
        "dark sight",
        "decoy",
        "bleeding",
        "heavy bleeding",
        "misdirection"
    ]
  },

  {
    id: "garden",
    name: "The Garden",
    image: "garden.webp",
    category: "Survival",
    shortEffect: "Fully heals you and your teammates",
    description:
        "Fully heals you and your teammates, removing Poison, Bleeding, and Burning.",
    keywords: [
        "heal",
        "healing",
        "poison",
        "bleeding",
        "burning",
        "team"
    ]
  },

  {
    id: "empress",
    name: "The Empress",
    image: "empress.webp",
    category: "Traits",
    shortEffect: "Grants Catalyst, Necromancer and a random Trait",
    description:
        "Grants Catalyst, Necromancer, and one random Burn or Scarce Trait.",
    keywords: [
        "catalyst",
        "necromancer",
        "trait",
        "burn trait",
        "scarce trait"
    ]
  },



    {
        id: "judgement",
        name: "The Judgement",
        image: "judgement.webp",
        category: "Buff",

        shortEffect: "Doubles the duration of all current buffs",
        warning: "Reduces your Hunter's HP to 1",
        description:
            "Doubles the time remaining on all current buffs, but reduces your Hunter's HP to 1.",

        keywords: [
            "buff",
            "duration",
            "health",
            "1 hp",
            "stamina",
            "regen"
        ]
    },

    {
        id: "chariot",
        name: "The Chariot",
        image: "chariot.webp",
        category: "Utility",

        shortEffect: "Swaps locked and unlocked Extraction Points",

        description:
            "Swaps locked and unlocked Extraction Points for all teams in Bounty Hunt. Destroys 1 Health Chunk.",

        keywords: [
            "extraction",
            "extract",
            "bounty hunt",
            "health chunk",
            "escape"
        ]
    },

    {
        id: "devil",
        name: "The Devil",
        image: "devil.webp",
        category: "Combat",

        shortEffect: "Reduces weapon sway and spread",

        description:
            "Reduces sway and spread for weapons except shotguns until your Hunter is downed. When downed, an additional Health Chunk is destroyed.",

        keywords: [
            "combat",
            "sway",
            "spread",
            "accuracy",
            "weapons",
            "downed",
            "health chunk"
        ]
    },



    {
        id: "fool",
        name: "The Fool",
        image: "fool.webp",
        category: "Utility",

        shortEffect: "Copies the last Tarot Card used this Mission",

        description:
            "Creates a copy of the last Tarot Card you used during the current Mission.",

        keywords: [
            "copy",
            "duplicate",
            "card",
            "utility"
        ]
    },

    {
        id: "hanged-man",
        name: "The Hanged Man",
        image: "hanged-man.webp",
        category: "Information",

        shortEffect: "Lets you spectate the nearest enemy Hunter",

        description:
            "Allows you to spectate the nearest enemy Hunter for a limited time. The enemy Hunter receives a warning afterwards.",

        keywords: [
            "enemy",
            "hunter",
            "spectate",
            "information",
            "intel"
        ]
    },



    {
        id: "moon",
        name: "The Moon",
        image: "moon.webp",
        category: "Information",

        shortEffect: "+2 seconds Dark Sight Boost",

        description:
            "Grants 2 seconds of Dark Sight Boost.",

        keywords: [
            "dark sight",
            "dark sight boost",
            "information",
            "dsb"
        ]
    },

    {
        id: "sun",
        name: "The Sun",
        image: "sun.webp",
        category: "Survival",

        shortEffect: "Increased regeneration for 60 seconds",

        description:
            "Increases your Regeneration for 60 seconds.",

        keywords: [
            "health",
            "heal",
            "regeneration",
            "survival"
        ]
    },

    {
        id: "tower",
        name: "The Tower",
        image: "tower.webp",
        category: "Combat",

        shortEffect: "Kills AI or damages Targets within 65 meters",
        warning: "Your Hunter catches fire",
        description:
            "Kills AI or damages Targets within a 65 meter radius. Your Hunter catches on fire.",

        keywords: [
            "combat",
            "damage",
            "ai",
            "boss",
            "target",
            "65m",
            "fire",
            "burning"
        ]
    },

    {
        id: "world",
        name: "The World",
        image: "world.webp",
        category: "Information",

        shortEffect: "Reveals all Boss Targets",

        description:
            "Reveals the locations of all Boss Targets.",

        keywords: [
            "boss",
            "boss target",
            "information",
            "location",
            "dark sight"
        ]
    },

    {
        id: "high-priestess",
        name: "The High Priestess",
        image: "high-priestess.webp",
        category: "Information",

        shortEffect: "Reveals the direction of the nearest enemy Hunter",

        description:
            "Reveals the direction of the nearest enemy Hunter for 30 seconds.",

        keywords: [
            "enemy",
            "hunter",
            "direction",
            "information",
            "intel",
            "30 seconds"
        ]
    },

    {
        id: "pathfinder",
        name: "The Pathfinder",
        image: "pathfinder.webp",
        category: "Information",

        shortEffect: "Highlights all used Clues on the map",

        description:
            "Reveals and highlights all Clues that have already been used on the map for a short amount of time.",

        keywords: [
            "clues",
            "clue",
            "information",
            "tracking",
            "map",
            "scouting"
        ]
    }
];