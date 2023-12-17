import React from 'react'
import './footer.scss'
import { VscSend } from "react-icons/vsc";
import { LiaFacebookF } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

function Footer() {
  return (
    <footer>
      <div className="footerUpBox">
        <div className="footerBox1">
          <h1>Exclusive</h1>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="fotterInputBox">
            <input type="text" placeholder='Enter your email' />
            <VscSend style={{ fontSize: "25px", color: 'white' }} />
          </div>
        </div>
        <div className="footerBox2">
          <h1>Support</h1>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="footerBox2">
          <h1>Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="footerBox2">
          <h1>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footerBox3">
          <h1>Download App</h1>
          <p>Save $3 with App New User Only</p>
          <div className="footerIconAndQrBox">
            <div className="qrCodeBox">
              <img src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1703462400&Signature=aPCBQzZrkUGNi3orOgrVk1mlWyIgyZIRESD-ERB5t1VsqBE2h2uXD48QuI5pHdGCa2IFuLf3OVrpjs3U55jz7zjyrVtj8HC6Y1Z0V20Z9balFC0t3EajAfK4Eyve2OBc5Kew2~O5AodtxSfiVtI73fPW-NFU76He1VAVfCWRT00TuLcTfHwCiy9NMMdiQWp2s3GTe0zkpTBnNjD2iubVX25SwQYoiNUO6XzE~yFV0xaIZulcM0YLvM5PRb4SpSJtnDSZE7WXvdR-nMrYNzsitLkap6mYWhNLtClwROHlNakpGhq1R0rjNHLaxqDHAD~5U9rMdS5chU1Jqd3TdMjEaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="platStoreBox">
              <div className="googlePlayBox">
                <img src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1703462400&Signature=eYZyWnGEvWkYqiet6XsyAHqTXI2oO-uLQU51hSKwIjmlrJgWmI8JymoiJJAfa8O6wr8WnZNEu99-isbCmMhQRWklny2ZzvfkjNuUYV7mAly0NCWCks-iGIgH9Rg2-YaldSjS1lMsO4UBkwT3dY32DRLtzpmIS5yi27yosYg5bsxS4SlVmSqhC-47y7CJXA3zJUFq0-Yc0pr1vw6-6FtMQ1AXCRdGvhlOTAHPDWqLpfv6dNGCYt4NzgZK7RVwtLQMdjwrdSMTBbHojN3rvOBxGTqWSHN1OpJqmr2oAbD9btycCPnCjgmEavNTv1Fgxl2A930MWHwi5trI4851hhMe2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className="appleStoreBox">
                <img src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1703462400&Signature=DA9iA9-OFf~NUjNxX-FRM8SFU7Ik7vWvCkWWYxH~KAUqHM3YSgYPvHYZ-iW7cZrXXyJLk-vdEQ9-l~Hn1RZxWSrxhqpRU0AcTjNUSx473p9MSIkBV6SU0lHRE0VXYZYw0PoM-zWhtrTJw0LqAHSKMngAt0RDJwPSJ6uRCFWHKT6iOtqcR4kcjuc0MEQ~n73RNCsDO54bwtkKU8psNl-JMpJ2tHh8PhPhXdXLLRfGtuYibBt~y0i1xMBOt0hvXqofTg5bXqR1-mQXzm8CYVF2ZnSaY1Y1HetuxuF7U~6IzIPzdkkVyD-qp9PDAdsiffb2LXrXC~xr35QGfG6kN8oReA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
            </div>
          </div>
          <div className="socialmediaBox">
            <div className="oneSocialMediaBox">
              <LiaFacebookF style={{ fontSize: "30px" }} />
            </div>
            <div className="oneSocialMediaBox">
              <FiTwitter style={{ fontSize: "25px" }} />
            </div>
            <div className="oneSocialMediaBox">
            <FaInstagram style={{ fontSize: "30px" }} />
            </div>
            <div className="oneSocialMediaBox">
            <RiLinkedinLine style={{ fontSize: "30px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="footerDownBox">
        <p>© Copyright Rimel 2023. Created By Ali.Ismayil</p>
      </div>
    </footer>
  )
}

export default Footer