import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'priceOutline' | 'accent' | 'whatsapp';
  icon?: React.ElementType;
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  className = "", 
  icon: Icon, 
  isLoading,
  ...props 
}: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm md:text-base w-full sm:w-auto group cursor-pointer relative overflow-hidden";
  
  const variants = {
    primary: "bg-[#01B2FE] text-white hover:bg-[#00a0e6] shadow-lg shadow-[#01B2FE]/30 hover:shadow-[#01B2FE]/50",
    secondary: "bg-white text-[#01B2FE] hover:bg-gray-50 shadow-md border border-gray-100",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm",
    priceOutline: "bg-transparent text-[#01B2FE] border-2 border-[#01B2FE] hover:bg-[#01B2FE] hover:text-white",
    accent: "bg-[#01B2FE] text-white hover:bg-[#00a0e6] shadow-lg shadow-[#01B2FE]/30",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-500/30"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {children}
          {Icon && <Icon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
        </>
      )}
    </button>
  );
};
