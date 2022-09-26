import "./DimLayer.css";

export default function DimLayer({ amount }) {
  return <div className="dimLayer" style={{ opacity: amount * 0.01 }}></div>;
}
