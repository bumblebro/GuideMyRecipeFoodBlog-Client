// // import { NextRequest, NextResponse } from "next/server";
// // import { ImageResponse } from "@vercel/og";
// // import { url } from "inspector";
// // import DeSlugify from "@/libs/DeSlugify";
// // // import sharp from "sharp";

// // export const runtime = "experimental-edge";

// // async function loadGoogleFont(font: string, weight: number) {
// //   const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}`;
// //   const css = await (await fetch(url)).text();
// //   const resource = css.match(
// //     /src: url\((.+)\) format\('(opentype|truetype)'\)/
// //   );

// //   if (resource) {
// //     const response = await fetch(resource[1]);
// //     if (response.status == 200) {
// //       return await response.arrayBuffer();
// //     }
// //   }

// //   throw new Error("❌ Failed to load font data!");
// // }
// // // async function loadGoogleFont() {
// // //   // const url = "https://fonts.gogleapis.com/css2?family=Pacifico&display=swap";
// // //   // const url = "https://fonts.googleapis.com/css2?family=Knewave&display=swap";
// // //   // const url = "https://fonts.gogleapis.com/css2?family=Aclonica&display=swap";

// // //   const url = "https://fonts.googleapis.com/css2?family=Anton+SC&display=swap";

// // //   const css = await (await fetch(url)).text();
// // //   const resource = css.match(
// // //     /src: url\((.+)\) format\('(opentype|truetype)'\)/
// // //   );

// // //   if (resource) {
// // //     const response = await fetch(resource[1]);
// // //     if (response.status == 200) {
// // //       return await response.arrayBuffer();
// // //     }
// // //   }

// // //   throw new Error("failed to load font data");
// // // }

// // async function loadFonts() {
// //   const regularFontData = await fetch(
// //     new URL("./SoinSansPro-Bold.ttf", import.meta.url)
// //   ).then((res) => res.arrayBuffer());

// //   const boldFontData = await fetch(
// //     new URL("./source-sans-pro.black.ttf", import.meta.url)
// //   ).then((res) => res.arrayBuffer());
// //   const lightFontData = await fetch(
// //     new URL("./source-sans-pro.extralight.ttf", import.meta.url)
// //   ).then((res) => res.arrayBuffer());

// //   return { regularFontData, boldFontData, lightFontData };
// // }

// // // const phrases = [
// // //   "The Most Amazing",
// // //   "The Best",
// // //   "Easy & Simple",
// // //   "The Ultimate",
// // //   "Simple & Easy",
// // // ];

// // const phrases = [
// //   "The Most Amazing",
// //   "The Best",
// //   "Easy & Simple",
// //   "The Ultimate",
// //   "Simple & Easy",
// //   "Quick & Easy",
// //   "Super Delicious",
// //   "Really Good",
// //   "Tried & Tested",
// //   "Fast & Easy",
// //   "So Tasty",
// //   "The Greatest",
// //   "Top Rated",
// //   "Most Loved",
// //   "All-Time Favorite",
// //   "Easy & Tasty",
// //   "Highly Recommended",
// //   "Best Ever",
// //   "The Classic",
// //   "Go-To Recipe",
// // ];

// // export async function GET(req: NextRequest) {
// //   const { regularFontData, boldFontData, lightFontData } = await loadFonts();

// //   const { searchParams } = new URL(req.url);
// //   const title = searchParams.get("title") || "Default Title";
// //   // const description = searchParams.get("description") || "Default Description";
// //   const cover = searchParams.get("cover") || "";
// //   const num = searchParams.get("num") || "3";

// //   function getRandomLightColor() {
// //     const r = 150 + Math.floor(Math.random() * 106); // 150–255
// //     const g = 150 + Math.floor(Math.random() * 106);
// //     const b = 150 + Math.floor(Math.random() * 106);
// //     return `rgb(${r}, ${g}, ${b})`;
// //   }

// //   function getRandomDarkColor() {
// //     const r = Math.floor(Math.random() * 100); // 0–99
// //     const g = Math.floor(Math.random() * 100);
// //     const b = Math.floor(Math.random() * 100);
// //     return `rgb(${r}, ${g}, ${b})`;
// //   }

// //   function getRandomFoodEmoji() {
// //     const emojis = [
// //       "🍕",
// //       "🍔",
// //       "🥗",
// //       "🍝",
// //       "🍜",
// //       "🍣",
// //       "🌮",
// //       "🥞",
// //       "🍩",
// //       "🥐",
// //       "🍤",
// //       "🧁",
// //       "🍲",
// //       "🍪",
// //       "🍇",
// //     ];
// //     return emojis[Math.floor(Math.random() * emojis.length)];
// //   }

// //   // function getRandomDarkColor() {
// //   //   const r = Math.floor(Math.random() * 100); // 0–99
// //   //   const g = Math.floor(Math.random() * 100);
// //   //   const b = Math.floor(Math.random() * 100);
// //   //   return `rgb(${r}, ${g}, ${b})`;
// //   // }

// //   // function getRandomLightColor() {
// //   //   const r = 200 + Math.floor(Math.random() * 56); // 200–255
// //   //   const g = 200 + Math.floor(Math.random() * 56);
// //   //   const b = 200 + Math.floor(Math.random() * 56);
// //   //   return `rgb(${r}, ${g}, ${b})`;
// //   // }

// //   const templates = [
// //     <div
// //       key={"1"}
// //       style={{
// //         height: "100vh", // Fixed height for the container
// //         width: "100%",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         justifyContent: "flex-start",
// //         backgroundColor: getRandomDarkColor(),
// //         // backgroundColor: "black",
// //         // backgroundImage: `url(${cover})`,
// //       }}
// //     >
// //       <div
// //         style={{
// //           // height: "200px", // Fixed height for title
// //           // paddingTop: "5px",
// //           // paddingBottom: "25px",
// //           color: getRandomLightColor(),
// //           textAlign: "center",
// //           paddingRight: "10px",
// //           paddingLeft: "10px",
// //           paddingTop: "20px",
// //           paddingBottom: "10px",
// //           fontSize: "120px",
// //           fontWeight: "900",
// //           fontFamily: "headfont1",
// //           textTransform: "uppercase",
// //           lineHeight: "110px", // Adjust this value as needed
// //         }}
// //       >
// //         {phrases[Math.floor(Math.random() * phrases.length)] +
// //           " " +
// //           getRandomFoodEmoji()}
// //       </div>{" "}
// //       <div
// //         style={{
// //           // height: "200px", // Fixed height for title
// //           // paddingTop: "25px",
// //           paddingBottom: "25px",
// //           color: "white",
// //           textAlign: "center",
// //           paddingRight: "10px",
// //           paddingLeft: "10px",
// //           fontSize: "55px",
// //           fontFamily: "titlefont",
// //           textTransform: "capitalize",
// //         }}
// //       >
// //         {DeSlugify(title)}
// //       </div>{" "}
// //       <div
// //         style={{
// //           // height: "60px", // Fixed height for footer text
// //           textAlign: "center",
// //           fontSize: "50px",
// //           color: "black",
// //           paddingRight: "30px",
// //           paddingLeft: "30px",
// //           fontStyle: "normal",
// //           backgroundColor: "#FFFFF7",
// //           fontWeight: 100,
// //           fontFamily: "source-sans-pro.extralight",
// //         }}
// //       >
// //         GuideMyRecipe.com
// //       </div>
// //       <img
// //         src={cover}
// //         alt="test"
// //         height={900}
// //         width={1000}
// //         style={{
// //           flexGrow: 1, // Ensures the image takes available space
// //           width: "100%",
// //           objectFit: "cover",
// //           objectPosition: "center",
// //         }}
// //       />
// //     </div>,
// //   ];

// //   const randomTemplate =
// //     templates[Math.floor(Math.random() * templates.length)];
// //   // const randomTemplate = templates[parseInt(0)];

// //   return new ImageResponse(randomTemplate, {
// //     width: 1000,
// //     height: 2000,
// //     // width: 1000,
// //     // height: 1500,

// //     fonts: [
// //       {
// //         name: "SoinSansPro-Bold",
// //         data: regularFontData,
// //         style: "normal",
// //         // weight: 900,
// //       },
// //       {
// //         name: "source-sans-pro.black",
// //         data: boldFontData,
// //         style: "normal",
// //         // weight: 900,
// //       },
// //       {
// //         name: "source-sans-pro.extralight",
// //         data: lightFontData,
// //         style: "normal",
// //         // weight: 900,
// //       },
// //       {
// //         name: "titlefont",
// //         // data: await loadGoogleFont("Bebas+Neue", 400),
// //         data: await loadGoogleFont("Boldonse", 400),
// //         style: "normal",
// //       },
// //       {
// //         name: "headfont1",

// //         data: await loadGoogleFont(
// //           fonts[Math.floor(Math.random() * fonts.length)],
// //           400
// //         ),
// //         // data: await loadGoogleFont("Londrina+Outline", 400),

// //         style: "normal",
// //       },
// //     ],
// //   });
// // }
// // const fonts = [
// //   "Zen+Tokyo+Zoo",
// //   "Ribeye+Marrow",
// //   "Monoton",
// //   "Kablammo",
// //   "Eater",
// //   "Bungee+Shade",
// //   "Rubik+Vinyl",
// //   "Akronim",
// //   "Rubik+Wet+Paint",
// //   "Sedgwick+Ave+Display",
// //   "Rampart+One",
// //   "Nosifer",
// // ];

// // /////OLD
// import { NextRequest, NextResponse } from "next/server";
// import { ImageResponse } from "@vercel/og";
// import { url } from "inspector";
// import DeSlugify from "@/libs/DeSlugify";
// // import sharp from "sharp";

// export const runtime = "experimental-edge";

// async function loadGoogleFont() {
//   // const url = "https://fonts.gogleapis.com/css2?family=Pacifico&display=swap";
//   // const url = "https://fonts.googleapis.com/css2?family=Knewave&display=swap";
//   // const url = "https://fonts.gogleapis.com/css2?family=Aclonica&display=swap";

//   const url = "https://fonts.googleapis.com/css2?family=Anton+SC&display=swap";

//   const css = await (await fetch(url)).text();
//   const resource = css.match(
//     /src: url\((.+)\) format\('(opentype|truetype)'\)/
//   );

//   if (resource) {
//     const response = await fetch(resource[1]);
//     if (response.status == 200) {
//       return await response.arrayBuffer();
//     }
//   }

//   throw new Error("failed to load font data");
// }

// async function loadFonts() {
//   const regularFontData = await fetch(
//     new URL("./SoinSansPro-Bold.ttf", import.meta.url)
//   ).then((res) => res.arrayBuffer());

//   const boldFontData = await fetch(
//     new URL("./source-sans-pro.black.ttf", import.meta.url)
//   ).then((res) => res.arrayBuffer());
//   const lightFontData = await fetch(
//     new URL("./source-sans-pro.extralight.ttf", import.meta.url)
//   ).then((res) => res.arrayBuffer());

//   return { regularFontData, boldFontData, lightFontData };
// }

// // const phrases = [
// //   "The Most Amazing",
// //   "The Best",
// //   "Easy & Simple",
// //   "The Ultimate",
// //   "Simple & Easy",
// // ];

// const phrases = [
//   "The Most Amazing",
//   "The Best",
//   "Easy & Simple",
//   "The Ultimate",
//   "Simple & Easy",
//   "Quick & Easy",
//   "Super Delicious",
//   "Really Good",
//   "Tried & Tested",
//   "Fast & Easy",
//   "So Tasty",
//   "The Greatest",
//   "Top Rated",
//   "Most Loved",
//   "All-Time Favorite",
//   "Easy & Tasty",
//   "Highly Recommended",
//   "Best Ever",
//   "The Classic",
//   "Go-To Recipe",
// ];

// export async function GET(req: NextRequest) {
//   const { regularFontData, boldFontData, lightFontData } = await loadFonts();

//   const { searchParams } = new URL(req.url);
//   const title = searchParams.get("title") || "Default Title";
//   // const description = searchParams.get("description") || "Default Description";
//   const cover = searchParams.get("cover") || "";
//   const num = searchParams.get("num") || "3";
//   const isWhiteText = Math.random() < 0.5;

//   const theme = {
//     background: isWhiteText ? "black" : "white",
//     text: isWhiteText ? "white" : "black",
//   };
//   const templates = [
//     <div
//       key={"1"}
//       style={{
//         height: "100vh", // Fixed height for the container
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         backgroundColor: theme.background,

//         // backgroundImage: `url(${cover})`,
//       }}
//     >
//       {" "}
//       {/* <div
//         style={{
//           marginTop: "10px",
//           borderBottom: `10px solid ${theme.text}`, // Add bottom border
//           width: "100%",
//         }}
//       ></div> */}
//       <div
//         style={{
//           // height: "200px", // Fixed height for title
//           // paddingTop: "5px",
//           // paddingBottom: "25px",
//           color: theme.text,
//           textAlign: "center",
//           paddingRight: "10px",
//           paddingLeft: "10px",
//           fontSize: "120px",
//           fontWeight: "900",
//           fontFamily: "source-sans-pro.black",
//           textTransform: "uppercase",
//           lineHeight: "100px", // Adjust this value as needed
//           paddingTop: "20px",
//         }}
//       >
//         {phrases[Math.floor(Math.random() * phrases.length)]}
//       </div>{" "}
//       <div
//         style={{
//           // height: "200px", // Fixed height for title
//           // paddingTop: "25px",
//           paddingBottom: "25px",
//           color: theme.text,
//           textAlign: "center",
//           paddingRight: "10px",
//           paddingLeft: "10px",
//           paddingTop: "20px",
//           fontSize: "75px",
//           fontFamily: "SoinSansPro-Bold",
//           textTransform: "capitalize",
//         }}
//       >
//         {DeSlugify(title)}
//       </div>{" "}
//       <div
//         style={{
//           // height: "60px", // Fixed height for footer text
//           textAlign: "center",
//           fontSize: "50px",
//           color: theme.background,
//           paddingRight: "30px",
//           paddingLeft: "30px",
//           fontStyle: "normal",
//           backgroundColor: theme.text,
//           fontWeight: 100,
//           fontFamily: "source-sans-pro.extralight",
//         }}
//       >
//         GuideMyRecipe.com
//       </div>
//       <div
//         style={{
//           // marginTop: "10px",
//           borderBottom: `10px solid ${theme.text}`, // Add bottom border
//           width: "100%",
//         }}
//       ></div>
//       <img
//         src={cover}
//         alt="test"
//         height={900}
//         width={1000}
//         style={{
//           flexGrow: 1, // Ensures the image takes available space
//           width: "100%",
//           objectFit: "cover",
//           objectPosition: "center",
//         }}
//       />
//     </div>,
//   ];

//   const randomTemplate =
//     templates[Math.floor(Math.random() * templates.length)];
//   // const randomTemplate = templates[parseInt(0)];

//   return new ImageResponse(randomTemplate, {
//     width: 1000,
//     height: 2000,
//     // width: 1000,
//     // height: 1500,

//     fonts: [
//       {
//         name: "SoinSansPro-Bold",
//         data: regularFontData,
//         style: "normal",
//         // weight: 900,
//       },
//       {
//         name: "source-sans-pro.black",
//         data: boldFontData,
//         style: "normal",
//         // weight: 900,
//       },
//       {
//         name: "source-sans-pro.extralight",
//         data: lightFontData,
//         style: "normal",
//         // weight: 900,
//       },
//       {
//         name: "Geist",
//         data: await loadGoogleFont(),
//         weight: 500,
//       },
//     ],
//   });
// }
