import { EmptyState } from "@/components/ui";

export interface DataColumn<T> {
  key: string;
  header: string;
  className?: string;
  render: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  caption?: string;
  columns: DataColumn<T>[];
  rows: readonly T[];
  getRowId: (row: T, index: number) => string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function DataTable<T>({
  caption,
  columns,
  rows,
  getRowId,
  emptyTitle = "데이터가 없습니다",
  emptyDescription = "조회 조건을 변경하거나 다른 검색어를 입력해 주세요.",
}: DataTableProps<T>) {
  if (!rows.length) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-bg-surface shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      <table className="w-full min-w-[42rem] border-collapse">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.025)]">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-5 py-3.5 text-left text-xs font-semibold tracking-[-0.01em] text-fg-muted ${
                  column.className ?? ""
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={getRowId(row, index)}
              className="border-b border-[rgba(0,0,0,0.06)] last:border-b-0 transition-colors duration-150 hover:bg-[rgba(0,0,0,0.02)]"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-5 py-3.5 text-sm tracking-[-0.015em] text-fg-default">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
