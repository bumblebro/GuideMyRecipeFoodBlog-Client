import { FoodBlogs } from "@prisma/client";
import Link from "next/link";
import CopyBtn from "../ClientComponents/CopyBtn";
import ShareBtn from "../ClientComponents/ShareBtn";
import DeSlugify from "@/libs/DeSlugify";
import MarkdownComponent from "../Markdown";
import Image from "next/image";
import { shimmer, toBase64 } from "@/libs/Shimmer";
import RecipePage from "../RecipePage";
import Buttons from "../Buttons";
import { FAQSection } from "../FAQSection";
import ShareButtons from "../ShareButtons";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
// import AdCode from "../AdCode";
// import {
//   DisplayAdUnit,
//   InArticleAd,
//   InFeedAdUnit2,
//   MediumRectangleAdUnit,
// } from "../Ads/ad-unit";
import SideAdComponent from "../SideAdComponent";
// import AdContainerForDesktop from "../Ads/AdContainerForDesktop";
// import AdContainerForMobile from "../Ads/AdContainerForMobile";
// import { AutoFillAdStack } from "../Ads/AutoFillAdStack";
import SideAdComponent2 from "../SideAdComponent2";
import SideAdComponent3 from "../SideAdComponent3";
import InternalLinking from "../InternalLinking/InternalLinking";
import { PinterestIcon, PinterestShareButton } from "react-share";
import PinComponent from "../PinComponent";
import { DisplayAdUnit } from "../Ads/ad-unit";
import AdContainerForDesktop from "../Ads/AdContainerForDesktop";
import AdContainerForMobile from "../Ads/AdContainerForMobile";
// import GoogleAdUnit from "../GoogleAdUnit";
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

// const font = Nunito_Sans({
//   weight: "400",
//   subsets: ["latin"],
//   // display: "swap",
// });

const freight = localFont({
  src: "../../app/fonts/freight-neo-pro-book.otf",
});

const freightlight = localFont({
  src: "../../app/fonts/fonnts.com-FreightNeo_Pro_Light.otf",
});

const freightbig = localFont({
  src: "../../app/fonts/Freight Big Pro Medium Italic.otf",
});

const freightbigstraight = localFont({
  src: "../../app/fonts/Freight Big Pro Medium.otf",
});

interface JsonValue {
  [key: string]: any;
}
type SEOType = {
  ogDescription: string;
  ogTitle: string;
  ogImage: string;
};

type ContentItem = {
  title: string;
  url: string;
  alt: string;
  description: string;
};

interface BlogDisp {
  decodedslug: string[];
  // currentPost: {
  //   id: string;
  //   author: string;
  //   title: string;
  //   imageurl: string;
  //   imagealt: string;
  //   quote: string;
  //   section: string;
  //   subsection: string;
  //   subsubsection: string;
  //   content: JsonValue[];
  //   seo: JsonValue;
  //   creationDate: Date;
  // };
  currentPost: FoodBlogs;
  posts: FoodBlogs[];
  latposts: FoodBlogs[];
}

function BlogDisplay({ decodedslug, currentPost, posts, latposts }: BlogDisp) {
  const date = new Date(currentPost.creationDate);

  // const domain = process.env.NEXT_PUBLIC_BASE_API_URL?.replace(
  //   /^https:/,
  //   "http:"
  // );
  // const imageUrl =
  //   domain +
  //   "/api/og?" +
  //   "title=" +
  //   encodeURIComponent((currentPost?.seo as SEOType)?.ogTitle || "") +
  //   "&description=" +
  //   encodeURIComponent((currentPost?.seo as SEOType)?.ogDescription || "") +
  //   "&cover=" +
  //   encodeURIComponent(currentPost?.imageurl || "");

  // const urllink = `${process.env.NEXT_PUBLIC_BASE_API_URL}/${
  //   currentPost.section !== "null" ? currentPost.section + "/" : ""
  // }${currentPost.subsection !== "null" ? currentPost.subsection + "/" : ""}${
  //   currentPost.subsubsection !== "null" ? currentPost.subsubsection + "/" : ""
  // }${currentPost.title}`;

  const siteURL = process.env.NEXT_PUBLIC_BASE_API_URL || "";

  const domain =
    process.env.NEXT_PUBLIC_BASE_API_URL?.replace(/^https:/, "http:") || "";

  const generatePinterestUrl = ({ pageUrl, imageUrl, description }: any) => {
    const baseUrl = "https://www.pinterest.com/pin/create/bookmarklet/?";
    const params = new URLSearchParams({
      url: pageUrl,
      media: imageUrl,
      description,
    });

    return `${baseUrl}${params.toString()}`;
  };

  return (
    <div
      className={` xl:max-w-[73rem] mx-auto  mb-10 md:grid md:grid-cols-[56.7%_auto] lg:grid-cols-[67.5%_auto] xl:grid-cols-[65%_auto] xl:gap-20 2xl:grid-cols-[62%_auto] ${Poppins400.className}`}
    >
      {/* 74.25 */}
      <div>
        <div>
          <div>
            <div className="pb-4 px-4 xl:px-0">
              <div className="  h-[17rem] object-cover  md:h-[21rem] lg:h-[31.5rem] xl:h-[39.5rem] 2xl:h-[38rem] w-full sm:h-[29.5rem]  relative">
                <Image
                  className=""
                  fill
                  sizes="(min-width: 640px) 640px,(min-width: 768px) 435px,(min-width: 1024px) 691px,(min-width: 1280px) 867px,(min-width: 1536px) 835px, 390px"
                  src={currentPost.imageurl}
                  style={{ objectFit: "cover" }}
                  quality={75}
                  alt={currentPost.imagealt}
                  priority
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(300, 300)
                  )}`}
                />
              </div>
            </div>
            {/* <img
              className="px-4 pb-4 h-[17rem] object-cover  md:h-[21rem] lg:h-[31.5rem] xl:h-[39.5rem] 2xl:h-[38rem] w-full sm:h-[29.5rem] xl:px-0"
              src={currentPost.imageurl}
              alt={currentPost.imagealt}
            /> */}
            <Link
              href={`/${
                currentPost.section !== "null" ? currentPost.section + "/" : ""
              }${
                currentPost.subsection !== "null"
                  ? currentPost.subsection + "/"
                  : ""
              }${
                currentPost.subsubsection !== "null"
                  ? currentPost.subsubsection + "/"
                  : ""
              }`}
            >
              <h1 className="font-semibold   mx-4 pb-2 text-sm text-black hidden md:flex xl:mx-0 hover:underline">
                {DeSlugify(
                  decodedslug[decodedslug.length - 2]
                )[0].toUpperCase() +
                  DeSlugify(decodedslug[decodedslug.length - 2]).slice(1)}
              </h1>
            </Link>
            <h1
              className={`text-2xl mx-4 xl:mx-0  border-b-[0.1px] pb-4 mb-6 border-gray-500  uppercase sm:text-[25px] md:text-[30px] lg:text-[35px] xl:pb-6 ${Poppins700.className} `}
            >
              {DeSlugify(decodedslug[decodedslug.length - 1])}
            </h1>{" "}
            <div className="lg:flex lg:pb-4">
              <div className="mx-4 text-xs  flex flex-col gap-2 pb-4 xl:mx-0">
                <div className="font-semibold flex gap-1">
                  <h1 className={`${Poppins700.className}`}>By:</h1>{" "}
                  {/* <span className="underline p-author ">
                    {currentPost.author}
                  </span> */}{" "}
                  <span className="underline p-author ">GuideMyRecipe</span>
                </div>
                <div className=" text-black  dt-published flex gap-2">
                  <h1 className={`${Poppins700.className}`}>Published:</h1>{" "}
                  <span>
                    {" "}
                    {date.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold  mb-4 px-4 lg:w-[45%] lg:ml-auto xl:px-0 2xl:w-[40%]">
                <CopyBtn
                  text={`/${
                    currentPost.section !== "null"
                      ? currentPost.section + "/"
                      : ""
                  }${
                    currentPost.subsection !== "null"
                      ? currentPost.subsection + "/"
                      : ""
                  }${
                    currentPost.subsubsection !== "null"
                      ? currentPost.subsubsection + "/"
                      : ""
                  }${currentPost.title}`}
                />
                <ShareBtn
                  text={(currentPost?.seo as SEOType).ogDescription}
                  url={`${process.env.NEXT_PUBLIC_BASE_API_URL}/${
                    currentPost.section !== "null"
                      ? currentPost.section + "/"
                      : ""
                  }${
                    currentPost.subsection !== "null"
                      ? currentPost.subsection + "/"
                      : ""
                  }${
                    currentPost.subsubsection !== "null"
                      ? currentPost.subsubsection + "/"
                      : ""
                  }${currentPost.title}`}
                  title={currentPost.title}
                />
              </div>
            </div>
          </div>
          {/* <button className="px-5 py-2 bg-[#b5651d] text-white font-serif rounded-full shadow-md hover:bg-[#8a4f1d] transition-all">
            📜 Jump to Recipe
          </button>
          <button className="px-5 py-2 bg-[#6b4226] text-white font-serif rounded-full shadow-md hover:bg-[#4e2f1d] transition-all">
            💾 Save Recipe
          </button> */}
          <Buttons />
          {/* <div className="flex flex-col items-center my-8 px-4">
            <div className="max-w-2xl text-center bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4 font-medium">
                🚀 Beta Testing - Try It Now!
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${Poppins700.className}`}
              >
                Transform Any Recipe into an Interactive Cooking Guide
              </h3>
              <p className={`text-gray-700 mb-6 ${Poppins400.className}`}>
                Get step-by-step instructions with timers, animations, and
                real-time guidance while you cook. Works with any recipe from
                any website!
              </p>
              <a
                href={`https://guidemyrecipe.com/?url=${encodeURIComponent(
                  siteURL + "/" + currentPost.slug
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className={`${Poppins700.className}`}>
                  Try GuideMyRecipe Free →
                </span>
              </a>
            </div>
          </div> */}
          {/* <div className=" flex flex-col gap-2 mx-4 lg:mx-28 mt-8 mb-4">
            <div
              // className=" h-[17rem]  md:h-[21rem] lg:h-[31.5rem] xl:h-[39.5rem] sm:h-[28.5rem] 2xl:h-[38rem] relative w-full object-contain"
              className=" h-auto   relative w-full "
            >
              <Image
                sizes="100vw"
                // fill
                // sizes="(min-width: 640px) 608px,(min-width: 768px) 403px,(min-width: 1024px) 659px,(min-width: 1280px) 867px,(min-width: 1536px) 835px, 358px"
                // style={{ objectFit: "contain" }}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }} // optional
                src={
                  process.env.NODE_ENV === "development"
                    ? "https://GuideMyRecipe.com/api/og?title=Champagne-Fruit-Salad&cover=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEgHus7ANUFIFvLSw3UQb6KuCuD4Ci6ryuCq6PV_0CXwv5l3y7C0HM9eI7Lbdcn-_1M7hLGH6LERkH4g04m0UA54NcZJQKSp5Ah1tKhF0Y8A3rsChbKwLlb7z6-3oqSQQog0gRgePbwTlcw%2Fs1600%2FFruit-Salad-with-Champagne-031-websize-x500.jpg"
                    : domain +
                      `/api/og?title=${
                        currentPost.title
                      }&cover=${encodeURIComponent(currentPost.imageurl)}`
                }
                // domain +
                // `/api/og?title=${
                //   currentPost.title
                // }&amp;cover=${encodeURIComponent(currentPost.imageurl)}`
                // }
                // src="https://GuideMyRecipe.com/api/og?title=Champagne-Fruit-Salad&cover=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEgHus7ANUFIFvLSw3UQb6KuCuD4Ci6ryuCq6PV_0CXwv5l3y7C0HM9eI7Lbdcn-_1M7hLGH6LERkH4g04m0UA54NcZJQKSp5Ah1tKhF0Y8A3rsChbKwLlb7z6-3oqSQQog0gRgePbwTlcw%2Fs1600%2FFruit-Salad-with-Champagne-031-websize-x500.jpg"
                // style={{ objectFit: "contain" , }}
                quality={75}
                alt={currentPost.imagealt}
                priority
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(300, 300)
                )}`}
              />
            </div>
          </div>
          <div className="flex justify-center my-6">
            {" "}
            <a
              target="_blank"
              href={generatePinterestUrl({
                pageUrl: siteURL + "/" + currentPost.slug,
                imageUrl:
                  domain +
                  `/api/og?title=${
                    currentPost.title
                  }&amp;cover=${encodeURIComponent(currentPost.imageurl)}`,
                description: currentPost.recipedescription,
              })}
            >
              <button
                className={`px-5 py-2  shadow-md transition-all hover:bg-black text-white bg-[#E60022] duration-400 capitalize ${Poppins700.className}  text-sm `}
              >
                📌 Pin Recipe
              </button>
            </a>
          </div> */}
          {/* <div className="flex justify-center my-6">
            {" "}
            <a
              target="_blank"
              href={generatePinterestUrl({
                pageUrl: siteURL + "/" + DeSlugify(currentPost.slug),
                imageUrl:
                  domain +
                  `/api/og?title=${
                    currentPost.title
                  }&amp;cover=${encodeURIComponent(currentPost.imageurl)}`,
                description: currentPost.recipedescription,
              })}
            >
              <button
                className={`px-5 py-2  shadow-md transition-all hover:bg-black text-white bg-[#E60022] duration-400 capitalize ${Poppins700.className}  text-sm `}
              >
                📌 Pin Recipe
              </button>
            </a>
          </div> */}
          {/* <PinComponent
            url={siteURL + "/" + currentPost.slug}
            media={
              domain +
              `/api/og?title=${
                currentPost.title
              }&amp;cover=${encodeURIComponent(currentPost.imageurl)}`
            }
            description={currentPost.recipedescription}
          /> */}
          <DisplayAdUnit format="auto" />
          {currentPost.content?.map((item, i) => {
            const contentItem = item as ContentItem;
            return (
              <div
                key={i}
                className="flex flex-col gap-6  py-6 px-4 xl:px-0 w-f"
              >
                {/* <h1
                className={`${
                  i == 0 && "hidden"
                } text-[18.72px] pb-6 font-semibold `}
              > */}
                {/* {contentItem.title != null ||
                  (contentItem.title != "null" && (
                    <h1
                      className={`${
                        contentItem.title == "Introduction" && "hidden"
                      } text-[18.72px]  font-semibold `}
                    >
                      {contentItem.title}
                    </h1>
                  ))} */}
                {contentItem.description && (
                  <div
                    className={`  mb-4 ${Poppins400.className}  font-medium leading-[27px]  `}
                  >
                    {/* <DisplayAdUnit format="horizontal" /> */}
                    <MarkdownComponent text={contentItem.description} />{" "}
                  </div>
                )}
                {contentItem.url == "null" ||
                contentItem.url == null ||
                contentItem.alt == "null" ||
                contentItem.alt == null ? null : (
                  <div className=" flex flex-col gap-2">
                    <div
                      // className=" h-[17rem]  md:h-[21rem] lg:h-[31.5rem] xl:h-[39.5rem] sm:h-[28.5rem] 2xl:h-[38rem] relative w-full object-contain"
                      className=" h-auto   relative w-full "
                    >
                      <Image
                        // fill
                        // sizes="(min-width: 640px) 608px,(min-width: 768px) 403px,(min-width: 1024px) 659px,(min-width: 1280px) 867px,(min-width: 1536px) 835px, 358px"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
                        // sizes="100vw"
                        src={contentItem.url}
                        // style={{ objectFit: "contain" , }}
                        quality={75}
                        alt={contentItem.alt}
                        priority
                        placeholder={`data:image/svg+xml;base64,${toBase64(
                          shimmer(300, 300)
                        )}`}
                      />
                    </div>
                    {/*
                    <p className="text-gray-500 font-light text-sm">
                      {contentItem.alt} | Image: Supplied
                    </p> */}
                  </div>
                  // <div className="  w-full h-full">

                  // </div>
                )}
              </div>
            );
          })}{" "}
          {/* <DisplayAdUnit format="auto" /> */}
          <AdContainerForDesktop />
          <AdContainerForMobile />
          {currentPost.equipments && currentPost.equipments.length > 0 && (
            <div className="px-6 py-5 bg-white   my-10 border-black border-2 mx-2 md:mx-0 flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="my-auto">
                <h2
                  className={`text-xl font-medium text-gray-900 pb-3 ${Poppins700.className} uppercase`}
                >
                  Required Equipments
                </h2>
                <ul className="  py-3  flex flex-col gap-2  list-disc ">
                  {currentPost.equipments.map((equipment, i) => (
                    <li key={i} className="flex items-center  ">
                      {equipment}
                    </li>
                  ))}
                </ul>
              </div>
              <AdContainerForDesktop />
            </div>
          )}
          {/* <DisplayAdUnit format="auto" /> */}
          {currentPost.faq && (currentPost.faq as any[]).length > 0 && (
            <FAQSection title={currentPost.title} faqs={currentPost.faq} />
          )}
          <DisplayAdUnit format="auto" />
          {/* <AdCode>
            {" "}
            <ins
              className="adsbygoogle"
              // style={{ display: "block" }}
              style={{ display: "block" }}
              data-ad-client="ca-pub-5012580427673167"
              data-ad-slot="3048648789"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            </AdCode>{" "} */}
          {/* <GoogleAdPcItem key={2 + "ads"} adId={`ad-slot-${2}`} /> */}
          {/* <AdContainerForMobile /> */}
          {/* <DisplayAdUnit format="auto" /> */}
          <AdContainerForDesktop />
          <AdContainerForMobile />
          <RecipePage currentPost={currentPost} />
          <InternalLinking
            currentPost={currentPost}
            relatedPosts={latposts}
            categoryPosts={posts}
          />
          <h1 className="px-4 py-4 my-4 italic ">{currentPost.quote}</h1>
        </div>{" "}
        <div className=" py-8 px-4 hidden md:flex md:flex-col">
          <h1
            className={`text-2xl font-semibold text-center py-4 mb-4 ${Poppins700.className} bg-[#8D6271] text-white`}
          >
            Related Recipes
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {latposts?.map((item, i) => (
              <Link
                key={i}
                href={`/${
                  item.section !== "null"
                    ? item.section.toLowerCase() + "/"
                    : ""
                }${
                  item.subsection !== "null"
                    ? item.subsection.toLowerCase() + "/"
                    : ""
                }${
                  item.subsubsection !== "null"
                    ? item.subsubsection.toLowerCase() + "/"
                    : ""
                }${item.title.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-48">
                    <Image
                      src={item.imageurl}
                      alt={item.imagealt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, (min-width: 1024px) 33vw, 100vw"
                      quality={75}
                      placeholder={`data:image/svg+xml;base64,${toBase64(
                        shimmer(300, 300)
                      )}`}
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-gray-600 block mb-2">
                      {DeSlugify(item.subsection)}
                    </span>
                    <h3
                      className={`text-lg font-semibold line-clamp-2 group-hover:text-[#8D6271] transition-colors ${Poppins700.className}`}
                    >
                      {DeSlugify(item.title)}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>{" "}
        </div>{" "}
        <AdContainerForDesktop />
        <AdContainerForMobile />
      </div>
      {/* --- Sideeeeee one */}
      <div className="py-8 px-4 md:bg-[#ffffff] xl:pr-0 h-full">
        {/* <AdCode>
          {" "}
          <ins
            className="adsbygoogle"
            // style={{ display: "block" }}
            style={{ display: "block" }}
            data-ad-client="ca-pub-5012580427673167"
            data-ad-slot="3048648789"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </AdCode>{" "} */}
        <h1
          className={`text-lg font-semibold text-center py-4 mb-4 ${Poppins700.className}  bg-[#8D6271]  text-white `}
        >
          Related Recipes
        </h1>
        <div className="flex flex-col gap-4 mb-20">
          {posts?.map((item, i) => {
            // const shouldInsertAd = Math.random() < 0.1;
            // if (shouldInsertAd) {
            //   return <InFeedAdUnit2 key={i} />;
            // }
            return (
              <div
                key={i}
                className={`grid grid-cols-[100px_auto] gap-4 ${Poppins400.className} shadow-md `}
              >
                <Link
                  href={`/${
                    item.section !== "null"
                      ? item.section.toLowerCase() + "/"
                      : ""
                  }${
                    item.subsection !== "null"
                      ? item.subsection.toLowerCase() + "/"
                      : ""
                  }${
                    item.subsubsection !== "null"
                      ? item.subsubsection.toLowerCase() + "/"
                      : ""
                  }${item.title.toLowerCase()}`}
                >
                  <div className="w-full h-[75px] relative">
                    <Image
                      className=""
                      fill
                      sizes="100px"
                      src={item.imageurl}
                      style={{ objectFit: "cover" }}
                      quality={75}
                      alt={item.imagealt}
                      priority
                      placeholder={`data:image/svg+xml;base64,${toBase64(
                        shimmer(300, 300)
                      )}`}
                    />
                  </div>
                  {/* <img
                    className="object-cover w-full h-[75px]"
                    src={item.imageurl}
                    alt=""
                  /> */}
                </Link>
                <div className="flex flex-col gap-2 md:gap-2 w-full ">
                  {item.subsubsection ? (
                    <Link
                      href={`/${
                        item.section !== "null"
                          ? item.section.toLowerCase() + "/"
                          : ""
                      }${
                        item.subsection !== "null"
                          ? item.subsection.toLowerCase() + "/"
                          : ""
                      }${
                        item.subsubsection !== "null"
                          ? item.subsubsection.toLowerCase() + "/"
                          : ""
                      }`}
                    >
                      {" "}
                      <h1 className="text-xs text-black font-semibold  hover:underline ">
                        {DeSlugify(item.subsubsection)}
                      </h1>
                    </Link>
                  ) : item.subsection ? (
                    <Link
                      href={`/${
                        item.section !== "null"
                          ? item.section.toLowerCase() + "/"
                          : ""
                      }${
                        item.subsection !== "null"
                          ? item.subsection.toLowerCase() + "/"
                          : ""
                      }`}
                    >
                      <h1 className="text-xs text-black  font-semibold  hover:underline ">
                        {DeSlugify(item.subsection)}
                      </h1>
                    </Link>
                  ) : (
                    <Link
                      href={`/${
                        item.section !== "null"
                          ? item.section.toLowerCase() + "/"
                          : ""
                      }`}
                    >
                      {" "}
                      <h1 className="text-xs text-black  font-semibold  hover:underline">
                        {DeSlugify(item.section)}
                      </h1>
                    </Link>
                  )}{" "}
                  <Link
                    href={`/${
                      item.section !== "null"
                        ? item.section.toLowerCase() + "/"
                        : ""
                    }${
                      item.subsection !== "null"
                        ? item.subsection.toLowerCase() + "/"
                        : ""
                    }${
                      item.subsubsection !== "null"
                        ? item.subsubsection.toLowerCase() + "/"
                        : ""
                    }${item.title.toLowerCase()}`}
                  >
                    <h1
                      className={`text-sm font-medium line-clamp-2 hover:underline  ${Poppins700.className}`}
                    >
                      {DeSlugify(item.title)}
                    </h1>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>{" "}
        {/* <DisplayAdUnit format="auto" /> */}
        {/* <div className="bg-red-200 w-full h-72"></div> */}
        {/* <MediumRectangleAdUnit /> */}
        {/* Full screen height */}
        <SideAdComponent />
        <SideAdComponent2 />
        {/* <SideAdComponent3 /> */}
        {/* <div className="h-full">
          <AutoFillAdStack />
        </div> */}
      </div>{" "}
    </div>
  );
}

export default BlogDisplay;
