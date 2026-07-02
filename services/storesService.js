import { ApiError } from "./ApiError";
import { apiClient } from "./client";

export async function getFoodWasteByStoreId(id) {
  if (id == null)
    throw new ApiError("Store id is required", {
      status: 0,
      details: "MISSING_STORE_ID",
    });
  const path = `/v1/food-waste/${id}`;
  return apiClient(path);
}
