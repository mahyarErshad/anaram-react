import { useState } from "react";

function ModalOrders() {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = ["جدیدترین", "ارزان ترین", "گران ترین", "پربازدید ترین", "پرفروش ترین"];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <section className="w-full">
      <ul className="w-full flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className={`${index === selectedItem ? "text-primary6 bg-primary1" : "text-NeutralN90 bg-transparent"} rounded-sm px-3 py-4 text-right w-full text-xs font-semibold duration-300`} onClick={() => handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ModalOrders;
