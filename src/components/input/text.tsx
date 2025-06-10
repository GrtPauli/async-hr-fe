import { motion } from "framer-motion";
import { useField } from "formik";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type AppInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
};

const AppTextInput: React.FC<AppInputProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  icon,
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFloating = isFocused || !!field.value;
  const isPasswordType = type === "password";

  const inputType = isPasswordType && !showPassword ? "password" : "text";

  return (
    <div className="relative w-full">
      {/* Floating Label */}
      <motion.label
        htmlFor={name}
        animate={{
          top: isFloating ? 0 : "50%",
          left: icon ? "36px" : "12px",
          fontSize: isFloating ? "12px" : "14px",
          // color: hasError ? "#ef4444" : isFocused ? "#5d47de" : "#fff",
        }}
        transition={{ duration: 0.2 }}
        className={`absolute z-10 origin-left bg-white dark:bg-gray-800 px-1 pointer-events-none
          ${hasError ? 'text-red-500'
            : isFocused ? 'text-violet-700'
            : 'text-gray-500 dark:text-gray-300'
          }
        `}
        style={{
          transform:
            hasError && isFloating
              ? "translateY(-50%)"
              : hasError
              ? "translateY(-100%)"
              : "translateY(-50%)",
        }}
      >
        {label}
      </motion.label>

      {/* Icon */}
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}

      {/* Input Field */}
      <motion.input
        {...field}
        id={name}
        type={inputType}
        placeholder={isFloating ? placeholder : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          field.onBlur(e);
          setIsFocused(false);
        }}
        className={`peer w-full border-[1.5px] rounded-md py-3 px-3 text-base bg-transparent text-gray-900 dark:text-white transition-all duration-300
          ${icon ? "pl-10" : ""}
          ${
            hasError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 dark:border-gray-700/60 focus:border-violet-700 focus:dark:border-violet-700"
          }
          placeholder-transparent focus:outline-none focus:ring-0 pr-10
        `}
        whileFocus={{ scale: 1.01 }}
      />

      {/* Password Toggle */}
      {isPasswordType && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={`absolute right-3 top-1/2 ${hasError ? '-translate-y-[22px]' : '-translate-y-1/2'} text-gray-500 focus:outline-none`}
        >
          {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
      )}

      {/* Error message */}
      {hasError && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500 mt-1"
        >
          {meta.error}
        </motion.div>
      )}
    </div>
  );
};

export default AppTextInput;
