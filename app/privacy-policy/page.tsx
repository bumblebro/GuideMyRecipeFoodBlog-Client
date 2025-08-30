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
  title: "Privacy Policy",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),
  alternates: {
    canonical: "/privacy-policy",
  },
};

function page() {
  return (
    <>
      <Navbar3 />
      {/* <div className="flex flex-col  gap-4 px-4 pb-3 my-[130px] md:my-[105px]   md:max-w-[45rem] mx-auto w-full leading-[1.7rem] font-[330] text-black ">
        <div>
          <h1 className="text-3xl font-extrabold pb-6">
            Privacy Policy for GuideMyRecipe
          </h1>
          <h1>GuideMyRecipe Privacy Policy</h1>
          <h2>Effective Date: April 1st, 2024</h2>
          <div className="container mx-auto py-12 text-left">
            <p className="mb-4">
              Welcome to GuideMyRecipe (&quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;). This privacy policy outlines our practices
              regarding the collection, use, and disclosure of your information
              when you visit our website. We take your privacy seriously and are
              committed to protecting it.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              1. Information Collection and Use
            </h2>
            <p className="mb-4">
              We collect two types of information from you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>a. Personal Information:</strong> This includes any
                information that can be used to identify you, such as your name,
                email address, and phone number. We collect personal information
                when you sign up for our newsletter, contact us through our
                contact form, or participate in promotions or surveys on our
                website.
              </li>
              <li className="mb-2">
                <strong>b. Non-Personal Information:</strong> This includes
                information about your device, browser, and usage patterns on
                our website. We use cookies and similar tracking technologies to
                collect non-personal information to help us improve your user
                experience.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use your personal information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>
                  a. Respond to your inquiries and provide customer support.
                </strong>
              </li>
              <li className="mb-2">
                <strong>
                  b. Send you newsletters, promotional materials, or other
                  information you have requested. If you wish to opt out of
                  receiving promotional emails, you can do so by contacting us.
                </strong>
              </li>
              <li className="mb-2">
                <strong>
                  c. Improve our website and tailor content to your interests.
                </strong>
              </li>
            </ul>
            <p className="mb-4">We use your non-personal information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>
                  a. Analyze website usage and trends to improve our services.
                </strong>
              </li>
              <li className="mb-2">
                <strong>
                  b. Identify and resolve technical issues on our website.
                </strong>
              </li>
              <li className="mb-2">
                <strong>c. Enhance the security of our website.</strong>
              </li>
            </ul>
            <p className="mb-4">
              We use Google Analytics to track non-personally identifiable data
              about the usage of the site. Please see the&nbsp;
              <a
                href="https://policies.google.com/privacy"
                rel="nofollow"
                className="underline"
              >
                Google Analytics Privacy Policy
              </a>
              &nbsp; for more details.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties.
              We may share your information with third-party service providers,
              such as email providers and website analytics providers, to help
              us operate our website and deliver our services. These third
              parties are required to maintain the confidentiality of your
              information and may not use it for any other purpose.
            </p>
            <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
            <p className="mb-4">
              We are committed to protecting your personal information from
              unauthorized access, use, or disclosure. We use reasonable
              security measures to help protect your information, but please
              note that no method of transmission over the internet or
              electronic storage is 100% secure.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              5. Children&apos;s Privacy
            </h2>
            <p className="mb-4">
              Our website is not intended for children under the age of 18. We
              do not knowingly collect or maintain information from children
              under 18. If you become aware that a child has provided us with
              personal information, please contact us, and we will take steps to
              delete such information.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page.
              Your continued use of our website after we post any modifications
              constitutes your acknowledgment of the modified policy and your
              agreement to abide by it.
            </p>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about our privacy policy,
              please&nbsp;
              <a href="/contact-us">contact us</a>
            </p>
          </div>
        </div>
      </div> */}
      <div
        className={`flex flex-col gap-4 px-4 pb-3 my-[130px] md:my-[105px] md:max-w-[75rem] mx-auto w-full leading-[1.7rem] font-[330] text-black ${Poppins400.className}`}
      >
        <h1 className={`${Poppins700.className} text-3xl pb-4`}>
          Privacy Policy For GuideMyRecipe
        </h1>
        <p>
          GuideMyRecipe is a personal blog written and edited by Shreyas M S.
          For questions about this blog, please contact{" "}
          <a
            className="text-[#B2357E]"
            href="mailto: GuideMyRecipe13@gmail.com"
          >
            GuideMyRecipe13@gmail.com
          </a>
          .
        </p>

        <p>
          This blog accepts forms of cash advertising, sponsorships, paid
          insertions or other forms of compensation. The compensation received
          will never influence the content, topics or posts made in this blog.
          All advertising is in the form of advertisements generated by a third
          party ad network. Those advertisements will be identified as paid
          advertisements.
        </p>

        <p>
          Please note that GuideMyRecipe has financial relationships with some
          of the merchants mentioned here. GuideMyRecipe may be compensated if
          consumers choose to utilize the links located throughout the content
          on this site and generate sales for the said merchant.
        </p>

        <p>
          From time to time, the owner of this blog is compensated to provide
          opinion on products, services, websites and various other topics. Even
          though the owner of this blog may receive compensation for certain
          posts or advertisements, we always give our honest opinions, findings,
          beliefs, or experiences on those topics or products. The views and
          opinions expressed on this blog are purely the bloggers’ own. Any
          product claim, statistic, quote or other representation about a
          product or service should be verified with the manufacturer, provider
          or party in question.
        </p>

        <p>
          We are a participant in the Amazon Services LLC Associates Program, an
          affiliate advertising program designed to provide a means for us to
          earn fees by linking to&nbsp;Amazon.com&nbsp;and affiliated sites.
        </p>

        <p>
          This blog does not contain any content which might present a conflict
          of interest.
        </p>

        <div className="wp-block-yoast-seo-table-of-contents yoast-table-of-contents">
          <h2 className={`text-2xl ${Poppins700.className}`}>Contents</h2>
          <ul className="list-disc">
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E] "
                href="#h-privacy-policy"
                data-level="2"
              >
                Privacy Policy
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-processing-of-personal-data-by-jo-cooks"
                data-level="2"
              >
                Processing of personal data by GuideMyRecipe
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E] "
                href="#h-1-general-introduction"
                data-level="2"
              >
                1. General Introduction
              </a>
              <ul>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-a-sharing-transfer-of-personal-data-to-third-parties"
                    data-level="3"
                  >
                    a. Sharing/transfer of personal data to third parties
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-b-sharing-transfer-of-personal-data-to-third-countries"
                    data-level="3"
                  >
                    b. Sharing/transfer of personal data to third countries
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-c-sharing-transfer-of-personal-data-to-government-authorities"
                    data-level="3"
                  >
                    c. Sharing/transfer of personal data to government
                    authorities
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-d-conservation-periods-for-personal-data"
                    data-level="3"
                  >
                    d. Conservation periods for personal data
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-e-withdrawl-of-consent-to-the-processing-of-personal-data"
                    data-level="3"
                  >
                    e. Withdrawl of consent to the processing of personal data
                  </a>
                </li>
              </ul>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-2-processing-operations-of-personal-data-by-jo-cooks"
                data-level="2"
              >
                2. Processing operations of personal data by GuideMyRecipe
              </a>
              <ul>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-a-personal-data-automatically-collected-when-you-visit-the-site"
                    data-level="3"
                  >
                    a. Personal data automatically collected when you visit the
                    Site
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-b-personal-data-collected-when-you-register-and-create-an-account"
                    data-level="3"
                  >
                    b. Personal data collected when you register and create an
                    account
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-c-your-email-address"
                    data-level="3"
                  >
                    c. Your email address
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-d-transactional-data"
                    data-level="3"
                  >
                    d. Transactional data
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-e-shopping-information"
                    data-level="3"
                  >
                    e. Shopping information
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-f-minors"
                    data-level="3"
                  >
                    f. Minors
                  </a>
                </li>
              </ul>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-3-automated-decision-making-including-profiling"
                data-level="2"
              >
                3. Automated decision making, including profiling
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-4-exchange-of-information"
                data-level="2"
              >
                4. Exchange of information
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-5-data-security"
                data-level="2"
              >
                5. Data security
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-6-your-rights"
                data-level="2"
              >
                6. Your rights
              </a>
              <ul>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-a-eea-residents"
                    data-level="3"
                  >
                    a. EEA-residents
                  </a>
                </li>
                <li className="ml-8 underline">
                  <a
                    className="text-[#B2357E] pl-4"
                    href="#h-b-non-eea-residents"
                    data-level="3"
                  >
                    b. Non-EEA residents
                  </a>
                </li>
              </ul>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-7-changes-to-this-privacy-policy"
                data-level="2"
              >
                7. Changes to this Privacy Policy
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-cookie-policy"
                data-level="2"
              >
                Cookie Policy
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E] "
                href="#h-1-our-use-of-cookies"
                data-level="2"
              >
                1. Our Use of Cookies
              </a>
            </li>
            <li className="ml-8 underline">
              <a className="text-[#B2357E]" href="#h-1-comments" data-level="2">
                1. Comments
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-2-sponsored-content-tracking-pixels"
                data-level="2"
              >
                2. Sponsored Content Tracking Pixels
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-3-affiliate-program-participation"
                data-level="2"
              >
                3. Affiliate Program Participation
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-4-newsletters"
                data-level="2"
              >
                4. Newsletters
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-5-changes-to-the-cookie-policy"
                data-level="2"
              >
                5. Changes to the Cookie Policy
              </a>
            </li>
            <li className="ml-8 underline">
              <a
                className="text-[#B2357E]"
                href="#h-6-contacting-us"
                data-level="2"
              >
                6. Contacting Us
              </a>
            </li>
          </ul>
        </div>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-privacy-policy"
        >
          Privacy Policy
        </h2>

        <p>
          As the owner of this website (GuideMyRecipe.com, referred to as the
          “Site”), GuideMyRecipe understands that your privacy is of critical
          importance. This Privacy Policy describes what information we collect
          from you via the Site and how we use and disclose such information.
          {/* GuideMyRecipe registered office is at PO Box 32010 Calgary RPO
          Silverado, AB, T2X 0X4, and is registered under registration number
          819031790. */}
        </p>

        <p>
          GuideMyRecipe acts as data controller for the processing of personal
          data collected when you visit the Site and use the services provided
          by GuideMyRecipe. By personal data we mean all information that
          identifies you or can directly or indirectly identify you
          <a>(e.g. name, birthday, postal code, address, IP address, etc.)</a>.
        </p>

        <p>
          If you have any questions about this Privacy Policy, or the practices
          of this Site, please contact us at&nbsp;
          <a
            className="text-[#B2357E]"
            href="mailto: GuideMyRecipe13@gmail.com"
          >
            <strong> GuideMyRecipe13@gmail.com</strong>
          </a>
          <strong>.</strong>
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-processing-of-personal-data-by-jo-cooks"
        >
          Processing of personal data by GuideMyRecipe
        </h2>

        <p>
          In this section you will find further information about the processing
          of personal data by GuideMyRecipe. We classNameify this information
          under headings by the type of services that may be used on our
          website. In practice, several of these services may be provided at the
          same time.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-1-general-introduction"
        >
          1. General Introduction
        </h2>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-a-sharing-transfer-of-personal-data-to-third-parties"
        >
          a. Sharing/transfer of personal data to third parties
        </h3>

        <p>
          GuideMyRecipe does not sell the personal data of its visitors/users
          (except for the case where GuideMyRecipe would choose or be forced to
          sell its business or assets (see further)).
        </p>

        <p>
          However, GuideMyRecipe reserves the right to share the personal data
          with third parties solely for the purpose of providing its online
          services. GuideMyRecipe contractually ensures that the necessary
          measures for the security and confidentiality of personal data
          processed on its behalf by third parties are taken.
        </p>

        <p>
          Following is&nbsp;an indicative list of third parties with/to which Jo
          Cooks shares/transfers data. We briefly describe the purpose of this
          sharing/transfer and provide a link to their respective privacy
          policies:
        </p>

        <ul className="wp-block-list w-full">
          <li>
            PayPal: payment processing (
            <a
              className="text-[#B2357E]"
              href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.paypal.com/us/webapps/mpp/ua/privacy-full
            </a>
            ).
          </li>

          <li>
            CMI Marketing, Inc., d/b/a Raptive (“Raptive”): advertising (
            <a
              className="text-[#B2357E]"
              href="https://raptive.com/creator-advertising-privacy-statement"
            >
              https://raptive.com/creator-advertising-privacy-statement
            </a>
            )
          </li>

          <li>
            Mailchimp: for email marketing purposes (
            <a
              className="text-[#B2357E]"
              href="https://www.intuit.com/privacy/statement/"
            >
              https://www.intuit.com/privacy/statement/
            </a>
            ).
          </li>
        </ul>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-b-sharing-transfer-of-personal-data-to-third-countries"
        >
          b. Sharing/transfer of personal data to third countries
        </h3>

        <ul className="wp-block-list list-disc ml-6">
          <li>Everybody</li>
        </ul>

        <p>
          GuideMyRecipe shares data with third parties established in third
          countries such as the USA. GuideMyRecipe ensures that the third-party
          recipients in such third countries ensure that the personal data which
          is transferred to them will enjoy a comparable level of protection as
          the level of protection offered by GuideMyRecipe in Canada<a>,</a>{" "}
          e.g. by using legally approved mechanisms, such as Standard
          Contractual Clauses or adequacy decisions, to ensure that your data is
          afforded an equivalent level of protection.
        </p>

        <ul className="wp-block-list list-disc ml-6">
          <li className="">EEA-residents</li>
        </ul>

        <p>
          If you are a resident of a country in the European Economic Area
          (EEA), subject to the General Data Protection Regulation, it is of
          note that GuideMyRecipe is established in Canada. Pursuant to an
          adequacy decision taken based on article 45 GDPR, Canada ensures an
          adequate level of protection of personal data, comparable to the level
          of protection offered by EU law.
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-c-sharing-transfer-of-personal-data-to-government-authorities"
        >
          c. Sharing/transfer of personal data to government authorities
        </h3>

        <p>
          We transmit personal data to public authorities (including
          jurisdictional/administrative courts) where this is a legal obligation
          or where it is necessary for the validation, exercise or defence of
          legal claims.
        </p>

        <p>
          Where government bodies (including
          judicial/administrative/investigative courts) should request personal
          data, GuideMyRecipe may also be obliged to share such data with them.
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-d-conservation-periods-for-personal-data"
        >
          d. Conservation periods for personal data
        </h3>

        <p>
          Under the heading ‘conservation period’ (see below), we indicate in
          each case the period for which we will conserve your personal data for
          the purposes of the processing concerned. After this period, we will
          no longer process your personal data, unless this is necessary to
          comply with a legal obligation or where this is necessary for the
          validation, exercise or defence of a legal claim or if you give us
          your consent for a longer conservation.
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-e-withdrawl-of-consent-to-the-processing-of-personal-data"
        >
          e. Withdrawl of consent to the processing of personal data
        </h3>

        <p>
          Certain processing operations are based on your consent (see below).
          It is as easy to withdraw as to give consent. If you withdraw your
          consent, we can no longer process the related data (e.g. the data you
          provided us with to create a thorough profile, your email-address for
          the purpose of sending you our newsletter, etc.). Once consent has
          been withdrawn, we ensure that the data is deleted unless it can be
          processed on another legal basis.
        </p>

        <p>
          As the case may be (see below), we will infer the withdrawal of your
          consent from following actions:
        </p>

        <ul className="wp-block-list">
          <li>Removal of a comment from the Site</li>

          <li>Unsubscribing from the newsletter</li>

          <li>
            By contacting us at GuideMyRecipe13@gmail.com or by post at PO Box
            32010 Calgary RPO Silverado, AB, T2X 0X4.
          </li>
        </ul>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-2-processing-operations-of-personal-data-by-jo-cooks"
        >
          2. Processing operations of personal data by GuideMyRecipe
        </h2>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-a-personal-data-automatically-collected-when-you-visit-the-site"
        >
          a. Personal data automatically collected when you visit the Site
        </h3>

        <p>
          As long as the Site’s online services are not used and visitors simply
          browse the Site, they are not required to provide/enter any personal
          data.
        </p>

        <p>
          However, by simply visiting and browsing the Site, certain information
          that directly or indirectly identifies you may be collected
          automatically. This is <strong>technical data</strong>: the IP
          (Internet Protocol) address of your computer, the web browser you are
          using, your connection speed, basic server connection data, and data
          collected via HTML cookies, Flash cookies, web beacons and similar
          technologies (see the Cookie Policy below).
        </p>

        <p>
          <strong>Purpose of processing operation</strong>: to establish the
          connection; to present the content of the Site; to diagnose errors.
        </p>

        <p>
          <strong>Legal basis</strong>: processing is necessary for the
          legitimate interests pursued by GuideMyRecipe (Art. 6, §1, f) of the
          GDPR).
        </p>

        <p>
          These legitimate interests coincide with the purposes of the
          processing operation, i.e. offering the services of the Site.
        </p>

        <p>
          <strong>Conservation period</strong>: Until the legal basis ceases to
          exist.
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-b-personal-data-collected-when-you-register-and-create-an-account"
        >
          b. Personal data collected when you register and create an account
        </h3>

        <ul className="wp-block-list">
          <li>
            We may collect other data from you when you register with our Site
            in order to use various features. &nbsp;Such data could include your
            email address, name, screen name, and password (if
            applicable).&nbsp; We may use third parties to provide the
            functionality to allow you to register for the Site, in which case
            the third party will also have access to your information. An
            example of such a functionality is Slickstream, provided and
            maintained by Raptive (
            <a
              className="text-[#B2357E]"
              href="https://raptive.com/creator-advertising-privacy-statement/"
            >
              https://raptive.com/creator-advertising-privacy-statement/
            </a>
            ) which allows you to login to the website, and access certain
            functionalities, through the use of your Google credentials. In
            using Slickstream, no information relating to the use of this
            functionality is stored in our databases. In any case, we will not
            provide any personally-identifying information about you to third
            parties, except if required by law.
          </li>
        </ul>

        <p>
          <strong>Purpose of processing operation: </strong>creating an account
          on the Site.
        </p>

        <p>
          <strong>Legal basis</strong>: processing is necessary for the
          execution of the contract you conclude with GuideMyRecipe (Art. 6, §1,
          b) of the GDPR).
        </p>

        <p>
          <strong>Conservation period</strong>: the duration of the contractual
          relation.
        </p>

        <ul className="wp-block-list">
          <li>
            Once you have created an account on the Site, we could collect other
            data that you provide voluntarily (such as your birthday, postal
            code, etc. but also e.g. comments that you post, see below). We may
            also collect information about you through other methods, including
            research surveys, social media platforms, verification services,
            data services, as well as public&nbsp;sources. We&nbsp;may combine
            this data with your registration data in order to maintain a more
            thorough profile.
          </li>
        </ul>

        <p>
          <strong>Purpose of processing operation: </strong>creating a thorough
          profile for your account on the Site, creating a better user
          experience for the Site, diagnosing and troubleshooting malfunctions
          on the Site, better understanding how the Site is used, and making
          personalized recommendations to you.
        </p>

        <p>
          <strong>Legal basis</strong>: your consent (Art. 6, §1, a) of the
          GDPR).
        </p>

        <p>
          <strong>Conservation period</strong>: until the withdrawal of your
          consent or the end of the contractual relation as described under the
          previous bullet point.
        </p>

        <ul className="wp-block-list">
          <li>
            When you post a comment on the Site we collect the data shown in the
            comments form, and also the visitor’s IP address and browser user
            agent string.
          </li>
        </ul>

        <p>
          <strong>Purpose of processing </strong>
          <strong>operation</strong>: (1) to process and publish your comment,
          (2) to help spam detection.
        </p>

        <p>
          <strong>Legal basis</strong>: (1) your consent and (2) our legitimate
          interests (Art. 6, §1, a) and f) of the GDPR).
        </p>

        <p>
          Our legitimate interest is to keep the Site free of spam, to ensure a
          smooth and good visitor/user experience.
        </p>

        <p>
          <strong>Conservation period</strong>: until the withdrawal of your
          consent (removal of the comment).
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-c-your-email-address"
        >
          c. Your email address
        </h3>

        <p>
          We may collect your email address, but only if you voluntarily provide
          it to us. This may occur, for example, if you sign up to receive an
          email newsletter, or enter a promotion.&nbsp;We will use your email
          address for the purposes for which you provided it to us, and also
          from time to time to send you emails regarding the Site or other
          products or services that we believe may be of interest to
          you.&nbsp;You may opt out of such email communications at any time by
          clicking the “unsubscribe” button in the email.
        </p>

        <p>We will not share your email address with any third parties.</p>

        <p>
          <strong>Purpose of processing operation</strong>: to provide you our
          email newsletter, to let you participate in a promotion.
        </p>

        <p>
          <strong>Legal basis</strong>: your consent (Art. 6, §1, a) of the
          GDPR).
        </p>

        <p>
          <strong>Conservation period</strong>: until the withdrawal of your
          consent (when you unsubscribe).
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-d-transactional-data"
        >
          d. Transactional data
        </h3>

        <p>
          We may process information relating to transactions, including
          purchases of goods and services, that you enter into with us and/or
          through our Site] (“<strong>Transactional Data</strong>“). The
          Transactional Data may include your contact details, your card details
          and the transaction details. The transaction data may be processed for
          the purpose of supplying the purchased goods and services and keeping
          proper records of those transactions.
        </p>

        <p>
          <strong>Purpose of processing operation</strong>: to supply you with
          the goods and services, to keep records of transacitons.
        </p>

        <p>
          <strong>Legal basis</strong>: processing is necessary for the
          execution of the contract you conclude with GuideMyRecipe (Art. 6, §1,
          b) of the GDPR).
        </p>

        <p>
          <strong>Conservation period</strong>: the duration of the contractual
          relation.
        </p>

        <p>
          Payment processing on our Site is handled by our payment services
          providers,&nbsp;<em>Paypal</em>. We will share transaction data with
          our payment services providers only to the extent necessary for the
          purposes of processing your payments, refunding such payments and
          dealing with complaints and queries relating to such payments and
          refunds. You can find information about the payment services
          providers’ privacy policies and practices at&nbsp;
          <a
            className="text-[#B2357E] block"
            href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.paypal.com/us/webapps/mpp/ua/privacy-full
          </a>
          .
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-e-shopping-information"
        >
          e. Shopping information
        </h3>

        <p>
          If you order something from GuideMyRecipe, we collect your shopping
          data. Depending on the type of purchase and processing status,
          shopping data may include the following information:
        </p>

        <ul className="wp-block-list">
          <li>Order number</li>

          <li>
            Details on the purchased items (name, size, color, price, etc.)
          </li>

          <li>Payment method information</li>

          <li>Delivery and billing addresses</li>

          <li>
            Messages and communications relating to purchases (e.g. notice of
            revocation, complaints and messages to customer service)
          </li>

          <li>Delivery and payment status (e.g. completed or dispatched)</li>

          <li>Return status (e.g. successfully completed)</li>

          <li>
            Information on service providers involved in executing the contract
            (for order purchasing perhaps shipment numbers of parcel services)
          </li>
        </ul>

        <p>
          <strong>Purpose of processing operation</strong>: executing purchase
          agreements and customer services
        </p>

        <p>
          <strong>Legal basis</strong>: processing is necessary for the
          execution of the contract you conclude with GuideMyRecipe (Art. 6, §1,
          b) of the GDPR).
        </p>

        <p>
          <strong>Conservation period</strong>: the duration of the contractual
          relation
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-f-minors"
        >
          f. Minors
        </h3>

        <p>
          If we discover that we have collected personal data from a minor under
          the age of 18 without the verifiable consent of his or her
          parents/legal guardians, we will delete said data from our database as
          soon as possible (in accordance with Article 8 GDPR). If you believe
          that we may have collected information on a minor under the age of 18,
          please contact GuideMyRecipe at the following address:{" "}
          <a
            className="text-[#B2357E]"
            href="mailto: GuideMyRecipe13@gmail.com"
          >
            <strong> GuideMyRecipe13@gmail.com</strong>
          </a>
          <strong>.</strong>
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-3-automated-decision-making-including-profiling"
        >
          3. Automated decision making, including profiling
        </h2>

        <p>
          As indicated above, we may process data to create a thorough profile
          for your account on the Site, creating a better user experience for
          the Site, and making personalized recommendations to you.
        </p>

        <p>
          The data we process once you have created an account entails personal
          data that you provide voluntarily (such as your birthday, postal code,
          etc. but also e.g. the comments that you post). We may also collect
          information about you through other methods, including research
          surveys, social media platforms, verification services, data services,
          as well as public sources.
        </p>

        <p>
          When you create a profile on the Site, we request your explicit
          consent&nbsp;to engage in profiling for aforementioned purposes. If
          you do not consent or withdraw your consent, no profiling will occur.
        </p>

        <p>
          We work with the following third parties for linking your data and
          creating a more thorough profile:
        </p>

        <ul className="wp-block-list">
          <li>
            Raptive (
            <a
              className="text-[#B2357E]"
              href="https://raptive.com/creator-advertising-privacy-statement/"
            >
              https://raptive.com/creator-advertising-privacy-statement/)
            </a>
          </li>

          <li>
            Google Analytics (
            <a
              className="text-[#B2357E]"
              href="https://policies.google.com/privacy?hl=en"
            >
              https://policies.google.com/privacy?hl=en
            </a>
            )
          </li>
        </ul>

        <p>As a result:</p>

        <ul className="wp-block-list">
          <li>
            We can offer you tailored recommendations (e.g. specific recipes)
            which align with your interests and preferences;
          </li>

          <li>We can tailor the Site to your preferences;</li>
        </ul>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-4-exchange-of-information"
        >
          4. Exchange of information
        </h2>

        <p>
          GuideMyRecipe respects the privacy of its users and only shares
          information in specific circumstances. We make your information
          available to other companies, applications or individuals in the
          following circumstances:
        </p>

        <ul className="wp-block-list">
          <li>
            We may use third parties to provide services related to our Site,
            such as database management, maintenance services, call center,
            online marketing actions. These third parties will have access to
            your data only to perform the above tasks on our behalf.
          </li>

          <li>
            We may share information about you in the event of the purchase or
            merger of our website with another company, or in the event of a
            similar business transaction. As such, and in the event that the
            Site or substantially all of its assets is sold or disposed of as a
            going concern, whether by merger, sale of assets or otherwise, or in
            the event of an insolvency, bankruptcy or receivership, the
            information we have collected about you may be one of the assets
            sold or merged in connection with that transaction. However, we will
            inform you before your data is transferred and becomes subject to
            any other personal data protection policy, either by displaying a
            visible notice or by sending a notice to the e-mail address you have
            provided in your account.
          </li>

          <li>
            We may share information about you in order to investigate, prevent
            or act on any illegal activity, if there is a suspicion of fraud, in
            circumstances involving potential threats to the physical integrity
            or other rights and interests of any person, in the event of a
            breach of our website terms of use, if required by law, and in all
            cases where we believe in good faith that sharing such information
            is necessary.
          </li>

          <li>
            We may share information about you in response to a judicial
            summons, search warrant, legal process, court order, legal process
            or other law enforcement action issued by any competent authority,
            including the national data protection authority and data protection
            supervisory authorities of other EU member states, as well as to
            protect and defend our legal rights or to counter any claims against
            us.
          </li>

          <li>
            In addition to the above, we may use the data we collect for other
            purposes of which you will be informed at the time of collection and
            with your consent, insofar as this is necessary.
          </li>
        </ul>

        <p>
          Please note that third parties may independently collect data about
          you, including your IP address and information about the websites you
          visit and the links you click, through cookies, link clicks or other
          means when you visit our website or when advertisements are shown on
          our site. For more information, see ‘Cookie Policy’ below.
        </p>

        <p>
          For sake of completeness, this Site is affiliated with CMI Marketing,
          Inc., d/b/a Raptive (“Raptive”) for the purposes of placing
          advertising on the Site, and Raptive will collect and use certain data
          for advertising purposes. To learn more about Raptive’s data usage,
          click here:&nbsp;
          <a
            className="text-[#B2357E]"
            href="https://raptive.com/creator-advertising-privacy-statement"
          >
            https://raptive.com/creator-advertising-privacy-statement
          </a>
          <strong>.</strong>
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-5-data-security"
        >
          5. Data security
        </h2>

        <p>
          GuideMyRecipe takes all necessary technical and organizational
          measures to safeguard and protect your personal data against
          accidental or deliberate destruction, loss, unauthorized modification,
          disclosure or access, and against any other unlawful processing of the
          personal data in its control, which it monitors on a regular basis.
          However, despite GuideMyRecipe’ good faith efforts to store its users’
          personal data in a secure operating environment that is not open to
          the public, it should be noted that complete or perfect security does
          not exist, and GuideMyRecipe cannot guarantee that there will be no
          accidental disclosure of your personal data. Users must immediately
          notify Savory Touch if their details are lost, stolen or used without
          their permission. In such an event, we will remove your details from
          your account and update our records accordingly.
        </p>

        <p>
          When visitors/users send information to the Siteby filling in the
          online e-mail forms in order to respond to a request or benefit from a
          service provided by GuideMyRecipe, this information must be correct
          and accurate. Any information provided by visitors/users in order to
          satisfy their request is considered confidential and transferred only
          to the party directly concerned, and to the competent authorities
          according to the law in the event that the use made contravenes the{" "}
          <a
            className="text-[#B2357E]"
            href="mailto: GuideMyRecipe13@gmail.com"
          >
            Site
          </a>
          <strong> </strong>terms of use and existing applicable legislation in
          general. The latter may be considered appropriate in the event that
          use of the Site by a visitor/user violates its operating rules. In
          such a case, all data concerning said visitor/user, as well as their
          IP address, may form part of an investigation, insofar as this is
          necessary to protect GuideMyRecipe’ rights. In the event that data is
          sent to the Site, such data must not be contrary to applicable law and
          principles of morality concerning the use of the Internet in general,
          and it must not be modified by the visitor/user who publishes it or by
          other persons with his or her knowledge. This data may be used by Jo
          Cooks without any claim against GuideMyRecipe by the visitor/user who
          provided it. Each visitor/user is responsible for his/her use of the
          Site may only use its services for lawful and legitimate purposes. The
          visitor/user is not permitted to use the Site in a manner that could
          destroy, disable or damage our servers or networks, or in a manner
          that interferes with the use and enjoyment of the Site by any other
          visitor/user. Visitors/users are also prohibited from creating false
          accounts with fraudulent intent and from collecting or storing the
          personal data of other users in any manner whatsoever. GuideMyRecipe
          reserves the right to pursue claims for any damages caused by the
          violation of the aforementioned prohibitions by visitors/users and to
          take any legal action, proceedings and judicial and extrajudicial
          remedial measures to prevent the violation of these conditions.
        </p>

        <p>
          GuideMyRecipe reserves the right to take, by way of example but
          limited thereto, the following measures: (a) record and store all
          communications between visitors/users and the Site, (b) investigate
          any complaints made in the event that a communication does not comply
          with its terms of use, and decide to remove or require the removal of
          any such communication at its discretion, (c) remove communications
          and data/information sent by visitors/users which are deemed
          offensive, illegal or disruptive, or which do not comply with the
          Site’s terms of use, (d) remove registered members when they do not
          comply with Site’s terms of use, after warning them accordingly.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-6-your-rights"
        >
          6. Your rights
        </h2>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-a-eea-residents"
        >
          a. EEA-residents
        </h3>

        <p>
          If you are a resident of a country in the European Economic Area
          (EEA), subject to the General Data Protection Regulation, you may
          exercise any of the following rights:
        </p>

        <ul className="wp-block-list">
          <li>
            The right of access, to find out what data we process about you, for
            what purpose and who receives it.
          </li>

          <li>
            The right of rectification, to correct any incomplete or inaccurate
            data.
          </li>

          <li>
            The right to erasure, in order to have your personal data deleted
            from our files, provided that processing is no longer necessary.
          </li>

          <li>
            The right to the restriction of processing, should you question the
            accuracy of your data.
          </li>

          <li>
            The right to data portability, in order to receive your data in a
            structured and commonly used format.
          </li>

          <li>
            The right to object: You may object to the processing of your data
            for specific purposes, such as direct marketing.
          </li>

          <li>
            The right to withdraw consent: If processing is based on your
            consent, you may withdraw it at any time
          </li>
        </ul>

        <p>
          To exercise your rights, please send a written request to
          GuideMyRecipe at the following e-mail address:{" "}
          <a
            className="text-[#B2357E]"
            href="mailto: GuideMyRecipe13@gmail.com"
          >
            <strong> GuideMyRecipe13@gmail.com</strong>
          </a>
          , or at the following postal address: PO Box 32010 Calgary RPO
          Silverado, AB, T2X 0X4.
        </p>

        <p>
          GuideMyRecipe undertakes to provide you with automated means of
          exercising your rights, insofar as this is technically possible, and
          to respond to your requests free of charge, unless your requests are
          frequently repeated and entail administrative costs for us due to
          their volume, in which case these costs will be borne by you. Savory
          Touch will make every effort to respond to any relevant request you
          make within thirty (30) days of receipt. However, if the complexity of
          your request or the volume of information makes it impossible to
          respond to your request within thirty days, GuideMyRecipe will inform
          you in writing within that period of the reasons for the delay and
          will make every effort to respond to your request as soon as possible,
          and in any event within a maximum of two further months.
        </p>

        <p>
          GuideMyRecipe reserves the right not to respond to your request if it
          is deemed manifestly unfounded or excessive and will inform you of the
          reasons why your request will not be met.
        </p>

        <p>
          In all cases, you have the right to lodge a complaint with the Data
          Protection Authority of your country of residence via its website or
          by post sent to its postal address. The{" "}
          <a
            className="text-[#B2357E]"
            href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en"
          >
            EDPB website{" "}
          </a>
          gives an overview of the different national data protection
          authorities.
        </p>

        <h3
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-b-non-eea-residents"
        >
          b. Non-EEA residents
        </h3>

        <p>
          If you are a non-EEA resident, please refer to the legislation
          applicable in your jurisdiction for an overview of your rights.
          Canadian residents can refer to the Personal Information Protection
          and Electronic Documents Act (“PIPEDA”).
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-7-changes-to-this-privacy-policy"
        >
          7. Changes to this Privacy Policy
        </h2>

        <p>
          We may change this Privacy Policy from time to time. The most recent
          version of the Privacy Policy will always be posted on the Site, with
          the “Effective Date” posted at the top of the Policy. We may revise
          and update this Privacy Policy if our practices change, as technology
          changes, or as we add new services or change existing ones. If we make
          any material changes to our Privacy Policy or how we handle your
          personal information, or we are going to use any personal information
          in a manner that is materially different from that stated in our
          Privacy Policy at the time we collected such information, we will give
          you a reasonable opportunity to consent to the change. If you do not
          consent, your personal information will be used as agreed to under the
          terms of the privacy policy in effect at the time we obtained that
          information. By using our Site or services after the Effective Date,
          you are deemed to consent to our then-current privacy policy. We will
          use information previously obtained in accordance with the Privacy
          Policy in effect when the information was obtained from you.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-cookie-policy"
        >
          Cookie Policy
        </h2>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-1-our-use-of-cookies"
        >
          1. Our Use of Cookies
        </h2>

        <p>
          A cookie is a file containing an identifier (a string of letters and
          numbers) that is sent by a web server to a web browser and is stored
          by the browser. The identifier is then sent back to the server each
          time the browser requests a page from the server. Cookies may be
          either “persistent” cookies or “session” cookies: a persistent cookie
          will be stored by a web browser and will remain valid until its set
          expiry date, unless deleted by the user before the expiry date; a
          session cookie, on the other hand, will expire at the end of the user
          session, when the web browser is closed. &nbsp;Cookies do not
          typically contain any information that personally identifies a user,
          but personal information that we store about you may be linked to the
          information stored in and obtained from cookies.
        </p>

        <p>We use cookies for the following purposes:</p>

        <p>
          (a)&nbsp;<strong>Authentication</strong>&nbsp;– we use cookies to
          identify you when you visit our website and as you navigate our
          website;
        </p>

        <p>
          (b)<strong>Comments</strong>– We can use cookies to identify you when
          you visit our website and as you navigate our website and leave
          comments;
        </p>

        <p>
          (c)&nbsp;<strong>Security</strong>&nbsp;– we use cookies as an element
          of the security measures used to protect user accounts, including
          preventing fraudulent use of login credentials, and to protect our
          website and services generally;
        </p>

        <p>
          (e)&nbsp;<strong>Advertising</strong>&nbsp;– we use cookies to help us
          to display advertisements that will be relevant to you; and
        </p>

        <p>
          (f)&nbsp;<strong>Analysis</strong>&nbsp;– we use cookies to help us to
          analyse the use and performance of our website and services;
        </p>

        <p>
          We use Google Analytics to analyse the use of our website. Google
          Analytics gathers information about website use by means of cookies.
          The information gathered relating to our website is used to create
          reports about the use of our website. Google’s privacy policy is
          available at:&nbsp;
          <a
            className="text-[#B2357E]"
            href="https://www.google.com/policies/privacy/"
          >
            https://www.google.com/policies/privacy/
          </a>
        </p>

        <p>
          Most browsers allow you to refuse to accept cookies and to delete
          cookies. The methods for doing so vary from browser to browser, and
          from version to version. You can however obtain up-to-date information
          about blocking and deleting cookies via these links:
        </p>

        <p>
          (a)&nbsp;
          <a
            className="text-[#B2357E]"
            href="https://support.google.com/chrome/answer/95647?hl=en"
          >
            https://support.google.com/chrome/answer/95647?hl=en
          </a>
          &nbsp;(Chrome);
        </p>

        <p>
          (b)&nbsp;
          <a
            className="text-[#B2357E]"
            href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
          >
            https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
          </a>
          (Firefox);
        </p>

        <p>
          (c)&nbsp;
          <a
            className="text-[#B2357E]"
            href="http://www.opera.com/help/tutorials/security/cookies/"
          >
            http://www.opera.com/help/tutorials/security/cookies/
          </a>
          &nbsp;(Opera);
        </p>

        <p>
          (d)&nbsp;
          <a
            className="text-[#B2357E]"
            href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
          >
            https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
          </a>
          &nbsp;(Internet Explorer);
        </p>

        <p>
          (e)&nbsp;
          <a
            className="text-[#B2357E]"
            href="https://support.apple.com/kb/PH21411"
          >
            https://support.apple.com/kb/PH21411
          </a>
          &nbsp;(Safari); and
        </p>

        <p>
          (f)&nbsp;
          <a
            className="text-[#B2357E]"
            href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy"
          >
            https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy
          </a>
          &nbsp;(Edge).
        </p>

        <p>
          Please note that blocking cookies may have a negative impact on the
          functions of many websites, including our Site. Some features of the
          Site may cease to be available to you.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-1-comments"
        >
          1. Comments
        </h2>

        <p>
          If you leave a comment on our website you may opt-in to save your
          name, email address and website (if provided) in cookies. These are
          for your convenience so that you do not have to fill in your details
          again when you leave another comment. This functionality is managed by
          the wpDiscuz plugin (
          <a
            className="text-[#B2357E]"
            href="https://wpdiscuz.com/docs/wpdiscuz-documentation/gdpr/"
          >
            https://wpdiscuz.com/docs/wpdiscuz-documentation/gdpr/
          </a>
          ). These cookies will last for one year.
        </p>

        <p>
          An anonymized string created from your email address (also called a
          hash) may be provided to the Gravatar service to see if you are using
          it. The Gravatar service privacy policy is available here:&nbsp;
          <a className="text-[#B2357E]" href="https://automattic.com/privacy/">
            https://automattic.com/privacy/
          </a>
          . After approval of your comment, your profile picture is visible to
          the public in the context of your comment.
        </p>

        <p>
          Visitor comments may be checked through an automated spam detection
          service.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-2-sponsored-content-tracking-pixels"
        >
          2. Sponsored Content Tracking Pixels
        </h2>

        <p>
          This Site may engage in sponsored campaigns with various influencer
          networks, brands, and agencies. All sponsored content is duly
          disclosed in accordance with the FTC’s requirements. From time to
          time, these sponsored campaigns utilize tracking pixels (aka web
          beacons), which may contain cookies to collect data regarding usage
          and audience. This information is collected by the sponsoring company
          to track the results of the campaign. No personally identifiable
          information collected by the Site is used in conjunction with these
          tracking pixels.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-3-affiliate-program-participation"
        >
          3. Affiliate Program Participation
        </h2>

        <p>
          The Site may engage in affiliate marketing, which is done by embedding
          tracking links into the Site. If you click on a link for an affiliate
          partnership, a cookie will be placed on your browser to track any
          sales for purposes of commissions.
        </p>

        <p>
          The Site is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means
          for sites to earn advertising fees by advertising and links
          to&nbsp;Amazon.com. As part of this Amazon Associates program, the
          Site will post customized links, provided by Amazon, to track the
          referrals to their website. This program utilizes cookies to track
          visits for the purposes of assigning commission on these sales.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-4-newsletters"
        >
          4. Newsletters
        </h2>

        <p>
          On the Site, you may subscribe to our newsletter, which may be used
          for advertising purposes. All newsletters sent may contain tracking
          pixels. The pixel is embedded in emails and allows an analysis of the
          success of online marketing campaigns. Because of these tracking
          pixels, we may see if and when you open an email and which links
          within the email you click. Also, this allows the Site to adapt the
          content of future newsletters to the interests of the user. This
          behaviour will not be passed on to third parties.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-5-changes-to-the-cookie-policy"
        >
          5. Changes to the Cookie Policy
        </h2>

        <p>
          We may change this Cookie Policy from time to time. We refer to
          section 6 of above Privacy Policy.
        </p>

        <h2
          className={`text-2xl ${Poppins700.className} wp-block-heading`}
          id="h-6-contacting-us"
        >
          6. Contacting Us
        </h2>

        <p>
          If you have any questions about this Cookie Policy, or the practices
          of this Site, please contact us at{" "}
          <strong> GuideMyRecipe13@gmail.com.</strong>
        </p>
      </div>
    </>
  );
}

export default page;
