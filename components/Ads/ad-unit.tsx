import React, { ReactNode, Suspense } from "react";
import { Card } from "./card";
import AdUnitClient from "./ad-unit-client";

type Props = {
  children: ReactNode;
};

const isProduction = process.env.NODE_ENV === "production";

const AdUnit = ({ children }: Props) => {
  return (
    <Suspense>
      {isProduction ? <AdUnitClient>{children}</AdUnitClient> : <>{children}</>}
    </Suspense>
  );
};

export default AdUnit;

export function InArticleAd({ className }: { className?: string }) {
  return (
    <div className={className}>
      <AdUnit>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          // data-ad-client="ca-pub-5012580427673167"
          // data-ad-slot={5351673649}
        ></ins>
      </AdUnit>
    </div>
  );
}
type format = "auto" | "rectangle" | "vertical" | "horizontal";

export function DisplayAdUnit({
  className,
  format,
}: {
  className?: string;
  format?: format;
}) {
  return (
    <div className={className}>
      <AdUnit>
        <ins
          className="adsbygoogle"
          // data-ad-client="ca-pub-5012580427673167"
          style={{ display: "block" }}
          // data-ad-slot={3048648789}
          data-ad-format={format}
          data-full-width-responsive="true"
        ></ins>
      </AdUnit>
    </div>
  );
}

export function MediumRectangleAdUnit() {
  return (
    <div>
      <AdUnit>
        <ins
          className="adsbygoogle"
          style={{
            display: "inline-block",
            width: 300,
            height: 250,
            maxWidth: "100%",
          }}
          // data-ad-client="ca-pub-5012580427673167"
          // data-ad-slot={1659393530}
        ></ins>
      </AdUnit>
    </div>
  );
}

export function InFeedAdUnit({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <AdUnit>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          // data-ad-client="ca-pub-5012580427673167"
          data-ad-format="fluid"
          data-ad-layout-key="+23+sa-1a-5c+ee"
          // data-ad-slot={9404816336}
        ></ins>
      </AdUnit>
    </Card>
  );
}

export function InFeedAdUnit2({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <AdUnit>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          // data-ad-client="ca-pub-5012580427673167"
          data-ad-format="fluid"
          // data-ad-slot={4819538215}
          data-ad-layout-key="-ih+6-k-2f+6d"
        ></ins>
      </AdUnit>
    </Card>
  );
}
