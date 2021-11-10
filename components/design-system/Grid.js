export default function Grid({ children, className, gap, style }) {
  return (
    <div className={className ? `${className} grid` : "grid"} style={{ ...style, "--gap": `${gap}` }}>
      {children}
    </div>
  );
}
