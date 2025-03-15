// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Card, CardContent } from "../ui/card";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";




// function SignIn() {
//   const [isLogin, setIsLogin] = useState(true);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(isLogin ? "Logging in..." : "Signing up...", data);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-96 p-6 shadow-lg bg-white rounded-2xl">
//         <CardContent>
//           <h2 className="text-2xl font-bold text-center mb-4">
//             {isLogin ? "Login" : "Sign Up"}
//           </h2>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             {!isLogin && (
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   type="text"
//                   {...register("name", { required: "Name is required" })}
//                   className="w-full"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//               </div>
//             )}
//             <div>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 {...register("email", { required: "Email is required" })}
//                 className="w-full"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//             </div>
//             <div>
//               <Label>Password</Label>
//               <Input
//                 type="password"
//                 {...register("password", { required: "Password is required" })}
//                 className="w-full"
//               />
//               {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//             </div>
//             <Button type="submit" className="w-full">{isLogin ? "Login" : "Sign Up"}</Button>
//           </form>
//           <p className="text-center mt-4 text-sm">
//             {isLogin ? "Don't have an account?" : "Already have an account?"} 
//             <button 
//               className="text-blue-500 ml-1 hover:underline"
//               onClick={() => setIsLogin(!isLogin)}
//             >
//               {isLogin ? "Sign up" : "Login"}
//             </button>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default SignIn;