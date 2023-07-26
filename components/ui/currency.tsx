"use client";

import MountWrapper from "@/components/wrapper/MountWrapper";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return (
    <MountWrapper>
      <div className="font-semibold">{formatter.format(Number(value))}</div>
    </MountWrapper>
  );
};

export default Currency;
