
import React from "react";
import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className="md:hidden flex items-center justify-center w-10 h-10 neon-border rounded-md"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X className="w-5 h-5 text-cyber-primary" />
      ) : (
        <Menu className="w-5 h-5 text-cyber-primary" />
      )}
    </button>
  );
};

export default MenuToggle;
