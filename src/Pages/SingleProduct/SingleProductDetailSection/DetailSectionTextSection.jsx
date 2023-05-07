import React from "react";
import SingleProductIncreaseDecreaseButton from "../../../Components/Utils/Buttons/SingleProductIncreaseDecreaseButton/SingleProductIncreaseDecreaseButton";

const data = [
  {
    Q: "نوع تکنولوژی باتری :",
    A: "آلکالاین",
  },
  {
    Q: "قابلیت های باتری :",
    A: "ماندگاری طولانی",
  },
  {
    Q: "ولتاژ باتری باتری :",
    A: "۹ ولت",
  },
  {
    Q: "نوع باتری :",
    A: "کتابی",
  },
  {
    Q: "تعداد باتری‌های موجود در پک :",
    A: "۱ عدد",
  },
];

function DetailSectionTextSection({state}) {
  return (
    <section className="w-full px-5 flex-col gap-10 lg:mr-16">
      <h1 className="text-lg text-NeutralN500 font-semibold">باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی</h1>
      <div className="flex-col gap-4">
        <h3 className="text-NeutralN500 font-semibold">ویژگی ها</h3>
        <ul className="flex-col gap-4">
          {data.map(({ Q, A }, index) => (
            <li key={index} className="text-sm text-NeutralN100 flex justify-start items-center gap-2">
              <span className="w-1 h-1 bg-primary6 rounded-full"></span>
              <span className="font-semibold">{Q}</span>
              <strong className="text-NeutralN500 text-sm font-semibold">{A}</strong>
            </li>
          ))}
        </ul>
      </div>
      <SingleProductIncreaseDecreaseButton state={state} />
    </section>
  );
}

export default DetailSectionTextSection;
