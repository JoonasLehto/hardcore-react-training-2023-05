import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
