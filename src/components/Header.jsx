import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { FileText } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center 
      flex-wrap gap-4">

      {/* Left */}
      <div className="flex items-center gap-3">
        <h1 className="font-anonymous text-xl sm:text-2xl md:text-3xl">
          lakshay1109
        </h1>
        <a href="https://github.com/lakshay1109"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-xl sm:text-2xl">
          <FaGithub />
        </a>
      </div>

      {/* Right */}
      <div className="flex flex-wrap gap-3 sm:gap-4 
        text-xl sm:text-2xl md:text-3xl justify-end">
        <a 
        href="/Lakshay_Varshney_Resume_5.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Resume"> 
          <FileText size={24} /> 
        </a> 
        <a 
        href="https://www.linkedin.com/in/lakshay-varshney1109/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="LinkedIN" >
          <FaLinkedin />
        </a> 
        <a 
        href="https://www.instagram.com/i_am_lakshay_11/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Instagram" >
          <FaInstagram />
        </a> 
        <a 
        href="https://codeforces.com/profile/i_am_lakshay_11" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="CodeForces" >
          <SiCodeforces /> 
        </a> 
        <a 
        href="https://leetcode.com/u/L6EouQCEXp/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="LeetCode">
          <SiLeetcode /> 
        </a> 
        <a 
        href="https://discord.com/channels/1311024963880353834" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Discord" >
          <FaDiscord /> 
        </a>
      </div>
    </div>
  );
}

