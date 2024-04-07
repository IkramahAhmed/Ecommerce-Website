import { useNavigate } from "react-router-dom";
import { category } from "../../data.js";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const Category = () => {
  const navigate = useNavigate();


  // Inside the JSX code, there's a button element. When clicked, it calls the addCart function with the item as an argument. This item is likely coming from a list of products or items that the user can add to the cart.
  const cartItems =useSelector((state) => state.cart)
  const dispatch =useDispatch();

  //add to cart
const addCart =(item) =>{
dispatch(addToCart(item));
toast.success("Add To Cart");
}

const  deleteCart =(item) =>{
 dispatch(deleteFromCart(item));
 toast.success("Delete cart")
}
//use local storage to save the addtocart  data store in localStorage because when i refresh the page the data is vanishing thats why i used the stare data in local storage
useEffect(() =>{
 localStorage.setItem('cart',JSON.stringify(cartItems))
},[cartItems])
  return (
    <div>
      <div className="flex flex-col mt-9 ">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          {/* main 2  */}
          <div className="flex">
            {/* category  */}
            {category?.map((item, index) => {
              return (
                <div key={index} className="px-6 lg:px-10">
                  {/* Image  */}
                  <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-200 transition-all hover:bg-pink-400 cursor-pointer mb-1 ">
                    <div className="flex justify-center mb-12">
                      <div
                        onClick={() => navigate(`/category/${item.name}`)}
                        className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-200 transition-all hover:bg-pink-400 cursor-pointer mb-1 "
                      >
                        {/* Image tag  */}
                        <img src={item.image} alt="img" />
                      </div>
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
