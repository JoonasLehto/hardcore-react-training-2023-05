"use client";

import { FC } from "react";
import { DateTime } from "luxon";

import styles from "./Clock.module.css";
// import * as styles from "./Clock.css";

import clsx from "clsx";

type Props = {
  now: DateTime;
  timezone: string;
  label: string;
};

const Clock: FC<Props> = ({ now, timezone, label }) => {
  const localTime = now.setZone(timezone);

  const classes = clsx(styles.clock, {
    [styles.nightTime]: localTime.hour > 0 && localTime.hour < 6
  });

  return (
    <div className={classes}>
      <div>{label}</div>
      <div>
        {localTime.setLocale("fi").toLocaleString({
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })}
      </div>
    </div>
  );
};

export default Clock;
