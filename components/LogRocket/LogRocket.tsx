import LLogRocket from "logrocket";
import { useEffect } from "react";

export default function LogRocket() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_LOGROCKET_APP_ID;
    if (typeof window !== "undefined" && appId) {
      LLogRocket.init(appId);
    }
  }, []);

  return null;
}
