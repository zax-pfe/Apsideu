import "../styles/background.css";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="background-container">{children}</div>;
}
