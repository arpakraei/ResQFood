import Icon from "../ui/Icon/Icon";
import Image from "next/image";
import OfferLogo from "./assets/offer.png";
import HeartLogo from "./assets/heart.png";
import { MapPin } from "lucide-react";
import styles from "./InfoSteps.module.css";

export default function InfoSteps() {
    return (
        <div className={styles.infoSteps}>
            <p className={styles.infoStepText}>
                Start reducing food waste in 3 simple steps:
            </p>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <span className={styles.stepIconFrame}>
                        <Icon
                            className={styles.stepIconImage}
                            icon={ MapPin }
                            size="lg"
                            shape="none"
                            strokeWidth={1.3}
                            style={{color: "var(--color-icon-success)" }}
                        />
                    </span>
                    <p className={styles.stepText}>Find stores near you</p>
                </div>
                <div className={styles.step}>
                    <span className={styles.stepIconFrame}>
                        <Image className={styles.stepIconImage} src={OfferLogo} alt="" aria-hidden="true" />
                    </span>
                    <p className={styles.stepText}>See today’s offers</p>  
                </div>
                <div className={styles.step}>
                    <span className={styles.stepIconFrame}>
                        <Image className={styles.stepIconImage} src={HeartLogo} alt="" aria-hidden="true" />
                    </span>
                    <p className={styles.stepText}>Save money and reduce waste</p>
                </div>
            </div>
        </div>
    );
}