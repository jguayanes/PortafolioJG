import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesconfig from "./confing/particlesjs-confing";
import Particles from "react-tsparticles";

const BackgroundParticles = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={particlesconfig}></Particles>;
};

export default BackgroundParticles;
