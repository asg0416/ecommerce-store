"use client";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorPageProps) {
  return (
    <Container>
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <h1 className=" font-bold text-4xl pb-4">Error !! 🤪</h1>
        <p className=" text-lg pb-4">{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </Container>
  );
}

export default Error;
