import { useEffect, useMemo, useState } from "react";
import { LightstreamerClient, Subscription } from "lightstreamer-client-web";
import { LLA, Vector3 } from "../math/vector";
import { ecefToLla } from "../math/math";

const ISS_LOC_DATA_NAMES = ["USLAB000032", "USLAB000033", "USLAB000034"];

const client = new LightstreamerClient(
  "https://push.lightstreamer.com",
  "ISSLIVE"
);

client.connect();

const subscription = new Subscription("MERGE", ISS_LOC_DATA_NAMES, ["Value"]);
client.subscribe(subscription);

export const useISSCoordinates = (): LLA => {
  const [pos, setPos] = useState<Vector3>({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    subscription.addListener({
      onItemUpdate: (update) => {
        switch (update.getItemName()) {
          case "USLAB000032":
            setPos((p) => ({ ...p, x: +update.getValue("Value") * 1000 }));
            break;
          case "USLAB000033":
            setPos((p) => ({ ...p, y: +update.getValue("Value") * 1000 }));
            break;
          case "USLAB000034":
            setPos((p) => ({ ...p, z: +update.getValue("Value") * 1000 }));
            break;
        }
      },
    });
  }, []);

  const issLLA = useMemo(() => ecefToLla(pos), [pos]);
  return issLLA;
};
