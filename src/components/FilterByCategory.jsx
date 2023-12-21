import { useDispatch } from "react-redux";
import { selectedCategory, sortByButton, sortByCategory } from "../features/sort/sortProductSlice";

const FilterByCategory = () => {
  const dispatch = useDispatch();

  const handleFilterCategory = (e) => {
    dispatch(sortByCategory(e.target.value));
  };

  return (
    <div className="w-full">
      <h3>Filter By Category :</h3>
      <form className="flex flex-col">
        <div>
          <input type="checkbox" id="electronics" value="electronics"></input>
          <label for="electronics" className="pl-2">
            Electronics
          </label>
        </div>
        <div>
          <input type="checkbox" id="women's clothing" value="women's clothing"></input>
          <label for="women's clothing" className="pl-2">
            Women's Clothing
          </label>
        </div>
        <div>
          <input type="checkbox" id="men's clothing" value="men's clothing"></input>
          <label for="men's clothing" className="pl-2">
            Men's Clothing
          </label>
        </div>
        <div>
          <input type="checkbox" id="jewelery" value="jewelery"></input>
          <label for="jewelery" className="pl-2">
            Jewelery
          </label>
        </div>
      </form>
    </div>
  );
};

export default FilterByCategory;
