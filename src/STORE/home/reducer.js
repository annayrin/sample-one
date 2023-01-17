import {SET_ACTIVE_CUISINE, SET_ACTIVE_ICON} from "./saga-types";
import images from "../../UTILITIES/images";

const initialState = {
    progress: null,
    restaurants: [
        {
            "id": "a5812ff1-8db0-417e-9a22-fa60e6d3541d",
            "name": "ԿոֆեՌոտտի",
            "description": "ԿոֆեՌոտտի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/coffeerotti.jpg",
            "rating": 5,
            "cuisines": [],
            "locations": [],
            "schedule": [],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c9f96618-fe37-44a6-9e0c-1d23d0f2f0b0",
            "name": "Ձեն օֆ Ֆուդ",
            "description": "Ձեն օֆ Ֆուդ օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/dzen-of-food.jpg",
            "rating": 5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "615c7e6b-ef86-4541-99c2-49cd0fc668dd",
            "name": "Լոնգվեյ",
            "description": "Լոնգվեյ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/longway.jpg",
            "rating": 5,
            "cuisines": [],
            "locations": [],
            "schedule": [],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "90cd89f0-bab6-4b19-8560-f87c935c5b98",
            "name": "Սքայ Հոթ Դոգ",
            "description": "Սքայ Հոթ Դոգ Առաքում Հայաստանում",
            "imageUrl": "http://localhost:7700/images/sky-hot-dog.jpg",
            "rating": 5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "06d0299c-8a45-4215-b043-1a4b21141a8a",
            "name": "Տավուշ Միթ",
            "description": "Տավուշ Միթ օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/tavush-meat.jpg",
            "rating": 5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "77330a91-24d3-48f9-bb90-10c0783fdd00",
            "name": "Բերբեքյու բայ Տանթունի",
            "description": "Տանթունի Բուրգեր, Թաբուլե, Լահմաջո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/tantuni.jpg",
            "rating": 5,
            "cuisines": [
                {
                    "id": "lebanese",
                    "name": "Լիբանանյան"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e018e501-4442-4007-aa9a-601df563a893",
            "name": "Թեյսթի օֆ Արցախ",
            "description": "Արցախի համեր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/taste-of-artsakh.jpg",
            "rating": 5,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1cedfd66-d61d-4bdd-9782-0f672f59735c",
            "name": "Թայմ Աութ",
            "description": "Թայմ Աութ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/time-out.jpg",
            "rating": 5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5195d8bb-acea-4996-83e6-d4dfb1673daf",
            "name": "Վասաբի Ֆաստ Ֆուդ Դալմա Գարդն Մոլլ",
            "description": "Վասաբի Ուդոնի, Կարրի բրնձի, Խոզի թայի, Սուշիի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/wasabi-noodles-rice-and-more.jpg",
            "rating": 5,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "f60fe344-1df5-45ae-a660-d8acf4013e08",
            "name": "Փարաքարի շաուրմա և Թուրինգյան բրաթվուրստ",
            "description": "Փարաքարի շաուրմա և Թուրինգյան բրաթվուրստ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/paraqari-shawarma-and-thuringer-bratwurst.jpg",
            "rating": 4.909090995788574,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "676cb1d7-d3cd-4973-9504-d57b026bbb69",
            "name": "Արտբրիջ",
            "description": "Արտբրիջ Ֆոնդյու, Ռավիոլի, Բեյգլ, Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/artbridge.jpg",
            "rating": 4.882352828979492,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "79bb6687-cd41-48a7-8c41-649223ffbf79",
            "name": "Կոլեկտիվ",
            "description": "Կոլեկտիվ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/collective.jpg",
            "rating": 4.873015880584717,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e69edf83-76cf-4a42-b597-7cd9bef713f6",
            "name": "Մայրիգ Երևան",
            "description": "Մայրիգ Երևան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/mayrig-yerevan.jpg",
            "rating": 4.852458953857422,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d4ca3b96-16ce-4f82-adfa-90afdd12baad",
            "name": "Էլի ս Լահմաջուն",
            "description": "Էլի ս Լահմաջուն լահմաջո, սիրիական Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/elie-s-lahmajun.jpg",
            "rating": 4.840000152587891,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "187ce131-c568-408e-a6ec-390713a35c13",
            "name": "Գրանդ Քենդի",
            "description": "Գրանդ Քենդի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/grand-candy.jpg",
            "rating": 4.833333492279053,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c570923c-421e-476c-8818-8a4f9f7bb044",
            "name": "Կաֆե Ցենտրալ Ռեստորան",
            "description": "Կաֆե Ցենտրալ Հավով քարրի կրեմ-ապուր, Շնիցել Օնլայն Առաքում Երևանում, Հայաստանում",
            "imageUrl": "http://localhost:7700/images/cafe-central-restaurant.jpg",
            "rating": 4.8255815505981445,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "70e60317-7a07-418c-ba16-a7b01101674c",
            "name": "Ջազզվե դեսերտ",
            "description": "Ջազզվե դեսերտ Բալի այգի, Շվարցվայլդ, Զահեր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/jazzve-dessert.jpg",
            "rating": 4.819277286529541,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1ecee03a-4547-4c2c-b0e2-f5203a9d80af",
            "name": "Նոյան Փարպեցի Ռեստորան",
            "description": "Նոյյան Փարպեցի Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/noyyan-parpetsi-restaurant.jpg",
            "rating": 4.818181991577148,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1795aeee-ee0d-4884-9047-61b20e1cad06",
            "name": "Մալօկկօ Կաֆե",
            "description": "Մալօկկօ Կաֆե Քլաբ Սենդվիչ, Հերկուլես Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/malocco-cafe-tamanyan.jpg",
            "rating": 4.8125,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "dd272365-99e1-4258-9a7d-35e38f5fb207",
            "name": "Ուռկան ծովամթերք",
            "description": "Ուռկան Ծովամթերք Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/urkan-seafood.jpg",
            "rating": 4.800000190734863,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d0b92ca6-c992-41f9-ad1f-eb11ccfd93d1",
            "name": "Բրոկկոլի",
            "description": "Բրոկկոլի Օնլյան Առաքում",
            "imageUrl": "http://localhost:7700/images/broccoli.jpg",
            "rating": 4.795454502105713,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c2cab51c-af02-49d1-93fa-9b01e1ddb1a7",
            "name": "Փաթրիքս Փասթրի",
            "description": "Փաթրիքս Փասթրի օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/patrick-s-pastry.jpg",
            "rating": 4.789473533630371,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "91321ee3-f75a-4aa0-ac76-ca93afe26760",
            "name": "Բրիոշ",
            "description": "Բրիոշ Կրուասանի, Սենդվիչի, Հացի, Ապուրի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/brioche.jpg",
            "rating": 4.785714149475098,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "39a6a360-a894-4950-8ba5-962ee90312f3",
            "name": "Բագետ էնդ Կո",
            "description": "Բագետ էնդ Կո Կրուասան, Հաց, Տարտ, Սուրճ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/baguette-and-co.jpg",
            "rating": 4.784482955932617,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "4e8677f6-9808-4a0c-818e-df2a2b8f1bbf",
            "name": "Դառգետ",
            "description": "Դառգետ Գարեջուր Օնլայն Առաքում Երևանում Հայաստանում",
            "imageUrl": "http://localhost:7700/images/dargett.jpg",
            "rating": 4.783132553100586,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "65843a99-4b37-44ee-bf02-542a3641c744",
            "name": "Պեպեներո",
            "description": "Պեպեներո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pepenero.jpg",
            "rating": 4.777777671813965,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1034776b-127a-4a49-bbb0-93f5c1e04202",
            "name": "Յամ Յամ Դոնաթս Մաշտոց",
            "description": "Յամ-Յամ Դոնաթս Պոնչիկ, Մաֆին Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/yum-yum-donuts-yerevan-mashtots.jpg",
            "rating": 4.773049831390381,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "a80c0034-bfd5-4820-9159-e6973156a49f",
            "name": "Դը Գարդեն",
            "description": "Դը Գարդեն Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/the-garden.jpg",
            "rating": 4.757575988769531,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "ea9025c0-2797-417e-95af-b1df46f8635c",
            "name": "Հռոմ Ռեստորան",
            "description": "Հռոմ Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/rome-restaurant.jpg",
            "rating": 4.75,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5e2850cd-f64c-448e-a392-0d84fcb14272",
            "name": "Սոհո",
            "description": "Սոհո Քափքեյք, Տորթ, Մաֆֆին Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/soho-patisserie-and-chocolaterie.jpg",
            "rating": 4.745283126831055,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "de75c02b-30c3-41d3-a3ae-f70f9cfdfa7f",
            "name": "Քրամբս",
            "description": "Քրամբս Հաց, Մաֆին, Գազարով տորթ, Չիզքեյք Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/crumbs-mashtots.jpg",
            "rating": 4.743750095367432,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d8034f5d-f678-4f87-9c78-5bc790366230",
            "name": "Լագոնիտ",
            "description": "Լագոնիտ Ղուզի, Արևելյան Ֆաստ Ֆուդ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/lagonid.jpg",
            "rating": 4.736842155456543,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d757ed5a-381c-4097-b16e-31af4743e185",
            "name": "Օստ Գինի և Ուտելիք",
            "description": "Օստ Գինի և Ուտելիք Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/ost-foods-and-wine.jpg",
            "rating": 4.736842155456543,
            "cuisines": [
                {
                    "id": "georgian",
                    "name": "Վրացական"
                },
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "4fe1f928-55b4-47b4-ab5d-d86cd0bb5fd5",
            "name": "Մեծ Բուրգ",
            "description": "Մեծ Բուրգ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/mets-burg.jpg",
            "rating": 4.733333110809326,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "96847b56-28ec-4e36-beb1-3d5235cbc757",
            "name": "Ջեյքոբս Քիթչն",
            "description": "Ջեյքոբս Քիթչն Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/jacobs-kitchen.jpg",
            "rating": 4.72857141494751,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "f70eeeb3-9303-4be4-9704-3602e0825beb",
            "name": "Բիստրո Սակուռա",
            "description": "Բիստրո Սակուռա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/bistro-sakura.jpg",
            "rating": 4.7272725105285645,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "096728e2-ab38-4101-bbfc-81c44e094c22",
            "name": "Քոֆիշոփ Քոմփնի Թումանյան",
            "description": "Քոֆիշոփ Էսպրեսսո, Ամերիկանո, Օմլետ, Մակարուն Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/coffeeshop-tumanyan.jpg",
            "rating": 4.7178215980529785,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "03098384-82ed-4c7c-838d-0b9fdd97c71b",
            "name": "Ավենյու դե Ֆրանս",
            "description": "Ավենյու դե Փարիզ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/avenue-de-france.jpg",
            "rating": 4.714285850524902,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8911ed6f-75eb-4e3e-85a4-3dd98aaee497",
            "name": "Ջի Էմ ս Բուրգեր Բար",
            "description": "Ջի Էմ ս Բուրգեր Բար Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/gm-s-cafe.jpg",
            "rating": 4.714285850524902,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "71dcd234-7abd-4281-86e4-edf42d61db74",
            "name": "Մասիվի Լահմաջո",
            "description": "Մասիվի Լահմաջո Կարկանդակ Հավով, Սնկով, Խաչապուրի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/masivi-lahmajo.jpg",
            "rating": 4.714285850524902,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8f059fe3-d6a5-40a6-8665-0b2ae30e0844",
            "name": "Պատատ Էրեբունի Մոլ",
            "description": "Պատատ Էրեբունի Մոլ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/patat-erebuni-mall.jpg",
            "rating": 4.714285850524902,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "472bf0d0-cf44-4149-af0d-98b8c2378610",
            "name": "Բլեք Անգուս Աբովյան",
            "description": "Բլեք Անգուս Առաքում Հայաստանում",
            "imageUrl": "http://localhost:7700/images/black-angus.jpg",
            "rating": 4.713023662567139,
            "cuisines": [
                {
                    "id": "american",
                    "name": "Ամերիկյան"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "ec71fbbb-5415-488f-a400-df597dd9174b",
            "name": "Կլասիկ Բուրգեր Տերյան",
            "description": "Կլասիկ Բուրգեր Բուրգեր, Կարտոֆիլ ֆրի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/classic-burger-teryan.jpg",
            "rating": 4.712810039520264,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "89a7242e-bd73-4ed3-b91c-265ed84d4e50",
            "name": "Ածուխ Թոնրատուն",
            "description": "Ածուխ Թոնրատուն Խորոված, Լանչ, Լահմաջո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/atsukh-tonratun.jpg",
            "rating": 4.708333492279053,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "280daf9f-a257-4b40-91ed-61bf0e57e2d8",
            "name": "Էսպրես Իթ բայ Քոֆիշոփ",
            "description": "Էսպրես Իթ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/espress-it.jpg",
            "rating": 4.706896781921387,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "cab3e63c-eb53-4734-b260-41840026b5c3",
            "name": "Արաքս Ռեստորան",
            "description": "Արաքս Ռեստորան Տոշկա, Լաբնե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/araks-restaurant.jpg",
            "rating": 4.699999809265137,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c40ebacc-469a-4e64-9314-77ac45a665e0",
            "name": "Պաուլաներ",
            "description": "Պաուլաներ Գարեջուր, Ռուլկա, Նրբերշիկ, Սթեյք Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/paulaner.jpg",
            "rating": 4.696969509124756,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c66869e5-99fc-4794-b2bd-4ea0e64ee50e",
            "name": "Քարավանսարա",
            "description": "Քարավանսարա լահմաջոյի Առաքում",
            "imageUrl": "http://localhost:7700/images/qaravansara.jpg",
            "rating": 4.695652008056641,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "ead0cf2e-017c-4fe5-8d9a-8be4329e629b",
            "name": "Ժենգյալով հաց",
            "description": "Ժենգյալով հաց",
            "imageUrl": "http://localhost:7700/images/jengyalov-hats.jpg",
            "rating": 4.692307472229004,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "59d3c36c-ec2f-4bf3-aa79-2bd4fc477d39",
            "name": "Սեգաֆրեդո",
            "description": "Սեգաֆրեդո Սուրճ, Էսպրեսսո, Մոկա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/segafredo-zanetti.jpg",
            "rating": 4.691489219665527,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "84037089-8d27-4e1f-b05e-e83469050aab",
            "name": "Մամա Միա",
            "description": "Մամա Միա Պիցցա, Պաստա, Կալզոնե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/mama-mia.jpg",
            "rating": 4.690908908843994,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "f346dd9d-38bf-4e5e-9623-2ba8e134eeda",
            "name": "Մուռակամի",
            "description": "Մուռակամի Միսո Ապուր, Սուշի, Մակի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/murakami.jpg",
            "rating": 4.690908908843994,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8b1ec316-859c-45aa-93b8-f19cb7beba0d",
            "name": "Պիցցանինի Թումանյան",
            "description": "Պիցցանինի Թումանյան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizzanini-tumanyan.jpg",
            "rating": 4.690476417541504,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5611ca4d-cd84-42dc-b3c2-39fee6d3df9b",
            "name": "Պիադին",
            "description": "Պիադին Օնլյան Առաքում",
            "imageUrl": "http://localhost:7700/images/piadine.jpg",
            "rating": 4.6875,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7a1e8dfa-c85b-4433-a034-3077d53199e1",
            "name": "Դեգուսթեյշն",
            "description": "Դեգուսթեյշն Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/degustation.jpg",
            "rating": 4.685534477233887,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e94bf9fa-8ec2-43ae-afea-5fbeb8f52e13",
            "name": "Պիցցա Դի Ռոմա (Խորենացի)",
            "description": "Պիցցա Դի Ռոմա Պատվիրել Օնլայն կամ Հեռախոսով",
            "imageUrl": "http://localhost:7700/images/pizza-di-roma-khorenatsi.jpg",
            "rating": 4.681818008422852,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d0e704bc-b3bf-45cb-bb99-6f937860dfb9",
            "name": "ԻնՖյուժն",
            "description": "ԻնՖյուժն սթեյք, պիցցա, սուշի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/infusion.jpg",
            "rating": 4.680850982666016,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d676d099-96b1-4bab-b8ac-7d7b4ee3c66d",
            "name": "21 Սուշի Քլաբ",
            "description": "21 Սուշի Քլաբ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/21-sushi-club.jpg",
            "rating": 4.6785712242126465,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "474f9345-606f-41d8-a5d1-6745cd72ce47",
            "name": "Հենգաութ",
            "description": "Հենգաութ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/hangout.jpg",
            "rating": 4.6744184494018555,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fe5167b5-3b6c-4e21-ab99-c3737fa62c93",
            "name": "Կակտուս",
            "description": "Կակտուս Մեքսիկական Ռեստորան Բուրիտո, Ֆահիտա, Կեսադիլյա  Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/cactus.jpg",
            "rating": 4.673728942871094,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8e9551ec-9db1-445c-a9f1-3a7bb52857bf",
            "name": "Լա Քուչինա",
            "description": "Լա Քուչինա Պիցցա, Պաստա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/la-cucina.jpg",
            "rating": 4.673267364501953,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fd9e9054-511a-4fd6-8cc5-efdfebf977b7",
            "name": "Ջանո",
            "description": "Ջանո Ֆահիտա սենդվիչ, Հումուս Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/jano.jpg",
            "rating": 4.670454502105713,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "779e1ebd-4f90-41bc-b5b1-003afc17dca3",
            "name": "Թաուկ",
            "description": "Թաուկ Սենդվիչ Առաքում",
            "imageUrl": "http://localhost:7700/images/tawouk.jpg",
            "rating": 4.668224334716797,
            "cuisines": [
                {
                    "id": "lebanese",
                    "name": "Լիբանանյան"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d77b0d64-9865-485c-ba07-9f7ba63191e0",
            "name": "Ապերիտիվո",
            "description": "Ապերիտիվո Նախաճաշ, Պաստա ծովամթերքով, Մյուսլի, Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/aperitivo.jpg",
            "rating": 4.666666507720947,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "afb467e8-45eb-48b1-9c0c-8fde00a96fb6",
            "name": "Պանացեա Գաստրո Բուտիկ",
            "description": "Պանացեա Նարինե, Կաթնաշոռ, Պանիր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/panatsea.jpg",
            "rating": 4.666666507720947,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fdd277ef-462e-4616-87bf-f201a05e88b8",
            "name": "Grill.am Պուշկին",
            "description": "Grill.am Պուշկին Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/grillam-pushkin.jpg",
            "rating": 4.666077613830566,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "9c2002ee-dab7-4cea-9354-ddeb8f18c157",
            "name": "Էակ Լանչ",
            "description": "Էակ Լանչ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/eak-lunch.jpg",
            "rating": 4.661538600921631,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1b391e5a-7301-4097-8a6b-d6daa228f58d",
            "name": "Արարատ Պանդոկ",
            "description": "Արարատ Պանդոկ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/ararat-tavern.jpg",
            "rating": 4.6544342041015625,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8bff512b-f6a5-4635-a05e-6ba2bfdead8c",
            "name": "Դռագոն Գարդեն",
            "description": "Դռագոն Գարդեն Չինական Ապուր, Կծու Հավ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/dragon-garden.jpg",
            "rating": 4.64769983291626,
            "cuisines": [
                {
                    "id": "chinese",
                    "name": "Չինական"
                },
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0e0b1e86-aaad-4c52-a1be-fe45ee262780",
            "name": "Ֆուդ ընդ Մուդ",
            "description": "Ֆուդ Ընդ Մուդ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/food-and-mood.jpg",
            "rating": 4.647651195526123,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "2b0f1fe2-4b6b-4b8f-a8db-098243d52fee",
            "name": "33 Պիցցաս Թումանյան",
            "description": "33 Պիցցաս Թումանյան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/33-pizzas-tumanyan.jpg",
            "rating": 4.645418167114258,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c3067639-67d1-4546-8fe4-f11fd5d7400f",
            "name": "12 Կտոր Պիցցա",
            "description": "12 Կտոր Պիցցա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/12-ktor-pizza.jpg",
            "rating": 4.644904613494873,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e2a0d9ec-6488-4056-a89b-b037cc5f11cc",
            "name": "Քեյ Էֆ Սի Մաշտոց",
            "description": "Քեյ Էֆ Սի, Հավի Թևիկներ, Լոնգեր, Զինգեր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/kfc.jpg",
            "rating": 4.643667221069336,
            "cuisines": [
                {
                    "id": "american",
                    "name": "Ամերիկյան"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c95c0db6-f9e0-4c08-9652-4fd290743168",
            "name": "Պեկին",
            "description": "Պեկին Ռեստորան - Չինական Խոհանոց Առաքում",
            "imageUrl": "http://localhost:7700/images/beijing.jpg",
            "rating": 4.640151500701904,
            "cuisines": [
                {
                    "id": "chinese",
                    "name": "Չինական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c8f127ef-3a00-46e0-8ecd-02e417109b06",
            "name": "Լուի Շարդեն",
            "description": "Լուի Շարդեն Կրուասանի, Հացի, Յոգուրտի, Սենդվիչի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/louis-charden.jpg",
            "rating": 4.639999866485596,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "25d5d98a-17fd-4017-ae77-8fbb11ae1616",
            "name": "Ֆլոու Հաուս",
            "description": "Ֆլոու Հաուս բաօ բուրգեր, պիցցա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/flow-house.jpg",
            "rating": 4.636363506317139,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "3f0d7549-dea8-4d37-9333-deaba65ede49",
            "name": "Իթ ընդ Ֆիթ",
            "description": "Իթ ընդ Ֆիթ Օսիրիս, Մանդալա, Ավոկադո թոստ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/eat-and-fit.jpg",
            "rating": 4.635265827178955,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "b2311cf2-35f4-4959-8c05-41c3be578446",
            "name": "Կիևյան Ֆուդ կորտ",
            "description": "Կիևյան Ֆուդ կորտ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/kievyan-food-court.jpg",
            "rating": 4.633333206176758,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8fed241c-d4c0-47ed-bf2e-327d6d40dcf5",
            "name": "Յասաման",
            "description": "Յասաման Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/yasaman.jpg",
            "rating": 4.631067752838135,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fbab1aff-b3a9-4440-bee4-9cb0d4ff2fd0",
            "name": "Միթ",
            "description": "Միթ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/meat.jpg",
            "rating": 4.627659797668457,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1ad040aa-e953-4538-8e81-991dfb32825e",
            "name": "Սաբթայթլ",
            "description": "Սաբթայթլ Խոզապուխտով ԵՎ Պանրով, Իտալական Սենդվիչի Առաքում",
            "imageUrl": "http://localhost:7700/images/subtitle.jpg",
            "rating": 4.627500057220459,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d606c742-ed97-4db0-a281-4169719c0d9b",
            "name": "Գարուն բայ Առողջ Սնունդ",
            "description": "Գարուն բայ Առողջ Սնունդ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/garun-by-aroghj-snund.jpg",
            "rating": 4.621827602386475,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "452b5da9-b24a-46e5-a92d-e75b7e9af51f",
            "name": "Այս Ֆիշ Սուշի",
            "description": "Այս Ֆիշ Սուշի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/ice-fish-sushi.jpg",
            "rating": 4.620253086090088,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "915cd07b-84c0-4221-aab8-bd4a6965cecd",
            "name": "Լա Բուլանժերի դե Փարիզ Դալմա մոլլ",
            "description": "Լա Բուլանժերի դե Փարիզ Սուրճ, Սենդվիչ Օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/la-boulangerie-de-paris.jpg",
            "rating": 4.615384578704834,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "21b30656-6c27-45a8-8555-02c05767bfe4",
            "name": "Սթրիիթ",
            "description": "Սթրիիթ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/streat.jpg",
            "rating": 4.612903118133545,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "57d7465e-7160-43f6-969f-4166e989e573",
            "name": "ՓիթՍտոպ Բուրգեր",
            "description": "ՓիթՍտոպ Բուրգեր Ֆաստ Ֆուդ, Շաուրմա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pitstop-burger.jpg",
            "rating": 4.612864017486572,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7164392a-bdf1-463c-80c2-1ae68901fd6d",
            "name": "Բեքյարդ",
            "description": "Բեքյարդ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/backyard.jpg",
            "rating": 4.607142925262451,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "75e63e8a-beeb-484e-8c31-9534737add0c",
            "name": "Նյու ՏԱՕ",
            "description": "Նյու ՏԱՕ Չինական Խոհանոց, Խոզի ականջներ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/new-tao.jpg",
            "rating": 4.60689640045166,
            "cuisines": [
                {
                    "id": "chinese",
                    "name": "Չինական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1166914e-e4a2-4c6b-b00c-a113d548cfe8",
            "name": "Բլեք Սթար Բուրգեր",
            "description": "Բլեք Սթար Բուրգեր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/black-star-burger.jpg",
            "rating": 4.603271961212158,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "6e64c04a-e809-48b2-8021-c44483413862",
            "name": "Ավոկադո Քուին",
            "description": "Ավոկադո Քուին Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/avocado-queen.jpg",
            "rating": 4.599999904632568,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "59914991-b8f7-4930-bdb8-6dc2beeb970b",
            "name": "Բուղաչա",
            "description": "Բուղաչա Օնլայն Առաքում,Բուղաչա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/bughacha.jpg",
            "rating": 4.599999904632568,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "893873b1-a01b-4fe5-aba9-d1585d434813",
            "name": "Պիցցա Թայմ",
            "description": "Պիցցա Թայմ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizza-time.jpg",
            "rating": 4.599999904632568,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "6f227ae7-251f-47d7-aa3a-3a5b77c493f5",
            "name": "Qyabab.am",
            "description": "Qyabab.am Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/qyababam.jpg",
            "rating": 4.599999904632568,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e0fccf65-0980-4436-a5e2-3ef55c1555ec",
            "name": "Մուչաչո",
            "description": "Մուչաչո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/muchacho.jpg",
            "rating": 4.59751033782959,
            "cuisines": [
                {
                    "id": "mexican",
                    "name": "Մեքսիկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c6082c3d-aba6-4d41-be80-7113151bf719",
            "name": "Խուտոռոկ",
            "description": "Խուտոռոկ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/khutorok.jpg",
            "rating": 4.596153736114502,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "b393faad-83f2-4741-91b6-cd4fccaa2b36",
            "name": "Արևելյան Խոհանոց",
            "description": "Արևելյան Խոհանոց Լահմաջո, Փիդե, Օձի խորոված Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/eastern-cuisine.jpg",
            "rating": 4.595959663391113,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "2302fb43-4e7d-4dcd-9f16-1a8e2d448075",
            "name": "ՊաՊա Պիցցա",
            "description": "ՊաՊա Պիցցա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/papa-pizza.jpg",
            "rating": 4.590256690979004,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "72ca94f9-ed5b-4ef0-9a1b-cf784dec6601",
            "name": "Գենացվալե Պանդոկ Իսահակյան 12",
            "description": "Գենացվալե Պանդոկ Չախոխբիլի, Օջախուրի, Տղեմալի Պատվիրել Խորոված Առաքում",
            "imageUrl": "http://localhost:7700/images/genacvale-pandok-isahakyan.jpg",
            "rating": 4.587695121765137,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fa3ba623-8bcb-42ca-9f02-f73e70e98d5a",
            "name": "Ֆեմիլի Հաուս Ռեստորան",
            "description": "Ֆեմիլի Հաուս Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/family-house-restaurant.jpg",
            "rating": 4.583333492279053,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "39981603-d547-4cdb-a860-6dbaf8037917",
            "name": "Ռենա",
            "description": "Ռենա Խաշ, Գառան թիակ, Խորոված Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/rena-restaurant.jpg",
            "rating": 4.583333492279053,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "4666e90e-8aca-4c18-b407-913fbf6526b7",
            "name": "Ֆորթին",
            "description": "Ֆորթին Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/4teen.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "97bb0cf4-885a-49a9-8d5e-f234cab72c7e",
            "name": "Ֆուդի Պարոնյան",
            "description": "Ֆուդի Պարոնյան Խորոված, Պիցցա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/foody-paronyan.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "43c6cf6a-5b7b-4699-99da-933a0c23b69b",
            "name": "Խորոտ",
            "description": "Խորոտ օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/khorot.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "40739788-df25-43e1-84ed-176cad9e1a5b",
            "name": "Լիոս Ֆուդ Կորտ",
            "description": "Լիոս Ֆուդ Կորտ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/lios-food-court.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "3fdcfe79-8d39-48ec-a689-93c909e89aa4",
            "name": "Միքսեր",
            "description": "Միքսեր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/mixr.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "86f35661-50e8-4454-a765-4c62fd198c43",
            "name": "Միքս Բեյքրի",
            "description": "Միքս Բեյքրի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/mixbakery.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "78ab0896-0aa3-4290-8874-bc3951ed3c5e",
            "name": "Մոշ Մսամթերք",
            "description": "Մոշ Մսամթերք Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/mosh-meat-products.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "723f616a-79d8-473a-b4f3-c3300d42757f",
            "name": "Թեյք Ուեյ",
            "description": "Թեյք Ուեյ լանչ, քաղցրավենիք, կիսաֆաբրիկատներ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/take-away.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "06f9e9ae-27c1-44a9-9a5d-2b175c802d6a",
            "name": "Երևան Պարկ",
            "description": "Երևան Պարկ օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/yerevan-park.jpg",
            "rating": 4.5765767097473145,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "4dc91cff-737d-4baf-b2a7-575ad1fd08b6",
            "name": "Կարաս Թումանյան",
            "description": "Կարաս Թումանյան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/karas-tumanyan.jpg",
            "rating": 4.576348781585693,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1feb0564-2502-47f8-bdf7-a3340cbbbdd0",
            "name": "Յասմին Ռեստորան",
            "description": "Յասմին Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/yasmine-middle-eastern-restaurant.jpg",
            "rating": 4.5757575035095215,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "84fcc3d4-30c5-4965-b334-117268dd0519",
            "name": "Լիմոնե",
            "description": "Լիմոնե իտալական պիցցա, սենդվիչ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/limone.jpg",
            "rating": 4.5714287757873535,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5ff9495d-4801-48df-8527-07b02be0b9a3",
            "name": "Դոս Ամիգոս",
            "description": "Դոս Ամիգոս Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/dos-amigos.jpg",
            "rating": 4.569767475128174,
            "cuisines": [
                {
                    "id": "mexican",
                    "name": "Մեքսիկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "3cf22d79-8ad1-4614-a2cc-42fba34510d2",
            "name": "Օստ Բիստրո",
            "description": "Օստ Ֆուդ Կորտ Աջարական խաչապուրի, Աղցան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/ost-bistro.jpg",
            "rating": 4.562827110290527,
            "cuisines": [
                {
                    "id": "georgian",
                    "name": "Վրացական"
                },
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "44edc536-79a7-4be7-b98f-b00d189642d8",
            "name": "Մեյդ ին Չայնա",
            "description": "Մեյդ ին Չայնա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/made-in-china.jpg",
            "rating": 4.558265686035156,
            "cuisines": [
                {
                    "id": "chinese",
                    "name": "Չինական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "07bdbf97-4cc6-45e0-ba50-64eb4bb5fd99",
            "name": "Ծղոտներ",
            "description": "Ծղոտներ Ճագարի Չախոխբիլի, Գառան թիակ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/tsghotner.jpg",
            "rating": 4.548543453216553,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "56f39dd6-ed2e-4c3b-89be-29948d0050c4",
            "name": "Գարեջրի Ակադեմիա",
            "description": "Գարեջրի Ակադեմիա Խոզի սրունք, Նրբերշիկ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/beer-academy.jpg",
            "rating": 4.543859481811523,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d3eb95e0-9d7d-43f3-99c7-6cc07c3807f4",
            "name": "Կովկաս Պանդոկ",
            "description": "Կովկաս Պանդոկ Խորոված, Քյալագյոշ, Խաշիլ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/tavern-caucasus.jpg",
            "rating": 4.540740966796875,
            "cuisines": [
                {
                    "id": "georgian",
                    "name": "Վրացական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "de0c36c7-e9ea-4452-9611-c0fbdcf8821c",
            "name": "Նեռո Սուշի",
            "description": "Նեռո Սուշի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/nero-sushi.jpg",
            "rating": 4.539325714111328,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5561c06b-f750-4ace-9059-659947cb8eb1",
            "name": "Սիննաբոն",
            "description": "Սիննաբոն, Պեկանբոն, Չոկոբոն, Չիլատաս Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/cinnabon.jpg",
            "rating": 4.536144733428955,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "6b9bf6a6-35f4-4bd1-b060-66e2f287eb13",
            "name": "Պիցցա Հատ Տիգրան Մեծ",
            "description": "Պիցցա Հատ Չիզի Քրասթ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizza-hut.jpg",
            "rating": 4.530814170837402,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "012ca9f6-893d-4eee-9de1-efaf48c2f4bd",
            "name": "Լիբանանյան շաուրմա Թումանյան",
            "description": "Լիբանանյան շաուրմա, Libanan, Lebanan, Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/lebanon-shawarma.jpg",
            "rating": 4.530573844909668,
            "cuisines": [
                {
                    "id": "lebanese",
                    "name": "Լիբանանյան"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "4c36ced1-06e4-4d3a-ab96-0e6ba75f9ac1",
            "name": "Գուռու Ակումբ և Այգի",
            "description": "Գուռու Ակումբ և Այգի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/gouroo-club-and-garden.jpg",
            "rating": 4.529411792755127,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "2ed7d40d-622c-4eb7-a44e-3a39baa432a3",
            "name": "Գրիլյան",
            "description": "Գրիլյան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/grillian.jpg",
            "rating": 4.526315689086914,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "79c1e7f1-50ba-49c3-9f17-086640b13876",
            "name": "Սքուեր Ուան ընդ Սիննաբոն",
            "description": "Սքուեր Ուան Անգլիական Նախաճաշ,  Քլաբ Սենդվիչ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/square-one.jpg",
            "rating": 4.525423526763916,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0ff1e165-4be6-42c6-b046-269f1394cfe8",
            "name": "Մր. Գիրոս 21 Թումանյան",
            "description": "Մր. Գիրոս Հունական Աղցան, Ցացիկի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/21-mr-gyros-tumanyan.jpg",
            "rating": 4.5216965675354,
            "cuisines": [
                {
                    "id": "greek",
                    "name": "Հունական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "9b118836-ae7f-45b5-beec-7787af1e99b6",
            "name": "Գուստո",
            "description": "Գուստո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/gusto.jpg",
            "rating": 4.519999980926514,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "de04b8b4-b9d7-459f-84d9-6904396cb865",
            "name": "Սորրիզո",
            "description": "Սորրիզո Պաղպաղակ, Աղանդեր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sorriso.jpg",
            "rating": 4.509615421295166,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "aabcdc88-660b-46fd-82fb-933056f78153",
            "name": "Բրյում բայ Խուտոռոկ",
            "description": "Բրյում բայ Խուտոռոկ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/brume-by-xutorok.jpg",
            "rating": 4.5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d1c35084-c07a-4aac-8c6e-51c641836970",
            "name": "Թաո Էքսպրես",
            "description": "Թաո Էքսպրես, Թաո էքսպրեսս, տավարի միս պեկինյան ձևով, հորթի միս բրոկկոլիով Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/express-panda.jpg",
            "rating": 4.5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "07f81018-f8be-4473-8b82-c348dd39fed8",
            "name": "Հանի Բու",
            "description": "Հանի Բու Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/honey-boo.jpg",
            "rating": 4.5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "229eba81-5c0b-4e27-8f21-ab6af4b72ab5",
            "name": "Լահմաջո",
            "description": "Լահմաջոյի, Ձվածեղի, Համբուրգերի, Արագ Սննդի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/lahmajun.jpg",
            "rating": 4.5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "9376ac28-f94e-4b41-bece-db1a2c52d1c6",
            "name": "ԱԿՕ Սուշի",
            "description": "ԱԿՕ Սուշի Մակի, Սաշիմի, Ֆիլադելֆիա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/ako-sushi.jpg",
            "rating": 4.495967864990234,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "13edafa4-1128-48c0-b202-5282d2f4f420",
            "name": "Ալ Ֆոռնո Պիցցերիա",
            "description": "Ալ Ֆոռնո Պիցցերիա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/al-forno-pizzeria.jpg",
            "rating": 4.494252681732178,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "2ced61f0-1d86-45b3-91b3-c59066495bf5",
            "name": "Դռագոն Գարդեն Էքսպրեսս",
            "description": "Դռագոն Գարդեն Էքսպրեսս Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/dragon-garden-express.jpg",
            "rating": 4.465437889099121,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                },
                {
                    "id": "chinese",
                    "name": "Չինական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fd097bfa-9e5b-4dda-a155-f45e87fa351f",
            "name": "Բիբլոս",
            "description": "Բիբլոս Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/byblos.jpg",
            "rating": 4.464646339416504,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8fea2393-eec0-4f14-96a8-40eb1549b418",
            "name": "Մարտինի Ռոյալ",
            "description": "Մարտինի Ռոյալ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/martini-royale.jpg",
            "rating": 4.463414669036865,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "905eb0bf-8a96-4474-9e1c-dd8a12918126",
            "name": "Էլ Գարդեն",
            "description": "Էլ Գարդեն Սթեյք, Սուշի, Պաստա, Պիցցա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/el-garden.jpg",
            "rating": 4.461538314819336,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "497541c9-12b3-48cc-adc6-bd78c0c3fad7",
            "name": "Հին Ջրվեժ",
            "description": "Հին Ջրվեժ Խորոված, Քաբաբ, Պասուց Տոլմա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/old-jrvezh.jpg",
            "rating": 4.45945930480957,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fb0549c0-1be1-4174-a4d4-92bd9f13decb",
            "name": "Ջազզվե",
            "description": "Ջազզվե Րյոստի, Բլիթ, Չեզրե, Օլիվիե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/jazzve.jpg",
            "rating": 4.456140518188477,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "a132ebf8-da73-43ab-bba4-bde1d1446b65",
            "name": "Սուշի Մուշի",
            "description": "Սուշի Մուշի Նիգիրի, Գունկան, Սաշիմի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sushi-mushi.jpg",
            "rating": 4.454794406890869,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "14a0fe84-b465-4a05-81f5-b9e46231081c",
            "name": "Պիցցա Պինո",
            "description": "Պիցցա Պինո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizza-pino.jpg",
            "rating": 4.454300880432129,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "6edd1410-300e-43e7-83e2-63c1da121275",
            "name": "Լաբիրինթ",
            "description": "Լաբիրինթ Խեցգետին, Նրբերշիկ, Լոր, Լանգետ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/labeerint.jpg",
            "rating": 4.4375,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c1b74bfa-0b79-4479-b45e-6c2315644ca5",
            "name": "Պոնչի Ղարս Մալաթիա",
            "description": "Պոնչի Ղարս Մալաթիա Օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/ponchi-ghars-malatia.jpg",
            "rating": 4.4285712242126465,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d0425162-f339-43ae-869b-403d7c0ff6f3",
            "name": "Արմատ Կաֆե Ռեստորան",
            "description": "Արմատ Կաֆե Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/armat-cafe-restaurant.jpg",
            "rating": 4.4210524559021,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "a3e64293-d722-45ce-926d-a30d835d256f",
            "name": "Սանտաֆե",
            "description": "Սանտաֆե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/santafe.jpg",
            "rating": 4.416666507720947,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e418ec71-e34e-47e5-9dd2-8c61426be531",
            "name": "Հալապենո Երևան մոլլ",
            "description": "Հալապենո Քուեսադիլլա, Բուրիտո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/jalapeno.jpg",
            "rating": 4.414285659790039,
            "cuisines": [
                {
                    "id": "mexican",
                    "name": "Մեքսիկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "53e0ee45-e181-488b-9340-c2bba8bf7635",
            "name": "Փիդե",
            "description": "Փիդե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pideh.jpg",
            "rating": 4.407407283782959,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1e2eb326-dc91-4533-bd3e-e0b048097d78",
            "name": "Ինդիան Մեհակ Ռեստորան",
            "description": "Ինդիան Մեհակ Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/indian-mehak-restaurant.jpg",
            "rating": 4.400844097137451,
            "cuisines": [
                {
                    "id": "indian",
                    "name": "Հնդկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "59cf9d22-d628-4a10-8dba-360130a7f78f",
            "name": "Թումանյան շաուրմա",
            "description": "Թումանյան շաուրմա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/tumanyan-shaurma.jpg",
            "rating": 4.384358882904053,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1ac93df4-9626-4442-9926-c9eb59b893c0",
            "name": "Կառնուտ Շաուրմա Սարյան",
            "description": "Կառնուտ Շաուրմա Հոթ դոգ, Քեբաբ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/karnut-shaurma-saryan.jpg",
            "rating": 4.3818182945251465,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "30bde107-c2a0-4531-927c-eddfcd540175",
            "name": "Բելլա Իտալիա",
            "description": "Բելլա Իտալիա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/bella-italia.jpg",
            "rating": 4.381443500518799,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0625781e-8d61-4ec9-ae10-484c5ba086e7",
            "name": "Սուշի Վոկ",
            "description": "Սուշի Վոկ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sushi-wok.jpg",
            "rating": 4.380000114440918,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e1ae4011-14c2-4421-a054-3126ea2b87a6",
            "name": "Ին Յան Սուշի Վոկ",
            "description": "Ին Յան Սուշի Վոկ",
            "imageUrl": "http://localhost:7700/images/in-yan-sushi-wok.jpg",
            "rating": 4.365591526031494,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                },
                {
                    "id": "chinese",
                    "name": "Չինական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "24d32a97-7743-4d50-9af1-18e5fc912d01",
            "name": "Աբխազական գրիլ",
            "description": "Աբխազական գրիլ, Խորոված Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/abkhazian-grill.jpg",
            "rating": 4.357142925262451,
            "cuisines": [
                {
                    "id": "georgian",
                    "name": "Վրացական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7dae04aa-18b1-418c-9447-9525cce71210",
            "name": "Շաուրմա Խչոյի մոտ",
            "description": "Շաուրմա Խչոյի մոտ Խորոված, Քեբաբ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/shawarma-khchoyi-mot.jpg",
            "rating": 4.357142925262451,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8c6b5f51-78d6-4a98-b511-9ba629aaa562",
            "name": "Մայ Լանչ",
            "description": "Մայ Լանչ Առաքում",
            "imageUrl": "http://localhost:7700/images/my-lunch.jpg",
            "rating": 4.355072498321533,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "3a602f3b-0325-44e3-8a15-c58266d3ee36",
            "name": "Գնդիկ Բոքոնիկ Լահմաջո",
            "description": "Գնդիկ Բոքոնիկ Լահմաջո Առաքում",
            "imageUrl": "http://localhost:7700/images/gndik-boqonik-lahmajo.jpg",
            "rating": 4.354838848114014,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "54d076d0-e4f3-400a-9641-c5d06e11ac08",
            "name": "Դոկա Պիցցա",
            "description": "Դոկա Պիցցա Պեպպերոնի, Սպագետտի, Լազանիա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/doka-pizza.jpg",
            "rating": 4.351724147796631,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "19ef6946-3197-4d10-bac8-74097d480f61",
            "name": "Չայխոնա",
            "description": "Չայխոնա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/chaihona.jpg",
            "rating": 4.3416666984558105,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8ee08148-0de5-480d-becf-708c69d1b085",
            "name": "Պիցցա Թաուն",
            "description": "Պիցցա Թաուն Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizza-town.jpg",
            "rating": 4.336134433746338,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "f4d4c5fe-ebd9-427c-b86a-0b8f91330b45",
            "name": "Քամանչա Ռեստորան",
            "description": "Քամանչա Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/qamancha-restaurant.jpg",
            "rating": 4.333333492279053,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "37723bcd-d6d3-4fea-b237-e1ef070e9a36",
            "name": "Վասաբի",
            "description": "Վասաբի Սուշի Առաքում",
            "imageUrl": "http://localhost:7700/images/wasabi.jpg",
            "rating": 4.315789699554443,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0f474fcf-4ecf-406e-bc27-910abae704ff",
            "name": "Ժակո",
            "description": "Ժակո Ֆատուշ, Շինգլիշ, Լաբնե, Մանթի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/jaco.jpg",
            "rating": 4.310606002807617,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 900,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "b7327a8a-c9e2-46c6-ab57-4e40fc27c836",
            "name": "Դերյան Ռեստորան",
            "description": "Դերյան Քեբաբ, Թիքա, Քրդիե, Թաբուլե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/derian-kebab-byuzand.jpg",
            "rating": 4.308510780334473,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "1951307f-d81c-4ed3-afb7-7ced53674ae9",
            "name": "Թաբուլե",
            "description": "Թաբուլե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/taboule.jpg",
            "rating": 4.307692527770996,
            "cuisines": [
                {
                    "id": "lebanese",
                    "name": "Լիբանանյան"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "fa109cc0-b899-4793-b5a5-9d7ef53e3385",
            "name": "Քոֆիսթորի",
            "description": "Քոֆիսթորի Օնլայն Առաքում,Քոֆիսթորի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/coffeestory.jpg",
            "rating": 4.300000190734863,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 500,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "24a388be-78be-4486-ada0-d84b7ed3144b",
            "name": "Էպիկուր",
            "description": "Էպիկուր սթեյք, Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/epicure.jpg",
            "rating": 4.300000190734863,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "68286381-cc6a-4309-8a34-a7081ac1382b",
            "name": "Ֆյուչր Դայնր",
            "description": "Ֆյուչր Դայնր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/future-diner.jpg",
            "rating": 4.294117450714111,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "23b03553-340f-45bc-9cd7-70d8db06de6a",
            "name": "Թոնրատուն Ոսկե Աքաղաղ",
            "description": "Թոնրատուն Ոսկե Աքաղաղ, Թոքի Խորաված Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/tonratun-voske-aqaghagh.jpg",
            "rating": 4.28000020980835,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "644b3f22-7ff4-488a-922b-8ee66f43f0ea",
            "name": "Պիցցա Այո",
            "description": "Պիցցա Այո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizza-ayo.jpg",
            "rating": 4.252873420715332,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "69dc237d-c5e2-4c47-afb7-b4ab9dfdf8e0",
            "name": "Լ Օրանժ",
            "description": "Լ Օրանժ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/l-orange.jpg",
            "rating": 4.25,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "93c40ac6-5ff9-4ed4-98cb-ff3e839b792e",
            "name": "Նյամ-Նյամ",
            "description": "Նյամ Նյամ օնլայն առաքում",
            "imageUrl": "http://localhost:7700/images/nyam-nyam.jpg",
            "rating": 4.25,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0acf69aa-38e6-4cf6-bdaa-dcedaeb9a1c1",
            "name": "Կիմ Յամ",
            "description": "Կիմ Յամ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/kim-yum.jpg",
            "rating": 4.230769157409668,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7d2ac78d-1f4e-422e-868c-e743f2a40e09",
            "name": "Վոկ ընդ Ռոլ",
            "description": "Վոկ ընդ Ռոլ Լապշա, Պադ-Թայ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/wok-and-roll.jpg",
            "rating": 4.230337142944336,
            "cuisines": [
                {
                    "id": "chinese",
                    "name": "Չինական"
                },
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "007be7fe-8083-45b3-9f0a-7a4695982c17",
            "name": "Պանդա Երևան",
            "description": "Պանդա Երևան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/panda-yerevan.jpg",
            "rating": 4.218181610107422,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "ef1a2ab1-74aa-46c7-8973-07242126618b",
            "name": "Կովկասի Գերուհի Սայաթ Նովա",
            "description": "Կովկասի Գերուհի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/kavkazskaya-plennica-sayat-nova.jpg",
            "rating": 4.208333492279053,
            "cuisines": [
                {
                    "id": "georgian",
                    "name": "Վրացական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7de0f43d-b9b4-40fa-8957-6579f72994f2",
            "name": "Ուտոպիա Քիչն",
            "description": "Ուտոպիա Քիչն Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/utopia-kitchen.jpg",
            "rating": 4.179245471954346,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "05b6cc3b-7147-446d-93dc-a6c0def3ff79",
            "name": "Իմպրեսսո",
            "description": "Իմպրեսսո Պիցցա Կոն, Բեյգլ սենդվիչ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/impresso.jpg",
            "rating": 4.166666507720947,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "8c89fdef-8fa4-48d9-98cf-2c8ba84f0e06",
            "name": "Կարմիր Գլխարկ",
            "description": "Կարմիր Գլխարկ Ռուսական Կարկանդակ, Ձեթով Կարկանդակ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/karmir-glkhark.jpg",
            "rating": 4.166666507720947,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "850d1ce9-2f4d-41a0-9411-27aded4009ce",
            "name": "Նովելլա Ֆուդ",
            "description": "Նովելլա Ֆուդ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/novella-food.jpg",
            "rating": 4.166666507720947,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5512a833-ecd7-4c68-bad0-832f4bf2fe26",
            "name": "Պիցցա Միցցա",
            "description": "Պիցցա Միցցա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizza-mizza.jpg",
            "rating": 4.162790775299072,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0a6e524d-fab1-484a-80ea-3e58b1f0c917",
            "name": "ՋԻՋԻՍ Պիցցա",
            "description": "ՋԻՋԻՍ Պիցցա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/ggs-pizza.jpg",
            "rating": 4.161290168762207,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e4d3c278-4f24-4c2e-809a-39c54ce7753c",
            "name": "Ֆլեյվրս օֆ Ինդիա",
            "description": "Ֆլեյվրս օֆ Ինդիա հնդկական խոհանոց Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/flavours-of-india.jpg",
            "rating": 4.154411792755127,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5318c810-4b03-4520-82e5-9dff89330241",
            "name": "Դայմնդ Ռեստորան",
            "description": "Դայմնդ Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/diamond-restaurant.jpg",
            "rating": 4.147058963775635,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c8a1aa86-678c-4f82-af89-038ca496afe0",
            "name": "Ածուխ",
            "description": "Ածուխ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/atsukh.jpg",
            "rating": 4.111111164093018,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "95ae582a-1a78-41d8-8811-b490ca3e6d0d",
            "name": "SushiMall.am",
            "description": "Սուշի Մոլլ Ունագի, Գունկան, Սաշիմի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sushimallam.jpg",
            "rating": 4.111111164093018,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "153b3fac-ffc3-4dbc-8916-bc77df6a7265",
            "name": "Ֆուրշետ Բուֆետ",
            "description": "Ֆուրշետ Բուֆետ Պեպերոնի Պիցցա, Չիքն Բուրգեր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/fourchette-buffet.jpg",
            "rating": 4.089743614196777,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0e1208c8-7c4a-4ab2-9113-035276e5faf0",
            "name": "Կառմա",
            "description": "Կառմա Նան, Մասալա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/karma.jpg",
            "rating": 4.0360822677612305,
            "cuisines": [
                {
                    "id": "indian",
                    "name": "Հնդկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e468b6b4-19b7-45b1-b871-ede8315a3875",
            "name": "Կաֆե Եգեր",
            "description": "Կաֆե Եգեր Գարեջուր, Խեցգետին Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/cafe-jager.jpg",
            "rating": 4,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "a07ae00a-838e-4c45-b213-2dfa4da2f79a",
            "name": "Իլ Սոլո Ջելատո",
            "description": "Իլ Սոլո Ջելատո Առաքում",
            "imageUrl": "http://localhost:7700/images/il-solo-gelato.jpg",
            "rating": 4,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "da525aae-8967-4123-9887-3c5a2d9d3bf2",
            "name": "Մերսի Սուշի Բար",
            "description": "Մերսի Սուշի Բար Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/merci-sushi-bar.jpg",
            "rating": 4,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0a6d7dec-c927-4ce4-9c13-33dfe886cb23",
            "name": "Մերսի Գաստրո սրճարան",
            "description": "Մերսի Գաստրո սրճարան Սթեյք, Բուրիտո Առաքում",
            "imageUrl": "http://localhost:7700/images/merci-gastro-cafe.jpg",
            "rating": 4,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e85c8397-3c85-4c68-8d6a-43a2fb52966f",
            "name": "Մինուռ",
            "description": "Մինուռ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/minour.jpg",
            "rating": 4,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c8927c91-22cd-4c4d-a5ed-37c028a5aa89",
            "name": "Մուլտի Վելնես Ռեստորան",
            "description": "Մուլտի Վելնես Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/multi-wellness-restaurante.jpg",
            "rating": 4,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "6934d362-b067-4039-847d-ddc00271d8c3",
            "name": "Տիֆոզի",
            "description": "Տիֆոզի Պիցցա, Խաչապուրի, Սենդվիչ, Ձվածեղ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/tifosi.jpg",
            "rating": 4,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 800,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "3ecce025-e63d-4d7b-ae02-5d7ba5353af0",
            "name": "Ոստան",
            "description": "Ոստան Խորոված, Խաշլամա, Կարմրախայտ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/vostan.jpg",
            "rating": 4,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "f97e1cb1-ba3c-4769-9f01-98da8cd0e759",
            "name": "Պիցցա Ռիալտո",
            "description": "Պիցցա Ռիալտո Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pizza-rialto.jpg",
            "rating": 3.911764621734619,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "51a2c30e-75e2-43fc-afeb-feaf17b37512",
            "name": "Օրեգանո Շաուրմա",
            "description": "Օրեգանո Շաուրմա Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/oregano-shawarma.jpg",
            "rating": 3.8888888359069824,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "5d0c3af0-0a73-4e04-b333-0e4869ce653c",
            "name": "Էլ Հալապենյոս Մեգամոլ",
            "description": "Էլ Հալապենյոս Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/el-jalapenos.jpg",
            "rating": 3.866666555404663,
            "cuisines": [
                {
                    "id": "mexican",
                    "name": "Մեքսիկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7a7b7bfb-3de1-439f-837c-9c7860b7b667",
            "name": "Սուշի Շեֆ",
            "description": "Սուշի Շեֆ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sushi-chef.jpg",
            "rating": 3.8645832538604736,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "2a57060e-983b-4a17-a7d2-edf48748285f",
            "name": "Թոշկա",
            "description": "Թոշկա Ֆաթայեր, Մութաբալ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/toshka.jpg",
            "rating": 3.857142925262451,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "55cc9fea-ea2d-4b51-bce6-010398210833",
            "name": "Սուշի Գարդեն",
            "description": "Սուշի Գարդեն Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sushi-garden.jpg",
            "rating": 3.8548386096954346,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "96928be1-2061-439d-a50b-f5595aeab774",
            "name": "Էլ Էյ Բուրգեր ընդ Բեյքրի",
            "description": "Էլ Էյ Բուրգեր ընդ Բեյքրի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/la-burger-and-bakery.jpg",
            "rating": 3.8333332538604736,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "03120075-fc91-46dc-96c6-336194842eaa",
            "name": "Մեր Հացը",
            "description": "Մեր Հացը Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/mer-hats.jpg",
            "rating": 3.8333332538604736,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e84f86ef-2de7-4daf-97f9-8535cae9bb3c",
            "name": "Սուշի Կուշի",
            "description": "Սուշի Կուշի Ֆիլադելֆիա ռոլ, Կալիֆորնիա ռոլ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sushi-kushi.jpg",
            "rating": 3.8157894611358643,
            "cuisines": [
                {
                    "id": "japanese",
                    "name": "Ճապոնական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "6a266072-71f6-4237-b215-7aeb5846dc54",
            "name": "Ֆուգու",
            "description": "Ֆուգու Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/fugu.jpg",
            "rating": 3.8125,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "a210cd9b-0c38-449e-8c78-cd5ab83e1b58",
            "name": "Բլեք Քոլ Էրեբունի մոլ",
            "description": "Բլեք Քոլ Էրեբունի մոլ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/black-coal.jpg",
            "rating": 3.6818182468414307,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7ca66dd0-17f9-4ced-b734-874c139a094e",
            "name": "Քինգ Գարդեն",
            "description": "Քինգ Գարդեն Պիցցա, Ճագարի Չախուխբիլի Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/king-garden.jpg",
            "rating": 3.6666667461395264,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "9f345f0a-58ca-469f-b1bc-99b56d0323a5",
            "name": "Փինկ Բերրի",
            "description": "Փինկ Բերրի Կրեպ Պաղպաղակ, Ֆրեշ Առաքում",
            "imageUrl": "http://localhost:7700/images/pink-berry.jpg",
            "rating": 3.6666667461395264,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "02883cb0-7387-412f-9075-35303201a56e",
            "name": "Սենդվիչ Սփոթ",
            "description": "Սենդվիչ Սփոթ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/sandwich-spot.jpg",
            "rating": 3.6666667461395264,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "d94c44fc-a837-48f0-bb1a-03b4f0ab755f",
            "name": "Մոնրո Ռեստորան",
            "description": "Մոնրո Ռեստորան Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/monroe-cafe.jpg",
            "rating": 3.640000104904175,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "9cd94f0c-c3c0-43ef-9768-c4da9d8e95bf",
            "name": "Զառա Ռեստորան",
            "description": "Զառա Ռեստորան Դալ Չիքն, Շահի Պանիր Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/zara-restaurant.jpg",
            "rating": 3.555555582046509,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "26f55ac1-104b-438e-a6a7-2d29a7a99257",
            "name": "Չարենցի 28",
            "description": "Չարենցի 28 Ֆալաֆել, Մանթի, Թիքա Մասալա Առաքում",
            "imageUrl": "http://localhost:7700/images/charentsi_28.jpg",
            "rating": 3.5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "914b0e7f-ed33-4ad2-a872-cf4b2f19614f",
            "name": "Healthy Box by Առողջ Սնունդ",
            "description": "Healthy Box by Առողջ Սնունդ Էկո, Դիետիկ, Նիհարեցնող Սնունդ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/healthy-box-by-aroghj-snund.jpg",
            "rating": 3.5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e528cf0a-9535-47b9-8150-a2b314c0f0f8",
            "name": "Բալատուն",
            "description": "Բալատուն Կրուասան, Խմորեղեն, Կալզոնե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/balatoon-cherry-house.jpg",
            "rating": 3.4375,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1000,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "0946f960-a3bf-47bd-8a39-6f54e92e417c",
            "name": "Վերնիանո",
            "description": "Վերնիանո Սուրճ, Պաստա, Գազարով քեյք Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/vergnano.jpg",
            "rating": 3.375,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "30b1ade2-672c-49ac-8b58-bb212b7c3899",
            "name": "Խմորի Աշխարհ Վրացական",
            "description": "Խմորի Աշխարհ Վրացական Օնլայն Առաքում Երևանում, Հայաստանում",
            "imageUrl": "http://localhost:7700/images/world-of-dough-vratsakan.jpg",
            "rating": 3.055555582046509,
            "cuisines": [
                {
                    "id": "georgian",
                    "name": "Վրացական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1100,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "3da365e6-6a1e-4d4e-8da3-8fcc97440de3",
            "name": "Պաստա Հաուս",
            "description": "Պաստա Հաուս Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/pasta-house.jpg",
            "rating": 3,
            "cuisines": [
                {
                    "id": "italian",
                    "name": "Իտալական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 550,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "c695e079-3c80-4369-9656-ca550670d250",
            "name": "Պատառիկ",
            "description": "Պատառիկ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/patarik.jpg",
            "rating": 3,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 1200,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "7dfa824e-1814-48e2-9bce-a6b6d39aba32",
            "name": "Թեյսթի Հաուս",
            "description": "Թեյսթի Հաուս Օնլայն Առաքում Երևանում, Հայաստանում",
            "imageUrl": "http://localhost:7700/images/tasty-house.jpg",
            "rating": 2.857142925262451,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 700,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "e4a1fe68-8147-470f-840c-f5d9c24aea10",
            "name": "Սուշի Իթ ընդ Թեյք",
            "description": "Սուշի Իթ ընդ Թեյք Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/eat-and-take.jpg",
            "rating": 2.5,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "22d9f321-a847-477b-869e-4b27b897b588",
            "name": "Առագաստ",
            "description": "Առագաստ Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/aragast.jpg",
            "rating": 2.4000000953674316,
            "cuisines": [
                {
                    "id": "armenian",
                    "name": "Հայկական"
                }
            ],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        },
        {
            "id": "a198db0e-74db-4104-8d59-318f44285ebc",
            "name": "Լայք Կաֆե",
            "description": "Լայք Կաֆե Օնլայն Առաքում",
            "imageUrl": "http://localhost:7700/images/like-cafe.jpg",
            "rating": 1,
            "cuisines": [],
            "locations": [],
            "schedule": [
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ],
                [
                    {
                        "from": "00:00",
                        "to": "02:00"
                    },
                    {
                        "from": "23:59",
                        "to": "10:00"
                    }
                ]
            ],
            "deliveryFee": 600,
            "isOpen": false,
            "closesSoon": false
        }
    ],
    cuisines: [
        {id: 'all', name: 'Բոլորը'},
        {id: 'lebanese', name: 'Լիբանանյան'},
        {id: 'armenian', name: 'Հայկական'},
        {id: 'japanese', name: 'Ճապոնական'},
        {id: 'georgian', name: 'Վրացական'},
        {id: 'american', name: 'Ամերիկյան'},
        {id: 'italian', name: 'Իտալական'},
        {id: 'chinese', name: 'Չինական'},
        {id: 'mexican', name: 'Մեքսիկական'},
        {id: 'greek', name: 'Հունական'},
        {id: 'indian', name: 'Հնդկական'},
    ],
    activeCuisine: {id: 'all', name: 'Բոլորը'},
    filterItems: [
        {img:images.promoBurger, label: "burger"},
        {img:images.pizza, label: "pizza"},
        {img:images.sushi, label: "sushi"},
        {img:images.barbecue, label: "barbecue"},
        {img:images.cakes, label: "cakes"},
        {img:images.pasta, label: "pasta"},
        {img:images.salads, label: "salads"},
        {img:images.shawarma, label: "shawarma"},
        {img:images.juices, label: "juices"},
        {img:images.chicken, label: "chicken"},
        {img:images.woks, label: "woks"},

    ],
    activeFilterIcon: null,
    searchValue: []

}

export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_CUISINE:
            return {
                ...state,
                activeCuisine: action.payload
            }

        case SET_ACTIVE_ICON:
            return {
                ...state,
                activeFilterIcon: action.payload
            }
        default:
            return {
                ...state
            }
    }
}