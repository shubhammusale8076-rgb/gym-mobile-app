import dayjs from "dayjs";

export const formatCurrency = ( value: number, currency = "INR"): string => {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `₹${value.toFixed(2)}`;
  }
};

export const formatSubscriptionDateTime = ( value?: string): string => {
  if (!value) return "Not Available";

  const parsedDate = dayjs(value);

  return parsedDate.isValid()
    ? parsedDate.format("DD MMM YYYY")
    : "Not Available";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";

  return value
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};