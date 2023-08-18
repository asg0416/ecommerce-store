"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/iconButton";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  data: Product;
}

// 상품 카드 컴포넌트
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const {addItem} = useCart();
  const {onOpen} = usePreviewModal();
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) =>{
    e.stopPropagation();
    onOpen(data);
  }
  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (e) =>{
    e.stopPropagation();
    addItem(data);
  }
  return (
    <div
      onClick={onClickHandler}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt={`${data.name} Image`}
          className=" aspect-square object-cover rounded-md"
        />
        <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className=" text-gray-600" />}
            />
            <IconButton
              onClick={onAddtoCart}
              icon={<ShoppingCart size={20} className=" text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
