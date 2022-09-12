import Image from 'next/future/image';
import SingleCatDisplay from '../components/SingleCatDisplay';
import { femaleCats } from '../data/catsData';

export default function Katzen() {
  return (
    <div className="space-y-4 max-w-5xl">
      {femaleCats.map((cat) => {
        return <SingleCatDisplay cat={cat} />;
      })}
    </div>
  );
}
