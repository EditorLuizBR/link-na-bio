/**
 * Background animado com blobs em gradiente (efeito "lava lamp").
 * Fica atrás de todo o conteúdo (z abaixo), dentro de um container
 * com overflow hidden para nada estourar o viewport.
 * As animações vivem em globals.css (CSS puro = melhor performance).
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
      {/* leve vinheta escura por cima dos blobs para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base/80" />
    </div>
  );
}
