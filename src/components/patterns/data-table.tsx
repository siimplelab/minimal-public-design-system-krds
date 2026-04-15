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
    <div className="overflow-x-auto rounded-md border border-border-default bg-bg-surface">
      <table className="w-full min-w-[42rem] border-collapse">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-border-default bg-bg-subtle">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-4 py-3 text-left text-sm font-semibold text-fg-default ${
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
            <tr key={getRowId(row, index)} className="border-b border-border-default last:border-b-0">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-sm text-fg-default">
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
