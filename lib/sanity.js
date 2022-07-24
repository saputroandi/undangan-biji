import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

const config = {
  projectId: "wk8rolv9",
  dataset: "production",
  token:
    "skoGP4Q7jGXu4xAdcLAFWF0z7Jik3UpJJBgJtcxKX4tcxeiXd4lV35EUndKFXmU1D2OYVZt76oKzgWoeNPTrJefhIuSnjWp5tP2AFHcaJw9wFksCKv6ylwTbqwBh7kFEqTyKVLfGEcU4cT4nsSCYCAMBS5uNQn11M0CWa5miJeEzGWthSpCB",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
