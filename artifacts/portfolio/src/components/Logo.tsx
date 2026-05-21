import logoSrc from "../assets/logo.png";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logoSrc}
      alt="Narayan Paranjape — Financial Advisor"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}
