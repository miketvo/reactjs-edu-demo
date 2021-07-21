import { useState, useEffect } from "react";

export default function useOnline() {
  let [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });

    window.addEventListener("offline", () => {
      setOnline(false);
    });
  });

  return online;
}
