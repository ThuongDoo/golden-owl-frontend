import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  resetBasket,
  selectBasket,
} from "../slices/basketSlice";

function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  useEffect(() => {
    const fetchData = async () => {
      await api
        .get("/products")
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const handleAdd = (value) => {
    dispatch(increaseQuantity(value));
    // dispatch(resetBasket());
  };

  const isProductAdded = (id) => {
    const isAdded = Boolean(basket.find((product) => product.id === id));
    console.log(basket);
    console.log(isAdded);
    return isAdded;
  };
  return (
    <div className="border border-gray-500 rounded-[28px] py-[12px] px-[28px] h-[34rem] w-[22rem] flex flex-col">
      <img
        src="https://raw.githubusercontent.com/leo-nguyen-goldenowl/js-intern-assignment/main/app/assets/nike.png"
        alt=""
        className=" w-10"
      />
      <h1 className=" font-extrabold text-2xl py-4">Our Products</h1>
      <div className=" flex-1 no-scrollbar overflow-y-auto max-h-full pt-4 space-y-[80px]">
        {products?.map((product) => (
          <div key={product.id} className=" space-y-[20px]">
            <div
              className=" flex rounded-[28px] h-80 w-full justify-center items-center"
              style={{ backgroundColor: product.color }}
            >
              <img
                src={product.image}
                alt=""
                className=" w-full transform -rotate-[30deg]"
              />
            </div>
            <h3 className=" text-xl font-extrabold">{product.name}</h3>
            <h3 className=" text-sm font-light">{product.description}</h3>
            <div className=" flex flex-row justify-between items-center">
              <h3 className=" font-bold text-xl">${product.price}</h3>
              {isProductAdded(product.id) ? (
                <div className=" h-10 w-10 bg-customYellow rounded-full p-2">
                  <img
                    src="https://raw.githubusercontent.com/leo-nguyen-goldenowl/js-intern-assignment/main/app/assets/check.png"
                    alt=""
                  />
                </div>
              ) : (
                <button
                  className=" rounded-full h-12 px-4 bg-customYellow"
                  onClick={() => handleAdd(product)}
                >
                  <h3 className=" text-base font-extrabold">ADD TO CART</h3>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
