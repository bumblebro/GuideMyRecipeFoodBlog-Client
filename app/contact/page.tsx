// "use client";
// import { Metadata } from "next";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// // export const metadata: Metadata = {
// //   title: "Contact Us",
// // };

// function page() {
//   const [visible1, SetVisible1] = useState(false);
//   const [visible2, SetVisible2] = useState(false);
//   const form = useRef();

//   const handleTimer1 = () => {
//     setTimeout(() => {
//       SetVisible1(false);
//     }, 5000);
//   };
//   const handleTimer2 = () => {
//     setTimeout(() => {
//       SetVisible2(false);
//     }, 5000);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_zohautr", "template_g0vxnkh", form.current, {
//         publicKey: "Wcw7D5OR_vI0PwLoP",
//       })
//       .then(
//         () => {
//           SetVisible1(true);
//           handleTimer1();
//         },
//         (error) => {
//           SetVisible2(true);
//           handleTimer2();
//         }
//       );
//   };

//   return (
//     <div className="flex flex-col  gap-4 px-4 pb-3 my-[130px] md:my-[105px]   md:max-w-[45rem] mx-auto w-full leading-[1.7rem] font-[330] text-black ">
//       <h1 className="text-center text-3xl font-semibold py-6">Contact Us</h1>
//       <form
//         className="flex flex-col gap-[0.73rem] w-full px-[1.1rem]  text-white"
//         action="#"
//         onSubmit={sendEmail}
//         ref={form}
//       >
//         <input
//           className="bg-black pl-[1.31rem] py-[0.85rem] rounded-xl "
//           type="text"
//           placeholder="Name"
//           required
//         />
//         <input
//           className="bg-black pl-[1.31rem] py-[0.85rem] rounded-xl "
//           type="email"
//           placeholder="Email"
//           required
//         />
//         <input
//           className="bg-black flex flexs pl-[1.31rem] pt-[0.85rem] rounded-xl pb-[16.51rem] "
//           type="text"
//           placeholder="Enter the message"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-[#F49C25] rounded-[0.75rem] py-2 text-xl font-medium "
//         >
//           Submit
//         </button>
//       </form>
//       {visible1 && (
//         <div className="bg-[#262626] text-center py-4 lg:px-4 fixed top-12 w-full">
//           <div
//             className="p-2 bg-[#f49c25] text-white leading-none lg:rounded-full flex items-center justify-center lg:inline-flex px-4 gap-8 lg:gap-2"
//             role="alert"
//           >
//             {/* <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
//             New
//           </span> */}
//             <span className="font-semibold text-left ">
//               Thank you! We've recieved your message. someone from our team will
//               contact you soon.
//             </span>
//             <button>
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="#262626"
//                 className="w-5 h-5"
//                 onClick={() => {
//                   SetVisible1(false);
//                 }}
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </button>{" "}
//           </div>
//         </div>
//       )}
//       {visible2 && (
//         <div className="bg-[#262626] text-center py-4 lg:px-4 fixed top-12 w-full ">
//           <div
//             className="p-2 bg-[#f49c25] text-white leading-none lg:rounded-full flex items-center justify-center lg:inline-flex px-4 gap-8 lg:gap-2"
//             role="alert"
//           >
//             {/* <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
//             New
//           </span> */}
//             <span className="font-semibold  ">
//               There was a problem sending your message. Please try again later.
//             </span>
//             <button>
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="#262626"
//                 className="w-5 h-5"
//                 onClick={() => {
//                   SetVisible2(false);
//                 }}
//               >
//                 {" "}
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default page;

import Navbar3 from "@/components/navbar3/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

function page() {
  return (
    <>
      {" "}
      <Navbar3 />
      <div className="flex flex-col  gap-4 px-4 pb-3 my-[130px] md:my-[105px]   md:max-w-[45rem] mx-auto w-full leading-[1.7rem] font-[330] text-black h-[50vh]">
        <h1 className="text-center text-3xl font-semibold py-6">Contact Us</h1>
        <p>
          We would love to hear from you! Whether you have a question, feedback,
          or simply want to connect, feel free to reach out. Our team is here to
          assist you and ensure that your experience on GuideMyRecipe is as
          seamless and enjoyable as possible.
        </p>
        {/* <a
        className="underline text-center text-blue-700 "
        href="mailto:GuideMyRecipe@gmail.com?"
      >
        Please click here to mail
      </a>{" "} */}
        <ul>
          <li>
            📧 <strong>Email:</strong>{" "}
            <a
              rel="noopener"
              className="underline"
              href="mailto:GuideMyRecipe13@gmail.com"
            >
              GuideMyRecipe13@gmail.com
            </a>
          </li>
          <li>
            📘 <strong>Facebook:</strong>{" "}
            <a
              rel="noopener"
              className="underline"
              href="https://www.facebook.com/profile.php?id=61574819005948"
              target="_blank"
            >
              facebook.com/profile.php?id=61574819005948
            </a>
          </li>
          <li>
            📌 <strong>Pinterest:</strong>{" "}
            <a
              rel="noopener"
              className="underline"
              href="https://in.pinterest.com/GuideMyRecipeBlog/"
              target="_blank"
            >
              in.pinterest.com/GuideMyRecipeBlog/
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default page;
