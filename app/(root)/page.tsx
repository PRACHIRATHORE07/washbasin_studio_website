import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/Banner.png" alt="Banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

