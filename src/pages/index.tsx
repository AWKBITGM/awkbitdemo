import { Brands } from "@/components/Brands";
import { Footer } from "@/components/Footer";
import { Hero3 } from "@/components/Hero3";
import { Services } from "@/components/Services";
import { Textbanner } from "@/components/Textbanner";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Hero3
        t1={
          <Image
            src="/backgroundHero.png"
            width={1512}
            height={982}
            alt=""
            className="absolute top-0 w-full h-full object-cover object-center max-h-[unset] hidden sm:block"
          />
        }
        t2={
          <Image
            src="/backgroundHeroMobile.png"
            width={428}
            height={799}
            alt=""
            className="absolute top-0 w-full h-full object-center max-h-[unset] block sm:hidden"
          />
        }
        t3="/"
        t4={
          <Image
            src="/logoMobile.svg"
            width={126}
            height={50}
            alt="logo"
            className="object-center lg:mb-11 z-40"
          />
        }
        t5="/"
        t6={
          <Image
            src="/logo.svg"
            width={233}
            height={92}
            alt="logo"
            className="w-[14vw]"
          />
        }
        t7="we deliver"
        t8="I'm looking for a"
        t9="BUNCH OF CODERS"
        t10="contact us"
        t11={
          <Image
            src="/sloth.svg"
            width={1361}
            height={1090}
            alt="sloth"
            className="sm:hidden absolute -top-[147%] sm:-top-1/4 -left-16 sm:left-[42%] max-w-[600px] sm:max-w-full h-[700px] sm:h-auto w-[600px] sm:w-full"
          />
        }
        t12="I'm looking for a"
        t13="BUNCH OF CODERS"
        t14="contact us"
      />
      <Textbanner
        t1={<p>Digital Platforms custom-built without the blah-blah</p>}
        t2={<p>We deliver</p>}
      />
      <Services
        t1={
          <Image
            src="/feature1Mobile.svg"
            width={378}
            height={169}
            alt="feature1"
          />
        }
        t2="CODING"
        t3="Coding"
        t4="Staff augmentation grows your team in a flash."
        t5="We elevate development to make groundbreaking projects come true."
        t6={
          <Image
            src="/feature1.svg"
            width={436}
            height={356}
            alt="feature1"
            className="2xl:w-[25vw]"
          />
        }
        t7={<Image src="" width={450} height={200} alt="feature2" />}
        t8="quality—"
        t9="Testing"
        t10="Feedback builds champions.Testers train them."
        t11="Quality Assurance is the reality check of software development. Reap its benefits through staff augmentation or time and materials."
        t12={
          <Image
            src="/feature2.svg"
            width={436}
            height={356}
            alt="feature2"
            className="2xl:w-[25vw]"
          />
        }
        t13={
          <Image
            src="/feature3Mobile.svg"
            width={378}
            height={145}
            alt="feature3"
          />
        }
        t14="optimize"
        t15="your— CLOUD INFRASTRUCTURE"
        t16="devOps"
        t17="Automation is the present-future.DevOps is the way."
        t18="Blend development and Operations. Automate your workflow with Outsourced Staffing."
        t19={
          <Image
            src="/feature3.svg"
            width={436}
            height={356}
            alt="feature3"
            className="2xl:w-[25vw]"
          />
        }
        t20={
          <Image
            src="/feature4Mobile.svg"
            width={378}
            height={166}
            alt="feature4"
          />
        }
        t21="seduce—"
        t22="your users"
        t23="UX—UI"
        t24="Visuals are not just a cosmetic thing.Concept is everything."
        t25="A mind-blowing user interface makes a memorable user experience. We use the right tools for a comprehensive UX—UI design."
        t26={
          <Image
            src="/feature4.svg"
            width={436}
            height={356}
            alt="feature4"
            className="2xl:w-[25vw]"
          />
        }
      />
      <Brands
        t1="Brands—"
        t2="who trust us"
        t3="https://rga.com/"
        t4={
          <Image
            src="/logo-cfr.svg"
            width={172}
            height={172}
            alt="Logo RGA"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t5={
          <Image
            src="/brands-rga.svg"
            width={166}
            height={80}
            alt="Logo CFR"
            className="block sm:hidden object-cover object-center"
          />
        }
        t6="https://tombras.com/"
        t7={
          <Image
            src="/brands-tombras.svg"
            width={172}
            height={172}
            alt="Logo Tombras"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t8={
          <Image
            src="/brands-tombras.svg"
            width={166}
            height={80}
            alt="Logo Tombras"
            className="block sm:hidden object-cover object-center"
          />
        }
        t9="https://www.bkjdigital.com/"
        t10={
          <Image
            src="/brands-bkj.svg"
            width={172}
            height={172}
            alt="Logo BKJ"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t11={
          <Image
            src="/brands-bkj.svg"
            width={166}
            height={81}
            alt="Logo BKJ"
            className="block sm:hidden object-cover object-center"
          />
        }
        t12="https://www.appnovation.com/"
        t13={
          <Image
            src="/logo-Appnovation.svg"
            width={172}
            height={172}
            alt="Logo Appnovation"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t14={
          <Image
            src="/brands-Appnovation.svg"
            width={166}
            height={81}
            alt="Logo Appnovation"
            className="block sm:hidden object-cover object-center"
          />
        }
        t15="https://www.wundermanthompson.com/argentina"
        t16={
          <Image
            src="/logo-wunderman.svg"
            width={172}
            height={172}
            alt="Logo Wunderman"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t17={
          <Image
            src="/brands-wunderman.svg"
            width={166}
            height={81}
            alt="Logo Wunderman"
            className="block sm:hidden object-cover object-center"
          />
        }
        t18="https://projectmapit.com/"
        t19={
          <Image
            src="/brands-PMI.svg"
            width={172}
            height={172}
            alt="Logo PMI"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t20={
          <Image
            src="/brands-PMI.svg"
            width={166}
            height={81}
            alt="Logo PMI"
            className="block sm:hidden object-cover object-center"
          />
        }
        t21="https://worldline.com/"
        t22={
          <Image
            src="/brands-ATOS-wordline.svg"
            width={172}
            height={172}
            alt="Logo ATOS"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t23={
          <Image
            src="/brands-ATOS-wordline.svg"
            width={166}
            height={81}
            alt="Logo ATOS"
            className="block sm:hidden object-cover object-center"
          />
        }
        t24="https://www.wilsonfletcher.com/"
        t25={
          <Image
            src="/logo-wilsonfletcher.svg"
            width={172}
            height={172}
            alt="Logo Wilson Fletcher"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t26={
          <Image
            src="/brands-wilsonfletcher.svg"
            width={166}
            height={81}
            alt="Logo Wilson Fletcher"
            className="block sm:hidden object-cover object-center"
          />
        }
        t27="https://tonic3.com/"
        t28={
          <Image
            src="/brands-tonic3.svg"
            width={172}
            height={172}
            alt="Logo Tonic"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t29={
          <Image
            src="/brands-tonic3.svg"
            width={166}
            height={81}
            alt="Logo Tonic"
            className="block sm:hidden object-cover object-center"
          />
        }
        t30="https://www.paginar.com/"
        t31={
          <Image
            src="/brands-paginar.svg"
            width={172}
            height={172}
            alt="Logo Paginar"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t32={
          <Image
            src="/brands-paginar.svg"
            width={166}
            height={81}
            alt="Logo Paginar"
            className="block sm:hidden object-cover object-center"
          />
        }
        t33="https://www.itcrowd.dev/"
        t34={
          <Image
            src="/brands-itcrowd.svg"
            width={172}
            height={172}
            alt="Logo IT Crowd"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t35={
          <Image
            src="/brands-itcrowd.svg"
            width={166}
            height={81}
            alt="Logo IT Crowd"
            className="block sm:hidden object-cover object-center"
          />
        }
        t36="https://www.populicom.com/"
        t37={
          <Image
            src="/brands-populicom.svg"
            width={172}
            height={172}
            alt="Logo Populicom"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t38={
          <Image
            src="/brands-populicom.svg"
            width={166}
            height={81}
            alt="Logo Populicom"
            className="block sm:hidden object-cover object-center"
          />
        }
        t39="https://www.udesa.edu.ar/en"
        t40={
          <Image
            src="/brands-UDSA.svg"
            width={172}
            height={172}
            alt="Logo University of San Andres"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t41={
          <Image
            src="/brands-UDSA.svg"
            width={166}
            height={81}
            alt="Logo University of San Andres"
            className="block sm:hidden object-cover object-center"
          />
        }
        t42="https://www.ub.edu.ar/"
        t43={
          <Image
            src="/brands-UB.svg"
            width={172}
            height={172}
            alt="Logo University of Belgrano"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t44={
          <Image
            src="/brands-UB.svg"
            width={166}
            height={81}
            alt="Logo University of Belgrano"
            className="block sm:hidden object-cover object-center"
          />
        }
        t45="https://www.bcr.com.ar/es"
        t46={
          <Image
            src="/brands-BCR.svg"
            width={172}
            height={172}
            alt="Logo BCR"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t47={
          <Image
            src="/brands-BCR.svg"
            width={166}
            height={81}
            alt="Logo BCR"
            className="block sm:hidden object-cover object-center"
          />
        }
        t48="https://www.argentina.gob.ar/inpi"
        t49={
          <Image
            src="/brands-argentina.svg"
            width={172}
            height={172}
            alt="Logo Argentina.gob.ar"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t50={
          <Image
            src="/brands-argentina.svg"
            width={166}
            height={81}
            alt="Logo Argentina.gob.ar"
            className="block sm:hidden object-cover object-center"
          />
        }
        t51="https://tedxriodelaplata.org/"
        t52={
          <Image
            src="/brands-tedx.svg"
            width={172}
            height={172}
            alt="Logo TedX"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t53={
          <Image
            src="/brands-tedx.svg"
            width={166}
            height={81}
            alt="Logo TedX"
            className="block sm:hidden object-cover object-center"
          />
        }
        t54="https://www.wobi.com/"
        t55={
          <Image
            src="/brands-wobi.svg"
            width={172}
            height={172}
            alt="Logo Wobi"
            className="hidden sm:block object-cover object-center 2xl:w-[31vh]"
          />
        }
        t56={
          <Image
            src="/brands-wobi.svg"
            width={166}
            height={81}
            alt="Logo Wobi"
            className="block sm:hidden object-cover object-center"
          />
        }
      />
      <Footer
        t1={
          <Image
            src="/footer.svg"
            width={1512}
            height={720}
            alt=""
            className="absolute bottom-0 w-full object-cover object-center max-h-[unset] hidden sm:block"
          />
        }
        t2={
          <Image
            src="/footerMobile.svg"
            width={428}
            height={720}
            alt=""
            className="absolute top-0 w-full h-full object-cover object-center max-h-[unset] block sm:hidden"
          />
        }
        t3="Join on Social"
        t4="https://twitter.com/AwkbitV2"
        t5={
          <Image
            src="/twitter.svg"
            width={24}
            height={19}
            alt="footer"
            className="sm:w-7 lg:w-[2vw]"
          />
        }
        t6="https://www.linkedin.com/company/awkbit"
        t7={
          <Image
            src="/linkedin.svg"
            width={20}
            height={21}
            alt="footer"
            className="sm:w-7 lg:w-[2vw]"
          />
        }
        t8="https://awkbit.medium.com/"
        t9={
          <Image
            src="/medium.svg"
            width={25}
            height={14}
            alt="footer"
            className="sm:w-7 lg:w-[2vw]"
          />
        }
        t10="Copyright © 2024 All rights reserved | Powered by"
        t11="/"
        t12="Awkbit"
      />
    </>
  );
}
