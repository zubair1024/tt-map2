import { sanitizedTroubleTicket } from "@/types";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface MapProps {
  tt: sanitizedTroubleTicket[];
}

const Map = ({ tt }: MapProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/DynamicMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Map tt={tt} />
    </div>
  );
};

export default Map;
