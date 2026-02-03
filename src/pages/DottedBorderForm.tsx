import React from "react";

type InputProps = {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
};

type TextareaProps = {
  placeholder: string;
  rows?: number;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none focus:border-indigo-500 transition"
    />
  );
};

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  rows = 3,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none focus:border-indigo-500 transition resize-none"
    />
  );
};

const DottedBorderForm: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Outer Dotted Container */}
      <div className="w-[1100px] min-h-[520px] border-2 border-dotted border-indigo-400 grid grid-cols-1 md:grid-cols-2">

        {/* Left Form */}
        <div className="p-12 flex flex-col gap-6">
          <Input placeholder="Enter your full name" />
          <Input placeholder="Enter your current job role" />
          <Input placeholder="Enter your phone number" type="tel" />
          <Input placeholder="Enter your email ID" type="email" />
          <Textarea placeholder="Enter message" />

          <button
            type="button"
            className="mt-6 w-full py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Get the price
          </button>
        </div>

        {/* Right Empty Section */}
        <div className="border-l-2 border-dotted border-indigo-400 hidden md:block" />
      </div>
    </div>
  );
};

export default DottedBorderForm;
