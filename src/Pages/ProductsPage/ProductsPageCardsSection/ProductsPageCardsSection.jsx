import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as SettingsIcon } from "../../../assets/images/icons/settings-icon.svg";
import "./styles.css";
import ProductsPageCards from "./ProductsPageCards/ProductsPageCards";
import ReactPaginate from "react-paginate";
import { ReactComponent as PaginateButton } from "../../../assets/images/icons/carousel-button-arrow.svg";
import styles from "./pagination.module.css"

function ProductsPageCardsSection() {
  const [activePage, setActivePage] = useState(0);
  const array = Array.from({ length: 32 }, (_, i) => i + 1);
  const cardsPerPage = 12;
  const pageCount = Math.ceil(array.length / cardsPerPage);

  const handlePageChange = ({ selected }) => {
    setActivePage(selected);
  };

  return (
    <div className="w-full max-md:mt-6 md:mt-12">
      <Tabs>
        <TabList className="flex justify-start items-center gap-4 mb-4">
          <SettingsIcon />
          <span className="text-NeutralN500 text-sm font-semibold">مرتب سازی:</span>
          <div className="flex-center gap-6">
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">پرفروش‌ترین</Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">ارزان‌ترین</Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">گران‌ترین</Tab>
          </div>
        </TabList>
        <TabPanel className="w-full flex justify-start items-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.slice(activePage * cardsPerPage, (activePage + 1) * cardsPerPage).map((_, index) => {
            return <ProductsPageCards key={index} />;
          })}
        </TabPanel>
        <TabPanel className="w-full flex justify-start items-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.slice(activePage * cardsPerPage, (activePage + 1) * cardsPerPage).map((_, index) => {
            return <ProductsPageCards discountCard key={index} />;
          })}
        </TabPanel>
        <TabPanel className="w-full flex justify-start items-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.slice(activePage * cardsPerPage, (activePage + 1) * cardsPerPage).map((_, index) => {
            return <ProductsPageCards outOfStock key={index} />;
          })}
        </TabPanel>
      </Tabs>
      <ReactPaginate nextLabel={<PaginateButton />} previousLabel={<PaginateButton />} pageCount={pageCount} onPageChange={handlePageChange} containerClassName={"flex justify-center mt-4"} pageClassName={"inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"} activeClassName={"bg-blue-500 text-white"} previousClassName={"inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"} nextClassName={"inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"} disabledClassName={"opacity-50 cursor-not-allowed"} />
    </div>
  );
}

export default ProductsPageCardsSection;
