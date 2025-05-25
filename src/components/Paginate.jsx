import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import TransactionList from "@/pages/TransactionList";

import React, { useState } from "react";

export default function Paginate({ transactions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalpages = Math.ceil(transactions.length / itemsPerPage);

  const handlePagechange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startPage = (currentPage - 1) * itemsPerPage;
  const endPage = startPage + itemsPerPage;
  const PaginatedData = transactions.slice(startPage, endPage);

  return (
    <>
      <TransactionList transactions={PaginatedData} />
      {transactions.length > 0 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  currentPage > 1 && handlePagechange(currentPage - 1)
                }
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink>{currentPage}</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < totalpages && handlePagechange(currentPage + 1)
                }
                className={
                  currentPage === totalpages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
