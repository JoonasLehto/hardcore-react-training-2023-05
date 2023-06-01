import { FC } from "react";

const HotReloadTester: FC = () => {
  return (
    <span
      style={{
        border: "5px dotted rgb(255, 0, 0)",
        padding: "1em"
      }}
    >
      This text reloads on save
    </span>
  );
};

export default HotReloadTester;
