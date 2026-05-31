"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { serviceNavigation } from "@/data/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/cn";

type ServiceShellProps = {
  activePath: string;
  contentClassName?: string;
  children: React.ReactNode;
  /** @deprecated */
  title?: string;
  /** @deprecated */
  description?: string;
  /** @deprecated */
  actions?: React.ReactNode;
};

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: [0.36, 0, 0.66, 0] } },
};

export function ServiceShell({ activePath, contentClassName, children }: ServiceShellProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeLabel = serviceNavigation.find((item) => item.href === activePath)?.label ?? "메뉴";

  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-1/2 focus:top-4 focus:z-[60] focus:-translate-x-1/2 focus:rounded-full focus:bg-bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
      >
        본문 바로가기
      </a>

      {/* ── Desktop floating pill (sm+) ── */}
      <div className="animate-slide-down fixed top-4 left-0 right-0 z-50 hidden justify-center px-4 sm:flex">
        <nav
          aria-label="주요 서비스"
          className="flex items-center gap-0.5 rounded-full border border-[rgba(0,0,0,0.08)] px-2 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(0,0,0,0.13)]"
          style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(16px)" }}
        >
          {serviceNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium tracking-[-0.01em] transition-all duration-200",
                item.href === activePath
                  ? "bg-[rgba(0,0,0,0.08)] text-fg-default"
                  : "text-fg-muted hover:bg-[rgba(0,0,0,0.05)] hover:text-fg-default active:scale-[0.96]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Mobile floating pill (< sm) ── */}
      <div className="animate-slide-down fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:hidden">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <button
              aria-label="메뉴 열기"
              className="flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] px-3.5 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
              style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(16px)" }}
            >
              <Menu className="h-3.5 w-3.5 text-fg-muted" />
              <span className="text-xs font-medium tracking-[-0.01em] text-fg-default">
                {activeLabel}
              </span>
            </button>
          </DrawerTrigger>

          <DrawerContent side="left" className="w-64 p-0">
            <div className="flex h-full flex-col">
              <div className="border-b border-[rgba(0,0,0,0.08)] px-5 py-4">
                <DrawerTitle className="text-xs font-semibold uppercase tracking-[0.06em] text-fg-muted">
                  메뉴
                </DrawerTitle>
              </div>
              <nav className="flex-1 overflow-y-auto p-3" aria-label="주요 서비스">
                <ul className="space-y-0.5">
                  {serviceNavigation.map((item) => (
                    <li key={item.href}>
                      <DrawerClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex w-full items-center rounded-xl px-4 py-2.5 text-sm font-medium tracking-[-0.015em] transition-colors",
                            item.href === activePath
                              ? "bg-[rgba(0,0,0,0.06)] text-fg-default"
                              : "text-fg-muted hover:bg-[rgba(0,0,0,0.04)] hover:text-fg-default"
                          )}
                        >
                          {item.label}
                        </Link>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <main id="content" className={cn("ds-container pt-20 pb-12", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
