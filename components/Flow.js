export default function Flow(props) {
  const { children, className, style, spacing } = props;
  const withSpacing = spacing && { "--flow-space": `${spacing}` };

  return (
    <div className={className ? `${className} flow` : "flow"} style={{ ...style, ...withSpacing }}>
      {children}
    </div>
  );
}
