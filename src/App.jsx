import { useState} from "react";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0, active: false });

  const moveNoButton = () => {
    // Calculamos un margen para que el botón no quede pegado a los bordes
    // Usamos porcentajes del viewport (vw/vh) para que sea exacto en cualquier pantalla
    const randomX = Math.floor(Math.random() * 80) + 10; // Entre 10% y 90%
    const randomY = Math.floor(Math.random() * 80) + 10; // Entre 10% y 90%
    
    setNoPos({ x: randomX, y: randomY, active: true });
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 flex items-center justify-center p-4">
      
      {/* Elementos decorativos de fondo para que no se vea vacío */}
      <div className="absolute top-10 left-10 text-pink-400 opacity-30 text-6xl rotate-12">💖</div>
      <div className="absolute bottom-10 right-10 text-pink-400 opacity-30 text-6xl -rotate-12">🌸</div>

      {/* CONTENEDOR PRINCIPAL */}
      <main className="z-10 w-full max-w-lg text-center bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-[3rem] shadow-2xl">
        
        <h1 className="text-4xl md:text-5xl font-black text-rose-600 mb-8 drop-shadow-md leading-tight">
          {accepted ? "¡Yo sabía que si queríassss! 💖" : "¿Querés ser mi San Valentín juquita?"}
        </h1>

        <div className="relative mx-auto mb-10 w-64 h-64 md:w-80 md:h-80">
          {/* Brillo detrás de tu foto */}
          <div className="absolute inset-0 bg-rose-400 rounded-[2.5rem] blur-2xl opacity-30 animate-pulse"></div>
          
          <img
            src={accepted ? "/yes.jpg" : "/question.jpg"}
            alt="San Valentín"
            className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white transition-transform duration-500"
          />
        </div>

        {!accepted ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[80px]">
            {/* BOTÓN SÍ: Siempre visible y grande */}
            <button
              onClick={() => setAccepted(true)}
              className="w-full sm:w-auto px-12 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-3xl text-2xl font-black shadow-[0_10px_20px_rgba(244,63,94,0.3)] transition-all active:scale-90"
            >
              Sí mor🫶
            </button>

            {/* BOTÓN NO: Versión estática inicial */}
            {!noPos.active && (
              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="w-full sm:w-auto px-8 py-4 bg-white/80 text-rose-400 rounded-3xl text-xl font-bold border-2 border-rose-200"
              >
                No feo 🖕
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4 animate-in zoom-in duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700 drop-shadow-sm">
              ¡Alejandro el más feliz! 😍
            </h2>
            <p className="text-rose-500 font-semibold text-xl bg-white/50 inline-block px-6 py-2 rounded-full">
              Te quiero Lylitaaa 🌹
            </p>
          </div>
        )}
      </main>

      {/* BOTÓN NO: Versión voladora (Fixed al Viewport) */}
      {!accepted && noPos.active && (
        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{
            position: "fixed",
            left: `${noPos.x}vw`,
            top: `${noPos.y}vh`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            zIndex: 100
          }}
          className="px-8 py-3 bg-white text-rose-400 font-bold rounded-2xl shadow-2xl border-2 border-rose-100 whitespace-nowrap"
        >
          No 🖕
        </button>
      )}
    </div>
  );
}