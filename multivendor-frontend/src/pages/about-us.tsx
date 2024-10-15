import Layout from "@/components/Layout";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Layout>
      <Box className="relative bg-black mb-10">
        <Image
          src="/assets/image/about.png"
          alt="about"
          width={1200} // Adjusted width for performance
          height={600}
          className="rounded-md opacity-50"
        />
        <h3 className="absolute text-[24px] font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          About Our Company
        </h3>
      </Box>
      <Box className="mt-4 px-0 sm:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Box className="bg-white p-4 py-8 rounded-md shadow mb-10 flex flex-col gap-3">
            <p>
              Lorem&nbsp;<strong>ipsum&nbsp;</strong>dolor sit amet,&nbsp;
              <em>
                <strong>consectetur&nbsp;</strong>
              </em>
              adipiscing elit.&nbsp;<em>Cras&nbsp;</em>dictum massa et dolor
              porta, rhoncus faucibus magna elementum. Sed porta mattis mollis.
              Donec ut est pretium, pretium nibh porttitor,&nbsp;
              <a href="https://google.com/" target="_blank">
                suscipit&nbsp;
              </a>
              metus. Sed viverra felis sed elit vehicula sodales. Nullam ante
              ante, tristique vel tincidunt ac, egestas eget sem. Sed lorem
              nunc, pellentesque vel ipsum venenatis, pellentesque interdum
              orci. Suspendisse mauris dui, accumsan at dapibus sed, volutpat
              quis erat. Nam fringilla nisl eu nunc lobortis, feugiat posuere
              libero venenatis. Nunc risus lorem, ornare eget congue in, pretium
              quis enim. Pellentesque elit elit, pharetra eget nunc at, maximus
              pellentesque diam.
            </p>
            <p>
              Praesent fermentum finibus lacus. Nulla tincidunt lectus sed purus
              facilisis hendrerit. Maecenas volutpat elementum orci, tincidunt
              euismod ante facilisis ac. Integer dignissim iaculis varius.
              Mauris iaculis elit vel posuere pellentesque. Praesent a mi sed
              neque ullamcorper dignissim sed ut nibh. Sed purus dui, sodales in
              varius in, accumsan at libero. Vestibulum posuere dui et orci
              tincidunt, ac consequat felis venenatis.
            </p>
            <p>
              Morbi sodales, nisl iaculis fringilla imperdiet, metus tortor
              semper quam, a fringilla nulla dui nec dolor. Phasellus lacinia
              aliquam ligula sed porttitor. Cras feugiat eros ut arcu commodo
              dictum. Integer tincidunt nisl id nisl consequat molestie. Integer
              elit tortor, ultrices sit amet nunc vitae, feugiat tempus mauris.
              Morbi volutpat consectetur felis sed porttitor. Praesent in urna
              erat.
            </p>
            <p>
              Aenean mollis luctus dolor, eu interdum velit faucibus eu.
              Suspendisse vitae efficitur erat. In facilisis nisi id arcu
              scelerisque bibendum. Nunc a placerat enim. Donec pharetra, velit
              quis facilisis tempus, lectus est imperdiet nisl, in tempus tortor
              dolor iaculis dolor. Nunc vitae molestie turpis. Nam vitae
              lobortis massa. Nam pharetra non felis in porta.
            </p>
            <p>
              Vivamus pulvinar diam vel felis dignissim tincidunt. Donec
              hendrerit non est sed volutpat. In egestas ex tortor, at convallis
              nunc porttitor at. Fusce sed cursus risus. Nam metus sapien,
              viverra eget felis id, maximus convallis lacus. Donec nec lacus
              vitae ex hendrerit ultricies non vel risus. Morbi malesuada ipsum
              iaculis augue convallis vehicula. Proin eget dolor dignissim,
              volutpat purus ac, ultricies risus. Pellentesque semper, mauris et
              pharetra accumsan, ante velit faucibus ex, a mattis metus odio vel
              ligula. Pellentesque elementum suscipit laoreet. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Integer a turpis sed massa blandit iaculis.
              Sed aliquet, justo vestibulum euismod rhoncus, nisi dui fringilla
              sapien, non tempor nunc lectus vitae dolor. Suspendisse potenti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dictum massa et dolor porta, rhoncus faucibus magna elementum. Sed
              porta mattis mollis. Donec ut est pretium, pretium nibh porttitor,
              suscipit metus. Sed viverra felis sed elit vehicula sodales.
              Nullam ante ante, tristique vel tincidunt ac, egestas eget sem.
              Sed lorem nunc, pellentesque vel ipsum venenatis, pellentesque
              interdum orci. Suspendisse mauris dui, accumsan at dapibus sed,
              volutpat quis erat. Nam fringilla nisl eu nunc lobortis, feugiat
              posuere libero venenatis. Nunc risus lorem, ornare eget congue in,
              pretium quis enim. Pellentesque elit elit, pharetra eget nunc at,
              maximus pellentesque diam.
            </p>
            <p>
              Praesent fermentum finibus lacus. Nulla tincidunt lectus sed purus
              facilisis hendrerit. Maecenas volutpat elementum orci, tincidunt
              euismod ante facilisis ac. Integer dignissim iaculis varius.
              Mauris iaculis elit vel posuere pellentesque. Praesent a mi sed
              neque ullamcorper dignissim sed ut nibh. Sed purus dui, sodales in
              varius in, accumsan at libero. Vestibulum posuere dui et orci
              tincidunt, ac consequat felis venenatis.
            </p>
            <p>
              Morbi sodales, nisl iaculis fringilla imperdiet, metus tortor
              semper quam, a fringilla nulla dui nec dolor. Phasellus lacinia
              aliquam ligula sed porttitor. Cras feugiat eros ut arcu commodo
              dictum. Integer tincidunt nisl id nisl consequat molestie. Integer
              elit tortor, ultrices sit amet nunc vitae, feugiat tempus mauris.
              Morbi volutpat consectetur felis sed porttitor. Praesent in urna
              erat.
            </p>
            <p>
              Aenean mollis luctus dolor, eu interdum velit faucibus eu.
              Suspendisse vitae efficitur erat. In facilisis nisi id arcu
              scelerisque bibendum. Nunc a placerat enim. Donec pharetra, velit
              quis facilisis tempus, lectus est imperdiet nisl, in tempus tortor
              dolor iaculis dolor. Nunc vitae molestie turpis. Nam vitae
              lobortis massa. Nam pharetra non felis in porta.
            </p>
            <p>
              Vivamus pulvinar diam vel felis dignissim tincidunt. Donec
              hendrerit non est sed volutpat. In egestas ex tortor, at convallis
              nunc porttitor at. Fusce sed cursus risus. Nam metus sapien,
              viverra eget felis id, maximus convallis lacus. Donec nec lacus
              vitae ex hendrerit ultricies non vel risus. Morbi malesuada ipsum
              iaculis augue convallis vehicula. Proin eget dolor dignissim,
              volutpat purus ac, ultricies risus. Pellentesque semper, mauris et
              pharetra accumsan, ante velit faucibus ex, a mattis metus odio vel
              ligula. Pellentesque elementum suscipit laoreet. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Integer a turpis sed massa blandit iaculis.
              Sed aliquet, justo vestibulum euismod rhoncus, nisi dui fringilla
              sapien, non tempor nunc lectus vitae dolor. Suspendisse potenti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dictum massa et dolor porta, rhoncus faucibus magna elementum. Sed
              porta mattis mollis. Donec ut est pretium, pretium nibh porttitor,
              suscipit metus. Sed viverra felis sed elit vehicula sodales.
              Nullam ante ante, tristique vel tincidunt ac, egestas eget sem.
              Sed lorem nunc, pellentesque vel ipsum venenatis, pellentesque
              interdum orci. Suspendisse mauris dui, accumsan at dapibus sed,
              volutpat quis erat. Nam fringilla nisl eu nunc lobortis, feugiat
              posuere libero venenatis. Nunc risus lorem, ornare eget congue in,
              pretium quis enim. Pellentesque elit elit, pharetra eget nunc at,
              maximus pellentesque diam.
            </p>
            <p>
              Praesent fermentum finibus lacus. Nulla tincidunt lectus sed purus
              facilisis hendrerit. Maecenas volutpat elementum orci, tincidunt
              euismod ante facilisis ac. Integer dignissim iaculis varius.
              Mauris iaculis elit vel posuere pellentesque. Praesent a mi sed
              neque ullamcorper dignissim sed ut nibh. Sed purus dui, sodales in
              varius in, accumsan at libero. Vestibulum posuere dui et orci
              tincidunt, ac consequat felis venenatis.
            </p>
            <p>
              Morbi sodales, nisl iaculis fringilla imperdiet, metus tortor
              semper quam, a fringilla nulla dui nec dolor. Phasellus lacinia
              aliquam ligula sed porttitor. Cras feugiat eros ut arcu commodo
              dictum. Integer tincidunt nisl id nisl consequat molestie. Integer
              elit tortor, ultrices sit amet nunc vitae, feugiat tempus mauris.
              Morbi volutpat consectetur felis sed porttitor. Praesent in urna
              erat.
            </p>
            <p>
              Aenean mollis luctus dolor, eu interdum velit faucibus eu.
              Suspendisse vitae efficitur erat. In facilisis nisi id arcu
              scelerisque bibendum. Nunc a placerat enim. Donec pharetra, velit
              quis facilisis tempus, lectus est imperdiet nisl, in tempus tortor
              dolor iaculis dolor. Nunc vitae molestie turpis. Nam vitae
              lobortis massa. Nam pharetra non felis in porta.
            </p>
            <p>
              Vivamus pulvinar diam vel felis dignissim tincidunt. Donec
              hendrerit non est sed volutpat. In egestas ex tortor, at convallis
              nunc porttitor at. Fusce sed cursus risus. Nam metus sapien,
              viverra eget felis id, maximus convallis lacus. Donec nec lacus
              vitae ex hendrerit ultricies non vel risus. Morbi malesuada ipsum
              iaculis augue convallis vehicula. Proin eget dolor dignissim,
              volutpat purus ac, ultricies risus. Pellentesque semper, mauris et
              pharetra accumsan, ante velit faucibus ex, a mattis metus odio vel
              ligula. Pellentesque elementum suscipit laoreet. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Integer a turpis sed massa blandit iaculis.
              Sed aliquet, justo vestibulum euismod rhoncus, nisi dui fringilla
              sapien, non tempor nunc lectus vitae dolor. Suspendisse potenti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dictum massa et dolor porta, rhoncus faucibus magna elementum. Sed
              porta mattis mollis. Donec ut est pretium, pretium nibh porttitor,
              suscipit metus. Sed viverra felis sed elit vehicula sodales.
              Nullam ante ante, tristique vel tincidunt ac, egestas eget sem.
              Sed lorem nunc, pellentesque vel ipsum venenatis, pellentesque
              interdum orci. Suspendisse mauris dui, accumsan at dapibus sed,
              volutpat quis erat. Nam fringilla nisl eu nunc lobortis, feugiat
              posuere libero venenatis. Nunc risus lorem, ornare eget congue in,
              pretium quis enim. Pellentesque elit elit, pharetra eget nunc at,
              maximus pellentesque diam.
            </p>
            <p>
              Praesent fermentum finibus lacus. Nulla tincidunt lectus sed purus
              facilisis hendrerit. Maecenas volutpat elementum orci, tincidunt
              euismod ante facilisis ac. Integer dignissim iaculis varius.
              Mauris iaculis elit vel posuere pellentesque. Praesent a mi sed
              neque ullamcorper dignissim sed ut nibh. Sed purus dui, sodales in
              varius in, accumsan at libero. Vestibulum posuere dui et orci
              tincidunt, ac consequat felis venenatis.
            </p>
            <p>
              Morbi sodales, nisl iaculis fringilla imperdiet, metus tortor
              semper quam, a fringilla nulla dui nec dolor. Phasellus lacinia
              aliquam ligula sed porttitor. Cras feugiat eros ut arcu commodo
              dictum. Integer tincidunt nisl id nisl consequat molestie. Integer
              elit tortor, ultrices sit amet nunc vitae, feugiat tempus mauris.
              Morbi volutpat consectetur felis sed porttitor. Praesent in urna
              erat.
            </p>
            <p>
              Aenean mollis luctus dolor, eu interdum velit faucibus eu.
              Suspendisse vitae efficitur erat. In facilisis nisi id arcu
              scelerisque bibendum. Nunc a placerat enim. Donec pharetra, velit
              quis facilisis tempus, lectus est imperdiet nisl, in tempus tortor
              dolor iaculis dolor. Nunc vitae molestie turpis. Nam vitae
              lobortis massa. Nam pharetra non felis in porta.
            </p>
            <p>
              Vivamus pulvinar diam vel felis dignissim tincidunt. Donec
              hendrerit non est sed volutpat. In egestas ex tortor, at convallis
              nunc porttitor at. Fusce sed cursus risus. Nam metus sapien,
              viverra eget felis id, maximus convallis lacus. Donec nec lacus
              vitae ex hendrerit ultricies non vel risus. Morbi malesuada ipsum
              iaculis augue convallis vehicula. Proin eget dolor dignissim,
              volutpat purus ac, ultricies risus. Pellentesque semper, mauris et
              pharetra accumsan, ante velit faucibus ex, a mattis metus odio vel
              ligula. Pellentesque elementum suscipit laoreet. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Integer a turpis sed massa blandit iaculis.
              Sed aliquet, justo vestibulum euismod rhoncus, nisi dui fringilla
              sapien, non tempor nunc lectus vitae dolor. Suspendisse potenti.
            </p>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutUs;
