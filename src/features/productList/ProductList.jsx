import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import Loading from "../../components/Loading";
import StarIcon from "../../assets/star.svg";
import { fetchDataProduct } from "../sort/sortProductSlice";

const ProductList = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.sortProduct.status);
  const products = useSelector((state) => state.sortProduct.sortedProductItem);

  // useEffect(() => {
  //   // const fetchProducts = async () => {
  //   //   setLoading(true);
  //   //   try {
  //   //     // if (category === ""){
  //   //     //   category = "all category"
  //   //     // }
  //   //     // const data = await getProduct(category);
  //   //     // setProducts(data);
  //   //     // // console.log(data)
  //   //     // dispatch(filteredProduct(data))
  //   //     if (fetchStatus === "idle") {
  //   //       dispatch(fetchDataProduct());
  //   //     }
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   } finally {
  //   //     setTimeout(() => setLoading(false), 200);
  //   //   }
  //   // };

  //   // fetchProducts();

  //   // if (fetchStatus === "idle") {
  //   //   dispatch(fetchDataProduct());
  //   // }
  // }, []);

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchDataProduct());
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 200);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-4">
      {products.map((product) => {
        return (
          <div key={product.id} className=" bg-white rounded-xl border shadow p-4 w-full">
            <div className="group relative w-[80%] h-[150px] mx-auto overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-scale duration-500 ease-in-out" />
            </div>
            <div className="flex flex-col h-[150px] justify-between mt-8">
              {/* <h3>{product.category}</h3> */}
              <h3 className="font-bold text-lg line-clamp-2 ">{product.title}</h3>
              <div className="flex justify-between">
                <h3 className="font-bold ">${product.price}</h3>
                <div className="flex items-center gap-1 text-xs">
                  <div className="flex  gap-1">
                    <img src={StarIcon} alt="" width={15} height={15} />
                    <h4>
                      {product.rating.rate} <span className="font-bold">|</span>
                    </h4>
                  </div>
                  <h4>({product.rating.count} Reviews)</h4>
                </div>
              </div>
              <button type="button" className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg w-full text-sm py-3 px-8" onClick={() => handleClickBuy(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
