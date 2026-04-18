interface MatrixBackgroundProps {
  className?: string;
}

export default function MatrixBackground({ className = '' }: MatrixBackgroundProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: -1 }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,186,73,0.14),transparent_0,transparent_32%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.12),transparent_0,transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute left-[-8%] top-[8%] h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="absolute right-[-5%] bottom-[5%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
    </div>
  );
}
