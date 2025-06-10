// components/AnimatedButton.tsx
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const variantStyles: Record<string, string> = {
  primary: 'bg-[#5d47de] text-white hover:bg-[#4a38c7] shadow-violet-500/30',
  secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 shadow-gray-400/30',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-red-500/30',
  outline:
    'bg-transparent border border-[#5d47de] text-[#5d47de] hover:bg-[#5d47de] hover:text-white shadow-none',
};

const AppButton = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const baseClasses =
    'h-12 px-6 rounded-full font-semibold focus:outline-none transition-all duration-200 will-change-transform cursor-pointer';

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const finalClassName = twMerge(
    baseClasses,
    variantStyles[variant],
    disabledClasses,
    className
  );

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      whileTap={{ scale: 0.94, rotate: -1 }}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.2, ease: 'easeOut' },
        boxShadow:
          variant === 'outline'
            ? '0 0 0 rgba(0,0,0,0)'
            : '0 0 6px rgba(93, 71, 222, 0.35)', // soft glow for primary
      }}
      className={finalClassName}
    >
      {children}
    </motion.button>
  );
};

export default AppButton;
