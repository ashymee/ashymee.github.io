import { useState } from "react";

const useVariantStore = () => {
  const [variantType, setVariantType] = useState<"even" | "odd">("even");

  return [variantType, setVariantType] as const;
};

export default useVariantStore;
