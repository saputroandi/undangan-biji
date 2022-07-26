import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

const config = {
  projectId: "nv6y9czx",
  dataset: "production",
  token:
    "skAEAwe3aMUglUHoHMPwiqwEwImspMXHVNmur42zVS4Kxi7mBynANGj4ERWBJx2VWX027T8reWRrxcU79q4YjXDizuLv9XqOb95HJDHabgWTgrHj7Wnvxkwt7ckYLhkGRFORx6WIPfo5capWfsXB0UwPIFpDJTPxNcE0ZGwG5hIM6gm1T8VC",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
