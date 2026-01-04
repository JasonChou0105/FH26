import { Suspense } from "react";
import Moon from "../../../3dAssets/Moon";
import Satellite1 from "../../../3dAssets/Satellite1";
import Satellite2 from "../../../3dAssets/Satellite2";
import Astronaut from "../../../3dAssets/Astronaut";
import Planet2 from "../../../3dAssets/Planet2";

function RecapProjects3D() {
  return (
    <>
      <Suspense fallback={null}>
        {/* Left side: Scattered objects */}
        {/* Moons scattered on left */}
        <Moon
          position={[-3, 2, -2]}
          lightOffset={[0.5, -0.3, 0.5]}
          scale={0.08}
          intensity={0.3}
        />
        <Moon
          position={[-5, -1.5, 1]}
          lightOffset={[-0.4, 0.6, 0.3]}
          scale={0.06}
          intensity={0.2}
        />
        <Moon
          position={[-5, -2, 3]}
          lightOffset={[0.3, 0.8, -0.2]}
          scale={0.07}
          intensity={0.25}
        />

        {/* Astronaut on left */}
        <Astronaut
          position={[-4, 4, 0]}
          lightOffset={[-2, -3, 2]}
          intensity={1}
          scale={0.0002}
        />

        {/* Satellites scattered on left */}

        <Satellite1
          position={[-6, -1, 2]}
          lightOffset={[0.3, 0.4, -0.6]}
          scale={0.008}
          intensity={0.4}
        />

        <Satellite2
          position={[-2, 3.5, 1]}
          lightOffset={[0.4, -0.3, -0.5]}
          scale={0.012}
          intensity={0.5}
        />

        {/* Right side: Large Red Planet */}
        <Planet2
          position={[12, -12, -20]}
          scale={0.15}
        />
      </Suspense>
    </>
  );
}

export default RecapProjects3D;

