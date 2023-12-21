import { useDispatch } from "react-redux";
import { selectedCategory, sortByButton, sortByCategory } from "../features/sort/sortProductSlice";

const Sort = () => {
  const dispatch = useDispatch();

  const handleFilterCategory = (e) => {
    dispatch(sortByCategory(e.target.value));
  };

  const handleSort = (e) => {
    dispatch(sortByButton(e.target.value))
  }

  return (
    <div className="flex gap-6 w-full py-4">
      <div className="w-1/2">
        <select className="w-full p-3 rounded-lg shadow" onChange={(e) => handleFilterCategory(e)}>
          <option value="all category">All Category</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelry</option>
        </select>
      </div>
      <div className="w-1/2">
        <select className="w-full p-3 rounded-lg shadow" onChange={(e) => handleSort(e)}>
          <option value>Sort By</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
          <option value="lowest price">Lowest Price</option>
          <option value="highest price">Highest Price</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
