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
    PID: 4,
    PPID: 0,
    ImageFileName: "System",
    Handles: 565,
    Thds: 96,
    Sess: 0,
    Wow64: false,
    CreateTime: "2023-07-12 12:34:56.123456",
    ExitTime: null,
  },
  {
    PID: 392,
    PPID: 4,
    ImageFileName: "smss.exe",
    Handles: 29,
    Thds: 2,
    Sess: 0,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:01.123456",
    ExitTime: null,
  },
  {
    PID: 584,
    PPID: 576,
    ImageFileName: "csrss.exe",
    Handles: 497,
    Thds: 11,
    Sess: 1,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:04.123456",
    ExitTime: null,
  },
  {
    PID: 624,
    PPID: 576,
    ImageFileName: "wininit.exe",
    Handles: 75,
    Thds: 3,
    Sess: 1,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:06.123456",
    ExitTime: null,
  },
  {
    PID: 640,
    PPID: 624,
    ImageFileName: "csrss.exe",
    Handles: 497,
    Thds: 13,
    Sess: 2,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:08.123456",
    ExitTime: null,
  },
  {
    PID: 700,
    PPID: 640,
    ImageFileName: "winlogon.exe",
    Handles: 100,
    Thds: 3,
    Sess: 2,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:10.123456",
    ExitTime: null,
  },
  {
    PID: 760,
    PPID: 700,
    ImageFileName: "services.exe",
    Handles: 200,
    Thds: 9,
    Sess: 0,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:12.123456",
    ExitTime: null,
  },
  {
    PID: 804,
    PPID: 760,
    ImageFileName: "lsass.exe",
    Handles: 500,
    Thds: 7,
    Sess: 0,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:14.123456",
    ExitTime: null,
  },
  {
    PID: 848,
    PPID: 804,
    ImageFileName: "lsm.exe",
    Handles: 300,
    Thds: 10,
    Sess: 0,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:16.123456",
    ExitTime: null,
  },
  {
    PID: 1024,
    PPID: 848,
    ImageFileName: "svchost.exe",
    Handles: 400,
    Thds: 8,
    Sess: 0,
    Wow64: false,
    CreateTime: "2023-07-12 12:35:18.123456",
    ExitTime: null,
  },
];

const workspacesColumns = [
  {
    header: "ImageFileName",
    accessorKey: "ImageFileName",
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
    header: "PPID",
    accessorKey: "PPID",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Threads",
    accessorKey: "Threads",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Handles",
    accessorKey: "Handles",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "SessionId",
    accessorKey: "SessionId",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Wow64",
    accessorKey: "Wow64",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "CreateTime",
    accessorKey: "CreateTime",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "ExitTime",
    accessorKey: "ExitTime",
    meta: {
      align: "text-right",
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
