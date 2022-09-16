import SingleCatDisplay from '../components/SingleCatDisplay';
import { maleCats } from '../data/catsData';

export default function Katzen() {
  return (
    <div className="space-y-4 max-w-5xl">
      {maleCats.map((cat) => {
        return <SingleCatDisplay key={cat.name} cat={cat} />;
      })}
    </div>
  );
}
