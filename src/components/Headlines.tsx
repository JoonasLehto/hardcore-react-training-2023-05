"use client";

import { QuarticleType, getQuarticles } from "@/services/quarticle";
import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import Clock from "./Clock";
import Headline from "./Headline";

type Props = {
  headlines: QuarticleType[];
  serverTime: string;
};

const Headlines: FC<Props> = ({ serverTime, headlines }) => {
  // const [headlines, setHeadlines] = useState<QuarticleType[]>([]);

  const [now, setNow] = useState<DateTime>(DateTime.fromISO(serverTime));

  useEffect(() => {
    console.log("Headlines useEffect");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((current) => current.plus({ seconds: 1 }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   getQuarticles(0, 20).then((ret) => {
  //     setHeadlines(ret.quarticles);
  //   });
  // }, []);

  return (
    <section>
      <Clock now={now} timezone="Europe/Helsinki" label="Helsinki" />
      <Clock now={now} timezone="Pacific/Honolulu" label="Honolulu" />
      <Clock now={now} timezone="Asia/Tokyo" label="Tokyo" />
      <Clock now={now} timezone="America/New_York" label="New York" />
      <Clock now={now} timezone="Africa/Casablanca" label="Casablanca" />

      {headlines.map((quarticle) => {
        return <Headline key={quarticle.id} headline={quarticle} />;
      })}
    </section>
  );
};

export default Headlines;
