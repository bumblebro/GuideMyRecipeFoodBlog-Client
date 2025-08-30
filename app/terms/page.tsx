import Navbar3 from "@/components/navbar3/page";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

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
  title: "Terms and Conditions",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),
  alternates: {
    canonical: "/terms",
  },
};

function page() {
  return (
    <>
      <Navbar3 />
      <div
        className={` ${Poppins400.className} flex flex-col gap-4 px-4 pb-3 my-[130px] md:my-[105px] md:max-w-[75rem] mx-auto w-full leading-[1.7rem] font-[330] text-black`}
      >
        <h1 className={`text-3xl font-extrabold pb-6 ${Poppins700.className}`}>
          Terms and Conditions
        </h1>
        <h2>Effective Date: April 1st, 2024</h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of GuideMyRecipe&apos;s Website, located at
          https://www.GuideMyRecipe.com.
        </p>

        <p>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use GuideMyRecipe if you do not agree
          to all of the terms and conditions stated on this page.
        </p>

        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement, and Disclaimer Notice and all Agreements:
          &quot;Client&quot;, &quot;You&quot;, and &quot;Your&quot; refer to
          you, the person logging onto this website and compliant with the
          Company’s terms and conditions. &quot;The Company&quot;,
          &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot;, and
          &quot;Us&quot; refer to our Company. &quot;Party&quot;,
          &quot;Parties&quot;, or &quot;Us&quot; refer to both the Client and
          ourselves. All terms refer to the offer, acceptance, and consideration
          of payment necessary to undertake the process of our assistance to the
          Client in the most appropriate manner for the express purpose of
          meeting the Client’s needs in respect of the provision of the
          Company’s stated services, in accordance with and subject to
          prevailing laws.
        </p>

        <h3 className={`${Poppins700.className} text-lg font-semibold`}>
          Cookies
        </h3>

        <p>
          We employ the use of cookies. By accessing GuideMyRecipe, you agreed
          to use cookies in agreement with GuideMyRecipe&apos; Privacy Policy.
        </p>

        <p>
          Most interactive websites use cookies to retrieve user details for
          each visit. Cookies are used by our website to enable the
          functionality of certain areas and to make it easier for people
          visiting our website. Some of our affiliate/advertising partners may
          also use cookies.
        </p>

        <h2 className={`${Poppins700.className} text-lg font-semibold`}>
          License
        </h2>

        <p>
          Unless otherwise stated, GuideMyRecipe and/or its licensors own the
          intellectual property rights for all material on GuideMyRecipe. All
          intellectual property rights are reserved. You may access this from
          GuideMyRecipe for your personal use, subject to restrictions set in
          these terms and conditions.
        </p>

        <p>You must not:</p>
        <ul className="list-disc pl-10">
          <li>Republish material from GuideMyRecipe</li>
          <li>Sell, rent, or sub-license material from GuideMyRecipe</li>
          <li>Reproduce, duplicate, or copy material from GuideMyRecipe</li>
          <li>Redistribute content from GuideMyRecipe</li>
        </ul>

        <p>
          This Agreement shall begin on the date hereof. Our Terms and
          Conditions were created with the help of the
          <a href="https://tools.bloggingqna.com/">
            Terms and Conditions Generator
          </a>
          .
        </p>

        <h3 className={`${Poppins700.className} text-lg font-semibold`}>
          User Comments
        </h3>

        <p>
          Parts of this website offer an opportunity for users to post and
          exchange opinions and information in certain areas of the website.
          GuideMyRecipe does not filter, edit, publish, or review Comments prior
          to their presence on the website. Comments do not reflect the views
          and opinions of GuideMyRecipe, its agents, and/or affiliates. Comments
          reflect the views and opinions of the person who posts them. To the
          extent permitted by applicable laws, GuideMyRecipe shall not be liable
          for the Comments or any liability, damages, or expenses caused and/or
          suffered as a result of any use of and/or posting of and/or appearance
          of the Comments on this website.
        </p>

        <p>
          GuideMyRecipe reserves the right to monitor all Comments and to remove
          any Comments deemed inappropriate, offensive, or in breach of these
          Terms and Conditions.
        </p>

        <h3 className={`${Poppins700.className} text-lg font-semibold`}>
          Hyperlinking to our Content
        </h3>

        <p>
          The following organizations may link to our Website without prior
          written approval:
        </p>

        <ul className="list-disc pl-10">
          <li>Government agencies</li>
          <li>Search engines</li>
          <li>News organizations</li>
          <li>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses.
          </li>
          <li>
            System-wide Accredited Businesses except for soliciting non-profits
          </li>
        </ul>

        <p>
          These organizations may link to our home page, to publications, or to
          other Website information so long as the link: (a) is not in any way
          deceptive; (b) does not falsely imply sponsorship, endorsement, or
          approval of the linking party and its products/services; and (c) fits
          within the context of the linking party&apos;s site.
        </p>

        <h3 className={`${Poppins700.className} text-lg font-semibold`}>
          Disclaimer
        </h3>

        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties, and conditions relating to our website
          and the use of this website. Nothing in this disclaimer will:
        </p>

        <ul className="list-disc pl-10">
          <li>
            Limit or exclude our or your liability for death or personal injury
          </li>
          <li>
            Limit or exclude our or your liability for fraud or fraudulent
            misrepresentation
          </li>
          <li>
            Limit any of our or your liabilities in any way that is not
            permitted under applicable law
          </li>
          <li>
            Exclude any of our or your liabilities that may not be excluded
            under applicable law
          </li>
        </ul>

        <p>
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </p>
      </div>
    </>
  );
}

export default page;
