
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    // Save user preference in localStorage
    useEffect(() => {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      }
    }, []);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
        document.body.style.backgroundColor = "#FFFFFF"; 
        document.body.style.color = "#000000"; 
    
      } else {
      document.body.style.backgroundColor = "#1F2937"; 
     document.body.style.color = "#F9FAFB"; 
      }
    };
  
    return (
      <button
        onClick={toggleDarkMode}
        className=" bg-gradient-to-r from-blue-300 to-secondary
                transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
      >
        {darkMode ? (
          <Sun size={18} className="text-yellow-600" />
        ) : (
          <Moon size={18} className=" text-black-500" strokeWidth={2}
          fill="black" /> 
        )}
      </button>
  )
}

export default DarkMode


