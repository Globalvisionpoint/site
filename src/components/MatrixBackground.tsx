interface MatrixBackgroundProps {
  className?: string;
}

export default function MatrixBackground({ className = '' }: MatrixBackgroundProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: -1 }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_0,transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_0,transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute left-[-10%] top-[10%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[-5%] bottom-[5%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
    </div>
  );
}
