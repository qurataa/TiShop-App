import { useDispatch } from "react-redux";
import { searchProduct } from "../features/sort/sortProductSlice";

const InputSearch = () => {
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        const searchItem = e.target.value
        dispatch(searchProduct(searchItem))
    }

    return ( <div className="w-24 lg:w-96">
        <input placeholder="Search Product... " className="w-full rounded-lg p-2 shadow-md" onChange={(e) => handleSearch(e)}/>
    </div> );
}
 
export default InputSearch;