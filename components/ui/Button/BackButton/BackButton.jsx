"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Icon from "../../Icon/Icon";
import styles from "./BackButton.module.css";

export default function BackButton() {
  const router = useRouter();

  return (
      <button type="button" aria-label="Go to previous page"  className={styles.backButton } onClick={() => router.back()}>
     <Icon icon={ArrowLeft} size="sm" shape="none" color="darkGreen" />
    </button>
  );
}