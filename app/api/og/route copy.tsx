// /////OLD
import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";
import { url } from "inspector";
import DeSlugify from "@/libs/DeSlugify";
// import sharp from "sharp";

export const runtime = "experimental-edge";

async function loadGoogleFont() {
  const url = "https://fonts.googleapis.com/css2?family=Anton+SC&display=swap";

  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

async function loadFonts() {
  const regularFontData = await fetch(
    new URL("./SoinSansPro-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const boldFontData = await fetch(
    new URL("./source-sans-pro.black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const lightFontData = await fetch(
    new URL("./source-sans-pro.extralight.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return { regularFontData, boldFontData, lightFontData };
}

async function loadGoogleFontWithParameter(font: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }
}

const phrases = [
  "The Most Amazing",
  "The Best",
  "Easy & Simple",
  "The Ultimate",
  "Simple & Easy",
  "Quick & Easy",
  "Super Delicious",
  "Really Good",
  "Tried & Tested",
  "Fast & Easy",
  "So Tasty",
  "The Greatest",
  "Top Rated",
  "Most Loved",
  "All-Time Favorite",
  "Easy & Tasty",
  "Highly Recommended",
  "Best Ever",
  "The Classic",
  "Go-To Recipe",
];

export async function GET(req: NextRequest) {
  const { regularFontData, boldFontData, lightFontData } = await loadFonts();

  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Default Title";
  const cover = searchParams.get("cover") || "";
  const num = searchParams.get("num") || "3";
  const isWhiteText = Math.random() < 0.5;

  const theme = {
    background: isWhiteText ? "black" : "white",
    text: isWhiteText ? "white" : "black",
  };
  const templates = [
    <div
      key={"0"}
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: theme.background,
      }}
    >
      {" "}
      <div
        style={{
          color: theme.text,
          textAlign: "center",
          paddingRight: "10px",
          paddingLeft: "10px",
          fontSize: "120px",
          fontWeight: "900",
          fontFamily: "source-sans-pro.black",
          textTransform: "uppercase",
          lineHeight: "100px",
          paddingTop: "20px",
        }}
      >
        {phrases[Math.floor(Math.random() * phrases.length)]}
      </div>{" "}
      <div
        style={{
          paddingBottom: "25px",
          color: theme.text,
          textAlign: "center",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingTop: "20px",
          fontSize: "75px",
          fontFamily: "SoinSansPro-Bold",
          textTransform: "capitalize",
        }}
      >
        {DeSlugify(title)}
      </div>{" "}
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: theme.background,
          paddingRight: "30px",
          paddingLeft: "30px",
          fontStyle: "normal",
          backgroundColor: theme.text,
          fontWeight: 100,
          fontFamily: "source-sans-pro.extralight",
        }}
      >
        GuideMyRecipe.com
      </div>
      <div
        style={{
          borderBottom: `10px solid ${theme.text}`, // Add bottom border
          width: "100%",
        }}
      ></div>
      <img
        src={cover}
        alt="test"
        height={900}
        width={1000}
        style={{
          flexGrow: 1,
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>,
    // New Pinterest-style template
    <div
      key={"1"}
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
          zIndex: 1,
        }}
      />
      <img
        src={cover}
        alt="recipe"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
          gap: "20px",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: "32px",
            fontFamily: "serif",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "100px",
            fontFamily: "SoinSansPro-Bold",
            lineHeight: "1.1",
            textTransform: "capitalize",
          }}
        >
          {DeSlugify(title)}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontFamily: "source-sans-pro.black",
            }}
          >
            S
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "40px",
              fontFamily: "source-sans-pro.extralight",
            }}
          >
            GuideMyRecipe.com
          </div>
        </div>
      </div>
    </div>,
    // New elegant template

    // Pinterest-style OG image inspired by user reference
    <div
      key={"2"}
      style={{
        width: "1000px",
        height: "2000px",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top food image band */}
      <img
        src={cover}
        alt="food-top"
        style={{
          width: "100%",
          height: "800px",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
      {/* Orange band with subtitle and title */}
      <div
        style={{
          width: "100%",
          background: "#F89C1D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "400px",
        }}
      >
        {/* Phrase from phrases array */}
        <div
          style={{
            color: "#fff",
            fontFamily: "LoversQuarrel, Bebas Neue, Anton, Arial, sans-serif",
            fontSize: "60px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "capitalize",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "18px",
            marginTop: "32px",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Main title */}
        <div
          style={{
            color: "#fff",
            fontFamily:
              "Bebas Neue, Anton, SoinSansPro-Bold, Arial, sans-serif",
            fontSize: "90px",
            fontWeight: 900,
            letterSpacing: "3px",
            textAlign: "center",
            textTransform: "uppercase",
            lineHeight: 1.05,
            marginTop: "10px",
          }}
        >
          {DeSlugify(title)}
        </div>
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "800px",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>,

    // New template inspired by biryani reference
    // <div
    //   key={"2"}
    //   style={{
    //     width: "1000px",
    //     height: "2000px",
    //     display: "flex",
    //     flexDirection: "column",
    //     background: "#fff",
    //     position: "relative",
    //     overflow: "hidden",
    //   }}
    // >
    //   {/* Top food image band */}
    //   <img
    //     src={cover}
    //     alt="food-top"
    //     style={{
    //       width: "100%",
    //       height: "900px",
    //       objectFit: "cover",
    //       objectPosition: "center top",
    //       display: "block",
    //     }}
    //   />
    //   {/* White band with three lines of text */}
    //   <div
    //     style={{
    //       width: "100%",
    //       background: "#fff",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       padding: 0,
    //       height: "200px",
    //     }}
    //   >
    //     {/* First line: orange, bold, all caps */}
    //     <div
    //       style={{
    //         color: "#F89C1D",
    //         fontFamily:
    //           "titlefont, Bebas Neue, Anton, SoinSansPro-Bold, Arial, sans-serif",
    //         fontSize: "60px",
    //         fontWeight: 900,
    //         letterSpacing: "2px",
    //         textTransform: "uppercase",
    //         textAlign: "center",
    //         lineHeight: 1.1,
    //       }}
    //     >
    //       {DeSlugify(title)}
    //     </div>
    //     {/* Second line: red, bold, all caps */}
    //     <div
    //       style={{
    //         color: "#D7261E",
    //         fontFamily:
    //           "titlefont, Bebas Neue, Anton, SoinSansPro-Bold, Arial, sans-serif",
    //         fontSize: "60px",
    //         fontWeight: 900,
    //         letterSpacing: "2px",
    //         textTransform: "uppercase",
    //         textAlign: "center",
    //         lineHeight: 1.1,
    //         marginTop: "-8px",
    //       }}
    //     >
    //       {phrases[Math.floor(Math.random() * phrases.length)]}
    //     </div>
    //     {/* Third line: subtitle, black, smaller */}
    //     <div
    //       style={{
    //         color: "#222",
    //         fontFamily: "SoinSansPro-Bold, Arial, sans-serif",
    //         fontSize: "32px",
    //         fontWeight: 700,
    //         textAlign: "center",
    //         marginTop: "8px",
    //         letterSpacing: "0.5px",
    //       }}
    //     >
    //       GuideMyRecipe.com
    //     </div>
    //   </div>
    //   {/* Bottom food image band */}
    //   <img
    //     src={cover}
    //     alt="food-bottom"
    //     style={{
    //       width: "100%",
    //       height: "900px",
    //       objectFit: "cover",
    //       objectPosition: "center bottom",
    //       display: "block",
    //     }}
    //   />
    // </div>,
    // New template inspired by chicken thighs reference
    <div
      key={"3"}
      style={{
        width: "1000px",
        height: "2000px",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top food image band */}
      <img
        src={cover}
        alt="food-top"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
      {/* Teal band with two lines of text and divider */}
      <div
        style={{
          width: "100%",
          background: "#20444A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "250px",
          position: "relative",
        }}
      >
        {/* First line: funky font, large, white */}
        <div
          style={{
            color: "#fff",
            fontFamily:
              "funkyfont, 'Luckiest Guy', 'Permanent Marker', cursive, Arial, sans-serif",
            fontSize: "70px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "-10px",
            marginTop: "10px",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Divider line */}
        <div
          style={{
            width: "80%",
            height: "3px",
            background: "#fff",
            opacity: 0.5,
            margin: "10px 0 10px 0",
            borderRadius: "2px",
          }}
        />
        {/* Second line: bold, all-caps, white */}
        <div
          style={{
            color: "#fff",
            fontFamily:
              "titlefont, Bebas Neue, Anton, SoinSansPro-Bold, Arial, sans-serif",
            fontSize: "54px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.1,
            marginTop: "10px",
          }}
        >
          {DeSlugify(title)}
        </div>
        {/* Small white card for site/brand */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-36px",
            transform: "translateX(-50%)",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            padding: "10px 36px",
            fontFamily: "SoinSansPro-Bold, Arial, sans-serif",
            fontSize: "28px",
            fontWeight: 700,
            color: "#20444A",
            letterSpacing: "1px",
            zIndex: 2,
          }}
        >
          savorytouch.com
        </div>
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "850px",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
    </div>,
    // New template inspired by oats reference
    <div
      key={"4"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* Absolutely positioned background image */}
      <img
        src={cover}
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* Content container above image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Top: Large bold title */}
        <div
          style={{
            marginTop: "80px",
            color: "#fff",
            fontFamily: "oatsfont, Bebas Neue, Arial, sans-serif",
            fontSize: "110px",
            fontWeight: 900,
            letterSpacing: "2px",
            textAlign: "center",
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          {DeSlugify(title)}
        </div>
        {/* Middle: white rounded rectangle with phrase */}
        <div
          style={{
            marginTop: "40px",
            background: "#fff",
            borderRadius: "32px",
            padding: "28px 60px",
            fontFamily: "SoinSansPro-Bold, Arial, sans-serif",
            fontSize: "48px",
            color: "#222",
            fontWeight: 700,
            boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
            textAlign: "center",
            maxWidth: "90%",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Bottom: orange rounded rectangle with another phrase */}
        <div
          style={{
            position: "absolute",
            left: "40px",
            right: "40px",
            bottom: "80px",
            background: "#FFC04D",
            borderRadius: "32px",
            padding: "32px 40px",
            fontFamily:
              "oatstype, 'Special Elite', 'Permanent Marker', Arial, sans-serif",
            fontSize: "54px",
            color: "#222",
            fontWeight: 700,
            textAlign: "center",
            boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
            transform: "rotate(-3deg)",
            zIndex: 2,
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
      </div>
    </div>,
    // New template inspired by butter chicken reference
    <div
      key={"5"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#fff",
      }}
    >
      {/* Top food image band */}
      <img
        src={cover}
        alt="food-top"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
      {/* Black overlay band with three lines of text */}
      <div
        style={{
          width: "100%",
          background: "rgba(0,0,0,0.85)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "320px",
          position: "relative",
        }}
      >
        {/* First line: all-caps, bold sans-serif */}
        <div
          style={{
            color: "#fff",
            fontFamily: "butterfont, Bebas Neue, Arial, sans-serif",
            fontSize: "54px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "10px",
          }}
        >
          HOW TO MAKE THE BEST
        </div>
        {/* Second line: script font, large, white */}
        <div
          style={{
            color: "#fff",
            fontFamily:
              "butterscript, 'Dancing Script', 'Pacifico', cursive, Arial, sans-serif",
            fontSize: "74px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "10px",
            marginTop: "-10px",
          }}
        >
          {DeSlugify(title)}
        </div>
        {/* Third line: all-caps, bold sans-serif, phrase */}
        <div
          style={{
            color: "#fff",
            fontFamily: "butterfont, Bebas Neue, Arial, sans-serif",
            fontSize: "38px",
            fontWeight: 900,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textAlign: "center",
            background: "#111",
            borderRadius: "12px",
            padding: "10px 28px",
            marginTop: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            display: "block",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
    </div>,
    // New template inspired by orange butter chicken reference
    <div
      key={"6"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#fff",
      }}
    >
      {/* Top food image band */}
      <img
        src={cover}
        alt="food-top"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
      {/* Orange band with phrase, title, and site/brand */}
      <div
        style={{
          width: "100%",
          background: "#FFA726",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "260px",
          position: "relative",
        }}
      >
        {/* First line: phrase, handwritten font, large, black */}
        <div
          style={{
            color: "#222",
            fontFamily:
              " 'Caveat', 'Satisfy', 'Pacifico', cursive, Arial, sans-serif",
            fontSize: "54px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "-6px",
            marginTop: "10px",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Second line: title, handwritten font, large, black */}
        <div
          style={{
            color: "#222",
            fontFamily:
              "ogscript, 'Caveat', 'Satisfy', 'Pacifico', cursive, Arial, sans-serif",
            fontSize: "64px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "10px",
            marginTop: "-2px",
          }}
        >
          {DeSlugify(title)}
        </div>
        {/* Third line: green pill-shaped site/brand */}
        {/* <div
          style={{
            background: "#21796A",
            borderRadius: "32px",
            padding: "16px 48px",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "36px",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            display: "block",
          }}
        >
          GuideMyRecipe.com
        </div> */}
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
    </div>,
    // New template inspired by Poulet Yassa reference
    <div
      key={"7"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#fff",
      }}
    >
      {/* Top white band with phrase, title, and subtitle */}
      <div
        style={{
          width: "100%",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "420px",
          position: "relative",
        }}
      >
        {/* First line: phrase, blue, bold, all-caps */}
        <div
          style={{
            color: "#3B5A7A",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "80px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "-18px",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Second line: title, black, bold, outlined, all-caps */}
        <div
          style={{
            color: "#111",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "110px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            textShadow:
              "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000",
            marginBottom: "-10px",
            marginTop: "-10px",
          }}
        >
          {DeSlugify(title)}
        </div>
        {/* Third line: subtitle, white, all-caps, on blue bar */}
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "1400px",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
      {/* Bottom black pill-shaped site/brand */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "48px",
          transform: "translateX(-50%)",
          background: "#111",
          borderRadius: "32px",
          padding: "18px 64px",
          fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
          fontSize: "38px",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "2px",
          textTransform: "uppercase",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          display: "block",
        }}
      >
        GuideMyRecipe.com
      </div>
    </div>,
    // New template inspired by Butter Chicken reference
    <div
      key={"8"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#fff",
      }}
    >
      {/* Top food image band */}
      <img
        src={cover}
        alt="food-top"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
      {/* White band with blue banner, title, and site/brand */}
      <div
        style={{
          width: "100%",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "360px",
          position: "relative",
        }}
      >
        {/* Blue banner with phrase, handwritten font */}
        <div
          style={{
            background: "#3BB3D6",
            borderRadius: "0 0 32px 32px",
            padding: "22px 72px 14px 72px",
            fontFamily:
              "ogscript, 'Caveat', 'Pacifico', cursive, Arial, sans-serif",
            fontSize: "54px",
            fontWeight: 700,
            color: "#222",
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            display: "block",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Large bold title */}
        <div
          style={{
            color: "#2180A0",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "110px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "24px",
            wordBreak: "break-word",
            lineHeight: 1.05,
          }}
        >
          {DeSlugify(title)}
        </div>
        {/* Site/brand moved to bottom */}
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
      {/* Bottom black pill-shaped site/brand */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "48px",
          transform: "translateX(-50%)",
          background: "#111",
          borderRadius: "32px",
          padding: "18px 64px",
          fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
          fontSize: "38px",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "2px",
          textTransform: "uppercase",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          display: "block",
        }}
      >
        GuideMyRecipe.com
      </div>
    </div>,
    // New template inspired by Mongolian Chicken reference
    <div
      key={"9"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#fff",
      }}
    >
      {/* Top teal band with dotted border, title, divider, and phrase/site */}
      <div
        style={{
          width: "100%",
          background: "#2A8C8C",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "420px",
          position: "relative",
          borderTop: "12px dashed #fff",
          borderLeft: "12px dashed #fff",
          borderRight: "12px dashed #fff",
          borderBottom: "12px dashed #fff",
        }}
      >
        {/* Large bold title */}
        <div
          style={{
            color: "#fff",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "90px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "18px",
          }}
        >
          {DeSlugify(title)}
        </div>
        {/* Gold divider */}
        <div
          style={{
            width: "80%",
            height: "6px",
            background: "#E6C15B",
            borderRadius: "3px",
            margin: "0 0 18px 0",
          }}
        />
        {/* Phrase or site/brand, white, smaller */}
        <div
          style={{
            color: "#fff",
            fontFamily: "butterscript, Bebas Neue, Arial, sans-serif",
            fontSize: "38px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "0px",
            letterSpacing: "1px",
          }}
        >
          www.GuideMyRecipe.com
        </div>
        {/* Decorative lines */}
        <div
          style={{
            width: "80%",
            height: "6px",
            background: "#E6C15B",
            borderRadius: "3px",
            margin: "18px 0 0 0",
          }}
        />
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "1580px",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
    </div>,
    // New template inspired by Chinese Chicken & Broccoli reference
    <div
      key={"10"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#222",
      }}
    >
      {/* Full background food image */}
      <img
        src={cover}
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* Top overlay with phrase and title */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%",
          margin: "70px auto 0 auto",
          background: "rgba(0,0,0,0.75)",
          borderRadius: "36px",
          padding: "48px 32px 36px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
        }}
      >
        {/* Phrase: bold, yellow-green, all-caps */}
        <div
          style={{
            color: "#B6E23A",
            fontFamily: "butterscript, Bebas Neue, Arial, sans-serif",
            fontSize: "64px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "capitalize",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.1,
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Title: bold, white, all-caps */}
        <div
          style={{
            color: "#fff",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "72px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {DeSlugify(title)}
        </div>
      </div>
      {/* Website name at the bottom */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "48px",
          transform: "translateX(-50%)",
          color: "#fff",
          fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
          fontSize: "38px",
          fontWeight: 900,
          letterSpacing: "2px",
          textTransform: "lowercase",
          textAlign: "center",
          textShadow: "0 2px 8px rgba(0,0,0,0.25)",
          zIndex: 3,
        }}
      >
        www.GuideMyRecipe.com
      </div>
    </div>,
    // New template inspired by Szechuan Chicken reference
    <div
      key={"11"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#222",
      }}
    >
      {/* Full background food image */}
      <img
        src={cover}
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* Centered black rounded rectangle with title */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%",
          margin: "900px auto 0 auto",
          background: "#111",
          borderRadius: "32px",
          padding: "48px 32px 36px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
        }}
      >
        {/* Phrase: handwriting font, white */}
        <div
          style={{
            color: "#fff",
            fontFamily:
              "ogscript, 'Caveat', 'Pacifico', cursive, Arial, sans-serif",
            fontSize: "48px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "12px",
            lineHeight: 1.1,
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
        {/* Title: bold, white, all-caps */}
        <div
          style={{
            color: "#fff",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "80px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {DeSlugify(title)}
        </div>
      </div>
      {/* Website name in pill-shaped black bar below */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          margin: "32px auto 0 auto",
          background: "#111",
          borderRadius: "32px",
          padding: "18px 64px",
          fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
          fontSize: "38px",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "2px",
          textTransform: "lowercase",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          display: "block",
        }}
      >
        www.GuideMyRecipe.com
      </div>
    </div>,
    // New template inspired by Crispy Honey Chilli Chicken reference
    <div
      key={"12"}
      style={{
        width: "1000px",
        height: "2000px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#fff",
      }}
    >
      {/* Top brown band with script font for phrase */}
      <div
        style={{
          width: "100%",
          background: "#6B3B1A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "160px",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontFamily:
              "ogscript, 'Caveat', 'Pacifico', cursive, Arial, sans-serif",
            fontSize: "70px",
            fontWeight: 700,
            textAlign: "center",
            marginTop: "24px",
            marginBottom: "0px",
            lineHeight: 1.1,
            letterSpacing: "2px",
          }}
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
      </div>
      {/* White band with bold orange and brown title */}
      <div
        style={{
          width: "100%",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          height: "180px",
        }}
      >
        {/* Orange part of title */}
        <div
          style={{
            color: "#C75A1B",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "70px",
            fontWeight: 900,
            letterSpacing: "4px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "-10px",
            lineHeight: 1.1,
          }}
        >
          {DeSlugify(title).split(" ").slice(0, 2).join(" ")}
        </div>
        {/* Brown part of title */}
        <div
          style={{
            color: "#6B3B1A",
            fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
            fontSize: "70px",
            fontWeight: 900,
            letterSpacing: "4px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "0px",
            lineHeight: 1.1,
          }}
        >
          {DeSlugify(title).split(" ").slice(2).join(" ")}
        </div>
      </div>
      {/* Bottom food image band */}
      <img
        src={cover}
        alt="food-bottom"
        style={{
          width: "100%",
          height: "1500px",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
      {/* Website name at the bottom */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "48px",
          transform: "translateX(-50%)",
          color: "#6B3B1A",
          fontFamily: "ogfont, Bebas Neue, Arial, sans-serif",
          fontSize: "38px",
          fontWeight: 900,
          letterSpacing: "2px",
          textTransform: "lowercase",
          textAlign: "center",
          textShadow: "0 2px 8px rgba(0,0,0,0.10)",
          zIndex: 3,
        }}
      >
        www.GuideMyRecipe.com
      </div>
    </div>,
  ];

  const randomTemplate =
    templates[Math.floor(Math.random() * templates.length)];
  // const randomTemplate = templates[templates.length - 1];
  // const randomTemplate = templates[12];

  return new ImageResponse(randomTemplate, {
    width: 1000,
    height: 2000,

    fonts: [
      {
        name: "SoinSansPro-Bold",
        data: regularFontData,
        style: "normal",
        // weight: 900,
      },
      {
        name: "source-sans-pro.black",
        data: boldFontData,
        style: "normal",
        // weight: 900,
      },
      {
        name: "source-sans-pro.extralight",
        data: lightFontData,
        style: "normal",
        // weight: 900,
      },
      {
        name: "Geist",
        data: await loadGoogleFont(),
        weight: 500,
      },
      {
        name: "titlefont",
        data:
          (await loadGoogleFontWithParameter("Bebas+Neue", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "butterfont",
        data:
          (await loadGoogleFontWithParameter("Bebas+Neue", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "butterscript",
        data:
          (await loadGoogleFontWithParameter("Dancing+Script", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "ogfont",
        data:
          (await loadGoogleFontWithParameter("Bebas+Neue", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "ogscript",
        data:
          (await loadGoogleFontWithParameter("Pacifico", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "lavishly",
        data:
          (await loadGoogleFontWithParameter("Lavishly+Yours", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "LoversQuarrel",
        data:
          (await loadGoogleFontWithParameter("Lovers+Quarrel", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
    ],
  });
}
