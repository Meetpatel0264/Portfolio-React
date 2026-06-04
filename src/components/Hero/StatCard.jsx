import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatCard({ number, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="prifile-years d-flex justify-content-center align-items-center"
    >
      <span className="counter">
        {inView && (
          <CountUp
            end={Number(number)}
            duration={2.5}
            decimals={String(number).includes(".") ? 1 : 0}
          />
        )}
      </span>

      <p>{title}</p>
    </div>
  );
}