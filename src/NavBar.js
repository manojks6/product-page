import React from 'react';
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <div  className="navbar-link">Home</div>
        </li>
        <li className="navbar-item">
          <div  className="navbar-link">About</div>
        </li>
        <li className="navbar-item">
          <div  className="navbar-link">Cart</div>
        </li> 
        <li className="navbar-item">
          <div  className="navbar-link">Contact</div>
        </li>
        <li>
          <div className='SearchBox'>
               <input type='text' placeholder='Search' className='Search'/> 
               <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX19fUAAAD39/fz8/P6+vr9/f0EBAT///+9vb3v7+/r6+vDw8OUlJRVVVWRkZFRUVHR0dFMTEzj4+NycnJpaWl4eHikpKTa2tphYWGampqFhYU0NDTLy8sVFRWvr68MDAw+Pj4hISEoKChERES0tLR9fX0mJiagoKAzMzNcXFwbGxtcw/u5AAAHhklEQVR4nO2cCXPiOgyAE1lOOBqahptSCpRuj///A58d2i2RHTYx9CEYfbM7W1iasZCsw5YdRYIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCMIRAPZ/EFHvMT+ZdyLz5qXHdh7ACgdFvpovhqPZaDRczHfLAlLzprr02M4BoMZ8PvuMCX9m8xxTvHYtAqS9zpAK98Owo9JrltGoLx8/18uXmL9Pr7mZk+oKxTRDRuzf/5XEK6HB/JP1zYy8OqejjHfpP9Srr0q2LH3rdaGLWamlJgKaD40KfekRtwEUpnd7+RpJWH7qLb30sFsAWLw0NdAfGV96VzMbQa+a2uePhPbjO30NAtr0bFG6ybY6NAxQXYEWIZq1kq3CKMJLj/9fKOw2jhE+TWaKddiwFqrW9eNP4m/zrTFh8/YDdwmjWieaHH35wwPnZNzkMdkRG1yPBpNdZ7eaDEa1ijYannEWUfvKiNIsHxf9Lpalb1kHY7e/2MZ/M9Mqr5ptJp6+1WhmnNsa+PCj9vVyWGOtK65xEZd++RZF6iYrxqEgFgufzuN4ylRCtXXciXk9LOo1AmV+7hrqmqeVpmOPyW36Go74f+ObOk8+tTNMw8HaqKONmUJjn8c0Atj78IiYs8ttzER7dOfToMkiDKAzG5N4nTJLUI3bmLg2Omlma4B3VMIk3nFTInSfqhImewGb6BCidF4NG0bCDTcd4tzRwl3jqAagB44FTHgpEdSGzqRhmxVtwBE18S0vJeKqqsAkfoRWSxLQ3dL8psOqysBKSWFHOm1pZJhTO73nFBMhp25m0HpxMF1QEaeMlKjp6DbtBweKJjd3yGZrCtQfMrhVgCPUE/KQNZtCEYyRVnkPsS+ADXlM27n8ayhNgqGJZSHfPo37fEIipGR57bkbZF7QIxJ+cPGm0CUqHAftJJnkbVSV8JNLmQhTImEn0LpwR1wyl1q/mtAYS+seK3qPUVSfE/xVnRsaDbPQhSQAkhrNmcSLlGTNi9DNTtDjqoRjJtummqzvhhevSIL+Q8ojcdOkVyYPHhX2q0/aMgkXWB1WuAcE6pWfecxDUETCsHhfPqogj+JhpE7AP0HC3q1LiFRCHisZjpX2wh/FVIcRlfB885BJq9T5fCmSQvOJS9a2ORxVEi/D52GnKuEjk3hYLQ+TEwrX6rpyYgpEHlZK97aHwdmkHlUlNBkuCwnNN1+pLdbtFoN/gOj9XNZwXoDMnrgI/OadUjp8Rp+Xqo9Pwr96TYzhhLhzZpCs5T4EWSk4ZdgjEyM1hSvdOJqGLFYrGg1PcFnnhi7UxK9BcSwdk8dwWabxJFvPIRPIeQqfaWjM9IW4iEVAo4GjwozNYRMFpE3B/Fy033ua0t21kO2d38I1sKzlTFSgq1sDSZip/xqONzUKaDU+wDe6ycplKXEPuE17bbbGwG5yUyMNX7L7DQCd7u531ViLoKC3deyc0Sy00MrO5G73zXVgl/NpPw2XnPQbR4mJ1UKjQdoU78Fp+gve/Pg1cOn2qt832v8D6NL2dyMul421Axx3atuGin9PJsDpu9v098qtN9HSjZ32uzjpaDjSvmdbT/XO05f62WV4CHp/novqIh73dO10ND4Ue95Twnxy7gMA6Db8vsHtcwK1IiJMEt8pt3cuG/gVzJi6f8iZtf3P25XSNi+LvhbOAOwJNcBUTZwz7F9k5tP8zNQ4m7zm3OHzOMcUsLx8wH4QELVa0lriEKZng0qv4bBX62a4mvZQ61SnKfTy1fAzrj+GafMFhr7Uks6Pna1Mti/ZbJa9OBmaj4yjO7VaHLQ+IFvHB093A6nvoM8ByZGDeZXPJXHG1VDvGsrwb0zWx9NQvZE/AFue8NQiLn1HmRqJVH2ZxA9MDbU8yhRwHt/zK83KkwuAdWctj7Cifbjx/nA3UzXq6X3s14pHCsvHVGt6/GlfRzNN4CLE1aZRaCxvB9l2NO6DqUuL1ZD/F8ToreFcfJqUN38pSF0txqFbWf8HJr9e2f0yvyLL7M7+z3pV5uTlb3gM1YoYMTVUg4bluCZ07OV+Guc/PTNGi34RucbFEtTd/is9XvrF42tfHd5JY0tIn7spr8u4pBDHAUANxW6RVSqKbTboFJB6bt7za9FWGlwN1QKlmL3pst/Z7Tr9vOiVN+559GKXbrweNeNsqJayAQW/gdp+lHpDZT0X25J6sps4fuFZaQRgDdWfwHENiwH4ROTuUduS+t3NzRiqcTg+EctK41aAOo96S3OxJkfluKMRhoqurdJoT10azrUkbo0/u7Ee9VaUqGwx5XrUW4uL/oUNtms3rbEJnH8u8tx8a099pcH7esWWOPcZ7IMG70syW1BrqFmjK5quAOWPiwm33sUT8Vcay5tJ4PxxkVMr/+mYSsNxNwm3u7JOxDcXebVJn44r4mf4gWOWuHNxfTOe5gtHxPb3ifHG9ajtz3QwB761+LVbF3YZFWusFt/+ivjGsYv4RGylgfn+xvCPpY5upESkgC76u36Bt+ZHDwFgctPCrxF6UlwQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQhGvlPxbDSTFKKKUYAAAAAElFTkSuQmCC'></img>
          </div>
          </li>
      </ul>
    </nav>
  );
};

export default NavBar;