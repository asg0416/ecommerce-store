"use client"

import Container from "@/components/ui/container"
import MountWrapper from "@/components/wrapper/MountWrapper"
import useCart from "@/hooks/useCart"
import CartItem from "./components/CartItem"
import Summary from "./components/Summary"

const CartPage = () => {
  const {items: cartItems} = useCart();
  return (
    <MountWrapper>
      <div className="bg-white">
        <Container>
          <div className=" px-4 py-16 sm:px-6 lg:px-8">
            <h1 className=" text-3xl font-bold text-black">shopping Cart</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className=" lg:col-span-7">
                {cartItems.length === 0 && <p className=" text-neutral-500">No items added cart</p>}
                <ul>
                  {cartItems.map((item)=><CartItem key={item.id} data={item}/>)}
                </ul>
              </div>
              <Summary/>
            </div>
          </div>
        </Container>
      </div>
    </MountWrapper>
  )
}

export default CartPage