import "./style.css";

import { Pane } from "tweakpane";

import { useGlslCanvas } from "./renderer";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import { addPlanetControls } from "./controls/planet.controls";
import { addLightControls } from "./controls/light.controls";
import { addMonitor } from "./controls/monitor.controls";

const { uniforms } = useGlslCanvas({
   vertex: vertexShader,
   fragment: fragmentShader,
   uniforms: {
      uTime: 0.0,
      uResolution: [
         window.innerWidth * window.devicePixelRatio,
         window.innerHeight * window.devicePixelRatio,
      ],
      uPlanetPosition: [0, 0, 0],
      uPlanetRadius: 2,
      uNoiseStrength: 0.2,
      uAtmosphereColor: [0.05, 0.3, 0.9],
      sunDirectionXY: [1, 1],
   },
});

export const pane = new Pane({ title: "Controls" });

addPlanetControls(pane, uniforms);
addLightControls(pane, uniforms);
addMonitor(pane);
