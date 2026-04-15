"use client";

import { useId, useState } from "react";
import { Paperclip, Trash2 } from "lucide-react";
import { Button } from "@/components/ui";

interface FileAttachmentFieldProps {
  label?: string;
  description?: string;
}

export function FileAttachmentField({
  label = "첨부파일",
  description = "PDF, JPG, PNG 파일을 첨부할 수 있습니다. (최대 10MB)",
}: FileAttachmentFieldProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="space-y-2">
      <div>
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <p className="mt-1 text-sm text-fg-muted">{description}</p>
      </div>

      <div className="rounded-md border border-border-default bg-bg-subtle p-3">
        <input
          id={id}
          name="attachments"
          type="file"
          multiple
          className="block w-full rounded-sm border border-border-default bg-bg-surface px-3 py-2 text-sm file:mr-3 file:rounded-sm file:border-0 file:bg-state-info file:px-2.5 file:py-1.5 file:text-sm file:font-medium file:text-fg-inverse"
          onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
        />

        {files.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {files.map((file) => (
              <li
                key={`${file.name}-${file.size}`}
                className="flex items-center justify-between rounded-sm border border-border-default bg-bg-surface px-3 py-2 text-sm"
              >
                <span className="inline-flex items-center gap-1.5 text-fg-default">
                  <Paperclip className="h-4 w-4 text-fg-muted" />
                  {file.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  onClick={() => {
                    setFiles((current) =>
                      current.filter((currentFile) => currentFile.name !== file.name)
                    );
                  }}
                  aria-label={`${file.name} 삭제`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
