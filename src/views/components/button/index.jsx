import React from 'react';
import { Icon } from '@iconify/react'; // 1. Import Icon dari Iconify

const Button = ({ 
  children, 
  variant = 'primary', 
  icon,                  // 2. Prop untuk nama ikon (string)
  iconSize = 20,         // 3. Prop tambahan untuk ukuran ikon
  className = '', 
  unstyled = false,
  iconCircle = false,    // Tambahkan prop baru: untuk aktifkan lingkaran di ikon
  ...props 
}) => {

  // Base Styles
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all active:scale-95 rounded-lg gap-2"; 
  // Note: saya tambah 'gap-2' supaya ada jarak otomatis antara ikon dan teks

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5",
    orange: "bg-orange-500 text-white hover:bg-orange-600 px-6 py-2.5",
    outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5",
    ghost: "text-gray-600 hover:bg-gray-100 px-4 py-2"
  };

  if (unstyled) {
    return (
      <button className={`inline-flex items-center focus:outline-none gap-2 ${className}`} {...props}>
        {/* Hanya gunakan lingkaran jika iconCircle true */}
        {icon && iconCircle ? (
          <span className="border-2 border-biru rounded-full p-3">
            <Icon icon={icon} width={iconSize} />
          </span>
        ) : (
          icon && <Icon icon={icon} width={iconSize} />
        )}
        {children}
      </button>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {/* Gunakan lingkaran jika iconCircle true */}
      {icon && iconCircle ? (
        <span className="border-2 border-biru rounded-full p-3">
          <Icon icon={icon} width={iconSize} />
        </span>
      ) : (
        icon && <Icon icon={icon} width={iconSize} />
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;