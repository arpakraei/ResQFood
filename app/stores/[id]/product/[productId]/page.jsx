import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import { getProductByStoreAndEan } from "@/services/foodWasteService";

export default async function ProductDetailPage({ params }) {
    const { id, productId } = params;
  const  {store, offer, product}  = await getProductByStoreAndEan(id, productId);
  console.log(params);
  

  
  return (
    <main >
      <div >
        <div >
          <StoreCard
            id={store.id}
            name={store.name}
            address={store.address.street}
            openHours={store.openHours}
            status={store.status}
            deals={1}
            variant="bordered"
          />
        </div>

        <div>
          <ProductDetailCard offer={offer} product={product} />
        </div>
      </div>
    </main>
  );
}
