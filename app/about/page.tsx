import { Metadata } from "next";
import { FacebookIcon, PinterestIcon } from "react-share";
import imgurl from "../../public/photo.jpg";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Navbar3 from "@/components/navbar3/page";
import { Poppins } from "next/font/google";
import { text } from "stream/consumers";
// Poppins
const Poppins700 = Poppins({
  weight: "700",
  subsets: ["latin"],
  // display: "swap",
});

const Poppins400 = Poppins({
  weight: "400",
  subsets: ["latin"],
  // display: "swap",
});

const Poppins500 = Poppins({
  weight: "500",
  subsets: ["latin"],
  // display: "swap",
});

export const metadata: Metadata = {
  title: "About Us",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),
  alternates: {
    canonical: "/about",
  },
};

function page() {
  return (
    <>
      <Navbar3 />

      <div
        className={`flex flex-col gap-4 px-4 pb-3 my-[130px] md:my-[105px] md:max-w-[75rem] mx-auto w-full leading-[1.7rem] font-[330] text-black ${Poppins400.className}`}
      >
        <div className="container mx-auto px-4 py-12 text-left">
          <h1
            className={`text-3xl font-extrabold pb-6 ${Poppins700.className}`}
          >
            About GuideMyRecipe
          </h1>
          <p className="mb-4">By Shreyas M S</p>
          <p className="mb-4">
            Hey there, food lover! Welcome to <strong>GuideMyRecipe</strong>, a
            personal project crafted with love, passion, and a pinch of spice.
          </p>
          <p className="mb-4">
            I believe food is more than just fuel. it&rsquo;s a story, a
            creative outlet, and a daily joy. My goal? Simple:
          </p>
          <h2 className={`text-2xl mb-4 ${Poppins700.className}`}>
            ALL THE RECIPES YOU&rsquo;LL EVER NEED. PERIOD.
          </h2>
          <p className="mb-4">
            GuideMyRecipe is my personal space where I share tried-and-tested
            recipes, flavorful ideas, and a taste of my kitchen experiments.
            Here&rsquo;s what you can expect:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              A growing library of delicious recipes, from comforting
              classNameics to bold new favorites.
            </li>
            <li className="mb-2">
              Tips, tricks, and honest food experiences straight from my own
              cooking adventures.
            </li>
          </ul>
          <p className="mb-4">
            Whether you&rsquo;re a beginner in the kitchen or someone who enjoys
            experimenting with flavors, GuideMyRecipe is here to make your
            cooking journey fun and flavorful. Explore the{" "}
            <strong>Recipes Section</strong> and find your next favorite dish.
          </p>
          <p className="mb-4">
            Got feedback, suggestions, or just want to say hi? I&rsquo;d love to
            hear from you!
          </p>

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

            {/* <li>📘 <strong>Facebook:</strong> <a  rel="noopener"
                 className="underline"
          href="https://www.facebook.com/profile.php?id=61574819005948"
               target="_blank"
          >
              facebook.com/profile.php?id=61574819005948
           </a>
         </li> */}
            <li>
              📌 <strong>Pinterest:</strong>{" "}
              <a
                rel="noopener"
                className="underline"
                href="https://in.pinterest.com/GuideMyRecipe/"
                target="_blank"
              >
                in.pinterest.com/GuideMyRecipeBlog/
              </a>
            </li>
          </ul>

          <h2
            className={`text-2xl font-semibold mt-8 mb-4 ${Poppins700.className}`}
          >
            Meet the Creator
          </h2>

          <Image
            src={imgurl}
            alt="Shreyas M S - Admin of GuideMyRecipe"
            width="200"
            height="200"
            className="my-4"
          />

          <div className="flex items-center gap-4">
            <div>
              <p className="mb-4">
                <strong>Shreyas M S</strong> - Founder of GuideMyRecipe
              </p>
              <p className="mb-4">
                Hi, I&rsquo;m Shreyas, a self-taught foodie and tech enthusiast.
                I built GuideMyRecipe to share my love for cooking with the
                world. Every recipe here is something I&rsquo;ve personally
                worked on, tasted, and enjoyed.
              </p>
              <p className="mb-4">
                I hope this website inspires you to try something new in the
                kitchen. Got something to share? Reach out any time via{" "}
                <a href="mailto:shreyasms660@gmail.com" className="underline">
                  Email
                </a>
                .
              </p>
              <p className="mb-4">
                🔗 <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/shreyasms660/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  linkedin.com/in/shreyasms660/
                </a>
              </p>
            </div>
          </div>

          <p className="mb-4">Happy cooking,</p>
          <p className="font-semibold">- Shreyas</p>
        </div>
      </div>
    </>
  );
}

export default page;
