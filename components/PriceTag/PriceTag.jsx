import styles from "./PriceTag.module.css";

export default function PriceTag({
  originalPrice,
  discountPrice,
  currency = "DKK",
}) {
  return (
    <div className={styles.priceTag}>
      <span className={styles.discountPrice}>
        {discountPrice} {currency}
      </span>
      <span className={styles.originalPrice}>
        <del>
          {originalPrice} {currency}
        </del>
      </span>
    </div>
  );
}
