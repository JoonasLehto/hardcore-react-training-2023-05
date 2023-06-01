import Headline from "@/components/Headline";
import Quarticle from "@/components/Quarticle";
import { getQuarticle, getQuarticles } from "@/services/quarticle";

type Props = {
  params: {
    id: string;
  };
};

export default async function QuarticlePage(props: Props) {
  const quarticle = await getQuarticle(props.params.id);

  const quarticles = await getQuarticles(0, 20);

  return (
    <div>
      <Quarticle quarticle={quarticle} />
      <div>
        <h2>Tuoreimmat uutiset</h2>
        {quarticles.quarticles.map((q) => (
          <Headline key={q.id} headline={q} />
        ))}
      </div>
    </div>
  );
}
