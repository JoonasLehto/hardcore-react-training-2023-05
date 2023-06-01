import Headlines from "@/components/Headlines";
import { getQuarticles } from "@/services/quarticle";
import { Metadata } from "next";
import { DateTime } from "luxon";

export const metadata: Metadata = {
  title: "Welcome - Hardcore React Training"
};

export default async function IndexPage() {
  const serverTime = DateTime.utc().toISO() as string;

  const ret = await getQuarticles(0, 20);

  return (
    <div>
      <h1>Tuoreimmat uutiset</h1>
      <Headlines headlines={ret.quarticles} serverTime={serverTime} />
    </div>
  );
}
