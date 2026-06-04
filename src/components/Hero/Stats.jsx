import { statsData } from "../data/statsData";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="funfact-area">
      <div className="row row-gap-4 text-center">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6"
          >
            <StatCard
              number={item.number}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}