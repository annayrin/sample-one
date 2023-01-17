import {useDispatch, useSelector} from "react-redux";
import {
    selectActiveCuisine, selectHomeActiveFilterIcon,
    selectHomeCuisines,
    selectHomeFilterItems,
    selectHomeRestaurants
} from "../../STORE/home/selections";
import {selectCuisine, selectIcon} from "../../STORE/home/actions";

const useHomePage = () => {

    const dispatch = useDispatch();
    const restaurants = useSelector(selectHomeRestaurants)
    const cuisines = useSelector(selectHomeCuisines)
    const activeCuisine = useSelector(selectActiveCuisine)
    const filterItems = useSelector(selectHomeFilterItems)
    const activeFilterIcon = useSelector(selectHomeActiveFilterIcon)

    const chooseCuisine = item => dispatch(selectCuisine(item))
    const chooseIcon = item => dispatch(selectIcon(item))

    return {
        restaurants,
        cuisines,
        activeCuisine,
        filterItems,
        activeFilterIcon,
        chooseCuisine,
        chooseIcon
    }
}

export default useHomePage