import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";

const Success = () => {
  return (
    <Wrapper>
      <div class="my-10 md:mx-60">
        <div className="bg-gray-100 p-6 rounded flex flex-col justify-center items-center">
          <BiCheckCircle className="w-16 h-16 text-green-600 my-4" />
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p class="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day! </p>
            <div class="py-10 text-center">
              <Link href="/" className="font-bold text-lg mt-5">
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <div className="underline">info@shop.com</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Success;
