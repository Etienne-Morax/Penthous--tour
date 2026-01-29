var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.06792587551597506,
        "pitch": 0.08185230710203939,
        "fov": 1.3568621924490027
      },
      "linkHotspots": [
        {
          "yaw": 1.5482432699918611,
          "pitch": 0.31531798420919444,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -3.068860307257955,
          "pitch": 0.08108740946612869,
          "rotation": 0,
          "target": "2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5791335863800695,
          "pitch": 0.017670858696632763,
          "rotation": 0,
          "target": "2-corridor"
        },
        {
          "yaw": 2.8432020815552983,
          "pitch": 0.07977855522272748,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": -2.680387319753187,
          "pitch": 0.06695949653401456,
          "rotation": 0,
          "target": "5-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7374674699463633,
          "pitch": 0.16653939632526793,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 0.009091119303967332,
          "pitch": 0.24625227032958108,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.3929257385052711,
          "pitch": 0.20999441329430013,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-room",
      "name": "Dining room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2618733880271247,
          "pitch": 0.11565846166023697,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -1.6404611373381854,
          "pitch": 0.13252821061976938,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -0.9959150866862796,
          "pitch": 0.1824925019514474,
          "rotation": 0,
          "target": "2-corridor"
        },
        {
          "yaw": -3.1379618900046946,
          "pitch": 0.09170347459138561,
          "rotation": 0,
          "target": "5-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.015220881190595392,
          "pitch": 0.06180151326238459,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": 0.7034039412585606,
          "pitch": 0.11245311357120613,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0781173101740684,
          "pitch": 0.05110078454242739,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": 2.1562025007300747,
          "pitch": -0.054135794945301186,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Designer Penthouse",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
