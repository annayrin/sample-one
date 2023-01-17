import {OPEN_MENU} from "./action-type";
import {SET_ACTIVE_LANGUAGE, SET_DELETED_NOTIFICATIONS, SET_GENERATED_NOTIFICATIONS} from "./saga-types";
import images from "../../UTILITIES/images";

const initialState = {
    links: [

        {
            iconName: "home",
            path: "/",
            label: "Home",
        },
        {
            iconName: "home",
            path: "/how-to-order",
            label: "How to order",
        },
        {
            iconName: "",
            path: "/contact-us",
            label: "Contact Us",
        },

    ],
    languages: [
        {
            content: "English",
            icon: images.ukFlag
        },
        {
            content: "Russian",
            icon: images.rusFlag
        },
        {
            content: "Armenian",
            icon: images.armFlag
        }
    ],
    activeLanguage: {content: "English", icon: images.ukFlag},
    inactiveLanguages: [{
        content: "Russian",
        icon: images.rusFlag
    },
        {
            content: "Armenian",
            icon: images.armFlag
        }],
    visibility: false,
    notification: [],
}

export default function layoutReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MENU:
            return {
                ...state,
                visibility: action.payload
            }
        case SET_GENERATED_NOTIFICATIONS:
            return {
                ...state,
                notification: action.payload
            }
        case SET_ACTIVE_LANGUAGE:
            return {
                ...state,
                activeLanguage: action.payload.activeLanguage,
                inactiveLanguages: action.payload.inactiveLanguages // need to filter the active one
            }

        default:
            return {
                ...state
            }
    }
}