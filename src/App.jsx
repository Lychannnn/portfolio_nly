import React from 'react';
import './App.css'; // Link the styles
// Put your profile photo in the same folder as profile.jpg
import profileImg from './profile.jpg'; 

function App() {
  return (
    <div className="portfolio-container">
      {/* Profile Header Hero Section */}
      <header className="profile-hero">
        <div className="profile-text-content">
          <h1 className="profile-name">Nan Lao Ywet</h1>
          <h2 className="profile-title">Computer Vision & Perception Engineer (PhD)</h2>
          <p className="profile-contact">laoywet14@gmail.com | +82 (0) 10-4128-1899</p>
          
          <div className="profile-summary">
            <p>
              Computer Vision & Perception Engineer (PhD) with 5+ years of hands-on experience developing and deploying real-time perception systems for autonomous platforms in real-world settings. Deep knowledge of multi-modal sensor fusion across camera, lidar, and depth modalities, multi-object detection, and inference optimization on embedded edge hardware under strict compute constraints.
            </p>
            <p>
              Expertise in building vision models that are validated through high-fidelity simulation environments prior to physical deployment, with a proven track record of taking perception pipelines from research prototype to production deployment.
            </p>
          </div>

          {/* ADDED GOOGLE SCHOLAR LINK HERE */}
          <div className="links">
            <a href="https://www.linkedin.com/in/nan-lao-ywet" target="_blank" rel="noreferrer" className="btn-linkedin">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=YOUR_PROFILE_ID_HERE" target="_blank" rel="noreferrer" className="btn-scholar">Google Scholar</a>
          </div>
        </div>

        <div className="profile-image-container">
          <div className="profile-image-circle">
            <img src={profileImg} alt="Nan Lao Ywet" />
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="section">
        <h3>Experience</h3>
        <div className="job">
          <h4>Postdoctoral Researcher & AI Engineer — Kada Lab, Konkuk University</h4>
          <p className="date">Feb 2026 - May 2026 | Seoul, South Korea</p>
          <ul>
            <li>Led the advanced R&D research team for the Autonomous Urban Air Mobility (UAM) project, successfully overseeing the final development stages and technical transition to industry partners.</li>
            <li>Mentored and guided junior researchers on deep learning architectures and software engineering best practices, accelerating team delivery timelines.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Graduate Research Assistant (M.S. & Ph.D.) — Kada Lab, Konkuk University</h4>
          <p className="date">Mar 2020 - Feb 2026</p>
          <ul>
            <li>Engineered real-time multi-sensor (Camera-LiDAR) perception pipelines deployed on edge hardware, resulting in enhanced situational awareness and low-latency object classification.</li>
            <li>Optimized multimodal sensor fusion architectures for challenging environmental conditions, delivering a significant increase in scene understanding accuracy and real-time model inference stability.</li>
            <li>Developed integrated perception-planning pipelines combining 3D computer vision with autonomous path planning and collision avoidance.</li>
            <li>Designed high-fidelity digital-twin simulation environments (AirSim, Unreal Engine, Unity), enabling safe algorithmic validation and closing the sim-to-real transfer gap.</li>
          </ul>
        </div>
      </section>

      {/* Selected Projects Section - All 4 Included */}
      <section className="section">
        <h3>Selected Projects</h3>
        
        <div className="project">
          <h4>AI Digital Twin for Smart Urban Air Mobility (UAM) [NFR Korea Project]</h4>
          <p className="project-date">2020 - 2026</p>
          <p>Led development of AI-based situational awareness and trajectory prediction systems, delivering a unified autonomy evaluation platform that reduced system debugging cycles. Implemented an end-to-end autonomous software stack merging perception, decision-making, and validation. Integrated mission planning, traffic management, and foundational GStreamer-based video ingestion modules. Validated system performance through real-world UAV flight testing.</p>
          <div className="project-tags">
            <span>Digital Twin</span><span>AirSim</span><span>Trajectory Prediction</span><span>GStreamer</span><span>Sensor Fusion</span>
          </div>
        </div>

        <div className="project">
          <h4>Autonomous UAV AI System [Unitech Co., Korea Project]</h4>
          <p className="project-date">2022 - 2023</p>
          <p>Designed system architecture for end-to-end autonomous UAV perception-planning pipelines. Developed real-time object detection and multi-object tracking modules with integrated simulation-based validation. Executed full system software integration, hardware testing, and deployment, successfully passing cross-functional verification for real-world autonomous operations.</p>
          <div className="project-tags">
            <span>Object Detection</span><span>Multi-Object Tracking</span><span>Perception-Planning</span><span>Hardware Integration</span>
          </div>
        </div>

        <div className="project">
          <h4>Manned-Unmanned Teaming Project [Korea MUM-T]</h4>
          <p className="project-date">2022 - 2024</p>
          <p>Developed AI-based decision-support and multi-target tracking algorithms within simulated military robotics environments, resulting in optimized mission planning and tactical coordination for collaborative manned-unmanned operations.</p>
          <div className="project-tags">
            <span>MUM-T</span><span>Decision-Support</span><span>Multi-Target Tracking</span><span>Robotics Simulation</span>
          </div>
        </div>

        <div className="project">
          <h4>Simulation Projects [KCEI/KAIA, UWC]</h4>
          <p className="project-date">2020 - 2023</p>
          <p>Designed and built high-fidelity 3D VR environments (Unreal Engine, Unity) for autonomous UAV system testing and safety-critical pilot training, covering terrain, airspace, and dynamic scenario authoring. Integrated real-time flight and physics simulation into immersive VR displays on HTC Vive / SteamVR.</p>
          <div className="project-tags">
            <span>Unreal Engine</span><span>Unity</span><span>VR Simulation</span><span>SteamVR</span><span>PX4 Autopilot</span>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section - Fully Expanded Matrix */}
      <section className="section">
        <h3>Technical Expertise</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <strong>OS:</strong>
            <p>Windows, Linux</p>
          </div>
          <div className="skill-category">
            <strong>Programming Languages:</strong>
            <p>Python, C++, C#, Java, JavaScript (React)</p>
          </div>
          <div className="skill-category">
            <strong>Frameworks & Libraries:</strong>
            <p>PyTorch, TensorFlow, OpenCV, Reinforcement Learning</p>
          </div>
          <div className="skill-category">
            <strong>GPU & Parallel Computing:</strong>
            <p>NVIDIA GPUs (training & real-time inference), CUDA</p>
          </div>
          <div className="skill-category">
            <strong>Robotics & Autonomy Frameworks:</strong>
            <p>PX4 Autopilot, Perception-Planning Architectures (Autonomous Path Planning), Sensor Fusion (Vision/LiDAR), ROS/ROS2 (Core Concepts)</p>
          </div>
          <div className="skill-category">
            <strong>Embedded & Hardware Deployment:</strong>
            <p>NVIDIA Jetson (Edge AI Deployment & Testing), CUDA, NVIDIA GPUs, Raspberry Pi</p>
          </div>
          <div className="skill-category">
            <strong>Simulation & Tools:</strong>
            <p>AirSim, Unreal Engine, Unity, Digital Twin Simulation, SteamVR, Git, GitHub</p>
          </div>
          {/* <div className="skill-category">
            <strong>Languages:</strong>
            <p>English, Korean, Chinese, Thai, Burmese, Shan</p>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;