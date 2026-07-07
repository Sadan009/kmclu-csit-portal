// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { GraduationCap } from "lucide-react";

// export default function SelectProgram() {
//   const navigate = useNavigate();

//   const [program, setProgram] = useState("");
//   const [error, setError] = useState("");

//   const programs = ["BCA", "MCA"];

//   useEffect(() => {
//     const savedProgram = localStorage.getItem("adminProgram");

//     if (savedProgram) {
//       setProgram(savedProgram.toUpperCase());
//     }
//   }, []);

//   const handleContinue = () => {
//     if (!program) {
//       setError("Please select a program.");
//       return;
//     }

//     setError("");

//     localStorage.setItem("adminProgram", program.toLowerCase());

//     navigate("/admin/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
//       <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="bg-[#0F4C81] p-3 rounded-full text-white mb-4">
//             <GraduationCap size={32} />
//           </div>

//           <h1 className="text-2xl font-bold text-gray-800">Select Program</h1>

//           <p className="text-center text-gray-500 mt-2 text-sm leading-6">
//             Khwaja Moinuddin Chishti Language University
//             <br />
//             Department of Computer Science & Information Technology
//           </p>
//         </div>

//         {/* Error */}
//         {error && (
//           <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//             {error}
//           </div>
//         )}

//         {/* Program Buttons */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {programs.map((item) => (
//             <button
//               key={item}
//               onClick={() => {
//                 setProgram(item);
//                 setError("");
//               }}
//               className={`cursor-pointer rounded-xl border p-5 font-semibold transition-all duration-200
//               ${
//                 program === item
//                   ? "bg-[#0F4C81] text-white border-[#0F4C81] shadow-lg"
//                   : "bg-white border-gray-300 hover:border-[#0F4C81] hover:bg-slate-50"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Selected Program */}
//         {program && (
//           <div className="mb-6 rounded-lg bg-blue-50 p-3 text-center">
//             <span className="text-sm text-gray-600">Selected Program:</span>

//             <p className="font-bold text-[#0F4C81] text-lg">{program}</p>
//           </div>
//         )}

//         {/* Continue */}
//         <button
//           onClick={handleContinue}
//           disabled={!program}
//           className={`w-full rounded-xl py-3 font-semibold transition-all duration-200
//           ${
//             program
//               ? "bg-[#0F4C81] text-white hover:bg-[#0d3e69]"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }
