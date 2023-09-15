import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesconfig from "./confing/particlesjs-confing";

const BackgroundParticles = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={particlesconfig}></Particles>;
};

export default BackgroundParticles;
