import {combineReducers} from "redux";
import layoutReducer from "./layout/reducer";
import homePageReducer from "./home/reducer";

export default combineReducers({
    layout: layoutReducer,
    homePage: homePageReducer,
})