import React from 'react';

function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Nan Lao Ywet</h1>
        <h2>Computer Vision & Perception Engineer (PhD)</h2>
        <p>laoywet14@gmail.com | +82 (0) 10-4128-1899</p>
        <div className="links">
          <a href="https://www.linkedin.com/in/nan-lao-ywet" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="section">
        <h3>Professional Summary</h3>
        <p>
          Computer Vision & Perception Engineer (PhD) with 5+ years of hands-on experience developing and deploying real-time perception systems for autonomous platforms in real-world settings. Expertise in building vision models, multi-modal sensor fusion across camera, lidar, and depth modalities, and inference optimization on embedded edge hardware under strict compute constraints[cite: 1].
        </p>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h3>Experience</h3>
        <div className="job">
          <h4>Postdoctoral Researcher & AI Engineer — Kada Lab, Konkuk University</h4>
          <p className="date">Feb 2026 - May 2026 | Seoul, South Korea</p>
          <ul>
            <li>Led the advanced R&D research team for the Autonomous Urban Air Mobility (UAM) project, overseeing the final development stages and technical transition to industry partners[cite: 1].</li>
            <li>Mentored and guided junior researchers on deep learning architectures and software engineering best practices[cite: 1].</li>
          </ul>
        </div>

        <div className="job">
          <h4>Graduate Research Assistant (M.S. & Ph.D.) — Kada Lab, Konkuk University</h4>
          <p className="date">Mar 2020 - Feb 2026</p>
          <ul>
            <li>Engineered real-time multi-sensor (Camera-LiDAR) perception pipelines deployed on edge hardware[cite: 1].</li>
            <li>Optimized multimodal sensor fusion architectures for challenging environmental conditions[cite: 1].</li>
            <li>Developed integrated perception-planning pipelines combining 3D computer vision with autonomous path planning[cite: 1].</li>
            <li>Designed high-fidelity digital-twin simulation environments (AirSim, Unreal Engine, Unity)[cite: 1].</li>
          </ul>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="section">
        <h3>Selected Projects</h3>
        <div className="project">
          <h4>AI Digital Twin for Smart Urban Air Mobility (UAM) [NFR Korea Project]</h4>
          <p>Led development of AI-based situational awareness and trajectory prediction systems. Implemented an end-to-end autonomous software stack merging perception, decision-making, and validation[cite: 1].</p>
        </div>
        <div className="project">
          <h4>Autonomous UAV AI System [Unitech Co., Korea Project]</h4>
          <p>Designed system architecture for end-to-end autonomous UAV perception-planning pipelines. Developed real-time object detection and multi-object tracking modules[cite: 1].</p>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="section">
        <h3>Technical Expertise</h3>
        <p><strong>Frameworks & Libraries:</strong> PyTorch, TensorFlow, OpenCV, Reinforcement Learning[cite: 1]</p>
        <p><strong>Robotics & Autonomy:</strong> PX4 Autopilot, Sensor Fusion (Vision/LiDAR), ROS/ROS2[cite: 1]</p>
        <p><strong>Simulation & Hardware:</strong> AirSim, Unreal Engine, Unity, NVIDIA Jetson, CUDA, NVIDIA GPUs[cite: 1]</p>
      </section>
    </div>
  );
}

export default App;