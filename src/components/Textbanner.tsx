export function Textbanner(props: any) {
  return (
    <div className="p-5 pt-0 sm:pt-14 lg:p-10 lg:pt-20 mb-5 md:m-0 lg:mb-32">
      <p className="font-ubuntuRegular text-awkbit-pinkLight text-xl lg:text-textBanner text-center uppercase mb-5 lg:mb-12 2xl:text-[3vw] 2xl:leading-[3vw]">
        {props.t1}
      </p>
      <h1 className="text-textBanner lg:text-titleBanner text-awkbit-purple font-museoModernoRegular text-center uppercase 2xl:text-[7vw] 2xl:leading-[7vw]">
        {props.t2}
      </h1>
    </div>
  );
}
