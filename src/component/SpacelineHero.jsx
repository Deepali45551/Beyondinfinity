import React from "react";

const SpacelineHero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* Starfield background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/baclgrounf.png')" }}
        aria-hidden
      />

      {/* Deep-space violet nebula tint */}
      <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-700/40 via-purple-700/30 to-transparent mix-blend-screen pointer-events-none" />

      {/* Giant purple planet at the bottom */}
      {/* <div
        className="pointer-events-none absolute -bottom-[35%] -left-[10%] h-[120vh] w-[120vh] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.9), rgba(109,40,217,0.7) 55%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden
      /> */}

      {/* Planet rings */}
      <div className="pointer-events-none absolute bottom-12 right-16 h-[58vh] w-[58vh] rounded-full border border-fuchsia-400/30 blur-[0.5px]" />
      <div className="pointer-events-none absolute bottom-4 right-28 h-[70vh] w-[70vh] rounded-full border border-fuchsia-400/20 blur-[0.5px]" />

      {/* Content grid */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-16 md:px-8 lg:px-10 mt-40 ">
        {/* Left copy block */}
        <div className="max-w-xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-gray-300">
            Welcome to the
          </p>

          <h1 className="font-extrabold leading-[0.86] text-white">
            <span className="block text-[clamp(2.6rem,6.5vw,7rem)]">
              SPACELINE
            </span>
            <span className="block text-[clamp(2.6rem,6.5vw,7rem)]">FOR</span>
            <span className="block text-[clamp(2.6rem,6.5vw,7rem)]">EARTH</span>
          </h1>
        </div>
      </div>

      {/* Spaceship image on right */}
      {/* <img
        src="/spaceship.png"
        alt="Futuristic spaceliner"
        className="pointer-events-none absolute right-[-6vw] top-[16vh] w-[min(1200px,78vw)] max-w-none drop-shadow-[0_0_50px_rgba(168,85,247,0.55)]"
        draggable="false"
      /> */}

      {/* Bottom-right mini card */}
      {/* <div className="absolute bottom-6 right-6">
        <div className="flex w-[300px] items-center gap-4 rounded-xl border border-white/15 bg-black/60 p-4 backdrop-blur-md">
          <img
            src="/thumb.jpg"
            alt="Spacely clip"
            className="h-16 w-20 rounded-md object-cover"
          />
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="inline-block h-4 w-4 rounded-full ring-2 ring-fuchsia-400" />
              <span className="text-sm font-semibold text-white">Watch</span>
            </div>
            <p className="text-[13px] leading-tight text-gray-200">
              Latest <br /> Spacely <br /> Milestones
            </p>
          </div>
        </div>
      </div> */}

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.7)_100%)]" />
    </section>
  );
};

export default SpacelineHero;
