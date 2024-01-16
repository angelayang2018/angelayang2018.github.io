import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <p>Frontend Developer | Software Engineer</p>
          <p>SJSU Computer Science Graduate</p>
          <p>Passionate about Beans</p>
          <p>Currently looking for job 2024</p>
        </div>
        <div>
            <Link to ="/about"><button>ABOUT</button></Link>
            <button>RESUME</button>
        </div>
      </div>

      <div className = "skills"> 
      <h2>SKILLS</h2>

      </div>

      <div>
        <button>EMAIL</button>
        <button>LINKEDIN</button>
        <button>GITHUB</button>
      </div>
    </div>
  );
}
