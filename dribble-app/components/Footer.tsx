import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

interface ColumnProps {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex flex-col  lg:px-20 py-6 px-5 w-full gap-20 bg-light-white">
      <div className="flex flex-col items-start justify-center">
        <Image src="/logo-purple.svg" width={115} height={38} alt="Flexibble" />
        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          Flexibble is the worlds leading community for creatives to share grow
          and hire.
        </p>
      </div>

      <div className="flex flex-wrap gap-12">
        <FooterColumn
          title={footerLinks[0].title}
          links={footerLinks[0].links}
        />

        <div className="flex flex-1 flex-col">
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColumn
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
        </div>

        <FooterColumn
          title={footerLinks[3].title}
          links={footerLinks[3].links}
        />

        <div className="flex flex-1 flex-col">
          <FooterColumn
            title={footerLinks[4].title}
            links={footerLinks[4].links}
          />
          <FooterColumn
            title={footerLinks[5].title}
            links={footerLinks[5].links}
          />
        </div>
      </div>

      <div className="flex justify-between items-center max-sm:flex-col w-full text-sm font-normal">
        <p>@ 2024 Flexibble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,24</span>
          projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
