
const WaveDivider = ({ flip = false, className = "" }) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        className={`w-[120%] h-20 md:h-28 ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,48 C150,90 350,10 600,52 C850,95 1050,30 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
