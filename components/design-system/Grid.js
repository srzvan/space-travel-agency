export default function Grid({ children, gap }) {
  return (
    <div className="grid" style={{ "--gap": `${gap}` }}>
      {children}
    </div>
  );
}
