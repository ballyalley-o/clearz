import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Bounded } from "components"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;
/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
        <div className="grid">
          <div className="grid h-screen place-items-center">
            <PrismicRichText field={slice.primary.heading} />
            <PrismicRichText field={slice.primary.subheading} />
            <PrismicRichText field={slice.primary.body} />
            <PrismicNextLink field={slice.primary.button_link}>
              {slice.primary.button_text}
            </PrismicNextLink>
          </div>
          <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">
            <PrismicNextImage field={slice.primary.cans_image} />
            <PrismicRichText field={slice.primary.second_heading} />
            <PrismicRichText field={slice.primary.second_body} />
          </div>
        </div>



    </Bounded>
  );
};

export default Hero;
