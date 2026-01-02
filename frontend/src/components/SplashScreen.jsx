// import React, { useEffect, useRef, useState } from "react";
// import { Terminal } from "lucide-react";

// /* ===============================
//    THREE.JS SCENE
// ================================ */
// const ThreePerfectCoder = ({ phase }) => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     let scene, camera, renderer, charGroup, desk, monitorGroup, particles;

//     const init = () => {
//       scene = new window.THREE.Scene();

//       camera = new window.THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//       );
//       camera.position.set(0, 2, 8);
//       camera.lookAt(0, 1, 0);

//       renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.setPixelRatio(window.devicePixelRatio);
//       mountRef.current.appendChild(renderer.domElement);

//       /* MATERIALS */
//       const darkMat = new window.THREE.MeshStandardMaterial({ color: 0x000000 });
//       const greenMat = new window.THREE.MeshStandardMaterial({
//         color: 0x22c55e,
//         emissive: 0x22c55e,
//         emissiveIntensity: 0.6,
//       });

//       /* DESK */
//       desk = new window.THREE.Mesh(
//         new window.THREE.BoxGeometry(5, 0.1, 3),
//         darkMat
//       );
//       desk.position.y = -0.6;
//       scene.add(desk);

//       /* MONITOR */
//       monitorGroup = new window.THREE.Group();
//       const base = new window.THREE.Mesh(
//         new window.THREE.BoxGeometry(2.2, 0.05, 1.5),
//         darkMat
//       );
//       const screen = new window.THREE.Mesh(
//         new window.THREE.PlaneGeometry(2, 1.2),
//         greenMat
//       );
//       screen.position.set(0, 0.7, -0.7);
//       screen.rotation.x = -0.2;

//       monitorGroup.add(base, screen);
//       monitorGroup.position.y = -0.45;
//       scene.add(monitorGroup);

//       /* CHARACTER */
//       charGroup = new window.THREE.Group();
//       const body = new window.THREE.Mesh(
//         new window.THREE.CylinderGeometry(0.4, 0.5, 1.2, 16),
//         greenMat
//       );
//       body.position.set(0, 0.2, 1.8);

//       const head = new window.THREE.Mesh(
//         new window.THREE.SphereGeometry(0.35, 20, 20),
//         darkMat
//       );
//       head.position.set(0, 1.2, 1.8);

//       charGroup.add(body, head);
//       scene.add(charGroup);

//       /* PARTICLES */
//       const pGeo = new window.THREE.BufferGeometry();
//       const pCount = 1200;
//       const pos = new Float32Array(pCount * 3);
//       for (let i = 0; i < pos.length; i++) {
//         pos[i] = (Math.random() - 0.5) * 20;
//       }
//       pGeo.setAttribute("position", new window.THREE.BufferAttribute(pos, 3));
//       particles = new window.THREE.Points(
//         pGeo,
//         new window.THREE.PointsMaterial({
//           color: 0x22c55e,
//           size: 0.02,
//           transparent: true,
//           opacity: 0.3,
//         })
//       );
//       scene.add(particles);

//       /* LIGHT */
//       scene.add(new window.THREE.AmbientLight(0x22c55e, 0.4));
//       const light = new window.THREE.PointLight(0xffffff, 1.5);
//       light.position.set(5, 5, 5);
//       scene.add(light);

//       const animate = () => {
//         requestAnimationFrame(animate);

//         if (phase === "zoom") {
//           camera.position.z += (5 - camera.position.z) * 0.03;
//           charGroup.position.x += (3 - charGroup.position.x) * 0.03;
//           desk.position.x += (3 - desk.position.x) * 0.03;
//           monitorGroup.position.x += (3 - monitorGroup.position.x) * 0.03;
//         }

//         renderer.render(scene, camera);
//       };

//       animate();
//     };

//     const script = document.createElement("script");
//     script.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
//     script.onload = init;
//     document.head.appendChild(script);

//     return () => {
//       if (mountRef.current && renderer?.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, [phase]);

//   return <div ref={mountRef} className="absolute inset-0 z-0" />;
// };

// /* ===============================
//    SPLASH SCREEN
// ================================ */
// const SplashScreen = ({ onFinish }) => {
//   const wrapperRef = useRef(null);
//   const [phase, setPhase] = useState("center");
//   const [text, setText] = useState("");

//   const lines = [
//     "git checkout talent-iq-v5",
//     "neural_engine_boot: OK",
//     "calibrating_spatial_depth...",
//     "ui_layer_mapping: DONE",
//     "status: system_ready",
//   ];

//   useEffect(() => {
//     const gsapScript = document.createElement("script");
//     gsapScript.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
//     gsapScript.onload = () => {
//       setTimeout(() => {
//         setPhase("zoom");

//         let i = 0;
//         const typer = setInterval(() => {
//           if (i < lines.length) {
//             setText((p) => p + "> " + lines[i] + "\n");
//             i++;
//           } else {
//             clearInterval(typer);
//             setTimeout(() => {
//               window.gsap.to(wrapperRef.current, {
//                 opacity: 0,
//                 duration: 1,
//                 onComplete: onFinish,
//               });
//             }, 900);
//           }
//         }, 500);
//       }, 1200);
//     };
//     document.head.appendChild(gsapScript);
//   }, [onFinish]);

//   return (
//     <div
//       ref={wrapperRef}
//       className="fixed inset-0 z-[9999] bg-black overflow-hidden"
//     >
//       <ThreePerfectCoder phase={phase} />

//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />

//       <div
//         className={`relative z-10 max-w-lg pl-10 pt-32 transition-all duration-1000 ${
//           phase === "zoom"
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 -translate-x-20"
//         }`}
//       >
//         <div className="bg-black/80 border border-green-500/30 rounded-3xl p-6 backdrop-blur-xl">
//           <div className="flex items-center gap-2 mb-4">
//             <Terminal className="text-green-500" size={18} />
//             <span className="text-green-500 text-xs tracking-widest font-bold">
//               CINEMATIC_SHELL
//             </span>
//           </div>

//           <pre className="text-green-400 text-sm font-mono min-h-[160px]">
//             {text}
//             <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse" />
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplashScreen;
