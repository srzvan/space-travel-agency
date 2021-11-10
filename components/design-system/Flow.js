export default function Flow(props) {
  const { children, className, style, spacing } = props;

  return (
    <div
      className={className ? `${className} flow` : "flow"}
      style={{ ...style, ...(spacing && { "--flow-space": `${spacing}` }) }}
    >
      {children}
    </div>
  );
}
