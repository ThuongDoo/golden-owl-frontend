import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  selectBasket,
  removeProduct,
  selectBasketTotal,
} from "../slices/basketSlice";

function YourCart() {
  const basket = useSelector(selectBasket);
  const totalPrice = parseFloat(useSelector(selectBasketTotal).toFixed(2));
  // const totalPrice = useSelector(selectBasketTotal);
  console.log(basket);
  return (
    <div className="border border-gray-500 rounded-[28px] py-[12px] px-[28px] h-[34rem] w-[22rem] flex flex-col">
      <img
        src="https://raw.githubusercontent.com/leo-nguyen-goldenowl/js-intern-assignment/main/app/assets/nike.png"
        alt=""
        className=" w-10"
      />
      <div className=" flex flex-row justify-between pb-4 pt-4">
        <h1 className=" font-extrabold text-2xl">Your cart</h1>
        <h1 className=" font-extrabold text-2xl">${totalPrice}</h1>
      </div>
      {basket.length === 0 ? (
        <h1 className=" self-center pt-4">Your cart is empty</h1>
      ) : (
        <div className="space-y-[40px] flex-1 overflow-y-auto max-h-full no-scrollbar pt-4">
          {basket.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleIncrease = (value) => {
    dispatch(increaseQuantity(value));
  };
  const handleDecrease = (value) => {
    dispatch(decreaseQuantity(value));
  };
  const handleRemove = (value) => {
    dispatch(removeProduct(value));
  };
  return (
    <div className=" flex flex-row space-x-[28px]">
      <div className=" relative ">
        <div
          className=" w-[90px] h-[90px] rounded-full"
          style={{ backgroundColor: product.color }}
        ></div>
        <div className=" absolute -bottom-2 w-[100px] -left-2 flex items-center justify-center">
          <img
            src={product.image}
            alt=""
            className="transform -rotate-[30deg]"
          />
        </div>
      </div>
      <div className="  w-full flex flex-col justify-between ">
        <h1 className=" font-bold text-sm ">{product.name}</h1>
        <h1 className=" text-xl font-extrabold">${product.price}</h1>
        <div className=" flex flex-row items-center justify-between ">
          <div className=" flex flex-row items-center space-x-2">
            <button
              className=" hover:bg-gray-300 rounded-full w-[28px] h-[28px] bg-gray-200"
              onClick={() => handleDecrease(product)}
            >
              <img
                src="https://raw.githubusercontent.com/leo-nguyen-goldenowl/js-intern-assignment/main/app/assets/minus.png"
                alt=""
                className=" p-2.5"
              />
            </button>
            <h1>{product.quantity}</h1>
            <button
              className=" hover:bg-gray-300 rounded-full w-[28px] h-[28px] bg-gray-200"
              onClick={() => handleIncrease(product)}
            >
              <img
                src="https://raw.githubusercontent.com/leo-nguyen-goldenowl/js-intern-assignment/main/app/assets/plus.png"
                alt=""
                className=" p-2.5"
              />
            </button>
          </div>
          <button
            onClick={() => handleRemove(product)}
            className=" w-[28px] h-[28px] bg-customYellow rounded-full"
          >
            <img
              src="https://raw.githubusercontent.com/leo-nguyen-goldenowl/js-intern-assignment/main/app/assets/trash.png"
              alt=""
              className=" p-1.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
