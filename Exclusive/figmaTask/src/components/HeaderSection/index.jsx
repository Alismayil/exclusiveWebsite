import React from 'react'
import './headeSection.scss'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { HiArrowLongRight } from "react-icons/hi2";
import { RiArrowDropRightLine } from "react-icons/ri";

function HeaderSection() {
  return (
    <section id='headerSection'>
        <div className="headerSectionLeftBox">
            <div className="filterBox">
                <ul>
                    <li>Woman’s Fashion <RiArrowDropRightLine className='filerIcon' /></li>
                    <li>Men’s Fashion <RiArrowDropRightLine className='filerIcon' /></li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>
        </div>
        <div className="headerSectionRightBox">
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{display:"flex"}}>
        <div className='swiperLeftBox'>
            <div className="appleLogo">
                <img src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1703462400&Signature=Ehc6r~QIMMYJt8QLVDfUs8VIY4el~esNY7mbbDhFI0B47RHrpjHJlCktxQE0MNvv~i08cM-JHGG0Sq4PFlHlXl3NWjedT~51T0d5PMkfY0IfO651hTzbDRjqLhmgOQZLoz1Bn6LIzU-uCKLQgkrbLx6PjRnCPb-knvLJKm5OnWA5rxQ2FFSFSykW2GCi~Nj-d6BT1dwHJOwV4bgDNhuqVVMCSJSi7AHGc2t26qYYSn23PAo~5Pe3pcY4eSxW8Zc~Dxzmdu9qTh3XICQAPwl1FS6zYbaLHuwFCewordykdmKcqYD8jpeeMlGbK~wT7QWTWPdY1sF1OKXGhPYX94fw4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <p>iPhone 14 Series</p>
            </div>
            <div className="phoneInform">
                <p>Up to 10% off Voucher</p>
            </div>
            <div className="headerBtn">
                 <p>Shop Now</p>
                 <span>  <HiArrowLongRight className='headerIcon' /></span>
            </div>
        </div>
        <div className='swiperRightBox'>  
             <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
             </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex"}}>
        <div className='swiperLeftBox'>
            <div className="appleLogo">
                <img src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1703462400&Signature=Ehc6r~QIMMYJt8QLVDfUs8VIY4el~esNY7mbbDhFI0B47RHrpjHJlCktxQE0MNvv~i08cM-JHGG0Sq4PFlHlXl3NWjedT~51T0d5PMkfY0IfO651hTzbDRjqLhmgOQZLoz1Bn6LIzU-uCKLQgkrbLx6PjRnCPb-knvLJKm5OnWA5rxQ2FFSFSykW2GCi~Nj-d6BT1dwHJOwV4bgDNhuqVVMCSJSi7AHGc2t26qYYSn23PAo~5Pe3pcY4eSxW8Zc~Dxzmdu9qTh3XICQAPwl1FS6zYbaLHuwFCewordykdmKcqYD8jpeeMlGbK~wT7QWTWPdY1sF1OKXGhPYX94fw4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <p>iPhone 14 Series</p>
            </div>
            <div className="phoneInform">
                <p>Up to 10% off Voucher</p>
            </div>
            <div className="headerBtn">
                 <p>Shop Now</p>
                 <span>  <HiArrowLongRight className='headerIcon' /></span>
            </div>
        </div>
        <div className='swiperRightBox'>  
             <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
             </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex"}}>
        <div className='swiperLeftBox'>
            <div className="appleLogo">
                <img src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1703462400&Signature=Ehc6r~QIMMYJt8QLVDfUs8VIY4el~esNY7mbbDhFI0B47RHrpjHJlCktxQE0MNvv~i08cM-JHGG0Sq4PFlHlXl3NWjedT~51T0d5PMkfY0IfO651hTzbDRjqLhmgOQZLoz1Bn6LIzU-uCKLQgkrbLx6PjRnCPb-knvLJKm5OnWA5rxQ2FFSFSykW2GCi~Nj-d6BT1dwHJOwV4bgDNhuqVVMCSJSi7AHGc2t26qYYSn23PAo~5Pe3pcY4eSxW8Zc~Dxzmdu9qTh3XICQAPwl1FS6zYbaLHuwFCewordykdmKcqYD8jpeeMlGbK~wT7QWTWPdY1sF1OKXGhPYX94fw4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <p>iPhone 14 Series</p>
            </div>
            <div className="phoneInform">
                <p>Up to 10% off Voucher</p>
            </div>
            <div className="headerBtn">
                 <p>Shop Now</p>
                 <span>  <HiArrowLongRight className='headerIcon' /></span>
            </div>
        </div>
        <div className='swiperRightBox'>  
             <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
             </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex"}}>
        <div className='swiperLeftBox'>
            <div className="appleLogo">
                <img src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1703462400&Signature=Ehc6r~QIMMYJt8QLVDfUs8VIY4el~esNY7mbbDhFI0B47RHrpjHJlCktxQE0MNvv~i08cM-JHGG0Sq4PFlHlXl3NWjedT~51T0d5PMkfY0IfO651hTzbDRjqLhmgOQZLoz1Bn6LIzU-uCKLQgkrbLx6PjRnCPb-knvLJKm5OnWA5rxQ2FFSFSykW2GCi~Nj-d6BT1dwHJOwV4bgDNhuqVVMCSJSi7AHGc2t26qYYSn23PAo~5Pe3pcY4eSxW8Zc~Dxzmdu9qTh3XICQAPwl1FS6zYbaLHuwFCewordykdmKcqYD8jpeeMlGbK~wT7QWTWPdY1sF1OKXGhPYX94fw4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <p>iPhone 14 Series</p>
            </div>
            <div className="phoneInform">
                <p>Up to 10% off Voucher</p>
            </div>
            <div className="headerBtn">
                 <p>Shop Now</p>
                 <span>  <HiArrowLongRight className='headerIcon' /></span>
            </div>
        </div>
        <div className='swiperRightBox'>  
             <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
             </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex"}}>
        <div className='swiperLeftBox'>
            <div className="appleLogo">
                <img src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1703462400&Signature=Ehc6r~QIMMYJt8QLVDfUs8VIY4el~esNY7mbbDhFI0B47RHrpjHJlCktxQE0MNvv~i08cM-JHGG0Sq4PFlHlXl3NWjedT~51T0d5PMkfY0IfO651hTzbDRjqLhmgOQZLoz1Bn6LIzU-uCKLQgkrbLx6PjRnCPb-knvLJKm5OnWA5rxQ2FFSFSykW2GCi~Nj-d6BT1dwHJOwV4bgDNhuqVVMCSJSi7AHGc2t26qYYSn23PAo~5Pe3pcY4eSxW8Zc~Dxzmdu9qTh3XICQAPwl1FS6zYbaLHuwFCewordykdmKcqYD8jpeeMlGbK~wT7QWTWPdY1sF1OKXGhPYX94fw4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <p>iPhone 14 Series</p>
            </div>
            <div className="phoneInform">
                <p>Up to 10% off Voucher</p>
            </div>
            <div className="headerBtn">
                 <p>Shop Now</p>
                 <span>  <HiArrowLongRight className='headerIcon' /></span>
            </div>
        </div>
        <div className='swiperRightBox'>  
             <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
             </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default HeaderSection