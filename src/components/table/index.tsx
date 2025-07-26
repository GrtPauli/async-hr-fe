// src/components/common/DataTable.tsx
import React from "react";
import AppLoader from "../loader";

interface Column {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title?: string;
  description?: string;
  loading?: boolean;
  emptyMessage?: string;
}

function DataTable({
  columns,
  data,
  title,
  description,
  loading = false,
  emptyMessage = "No data available",
}: DataTableProps) {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      {(title || description) && (
        <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
          {title && (
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {description}
            </p>
          )}
        </header>
      )}
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="p-2">
                    <div
                      className={`font-semibold text-${column.align || "left"}`}
                    >
                      {column.header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {loading ? (
                <tr>
                  <td colSpan={columns.length} className="p-4 text-center">
                    <div className="flex justify-center items-center space-x-2 p-20">
                        <AppLoader/>
                    </div>
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="p-20 text-center text-gray-500 dark:text-gray-400"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column) => {
                      const value = row[column.key];
                      return (
                        <td key={column.key} className="p-2">
                          <div className={`text-${column.align || "left"}`}>
                            {column.render ? column.render(value, row) : value}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
