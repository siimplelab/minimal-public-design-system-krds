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
        <label htmlFor={id} className="text-sm font-medium tracking-[-0.015em] text-fg-default">
          {label}
        </label>
        <p className="mt-1.5 text-sm tracking-[-0.015em] text-fg-muted">{description}</p>
      </div>

      <div className="rounded-[0.625rem] bg-bg-subtle p-3">
        <input
          id={id}
          name="attachments"
          type="file"
          multiple
          className="block w-full rounded-[0.625rem] border border-[rgba(0,0,0,0.10)] bg-bg-surface px-4 py-3 text-sm tracking-[-0.015em] file:mr-3 file:rounded-md file:border-0 file:bg-[#0071e3] file:px-3 file:py-1 file:text-xs file:font-medium file:text-white"
          onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
        />

        {files.length > 0 ? (
          <ul className="mt-2.5 space-y-1.5">
            {files.map((file) => (
              <li
                key={`${file.name}-${file.size}`}
                className="flex items-center justify-between rounded-[0.625rem] bg-bg-surface px-4 py-2.5 text-sm"
              >
                <span className="inline-flex items-center gap-1.5 text-fg-default">
                  <Paperclip className="h-3.5 w-3.5 text-fg-muted" />
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
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
