import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="homefooter">
      <div className="firstFooterSect">
        <div className="topper">
          <img src="/xtbLogo.svg" alt="company logo" />
          <span></span>
          <div className="socials_1">
            <a href="https://twitter.com/xtbglobalhungary">
              <img src="/twitter.svg" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/xtbglobalhungary">
              <img src="/insta.svg" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/xtbglobalhungary">
              <img src="/facebook.svg" alt="facebook" />
            </a>
            <a href="viber://chat?number=+4466536366545">
              <img src="/viber.svg" alt="viber" />
            </a>
            <a href="https://t.me/CryptocomOfficial">
              <img src="/telegram.svg" alt="telegram" />
            </a>
          </div>
        </div>
        <div className="faller">
          <div className="leftFaller">
            <Link href={"/signup"} className="unitoptionFaller">
              <p>REGISTER</p>
            </Link>
            <Link href={"/signin"} className="unitoptionFaller">
              <p>SIGN IN</p>
            </Link>
            <Link href={"/about"} className="unitoptionFaller">
              <p>ABOUT</p>
            </Link>
            <Link href={"/contact"} className="unitoptionFaller">
              <p>CONTACT</p>
            </Link>
            <a href="#Offers" className="unitoptionFaller">
              <p>Offers</p>
            </a>
          </div>
          <div className="centerFaller">
            <h4>ADDRESSES:</h4>
            <h2 style={{ all: "unset" }}>
              The Company does not have a physical presence in Hungary(HU).
              Hungarian(HU) telephone numbers are provided for clients’
              convenience. The Company operates from Cyprus and Customer Support
              is provided by XTB SA - HQ in Poland.
            </h2>
            <div>
              <div className="address_1">
                <h5>HUNGARY</h5>
                <p>
                  BRANCH <br />
                  XTB GLOBAL Pikioni 10, Épület: Highsight Rentals Ltd 3075,
                  Limassol, Ciprus
                </p>
                <p>CONTACT@xtbglobal.HU</p>
                <p>MON-SUN, 24/7</p>
              </div>
              <div className="address_1">
                <h5>POLAND</h5>
                <p>BRANCH XTB S.A. ul. Prosta 67 00-838 Warszawa</p>
                <p>CONTACT@xtbglobal.PL</p>
                <p>MON-FRI, 24/7</p>
              </div>
            </div>
          </div>
          <div className="rightfaller fancybg">
            <h4>Get Started With XTB GLOBAL </h4>
            <a href="#Offers" className="fancyBtn">
              Join Us
            </a>
          </div>
        </div>
      </div>
      <div className="secndFootersect">
        <div className="left">
          <p>
            The financial instruments we offer, especially CFDs, can be highly
            risky. Fractional Shares (FS) is an acquired from XTB fiduciary
            right to fractional parts of stocks and ETFs. FS are not a separate
            financial instrument. The limited corporate rights are associated
            with FS.
          </p>
          <p>
            This page was created for investors residing in Hungary. You should
            consider whether you understand how financial instruments work and
            whether you can afford to take the high risk of losing your money.
            They may not be suitable for everyone, so please ensure you fully
            understand all of the risks.
          </p>
        </div>
      </div>
      <div className="thirdfooterSect">
        <p>Copyright © 2018 - 2024 XtbglobalCompany.com All rights reserved.</p>
        <p>Loyalty | Security | Profit</p>
      </div>
    </footer>
  );
};

export default Footer;
