import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { useLoader } from "@react-three/fiber";

export default function Catstronauts() {
  const rocketMat = useLoader(MTLLoader, "/models/rocket.mtl");
  const rocket = useLoader(OBJLoader, "/models/rocket.obj", (loader) => {
    rocketMat.preload();
    loader.setMaterials(rocketMat);
  });

  const buildingMat = useLoader(MTLLoader, "/models/satellite.mtl");
  const building = useLoader(OBJLoader, "/models/satellite.obj", (loader) => {
    buildingMat.preload();
    loader.setMaterials(buildingMat);
  });

  const coinMat = useLoader(MTLLoader, "/models/coin.mtl");
  const coin = useLoader(OBJLoader, "/models/coin.obj", (loader) => {
    coinMat.preload();
    loader.setMaterials(coinMat);
  });
  return (
    <div className="catstronauts">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <img
        className="projectImg"
        src="/images/catmodel.png"
        alt="Catstronauts"
      />
      <div>
        <h3>Objective</h3>

        <p>Build a 3D Lander-style game from scratch in C++</p>
        <b>Features</b>
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
              "Tracking" camera that stays aimed at the spacecraft from a fixed
              location
            </li>
            <li>Camera onboard the LEM</li>
            <li>
              EasyCam camera that the player can move anyways over the surface
            </li>
          </ul>
        </ul>
      </div>

      <div className="trailer">
      <h3>Trailer</h3>
        <iframe
          src="https://www.youtube.com/embed/gk0ZLwdkPrg"
          title="Catstronauts Gameplay"
          allowFullScreen
        ></iframe>
      </div>

      <div className="modeling">
        <h3>Models</h3>
        <div className="modelCanvas">
          {/*Add fallback to be an image of the models. */}
          <Canvas fallback={<div>Sorry, no WebGL supported!</div>}>
            <ambientLight intensity={4} />
            <directionalLight intensity={7} position={[5, 5, 5]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={1}
            />
            <primitive object={rocket} scale={0.4} />
          </Canvas>
          <Canvas fallback={<div>Sorry, no WebGL supported!</div>}>
            <ambientLight intensity={2} />
            <directionalLight intensity={7} position={[5, 5, 5]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={1}
            />
            <primitive object={building} scale={0.6} />
          </Canvas>
          <Canvas fallback={<div>Sorry, no WebGL supported!</div>}>
            <ambientLight intensity={2} />
            <directionalLight intensity={4} position={[5, 5, 5]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={1}
            />
            <primitive object={coin} scale={0.25} />
          </Canvas>
        </div>
      </div>

      <div className="octree">
        <div className="octreeCreation">
          <h3>Octree Subdivision and Collision Detection</h3>
          <h4>Building an Octree</h4>
          <p>
            Recursively subdivde terrain mesh bounding box into eight equal
            parts, creating child nodes that inherit vertices from their parent
            if they fall within the child’s bounds
          </p>
          <p>Continue until each node contains at most one vertex.</p>
        </div>
        <div className="ocBuild">
          <video autoPlay loop muted>
            <source src="/videos/octreeBuild.mp4" type="video/mp4"></source>
          </video>
          <img src="/images/octreeBuildPic.png" alt="Fully built octree" />
        </div>

        <div className="octreeIntersection">
          <div className="octreeInfo">
            <h4>Octree Intersection & Collision Detection</h4>
            <p>
              Recursively look through the octree and find any nodes that
              intersect with input box. Return these nodes as a list.
            </p>
          </div>

          <video className="oiVideo" autoPlay loop muted>
            <source src="/videos/octreeCollision.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>

      <div className = "catDesign">
        <h3>Design</h3>
        <p>↓</p>
        <h4>Style</h4>
        <p>Space Retro</p>
        <img src = "/images/catboard1.png" alt ="Catstronauts Reference board" />
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

      <PageControl to="instagram" from="hackdavis"></PageControl>
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
  tech: "C++, OpenFrameworks, Autodesk Maya, SideFX Houdini",
  timeline: "May 2025",
  github: "https://github.com/angelayang2018/LandingGame",
  report: "Report",
  reportURL:
    "https://docs.google.com/document/d/17RrDaO8b0O2Zg2t_KPTsVl6GwTVLvvKQa9nv71AVs1g/edit?usp=sharing",
};
