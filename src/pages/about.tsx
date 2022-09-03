// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { requiredNamespaces } from "../config/i18n";
import Link from "next/link";
// import { GetServerSideProps, GetStaticProps } from "next";
// import { TextBlock } from "@/about/components";

const About = () => {
  // const { t } = useTranslation();

  return (
    <div>
      {/* <TextBlock /> */}
      {/* <div>{t("app:about:title")}</div> */}
      <div>ABOUT PAGE</div>
      <Link href={"/"} passHref>
        Home
      </Link>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, requiredNamespaces)),
//   },
// });

// export const getServerSideProps: GetServerSideProps = async ({ locale = "en" }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, requiredNamespaces)),
//   },
// });

export default About;
