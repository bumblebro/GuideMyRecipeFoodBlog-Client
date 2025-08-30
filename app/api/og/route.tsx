// /////OLD
import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";
import { url } from "inspector";
import DeSlugify from "@/libs/DeSlugify";
import { validateProxiedImage } from "@/libs/validateImage";
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

async function loadGoogleFontWithParameter(font: string, weight = 400) {
  // keep it small by limiting glyphs you need (optional)
  const cssUrl = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`;

  const css = await (await fetch(cssUrl)).text();

  // Prefer woff2; fallback to first url(...) if format isn’t present
  const woff2 = css.match(/src:\s*url\((https:[^)]+)\)\s*format\('woff2'\)/);
  const anyUrl = css.match(/url\((https:[^)]+)\)/);

  const fileUrl = woff2?.[1] ?? anyUrl?.[1];
  if (!fileUrl) throw new Error(`Could not find font file for ${font}`);

  const res = await fetch(fileUrl);
  if (!res.ok) throw new Error(`Failed to fetch font file: ${fileUrl}`);

  return await res.arrayBuffer();
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

  // try {
  //   await assertRenderableImage(cover); // throws on WebP/AVIF/etc.
  // } catch (e: any) {
  //   // Don’t render — return a clear error instead of a black image.
  //   return json(
  //     e.message?.includes("Unsupported") ? 415 : 502,
  //     e.message || "Probe failed"
  //   );
  // }

  const proxied = `${
    process.env.NEXT_PUBLIC_BASE_API_URL
  }/api/proxy-image?url=${encodeURIComponent(cover)}`;

  console.log(`proxied cover image:`, proxied);

  try {
    await validateProxiedImage(proxied);
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 415,
      headers: { "Content-Type": "application/json" },
    });
  }

  const templates = [
    (() => {
      const fullTitle = DeSlugify(title).toUpperCase();
      const tag = (searchParams.get("tag") || "SINGLE").toUpperCase();
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      return (
        <div
          key={"banana-cupcake-pin"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex", // <— multiple children (img, panel, img, pill)
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "840px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Middle brown panel */}
          <div
            style={{
              width: "100%",
              background: "#6b4a36",
              borderTop: "8px solid #4b2f22",
              borderBottom: "8px solid #4b2f22",
              padding: "72px 40px 64px",
              position: "relative",
              display: "flex", // <— holds tag container + title wrapper
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Overlapping ticket tag */}
            <div
              style={{
                position: "absolute",
                top: "-36px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex", // <— ensure explicit
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "6px solid #6b4a36",
                  padding: "10px 30px",
                  display: "flex", // <— wrapper around span
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "cupTagSerif",
                    fontSize: "46px",
                    letterSpacing: "2px",
                    color: "#6b4a36",
                  }}
                >
                  {tag}
                </span>
              </div>
            </div>

            {/* Giant title */}
            <div
              style={{
                display: "flex", // <— container for title block
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "92%",
              }}
            >
              <div
                style={{
                  fontFamily: "cupBlock",
                  fontSize: "98px",
                  lineHeight: 1.08,
                  color: "#f7d7b8",
                  textTransform: "uppercase",
                  textAlign: "center",
                  wordBreak: "break-word",
                  textShadow:
                    "0 4px 0 #3b2519, 2px 0 0 #3b2519, -2px 0 0 #3b2519, 0 -2px 0 #3b2519",
                }}
              >
                {fullTitle}
              </div>
            </div>
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "840px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#ffffff",
              border: "4px solid #000000",
              borderRadius: "26px",
              padding: "14px 38px",
              display: "flex", // <— explicit
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "cupSans",
                fontSize: "40px",
                letterSpacing: "1px",
                color: "#000000",
              }}
            >
              {site}
            </span>
          </div>
        </div>
      );
    })(),
    (() => {
      const words = DeSlugify(title).trim().split(/\s+/);
      const topTag = words.slice(0, 2).join(" ").toUpperCase(); // e.g., AIR FRYER
      const big = words.slice(2).join(" ").toUpperCase() || "DUCK BREAST";
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      return (
        <div
          key={"airfryer-duck-breast"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* White title zone */}
          <div
            style={{
              width: "100%",
              background: "#ffffff",
              padding: "40px 36px 28px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "26px",
              borderTop: "10px solid #a55328",
              borderBottom: "10px solid #a55328",
            }}
          >
            {/* Brown tag bar */}
            <div
              style={{
                width: "100%",
                maxWidth: "900px",
                background: "#a55328",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "airTag",
                  fontSize: "72px",
                  color: "#ffffff",
                  letterSpacing: "2px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  textShadow: "0 3px 0 rgba(0,0,0,0.25)",
                }}
              >
                {topTag}
              </div>
            </div>

            {/* Giant green title */}
            <div
              style={{
                fontFamily: "duckTitle",
                fontSize: "170px",
                lineHeight: 1.02,
                color: "#5B8E2D",
                textAlign: "center",
                letterSpacing: "2px",
                maxWidth: "940px",
                wordBreak: "break-word",
                textTransform: "uppercase",
                display: "flex", // OG requires flex for multi-child checks
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {big}
            </div>
          </div>
          {/* Food image */}
          <img
            src={proxied}
            alt="dish"
            style={{
              width: "100%",
              height: "1230px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 120, // pull it safely away from the canvas edge
              display: "flex",
              justifyContent: "center",
              zIndex: 100, // ensure above the photo
            }}
          >
            {/* The pill */}
            <div
              style={{
                display: "flex", // OG requires flex for multi-child nodes
                alignItems: "center",
                background: "#ffffff",
                height: 80, // fixed height → perfect ends
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40, // 1/2 height → fully rounded
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden", // hides any glyph bleed
                maxWidth: "90%", // avoids touching the canvas edge
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {(
                  searchParams.get("website") || "GuideMyRecipe.COM"
                ).toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // Title parsing:
      // 1st word → green pill (e.g., KETO)
      // last word "recipe" (case-insensitive) → subTitle
      const words = DeSlugify(title).trim().split(/\s+/);
      const pill = (words.shift() || "KETO").toUpperCase();
      let subTitle = "";
      if (words.length && words[words.length - 1].toLowerCase() === "recipe") {
        subTitle = "RECIPE";
        words.pop();
      }
      const mainTitle = (words.join(" ") || "MEATLOAF").toUpperCase();

      return (
        <div
          key={"keto-meatloaf-pin"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* White band with pill + titles */}
          <div
            style={{
              width: "100%",
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "34px 36px 24px",
              gap: "18px",
              borderTop: "8px solid #b95d2f",
              borderBottom: "8px solid #b95d2f",
            }}
          >
            {/* Green pill */}
            <div
              style={{
                background: "#6C9332",
                borderRadius: "20px",
                padding: "10px 28px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "meatloafSans",
                  fontSize: "64px",
                  color: "#ffffff",
                  letterSpacing: "2px",
                }}
              >
                {pill}
              </span>
            </div>

            {/* Big outlined MEATLOAF */}
            <div
              style={{
                fontFamily: "meatloafCartoon",
                fontSize: "170px",
                color: "#D79466", // tan fill
                textTransform: "uppercase",
                lineHeight: 1.0,
                textAlign: "center",
                maxWidth: "940px",
                wordBreak: "break-word",
                // heavy black outline
                textShadow:
                  "0 6px 0 #000, 0 -6px 0 #000, 6px 0 0 #000, -6px 0 0 #000, 4px 4px 0 #000, -4px 4px 0 #000, 4px -4px 0 #000, -4px -4px 0 #000, 2px 6px 0 #000, -2px 6px 0 #000",
              }}
            >
              {mainTitle}
            </div>

            {/* RECIPE (bold sans) */}
            {!!subTitle && (
              <div
                style={{
                  fontFamily: "meatloafSans",
                  fontSize: "110px",
                  color: "#5B4033",
                  letterSpacing: "3px",
                  lineHeight: 1.0,
                  textAlign: "center",
                }}
              >
                {subTitle}
              </div>
            )}
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "960px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill (robust centering, rounded both ends) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 120, // safe from canvas edge
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ffffff",
                height: 80,
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000000",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // Title parsing: first word => pill, last word => black line, middle => red line
      const parts = DeSlugify(title).trim().split(/\s+/);
      const pill = (parts.shift() || "KETO").toUpperCase();
      const tail = (parts.pop() || "MOUSSE").toUpperCase();
      const middle = (parts.join(" ") || "STRAWBERRY").toUpperCase();

      return (
        <div
          key={"strawberry-mousse-card"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "900px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Center white card */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "0 40px",
              marginTop: "-80px", // overlap the top image a bit
              marginBottom: "-40px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "48px",
                padding: "38px 48px",
                width: "100%",
                maxWidth: "820px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "18px",
              }}
            >
              {/* Red brushed 'KETO' stamp (approx with rounded rect) */}
              <div
                style={{
                  background: "#B24841",
                  borderRadius: "12px",
                  padding: "10px 28px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "ketoSans",
                    fontSize: "64px",
                    color: "#ffffff",
                    letterSpacing: "2px",
                  }}
                >
                  {pill}
                </span>
              </div>

              {/* STRAWBERRY (tall condensed, red) */}
              <div
                style={{
                  fontFamily: "strawberryCondensed",
                  fontSize: "140px",
                  color: "#B24841",
                  letterSpacing: "2px",
                  lineHeight: 1,
                  textAlign: "center",
                  maxWidth: "100%",
                  wordBreak: "break-word",
                }}
              >
                {middle}
              </div>

              {/* MOUSSE (bold black) */}
              <div
                style={{
                  fontFamily: "mousseSans",
                  fontSize: "140px",
                  color: "#111111",
                  letterSpacing: "2px",
                  lineHeight: 1,
                  textAlign: "center",
                  maxWidth: "100%",
                  wordBreak: "break-word",
                }}
              >
                {tail}
              </div>
            </div>
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "920px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill (robust centering) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 120,
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ffffff",
                height: 80,
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000000",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // Colors close to your reference
      const scallop = "#E6A95D"; // tan
      const outline = "#6B3F26"; // brown
      const soupFill = "#D9C150"; // golden

      const scallops = Array.from({ length: 14 }); // for 1000px width

      // Title pieces
      const raw = DeSlugify(title).trim();
      // Default to "COW FOOT SOUP (COW HEEL SOUP)" style
      const mainUpper = raw || "Cow Foot Soup (Cow Heel Soup)";
      const mainWords = mainUpper
        .replace(/\(.*\)$/i, "")
        .trim()
        .split(/\s+/);
      const subtitleMatch = mainUpper.match(/\((.+)\)/i);
      const subtitle = (
        subtitleMatch ? subtitleMatch[0] : "(COW HEEL SOUP)"
      ).toUpperCase();

      // Build "COW FOOT" and "SOUP"
      const hasSoup = mainWords.slice(-1)[0].toLowerCase() === "soup";
      const soupWord = hasSoup ? "SOUP" : "SOUP";
      const topWords = (hasSoup ? mainWords.slice(0, -1) : mainWords)
        .join(" ")
        .toUpperCase();

      return (
        <div
          key={"cow-foot-soup"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Title band with scallops */}
          <div
            style={{
              width: "100%",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 24px 24px",
            }}
          >
            {/* Top scallops */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: "-44px",
                marginBottom: "8px",
              }}
            >
              {scallops.map((_, i) => (
                <div
                  key={`top-scallop-${i}`}
                  style={{
                    width: "90px",
                    height: "45px",
                    background: scallop,
                    borderTopLeftRadius: "90px",
                    borderTopRightRadius: "90px",
                    border: `6px solid ${outline}`,
                    borderBottom: "0",
                  }}
                />
              ))}
            </div>

            {/* "COW FOOT" */}
            <div
              style={{
                fontFamily: "cowSans",
                fontSize: "110px",
                color: outline,
                lineHeight: 1.0,
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              {topWords}
            </div>

            {/* "SOUP" big with outline
            <div
              style={{
                fontFamily: "cowRound",
                fontSize: "200px",
                color: soupFill,
                lineHeight: 1.0,
                textAlign: "center",
                letterSpacing: "2px",
                // heavy brown outline around letters
                textShadow: `0 6px 0 ${outline}, 0 -6px 0 ${outline}, 6px 0 0 ${outline}, -6px 0 0 ${outline}, 4px 4px 0 ${outline}, -4px 4px 0 ${outline}, 4px -4px 0 ${outline}, -4px -4px 0 ${outline}`,
              }}
            >
              {soupWord}
            </div> */}

            {/* "(COW HEEL SOUP)"
            <div
              style={{
                fontFamily: "cowSans",
                fontSize: "70px",
                color: outline,
                lineHeight: 1.0,
                letterSpacing: "2px",
                textAlign: "center",
                marginTop: "6px",
              }}
            >
              {subtitle}
            </div> */}

            {/* Bottom scallops */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "10px",
                marginBottom: "-44px",
              }}
            >
              {scallops.map((_, i) => (
                <div
                  key={`bottom-scallop-${i}`}
                  style={{
                    width: "90px",
                    height: "45px",
                    background: scallop,
                    borderBottomLeftRadius: "90px",
                    borderBottomRightRadius: "90px",
                    border: `6px solid ${outline}`,
                    borderTop: "0",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "940px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill (robust, fully rounded) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 120,
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ffffff",
                height: 80,
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000000",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      // dynamic website (optional)
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // split title into script and block text
      const parts = DeSlugify(title).trim().split(/\s+/);
      let scriptText = parts.slice(0, 2).join(" "); // e.g. "Air Fryer"
      let blockText = parts.slice(2).join(" ") || ""; // e.g. "Cornish Hen"
      if (!blockText) {
        // fallback when title is shorter
        scriptText = parts[0] || "";
        blockText = parts.slice(1).join(" ") || "";
      }

      return (
        <div
          key={"air-fryer-cornish-hen"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Ribbon with triangles and text */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-80px",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#F6A94A",
                borderRadius: "12px",
                padding: "36px 80px",
              }}
            >
              {/* Left triangle */}
              <div
                style={{
                  position: "absolute",
                  left: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 0,
                  height: 0,
                  borderTop: "40px solid transparent",
                  borderBottom: "40px solid transparent",
                  borderRight: "60px solid #F6A94A",
                }}
              />
              {/* Right triangle */}
              <div
                style={{
                  position: "absolute",
                  right: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 0,
                  height: 0,
                  borderTop: "40px solid transparent",
                  borderBottom: "40px solid transparent",
                  borderLeft: "60px solid #F6A94A",
                }}
              />
              {/* Script line (e.g. Air Fryer) */}
              <div
                style={{
                  fontFamily: "henScript",
                  fontSize: "150px",
                  color: "#ffffff",
                  textAlign: "center",
                  letterSpacing: "2px",
                  textShadow:
                    "0 4px 0 #000, 2px 0 0 #000, -2px 0 0 #000, 0 -2px 0 #000",
                }}
              >
                {scriptText}
              </div>

              {/* Block badge (e.g. Cornish Hen) */}
              {blockText && (
                <div
                  style={{
                    backgroundColor: "#000000",
                    border: "10px solid #ffffff",
                    borderRadius: "12px",
                    padding: "12px 32px",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "henBlock",
                      fontSize: "160px",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "4px",
                      lineHeight: 0.8,
                    }}
                  >
                    {blockText}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 100,
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                height: "80px",
                paddingLeft: "44px",
                paddingRight: "44px",
                borderRadius: "40px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "henSans",
                  fontSize: "40px",
                  color: "#000000",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // Split the title: first word on its own; remainder together
      const tokens = DeSlugify(title).trim().split(/\s+/);
      const firstWord = tokens.shift() || "";
      const restText = tokens.join(" ") || "";

      return (
        <div
          key={"cupcake-banana"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "880px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Middle text section with dashed borders */}
          <div
            style={{
              width: "100%",
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Top dashed line */}
            <div
              style={{
                width: "100%",
                height: 0,
                borderTop: "6px dashed #000000",
                marginBottom: 24,
              }}
            />

            {/* Small serif heading (e.g., SINGLE) */}
            {firstWord && (
              <div
                style={{
                  fontFamily: "cupSerif",
                  fontSize: 128,
                  color: "#000000",
                  textAlign: "center",
                  letterSpacing: "2px",
                }}
              >
                {firstWord.toUpperCase()}
              </div>
            )}

            {/* Large golden block text */}
            {restText && (
              <div
                style={{
                  fontFamily: "cupBlock",
                  fontSize: 160,
                  color: "#D9A44F",
                  textAlign: "center",
                  lineHeight: 0.92,
                  letterSpacing: "3px",
                  maxWidth: "100%",
                  wordBreak: "break-word",
                  textShadow:
                    "0 6px 0 #5B3A1C, 0 -6px 0 #5B3A1C, 6px 0 0 #5B3A1C, -6px 0 0 #5B3A1C, 4px 4px 0 #5B3A1C, -4px 4px 0 #5B3A1C, 4px -4px 0 #5B3A1C, -4px -4px 0 #5B3A1C",
                }}
              >
                {restText.toUpperCase()}
              </div>
            )}

            {/* Bottom dashed line */}
            <div
              style={{
                width: "100%",
                height: 0,
                borderTop: "6px dashed #000000",
                marginTop: 24,
              }}
            />
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "880px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill (centered and rounded) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 10,
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                height: 80,
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000000",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // Split title: first two words → label, rest → big text
      const tokens = DeSlugify(title).trim().split(/\s+/);
      let labelText = tokens.slice(0, 2).join(" "); // e.g. "Egg Stew"
      let bigText = tokens.slice(2).join(" ");
      if (!bigText) {
        // fallback if title has only one or two words
        labelText = tokens[0] || "";
        bigText = tokens.slice(1).join(" ") || tokens[0] || "";
      }

      return (
        <div
          key={"egg-stew-inspire"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Central panel for label and title */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "0 40px",
              marginTop: "-60px", // slightly overlaps top image
              marginBottom: "-40px",
            }}
          >
            <div
              style={{
                position: "relative",
                background: "#ffffff",
                borderRadius: "24px",
                padding: "60px 40px 80px",
                width: "100%",
                maxWidth: "900px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Brown label */}
              <div
                style={{
                  background: "#C76B2C",
                  borderRadius: "12px",
                  padding: "20px 60px",
                  transform: "rotate(-5deg)",
                  fontFamily: "eggLabel",
                  fontSize: 90,
                  color: "#FFFFFF",
                  letterSpacing: 2,
                  marginBottom: "-50px",
                  textTransform: "uppercase",
                }}
              >
                {labelText}
              </div>

              {/* Large distressed headline */}
              <div
                style={{
                  fontFamily: "eggBig",
                  fontSize: 160,
                  color: "#1F2A4C",
                  letterSpacing: 3,
                  lineHeight: 1.0,
                  textAlign: "center",
                  textTransform: "uppercase",
                  maxWidth: "100%",
                  wordBreak: "break-word",
                  marginTop: "60px",
                }}
              >
                {bigText}
              </div>
            </div>
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ffffff",
                height: 80,
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000000",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // Split title: first two words → tagline; rest → main headline
      const tokens = DeSlugify(title).trim().split(/\s+/);
      let taglineText = tokens.slice(0, 2).join(" ");
      let mainText = tokens.slice(2).join(" ");
      if (!mainText) {
        taglineText = tokens[0] || "";
        mainText = tokens.slice(1).join(" ") || tokens[0] || "";
      }

      return (
        <div
          key={"fresh-layout"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Overlapping card */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "0 40px",
              marginTop: "-80px",
              marginBottom: "-80px",
            }}
          >
            <div
              style={{
                position: "relative",
                background: "#ffffff",
                borderRadius: "24px",
                padding: "80px 60px 100px",
                width: "100%",
                maxWidth: "900px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Tagline (first two words) */}
              <div
                style={{
                  fontFamily: "newTagline",
                  fontSize: 90,
                  color: "#E98B34",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {taglineText}
              </div>

              {/* Main headline (remaining words) */}
              <div
                style={{
                  fontFamily: "newTitle",
                  fontSize: 170,
                  color: "#1C2C55",
                  lineHeight: 0.95,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  maxWidth: "100%",
                  wordBreak: "break-word",
                }}
              >
                {mainText}
              </div>
            </div>
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 120,
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ffffff",
                height: 80,
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000000",
                  letterSpacing: 1,
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
    (() => {
      const site = (
        searchParams.get("website") || "GuideMyRecipe.COM"
      ).toUpperCase();

      // Split title: first two words → script tagline; rest → main headline
      const tokens = DeSlugify(title).trim().split(/\s+/);
      let scriptText = tokens.slice(0, 2).join(" ");
      let mainText = tokens.slice(2).join(" ");
      if (!mainText) {
        scriptText = tokens[0] || "";
        mainText = tokens.slice(1).join(" ") || tokens[0] || "";
      }

      return (
        <div
          key={"warm-banner-layout"}
          style={{
            width: "1000px",
            height: "2000px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top image */}
          <img
            src={proxied}
            alt="top"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Central colored banner */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#F5C67A",
              borderTop: "6px dashed #DFA040",
              borderBottom: "6px dashed #DFA040",
              padding: "60px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Script tagline */}
            <div
              style={{
                fontFamily: "newScript",
                fontSize: 120,
                color: "#ffffff",
                letterSpacing: 2,
                textTransform: "capitalize",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              {scriptText}
            </div>

            {/* Bold block headline */}
            <div
              style={{
                fontFamily: "newMain",
                fontSize: 170,
                color: "#3E3E3E",
                letterSpacing: 3,
                textTransform: "uppercase",
                lineHeight: 1.0,
                textAlign: "center",
                maxWidth: "100%",
                wordBreak: "break-word",
              }}
            >
              {mainText}
            </div>
          </div>

          {/* Bottom image */}
          <img
            src={proxied}
            alt="bottom"
            style={{
              width: "100%",
              height: "860px",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
          />

          {/* Website pill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 20,
              display: "flex",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                height: 80,
                paddingLeft: 44,
                paddingRight: 44,
                borderRadius: 40,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                overflow: "hidden",
                maxWidth: "90%",
              }}
            >
              <span
                style={{
                  fontFamily: "siteSans",
                  fontSize: 40,
                  color: "#000000",
                  letterSpacing: 1,
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {site}
              </span>
            </div>
          </div>
        </div>
      );
    })(),
  ];

  const randomTemplate =
    templates[Math.floor(Math.random() * templates.length)];

  return new ImageResponse(randomTemplate, {
    width: 1000,
    height: 2000,

    fonts: [
      {
        name: "newScript", // script tagline (e.g., first two words)
        data:
          (await loadGoogleFontWithParameter("Lobster", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "newMain", // bold block headline
        data:
          (await loadGoogleFontWithParameter("Archivo+Black", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Nunito", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "newTagline", // tagline (first two words)
        data:
          (await loadGoogleFontWithParameter("Poppins", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "newTitle", // main headline (remaining words)
        data:
          (await loadGoogleFontWithParameter("Oswald", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "eggLabel", // Brown label: bold sans serif
        data:
          (await loadGoogleFontWithParameter("Montserrat", 800)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "eggBig", // Large distressed headline
        data:
          (await loadGoogleFontWithParameter("Rubik+Dirt", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // Website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "cupSerif", // small serif heading
        data:
          (await loadGoogleFontWithParameter("Cinzel", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "cupBlock", // large golden block text
        data:
          (await loadGoogleFontWithParameter("Titan+One", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "henScript", // script line, e.g. "Air Fryer"
        data:
          (await loadGoogleFontWithParameter("Lobster", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "henBlock", // block line, e.g. "Cornish Hen"
        data:
          (await loadGoogleFontWithParameter("Bebas+Neue", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "henSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "cowRound", // big "SOUP"
        data:
          (await loadGoogleFontWithParameter("Titan+One", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "cowSans", // "COW FOOT" and subtitle
        data:
          (await loadGoogleFontWithParameter("Montserrat", 800)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "ketoSans", // 'KETO' stamp
        data:
          (await loadGoogleFontWithParameter("Montserrat", 800)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "strawberryCondensed", // STRAWBERRY
        data:
          (await loadGoogleFontWithParameter("Bebas+Neue", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "mousseSans", // MOUSSE
        data:
          (await loadGoogleFontWithParameter("Archivo+Black", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "meatloafCartoon", // big outlined MEATLOAF
        data:
          (await loadGoogleFontWithParameter("Luckiest+Guy", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "meatloafSans", // KETO pill + RECIPE
        data:
          (await loadGoogleFontWithParameter("Montserrat", 800)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // website chip
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "duckTitle", // big green "DUCK BREAST"
        data:
          (await loadGoogleFontWithParameter("Fredoka", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "airTag", // white "AIR FRYER" on brown bar
        data:
          (await loadGoogleFontWithParameter("Montserrat", 800)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "siteSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "cupBlock", // big chunky title
        data:
          (await loadGoogleFontWithParameter("Bungee", 400)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "cupTagSerif", // small ticket tag
        data:
          (await loadGoogleFontWithParameter("Cinzel", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
      {
        name: "cupSans", // website pill
        data:
          (await loadGoogleFontWithParameter("Montserrat", 700)) ||
          new ArrayBuffer(0),
        style: "normal",
      },
    ],
  });
}
