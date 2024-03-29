export function Brands(props: any) {
  return (
    <div className="px-7 md:px-10 pt-24 mx-auto">
      <div className="flex flex-col items-center justify-center text-center w-full md:mb-20 2xl:mb-[8vh]">
        <h1 className="w-fit font-museoModernoLight text-awkbit-fuchsia text-featureTitleGridMobile smallMobileScreen:text-featureTitleGrid md:text-8xl font-normal uppercase md:leading-[0.5] text-end 2xl:text-[17vh] 2xl:leading-[8vh]">
          {props.t1}
          <span className="text-xl smallMobileScreen:text-2xl md:text-5xl font-museoModernoRegular text-awkbit-pinkLight uppercase 2xl:text-[3vw]">
            {props.t2}
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6">
        <div className="flex justify-center items-center">
          <a href={props.t3} target="_blank" aria-label="Go to the RGA page">
            {props.t4}
            {props.t5}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t6}
            target="_blank"
            aria-label="Go to the Tombras page"
          >
            {props.t7}
            {props.t8}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href={props.t9} target="_blank" aria-label="Go to the BKJ page">
            {props.t10}
            {props.t11}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t12}
            target="_blank"
            aria-label="Go to the Appnovation page"
          >
            {props.t13}
            {props.t14}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t15}
            target="_blank"
            aria-label="Go to the Wunderman page"
          >
            {props.t16}
            {props.t17}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t18}
            target="_blank"
            aria-label="Go to the Project Map IT page"
          >
            {props.t19}
            {props.t20}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href={props.t21} target="_blank" aria-label="Go to the ATOS page">
            {props.t22}
            {props.t23}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t24}
            target="_blank"
            aria-label="Go to the Wilson Fletcher page"
          >
            {props.t25}
            {props.t26}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href={props.t27} target="_blank" aria-label="Go to the Tonic page">
            {props.t28}
            {props.t29}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t30}
            target="_blank"
            aria-label="Go to the Paginar page"
          >
            {props.t31}
            {props.t32}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t33}
            target="_blank"
            aria-label="Go to the IT Crowd page"
          >
            {props.t34}
            {props.t35}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t36}
            target="_blank"
            aria-label="Go to the Populicom page"
          >
            {props.t37}
            {props.t38}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t39}
            target="_blank"
            aria-label="Go to the University of San Andres page"
          >
            {props.t40}
            {props.t41}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t42}
            target="_blank"
            aria-label="Go to the University of Belgrano page"
          >
            {props.t43}
            {props.t44}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href={props.t45} target="_blank" aria-label="Go to the BCR page">
            {props.t46}
            {props.t47}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={props.t48}
            target="_blank"
            aria-label="Go to the Argentina page"
          >
            {props.t49}
            {props.t50}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href={props.t51} target="_blank" aria-label="Go to the TedX page">
            {props.t52}
            {props.t53}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href={props.t54} target="_blank" aria-label="Go to the Wobi page">
            {props.t55}
            {props.t56}
          </a>
        </div>
      </div>
    </div>
  );
}
