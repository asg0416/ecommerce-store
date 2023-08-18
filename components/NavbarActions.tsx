"use client";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import MountWrapper from "@/components/wrapper/MountWrapper";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const router = useRouter();
  const { items: cartItems } = useCart();

  return (
    <MountWrapper>
      <div className="ml-auto flex items-center gap-x-4">
        <Button onClick={()=> router.push('/cart')} className="flex items-center bg-black px-4 py-2">
          <ShoppingBag size={20} color="white" />
          <span className="ml-2 text-sm font-medium text-white">
            {cartItems.length}
          </span>
        </Button>
      </div>
    </MountWrapper>
  );
};

export default NavbarActions;
