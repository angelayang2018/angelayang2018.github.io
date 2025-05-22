import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { useLoader } from "@react-three/fiber";

export default function Catstronauts() {
  const materials = useLoader(MTLLoader, "/models/rocket.mtl");
  const obj = useLoader(OBJLoader, "/models/rocket.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (
    <div className="catstronauts">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <img
        className="projectImg"
        src="/images/catmodel.png"
        alt="Catstronauts"
      />
      {/* <div className="videoPlayer">
        <iframe
          src="https://www.youtube.com/embed/gk0ZLwdkPrg"
          title="Catstronauts Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
      <div>
        <h3>Objective</h3>
        <ul>
          <li>Build a 3D Lander-style game from scratch in C++</li>
          <li>
            <b>Features</b>
          </li>
          <ul>
            <li>3-Point Lighting</li>
            <li>Physics</li>
            <ul>
              <li>
                LEM moves using thrust force using a full physics
                simulation(thrust, gravity, and turbulence forces)
              </li>
            </ul>
            <li>Octree Subdivision</li>
            <ul>
              <li>Full collision detection with terrain</li>
              <li>Terrain is spatially partitioned using an octree</li>
            </ul>
            <li>Particle Simulation</li>
            <ul>
              <li>Particle Emitter for the LEM exhaust and explosion effect</li>
            </ul>
            <li>3 cameras</li>
            <ul>
              <li>
                "Tracking" camera that stays aimed at the spacecraft from a
                fixed location
              </li>
              <li>Camera onboard the LEM</li>
              <li>
                EasyCam camera that the player can move anyways over the surface
              </li>
            </ul>
          </ul>
        </ul>
      </div>

      <div className = "modeling">
        <h3>Modeling</h3>
        <div className = "modelCanvas">
          <Canvas fallback={<div>Sorry, no WebGL supported!</div>}>
            <ambientLight intensity = {2} />
            <directionalLight intensity = {4} position = {[5, 5, 5]} />
            <OrbitControls enableZoom = {false} />
            <primitive object={obj} scale = {0.4}/>
          </Canvas>
        </div>
      </div>

      <div className = "octree">
        <h3>Octree Subdivision and Collision Detection</h3>
          <h4>Building an Octree</h4>
          <ul>
            <li>Start with the entire mesh enclosed in a single bounding box containing all vertices.</li>
            <li>Create a root node</li>
            <li>Subdivide the current box into 8 equally size children boxes</li>
            <li>Continue until each node contains only one vertex or none</li>
          </ul>
          <h4>Octree Intersection & Collision Detection</h4>
      </div>

      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Colors</h4>
        <div className="colorsContainer">
          <p className="colors catOrange">#FFA600</p>
          <p className="colors catBlue">#72CCF2</p>
        </div>
        <h4>Typography</h4>
        <p className="Arcadeclassic">Arcade Classic</p>
        <p></p>
      </div>

      <div>
        <h3>Challenges/Lessons Learned</h3>
        <ul>
          <li>Introduced to 3D modeling software Maya and Houdini</li>
        </ul>
      </div>

      <PageControl to="portfolio" from="mathship"></PageControl>
    </div>
  );
}

const projectInfo = {
  title: "Catstronauts: Crash Landing",
  overview:
    "Catstronauts: Crash Landing is a space-themed game where you guide a cat-shaped rocket to safe touchdown on a rocky planet. With realistic movement and interactive controls, it challenges players to land skillfully before the fuel reserves run out. ",
  team: [
    {
      name: "Giovanni Tran",
      linkedin: "https://github.com/GSTran",
    },
  ],
  tech: "C++, OpenFrameworks, Autodesk Maya, Houdini",
  timeline: "May 2025",
  github: "https://github.com/angelayang2018/LandingGame",
  report: "Report",
  reportURL:
    "https://docs.google.com/document/d/17RrDaO8b0O2Zg2t_KPTsVl6GwTVLvvKQa9nv71AVs1g/edit?usp=sharing",
};
