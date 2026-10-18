/**
 * Fundo no estilo do site da LCX: preto puro com manchas de luz
 * branca desfocadas (blur).
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* brilho principal atrás da foto */}
      <div className="absolute left-1/2 top-[-7rem] h-[22rem] w-[34rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-white/[0.11] blur-[100px]" />
      {/* cantos, como na referência */}
      <div className="absolute left-[-14rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-white/[0.06] blur-[120px]" />
      <div className="absolute bottom-[-12rem] right-[-12rem] h-[28rem] w-[28rem] rounded-full bg-white/[0.07] blur-[130px]" />
    </div>
  );
}
