import { useTranslation } from "next-i18next";
import { FormProvider, useForm } from "react-hook-form";
import urljoin from "url-join";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { requiredNamespaces } from "@/config/i18n";
import Link from "next/link";
import { GetStaticProps } from "next";
// import { GetServerSideProps } from "next";
import { TextBlock } from "@/about/components";
import Head from "next/head";
import { atomicClassNames } from "@/utils";
import {
  Box,
  Button,
  Flex,
  FooterContainer,
  Grid,
  GridContainer,
  GridItem,
  Header,
  Hidden,
  Spacer,
  Stack,
} from "@/shared/components";
import { IMeta, Meta } from "@/shared/layouts/components";
import { styled } from "@/config";
import { IllustrationLock } from "@/shared/illustrations";
import { useCallback } from "react";

export const DashboardBox = styled("div", {
  background: "$system-white",
  borderTop: "1px solid $neutrals-4",
  padding: "$16",
  display: "flex",
  flexDirection: "column",

  "@md": {
    backgroundColor: "$neutrals-0",
    border: "1px solid $neutrals-4",
    paddingY: 32,
    paddingX: 40,
  },

  "& > *": {
    width: "100%",
  },

  variants: {
    fullHeight: {
      true: {
        minHeight: "calc(100vh - $256)",
        "@md": {
          minHeight: "calc(100vh - $128)",
        },
      },
    },
  },
});

export type AmenityFormState = {
  [key: string]: boolean;
};

const About = () => {
  const { t } = useTranslation();

  const metaData: IMeta = {
    title: t("app:about:title"),
    description: "About me info",
    url: urljoin("http://localhost:3000/", "about"),
  };

  // const defaultValues = listingAmenities.reduce((prev, cur) => {
  //   return {
  //     ...prev,
  //     [`amenity-${cur.id}`]: true,
  //   };
  // }, {});
  const defaultValues = {
    apple: false,
    orange: false,
    lemon: false,
  };

  const methods = useForm<AmenityFormState>({ defaultValues });

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Meta {...metaData} />

      <Box
        className={atomicClassNames({ display: "flex" })}
        css={{ flexDirection: "column", minHeight: "100vh" }}
      >
        <Header>
          <Hidden below="md">123</Hidden>
          <Hidden above="md">456</Hidden>
          <Spacer size={32} horizontal />
          <Link href={"/"} passHref>
            Home
          </Link>
        </Header>

        <Spacer size={{ "@initial": 0, "@md": 32 }} />

        <GridContainer
          fullBleed={{ "@initial": true, "@md": false }}
          css={{ maxWidth: "1400px" }}
        >
          <Box
            css={{
              "@md": {
                minHeight: `calc((var(--vh) * 100) - $128)`,
              },
            }}
          >
            <DashboardBox fullHeight>
              <Grid
                columns={{ "@md": "320px 1fr" }}
                gap={{ "@initial": 8, "@md": 16 }}
                columnGap={32}
              >
                <GridItem>
                  <Box css={{ width: "$128", height: "$128" }}>
                    <IllustrationLock scribble />
                  </Box>
                </GridItem>

                <GridItem>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                      <Spacer size={24} />
                      <Stack space={16} dividers>
                        {["apple", "orange", "lemon"].map((i) => (
                          <Box key={i}>{i}</Box>
                        ))}
                      </Stack>

                      <Spacer size={24} />

                      <Flex
                        direction={{ "@initial": "column", "@lg": "row" }}
                        css={{
                          minHeight: "$128",
                          "@lg": {
                            minHeight: "auto",
                          },
                        }}
                      >
                        <Button
                          type="submit"
                          size="medium"
                          full={{ "@initial": true, "@md": false }}
                          // loading={saveState === "saving"}
                          // disabled={saveState === "saving"}
                          css={{
                            paddingX: "$64",
                            marginBottom: "$16",
                            "@lg": {
                              marginBottom: 0,
                              marginRight: "$16",
                            },
                          }}
                        >
                          {t("app:about.form.button")}
                        </Button>
                      </Flex>
                    </form>
                  </FormProvider>
                </GridItem>
              </Grid>
            </DashboardBox>
          </Box>
        </GridContainer>

        <Spacer size={{ "@initial": 0, "@md": 32 }} />

        <Box css={{ marginTop: "auto" }}>
          <FooterContainer />
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, requiredNamespaces)),
  },
});

// export const getServerSideProps: GetServerSideProps = async ({ locale = "en" }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, requiredNamespaces)),
//   },
// });

export default About;
