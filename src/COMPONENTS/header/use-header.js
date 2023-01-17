import {useDispatch, useSelector} from "react-redux";
import {
    selectLayoutActiveLanguage, selectLayoutHeaderLinks,
    selectLayoutInactiveLanguages,
    selectLayoutLanguages
} from "../../STORE/layout/selections";
import {selectLanguage} from "../../STORE/layout/actions";

const UseHeader = () => {
    const dispatch = useDispatch()
    const links = useSelector(selectLayoutHeaderLinks)
    const languages = useSelector(selectLayoutLanguages)
    const activeLanguage = useSelector(selectLayoutActiveLanguage)
    const inactiveLanguages = useSelector(selectLayoutInactiveLanguages)

    const selectActiveLanguage = (item) => dispatch(selectLanguage(item))


    return {
        languages,
        links,
        activeLanguage,
        inactiveLanguages,
        selectActiveLanguage
    }
}
export default UseHeader