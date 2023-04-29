import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as SettingsIcon } from "../../../assets/images/icons/settings-icon.svg";
import "./styles.css";
import ProductsPageCards from "./ProductsPageCards/ProductsPageCards";
import ReactPaginate from "react-paginate";

function ProductsPageCardsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 4;
  const items = Array.from({ length: 12 }, (_, i) => i + 1);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const displayItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="w-full max-md:mt-6 md:mt-12">
      <Tabs>
        <TabList className="flex justify-start items-center gap-4 mb-4">
          <SettingsIcon />
          <span className="text-NeutralN500 text-sm font-semibold">
            مرتب سازی:
          </span>
          <div className="flex-center gap-6">
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">
              پرفروش‌ترین
            </Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">
              ارزان‌ترین
            </Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">
              گران‌ترین
            </Tab>
          </div>
        </TabList>
        <TabPanel className="w-full flex justify-start items-center flex-wrap gap-4 max-w-[82.75rem]">
          {displayItems.map((_, index) => {
            return <ProductsPageCards key={index} />;
          })}
        </TabPanel>
      </Tabs>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-4"}
        pageClassName={
          "inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"
        }
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={
          "inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"
        }
        nextClassName={
          "inline-block mx-2 px-3 py-2 bg-gray-300 text-gray-600 rounded-lg"
        }
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </div>
  );
}

export default ProductsPageCardsSection;
