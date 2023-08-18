"use client";

import _axios from "@/axios-config";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/useCart";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const { items, removeAll } = useCart();

  useEffect(() => {
    if(searchParams.get("success")){
      toast.success("Payment completed.")
      removeAll();
    }

    if(searchParams.get("canceled")){
      toast.error("Something went wrong")
    }
  }, [searchParams, removeAll])
  

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const onCheckout = async () => {
    const res = await _axios.post("/checkout", {
      productIds: items.map((item) => item.id),
    });

    location = res.data.url;
  };

  return (
    <div className=" mt-16 rounded-lg bg-gray-50 px-4 py-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className=" text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className=" text-base font-medium text-gray-900">Order total</div>
        <Currency value={totalPrice} />
      </div>
      <Button onClick={onCheckout} className=" w-full mt-6">Checkout</Button>
    </div>
  );
};

export default Summary;
