import { notFound } from "next/navigation";
import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import { getProductByStoreAndEan } from "@/services/foodWasteService";
import dataFormatter from "@/components/storeList/dataFormatter.helper";
import BackLink from "@/components/ui/BackLink/BackLink";
import "@/styles/base/_pages.css";

export default async function ProductDetailPage({ params }) {
  const { id, productId } = await params;

  let productData;

  try {
    productData = await getProductByStoreAndEan(id, productId);
  } catch (error) {
    notFound();
  }

  const { store, offer, product } = productData;
  const formattedStore = dataFormatter(store);

  if (!formattedStore) {
    notFound();
  }

  return (
    <main className="productDetailPage">
      <div className="productDetailPageTopBar">
        <BackLink />
      </div>

      <div className="productDetailPageContent">
        <div className="productDetailStore">
          <StoreCard
            name={formattedStore.name}
            id={formattedStore.brand}
            address={formattedStore.address}
            distance={formattedStore.distance}
            openHours={formattedStore.workingHours}
            status={formattedStore.status}
            variant="flat"
          />
        </div>

        <section className="productDetailProduct">
          <ProductDetailCard offer={offer} product={product} />
        </section>
      </div>
    </main>
  );
}
