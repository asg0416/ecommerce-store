"use client";

import { useEffect, useState } from "react";

/**
 * client side 에서 렌더링 되어야할 컴포넌트가 위치할 페이지가
 * SSR인 경우 프로바이더가 마운트 되었는지 여부를 확인하여 에러를 막음.
 * @param {React.ReactNode} children 마운트여부 확인 필요한 client side component
 * @returns
 */
const MountWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <>{children}</>;
};

export default MountWrapper;
