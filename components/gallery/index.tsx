"use client";

import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTap from "./GalleryTap";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

// 개별 상품 상세 페이지 이미지 컴포넌트
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className=" mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTap key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className=" aspect-square relative h-full w-full sm:rounded-lg overflow-hidden bg-gray-100">
              <Image
                fill
                src={image.url}
                alt="product image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
