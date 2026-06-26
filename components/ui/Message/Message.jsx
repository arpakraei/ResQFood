import { TriangleAlert } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./Message.module.css";
import { Logo } from "@/components/ui/Logo/Logo";

export default function Message({ hasError = false }) {
  if (hasError) {
    return (
      <div className={styles.alert} role="alert">
        <Icon
          icon={TriangleAlert}
          size="xs"
          shape="none"
          className={styles.alertIcon}
        />
        <p className={styles.alertText}>
          Oops, something went wrong. If geolocation is not working, you may
          need to give us permission to access your location in your browser.
          Otherwise you can enter area code in the search box.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.description}>
      <p>
        <Logo markOnly className={styles.logo} />
        Salling Group and ResQFood have partnered to reduce food waste.
      </p>

      <p>
        <Logo markOnly className={styles.logo} />
        Every day, over 10,000 discounted food products are available in local
        stores.
      </p>

      <p>
        <Logo markOnly className={styles.logo} />
        Find offers near you and help rescue perfectly good food before it goes
        to waste.
      </p>
    </div>
  );
}
