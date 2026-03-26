/** @format */

import {
  MdOutlineMedicalServices,
  MdOutlineKeyboardDoubleArrowUp,
  MdAdd,
  MdOutlinePermPhoneMsg,
  MdOutlineSearch,
} from "react-icons/md";

const services = [
  { title: "Care Application", icon: MdOutlineMedicalServices },
  { title: "Upgrading", icon: MdOutlineKeyboardDoubleArrowUp },
  { title: "Care Aids", icon: MdAdd },
  { title: "Care Application", icon: MdOutlinePermPhoneMsg },
  { title: "Product Overview", icon: MdOutlineSearch },
];

export default function ServicesSection() {
  return (
    <section className="w-full  px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-625 overflow-hidden rounded-[14px] bg-card-bg p-6 sm:p-8 lg:p-10">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary ">
          Our Services
        </h2>

        <div className="mx-auto mt-8 grid max-w-300 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={`${service.title}-${index}`}
                className="rounded-xl bg-background p-5 sm:p-6"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#9ad2d3] text-[34px] text-white">
                  <Icon />
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-[#1f5f8f]">
                  {service.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
