"use client";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBagCheck, BsQuestionCircleFill } from "react-icons/bs";
import { BiQuestionMark } from "react-icons/bi";
import { clearCart } from "@/store/cartSlice";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { API_URL, STRAPI_API_TOKEN } from "@/store/utils/constants";
import { stripeCheckoutRequest } from "@/store/utils/api";
import Spinner from "@/components/Spinner";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const page = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total, currentItem) => (total += Number(currentItem.price)),
      0
    );
  }, [cartItems]);

  const handlePayment = async () => {
    // const stripe = await stripePromise;
    // const data = await stripeCheckoutRequest("/api/orders", cartItems);
    setLoading(true);
    try {
      const stripe = await stripePromise;
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });
      const data = await res.json();
      await stripe.redirectToCheckout({
        sessionId: data.stripeSession.id,
      });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      console.log("error: " + error);
    }

    // dispatch(clearCart());
  };
  return (
    <div className="w-full md:py-8">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* HEADING AND PAGRAPH START */}
            <div className="text-xl text-black/[0.7] flex justify-center gap-1 leading-tight font-bold md:mb-8">
              <BsBagCheck />
              <span>My Shopping Cart</span>
            </div>
            {/* HEADING AND PAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col gap-8 py-6 lg:flex-row">
              {/* cart item start */}
              <div className="flex-[2]">
                <div className="text-md text-gray-700  mb-1">
                  Cart Items ({cartItems.length})
                </div>
                <div className="bg-gray-100 py-2 px-1 sm:px-4 rounded">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                <button onClick={() => dispatch(clearCart())}>
                  Clear cart
                </button>
              </div>
              {/* cart item end */}

              {/* cart summary start */}
              <div className="flex-[1]">
                <div className="text-lg text-gray-500  mb-1">Summary</div>
                <div>
                  <div className="bg-gray-100 px-4 py-2 rounded text-black/[0.7]">
                    <div className="flex justify-between border-b border-gray-300 py-4 font-semibold text-sm">
                      <span>Subtotal</span>
                      <span>${subTotal}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-4 font-semibold text-sm">
                      <span className="flex items-center gap-1">
                        Shipping Estimate <BsQuestionCircleFill />
                      </span>
                      <span>$20</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-4 font-semibold text-sm">
                      <span className="flex items-center gap-1">
                        Tax Estimate <BsQuestionCircleFill />
                      </span>
                      <span>$10</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-4 font-semibold text-sm text-black/[0.9]">
                      <span>Order Total</span>
                      <span>${subTotal + 10 + 20}</span>
                    </div>
                    <div className="mt-2 mb-4 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Itaque deleniti illo veritatis dolore, repellendus quod
                      illum voluptatibus error, porro blanditiis excepturi. Non
                      mollitia nemo cum consequatur sint a itaque! Eaque!
                    </div>
                    <button
                      className="w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-2"
                      onClick={handlePayment}
                    >
                      {loading && <Spinner />}
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* cart summary end */}

            {/* CART CONTENT END */}
          </>
        )}
        {cartItems.length < 1 && (
          <div className="flex justify-between flex-col items-center gap-4">
            <h2 className="text-gray-900 font-semibold text-2xl">
              Your cart is empty
            </h2>
            <p className="text-gray-500 font-normal text-md max-w-xs text-center">
              You haven't added any items to your cart yet. To continue
              shopping, visit our <Link href="/">products</Link> page.
            </p>
            <Link
              href="/"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-xs sm:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Start shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default page;
