import {useDispatch, useSelector} from "react-redux";
import {
    selectActiveCuisine,
    selectHomeActiveFilterIcon,
    selectHomeCuisines,
    selectHomeFilterItems,
    selectHomeRestaurants, selectHomeSearchValue
} from "../../STORE/home/selections";
import {handleSearchValue, selectCuisine, selectIcon} from "../../STORE/home/actions";
import {useEffect, useState} from "react";

const useHomePage = () => {

    const dispatch = useDispatch();
    const restaurants = useSelector(selectHomeRestaurants)
    const cuisines = useSelector(selectHomeCuisines)
    const activeCuisine = useSelector(selectActiveCuisine)
    const filterItems = useSelector(selectHomeFilterItems)
    const activeFilterIcon = useSelector(selectHomeActiveFilterIcon)
    const searchValue = useSelector(selectHomeSearchValue)

    const [filteredRestaurants, setFilteredRestaurants] = useState([...restaurants])

    const handleSearch = event => {
        dispatch(handleSearchValue(event.target.value))
    }
    const chooseCuisine = item => {
        dispatch(selectCuisine(item))
    }
    const chooseIcon = item => {

        if (activeFilterIcon.name !== item.name) {
            dispatch(selectIcon(item))
        } else {
            dispatch(selectIcon({img: "", label: "", name: ""}))
        }
    }

    useEffect(() => {
        let filtered;
        filtered = restaurants.filter(item => {
            if (activeCuisine.id !== "all") {
                return item.cuisines.some(item => item.id === activeCuisine.id)
                    && ((item.name.toLowerCase().includes(activeFilterIcon.name) && item.name.toLowerCase().includes(searchValue))
                        || (item.description.toLowerCase().includes(activeFilterIcon.name) && item.description.toLowerCase().includes(searchValue)))
            } else {
                return (item.name.toLowerCase().includes(activeFilterIcon.name) && item.name.toLowerCase().includes(searchValue))
                    || (item.description.toLowerCase().includes(activeFilterIcon.name) && item.description.toLowerCase().includes(searchValue))
            }
        })

        setFilteredRestaurants(filtered)

    }, [activeCuisine, activeFilterIcon, searchValue]) // toooo complicated, need to improve this


    return {
        filteredRestaurants,
        restaurants,
        cuisines,
        activeCuisine,
        filterItems,
        activeFilterIcon,
        searchValue,
        chooseCuisine,
        chooseIcon,
        handleSearch
    }
}
export default useHomePage