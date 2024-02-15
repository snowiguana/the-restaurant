import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-9rem)] md:h-[calc(100vh-15rem)] flex items-center justify-center">
      {/* BOX CONTAINER  */}
      <div className="h-full w-full shadow-2xl flex flex-col md:flex-row md:w-full md:h-2/4 lg:w-2/3 lg:h-2/3 2xl:w-1/2">
        {/* IMAGE CONTAINER  */}
        <div className="relative w-full h-1/3 md:h-full">
          <Image src="/teal/t29.jpg" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="flex text-sky-700 p-8 flex-col xl:p-20">
          <h1 className="text-3xl font-bold my-20 xl:my-10">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-red-500 rounded-md my-5 border-spacing-5 hover:bg-cyan-50 items-center justify-center shadow-xl">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-cyan-500 rounded-md my-5 border-spacing-5 hover:bg-cyan-50 items-center justify-center shadow-xl">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have a problem?{" "}
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>

    //   <div className="p-4 h-[calc(100vh-9rem)] md:h-[calc(100vh-15rem)] flex items-center justify-center">
    //     {/* BOX CONTAINER  */}
    //     <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
    //       {/* IMAGE CONTAINER  */}
    //       <div className="relative h-1/3 w-full md:h-full md:w-1/2">
    //         <Image src="/teal/t29.jpg" alt="" fill className="object-cover" />
    //       </div>
    //       {/* FORM CONTAINER  */}
    //       <div className="p-10 flex flex-col gap-8 md:w-1/2">
    //         <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
    //         <p>Log into your account or create a new one using social buttons</p>
    //         <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
    //           <Image
    //             src="/google.png"
    //             alt=""
    //             width={20}
    //             height={20}
    //             className="object-contain"
    //           />
    //           <span>Sign in with Google</span>
    //         </button>
    //         <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
    //           <Image
    //             src="/facebook.png"
    //             alt=""
    //             width={20}
    //             height={20}
    //             className="object-contain"
    //           />
    //           <span>Sign in with Facebook</span>
    //         </button>
    //         <p className="text-sm">
    //           Have a problem?{" "}
    //           <Link href={"/"} className="underline">
    //             Contact us?
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default LoginPage;
