export default async function Stores({ searchParams }) {
  const params = await searchParams;

  const source = params.source; //tells if it is search or geolocation
  const areaCode = params.zip;
  const latitude = params.lat;
  const longitude = params.lng;

  const storeData = 0;
  return (
    <>
      <StoreList data={storeData} />
    </>
  );
}
