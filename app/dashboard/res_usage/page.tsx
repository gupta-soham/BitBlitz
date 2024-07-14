"use client";

import { useMemo } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { Bold } from "lucide-react";

// This example requires @tanstack/react-table

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const workspaces = [
  {
    PID: 1234,
    Process: "chrome.exe",
    Args: "--no-sandbox --disable-gpu",
  },
  {
    PID: 5678,
    Process: "explorer.exe",
    Args: "/factory,{handler:Factory} -Embedding",
  },
  {
    PID: 9101,
    Process: "notepad.exe",
    Args: "example.txt",
  },
  {
    PID: 1121,
    Process: "cmd.exe",
    Args: '/C "echo Hello World"',
  },
  {
    PID: 3141,
    Process: "python.exe",
    Args: "script.py",
  },
];

const workspacesColumns = [
  {
    header: "Process",
    accessorKey: "Process",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "PID",
    accessorKey: "PID",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Args",
    accessorKey: "Args",
    meta: {
      align: "text-left",
    },
  },
];

const Button = ({
  onClick,
  disabled,
  children,
}: {
  onClick: any;
  disabled: boolean;
  children: any;
}) => {
  return (
    <button
      type="button"
      className="group px-2.5 py-2 text-tremor-default disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default function Example() {
  const pageSize = 8;

  const data = useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [...workspaces, ...workspaces, ...workspaces, ...workspaces],
    []
  );
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  });

  return (
    <>
      <div className="ml-10 mr-auto overflow-scroll no-scrollbar">
        <Table className="mt-10">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-tremor-border dark:border-dark-tremor-border"
              >
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={classNames(header.column.columnDef.meta.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody className="mt-10">
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="bg-slate-700">
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={classNames(cell.column.columnDef.meta.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-tremor-default tabular-nums text-tremor-content dark:text-dark-tremor-content">
            Page{" "}
            <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">{`${
              table.getState().pagination.pageIndex + 1
            }`}</span>{" "}
            of
            <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {" "}
              {`${table.getPageCount()}`}
            </span>
          </p>
          <div className="inline-flex items-center rounded-tremor-full shadow-tremor-input ring-1 ring-inset ring-tremor-ring dark:shadow-dark-tremor-input dark:ring-dark-tremor-ring">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Previous</span>
              <RiArrowLeftSLine
                className="size-5 text-tremor-content-emphasis group-hover:text-tremor-content-strong dark:text-dark-tremor-content-emphasis group-hover:dark:text-dark-tremor-content-strong"
                aria-hidden={true}
              />
            </Button>
            <span
              className="h-5 border-r border-tremor-border dark:border-dark-tremor-border"
              aria-hidden={true}
            />
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Next</span>
              <RiArrowRightSLine
                className="size-5 text-tremor-content-emphasis group-hover:text-tremor-content-strong dark:text-dark-tremor-content-emphasis group-hover:dark:text-dark-tremor-content-strong"
                aria-hidden={true}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
