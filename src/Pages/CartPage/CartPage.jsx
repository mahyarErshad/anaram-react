import React, { useCallback, useState } from "react";
import CartHasValue from "../../Components/CartPage/CartHasValue";
import CartIsEmpty from "../../Components/CartPage/CartIsEmpty";
import Modal from "../../Components/Modal/Modal";
import CartModal from "../../Components/CartPage/CartModal";

function CartPage() {
  const [data, setData] = useState([1, 2, 3]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = useCallback((index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  }, []);
  return (
    <section className="flex items-start max-w-[82.5rem] w-full mx-auto rounded-2xl p-6 bg-white mt-16 mb-72 gap-14">
      {data.length > 0 ? <CartHasValue data={data} handleClick={handleClick} /> : <CartIsEmpty data={data} />}
      <Modal isOpen={modalOpen} children={<CartModal />} />
    </section>
  );
}

export default CartPage;
