import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterCopyright from "./FooterCopyright";

import { footerData } from "../data/footerData";

export default function Footer() {
  return (
    <footer className="bg-black pt-5">

      <div className="container">

        <div className="row text-center">

          <div className="col-12">

            <FooterLogo
              logo={footerData.logo}
            />

            <FooterNav />

            <FooterCopyright
              owner={footerData.owner}
            />

          </div>

        </div>

      </div>

    </footer>
  );
}