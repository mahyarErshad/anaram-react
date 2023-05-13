import React from "react";

function SingleProductTable() {
  const data = [
    {
      Q: "نوع باتری",
      A: "کتابی",
    },
    {
      Q: "ولتاژ باتری باتری",
      A: "۹ ولت",
    },
    {
      Q: "نوع تکنولوژی باتری",
      A: "آلکالاین",
    },
    {
      Q: "قابلیت های باتری",
      A: "ماندگاری طولانی",
    },
    {
      Q: "تعداد باتری‌های موجود در پک",
      A: "۱ عدد",
    },
  ];
  return (
    <ul>
      {data.map(({ Q, A }, index) => {
        return (
          <li key={index} className="flex items-center py-3 px-6 odd:bg-NeutralN10 even:bg-white">
            <span className="text-NeutralN100 text-sm w-[13.4375rem] border-l border-NeutralN30 h-10 flex items-center">{Q}</span>
            <span className="text-sm text-NeutralN500 font-semibold flex-grow pr-10">{A}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SingleProductTable;
