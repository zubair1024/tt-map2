import Header from "@/components/Header";
import Map from "@/components/Map";
import { TroubleTicket, sanitizedTroubleTicket } from "@/types";
import { convertValues } from "@/utils";
import { useEffect, useState } from "react";

async function getData(): Promise<TroubleTicket[]> {
  const res1 = await fetch("/file_1.json");
  const data1: TroubleTicket[] = await res1.json();
  const res2 = await fetch("/file_2.json");
  const data2: TroubleTicket[] = await res2.json();
  return [...data1, ...data2];
}

export default function Home() {
  const [tt, setTT] = useState<sanitizedTroubleTicket[]>([]);
  useEffect(() => {
    getData().then((data) => {
      const sanitizedData = data.map((i) => convertValues(i)).filter((i) => i);
      setTT(sanitizedData as sanitizedTroubleTicket[]);
    });
  }, []);

  return (
    <div className="prose-xl">
      <Header></Header>

      <main>
        <div className="w-screen h-screen">
          <Map tt={tt}></Map>
        </div>
      </main>
    </div>
  );
}
