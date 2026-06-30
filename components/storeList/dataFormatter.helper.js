import formatTime from "../../utils/formatTime";
import closingTimeCountdown from "../../utils/closingTime";

const storeName = {
  netto: "Netto",
  foetex: "føtex",
  bilka: "Bilka",
};

const getStoreName = (key) => storeName[key.toLowerCase()] || key;

const formatDistance = (distance) => {
  if (distance == null) return null;
  return distance > 1
    ? `${Number(distance).toPrecision(1)}km`
    : `${Math.round(distance * 1000)}m`;
};

const getWorkingHours = (isClosed, openingTime, closingTime) => {
  const hoursUntilClosing = closingTimeCountdown(closingTime);
  if (isClosed || hoursUntilClosing <= 0)
    return {
      status: "closed",
      openHours: `Opens at ${formatTime(openingTime)}`,
    };

  if (hoursUntilClosing > 1)
    return {
      status: "open",
      openHours: `Closing at ${formatTime(closingTime)}`,
    };

  return {
    status: "closingSoon",
    openHours: `Closing soon at ${formatTime(closingTime)}`,
  };
};

export default function dataFormatter(store) {
  console.log("I was here!");
  console.log(store);
  if (!store) return null;

  const todaySchedule = store.hours?.[0];

  const formattedObj = {
    name: getStoreName(store.brand),
    brand: store.brand,
    address: store.address?.street,
    distance: formatDistance(store?.distance_km),
    workingHours: getWorkingHours(
      todaySchedule?.closed,
      todaySchedule?.open,
      todaySchedule?.close,
    ),
  };

  return formattedObj;
}
