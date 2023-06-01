import { FC, memo } from "react";
import { QuarticleType } from "@/services/quarticle";

type Props = {
  quarticle: QuarticleType;
};

const Headline: FC<Props> = ({ quarticle }) => {
  return (
    <article>
      <h1>{quarticle.headline}</h1>
      <p>{quarticle.lead}</p>
    </article>
  );
};

export default memo(Headline);
