var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingroom-sofa-3",
      "name": "Livingroom sofa 3",
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
        "yaw": 0.08291935484103696,
        "pitch": 0.0809881790165079,
        "fov": 1.3568621924490027
      },
      "linkHotspots": [
        {
          "yaw": 1.7982872181967524,
          "pitch": 0.24174096062659167,
          "rotation": 0,
          "target": "6-corridor"
        },
        {
          "yaw": -2.5143591392073503,
          "pitch": 0.12046571435388032,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": 2.626483462621776,
          "pitch": 0.21498964469219217,
          "rotation": 0,
          "target": "1-livingroom-table"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-livingroom-table",
      "name": "Livingroom table",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20918222261323471,
          "pitch": 0.04466259875712453,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -1.7264121270163102,
          "pitch": 0.1436656424972771,
          "rotation": 0,
          "target": "0-livingroom-sofa-3"
        },
        {
          "yaw": 3.129146435144527,
          "pitch": 0.07169703891108803,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": -1.0055546539891083,
          "pitch": 0.16231479666920912,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance",
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
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0359251360200155,
          "pitch": 0.12079097425509921,
          "rotation": 0,
          "target": "6-corridor"
        },
        {
          "yaw": 1.6197464259108845,
          "pitch": 0.2458991160810946,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
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
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10803557732760005,
          "pitch": 0.0601313085320232,
          "rotation": 0,
          "target": "1-livingroom-table"
        },
        {
          "yaw": 0.1084158281661427,
          "pitch": 0.06413781342740954,
          "rotation": 0,
          "target": "1-livingroom-table"
        },
        {
          "yaw": 0.7440208943789663,
          "pitch": 0.12284285303913123,
          "rotation": 0,
          "target": "2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terrace",
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
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-entrance",
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
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-corridor",
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
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8879106655047497,
          "pitch": 0.1084102090923249,
          "rotation": 0,
          "target": "0-livingroom-sofa-3"
        },
        {
          "yaw": 0.057368212401337715,
          "pitch": 0.3250033961421259,
          "rotation": 0,
          "target": "2-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
