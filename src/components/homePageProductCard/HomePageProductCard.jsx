import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
  
  const navigate = useNavigate();

    const context = useContext(myContext);
    const {getAllProduct,loading} = context;
    
    
    //redux
    // const cartItems = useSelector((state) => state.cart): This line uses the useSelector hook from Redux to extract the cart state from the Redux store. It selects the portion of the Redux state that represents the items in the cart.

// const dispatch = useDispatch();: This line uses the useDispatch hook from Redux to get a reference to the dispatch function. The dispatch function is used to send actions to the Redux store.

// const addCart = (item) => { ... }: This is a function named addCart that takes an item as a parameter. When called, it dispatches an action to add the item to the cart.

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
    <div className="mt-10">
      {/* Heading  */}
      <div className="">
        <h1 className=" text-center mb-5 text-2xl font-semibold">
          Bestselling Products
        </h1>
      </div>
      {/* main  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
        <div className="flex justify-center">
        {loading && <Loader/>}

        </div>

          <div className="flex flex-wrap -m-4">
            {getAllProduct.slice(0,8).map((item, index) => {
              const { productImageUrl,id, title, price,category } = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4">

              
                  <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                      onClick={() => navigate(`/productinfo/${id}`)}
                      className="lg:h-80  h-96 w-full"
                      src={productImageUrl}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                    
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title.length > 18
                          ? `${title.substring(0, 18)}...`
                          : title}
                      </h1>
                      ₹{price}
                      <div className="flex justify-center ">
                       
                       {cartItems.some((p) =>p.id === item.id)
                       ? <button onClick={() =>deleteCart(item)} className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                          Delete  Cart
                        </button>: 
                        
                        
                         <button onClick={() =>addCart(item)} className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                          Add to Cart
                        </button>
                        }
                      
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
