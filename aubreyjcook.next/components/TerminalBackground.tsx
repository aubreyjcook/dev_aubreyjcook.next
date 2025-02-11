import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TerminalBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // Ensure the ref is set
      if (!mountRef.current) return;
  
      // Get dimensions from the container
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
  
      // Create a new Three.js scene
      const scene = new THREE.Scene();
  
      // Set up a perspective camera
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;
  
      // Create the WebGL renderer with transparency enabled
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);
  
      // Create a particle system for the terminal effect
      const particlesCount = 500;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
      // Create a PointsMaterial with a terminal-green color
      const material = new THREE.PointsMaterial({
        color: 0x00ff00, // terminal green
        size: 0.1,
      });
  
      // Combine geometry and material into a Points object
      const points = new THREE.Points(geometry, material);
      scene.add(points);
  
      // Animation loop
      let frameId: number;
      const animate = () => {
        points.rotation.x += 0.001;
        points.rotation.y += 0.001;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();
  
      // Handle window resize events
      const handleResize = () => {
        if (!mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', handleResize);
  
      // Cleanup on unmount
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener('resize', handleResize);
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    }, []);
  
    return (
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed', // cover the viewport
          top: 0,
          left: 0,
          zIndex: -1, // place behind your content
        }}
      />
    );
}

export default TerminalBackground;