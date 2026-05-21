import PortofolioGaleryProps from "@/app/lib/interfaces/portfolio-galery-props";
import { categoryLabels } from "@/app/lib/constants/category-labels";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import PortfolioItem from "@/app/lib/interfaces/portfolio-galery-item";
import { X, ZoomIn } from "lucide-react";
import { categoryColors } from "@/app/lib/constants/category-colors";

export default function PortfolioGalery({
  items,
  activateFilter,
  onFilterChange,
}: PortofolioGaleryProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activateFilter === "all"
      ? items
      : items.filter((item) => item.category === activateFilter);

  const filterButtonClass = (active: boolean) =>
    active
      ? "rounded-xl bg-[var(--fd-accent)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(45,143,184,0.35)]"
      : "rounded-xl border border-[var(--fd-border)] bg-white px-6 py-2.5 text-sm font-medium text-muted-fd transition-all hover:border-[var(--fd-accent)] hover:text-[var(--fd-accent)]";

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        <Button
          onClick={() => onFilterChange("all")}
          className={filterButtonClass(activateFilter === "all")}
        >
          Wszystkie
        </Button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <Button
            key={key}
            onClick={() => onFilterChange(key)}
            className={filterButtonClass(activateFilter === key)}
          >
            {label}
          </Button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="card-fd group relative cursor-pointer overflow-hidden"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--fd-navy)]/0 opacity-0 transition-all duration-300 group-hover:bg-[var(--fd-navy)]/45 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                    <ZoomIn className="h-5 w-5 text-[var(--fd-navy)]" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span
                  className={`mb-3 inline-block rounded-lg px-2.5 py-1 text-xs font-semibold ${categoryColors[item.category as keyof typeof categoryColors]}`}
                >
                  {categoryLabels[item.category as keyof typeof categoryLabels]}
                </span>
                <h3 className="mb-2 text-lg">{item.title}</h3>
                {item.description && (
                  <p className="line-clamp-2 text-sm text-muted-fd">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {filteredItems.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="col-span-full py-20 text-center text-muted-fd"
            >
              <p>Brak prac w wybranej kategorii</p>
            </motion.div>
          )}

          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--fd-navy)]/85 p-4 backdrop-blur-sm"
                onClick={() => setSelectedItem(null)}
              >
                <motion.div
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white"
                  onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    e.stopPropagation()
                  }
                >
                  <div className="relative">
                    <Image
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover"
                    />
                    <Button
                      onClick={() => setSelectedItem(null)}
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white hover:bg-[var(--fd-surface)]"
                    >
                      <X className="h-5 w-5 text-[var(--fd-navy)]" />
                    </Button>
                  </div>
                  <div className="p-8">
                    <span
                      className={`mb-4 inline-block rounded-lg px-2.5 py-1 text-xs font-semibold ${categoryColors[selectedItem.category as keyof typeof categoryColors]}`}
                    >
                      {
                        categoryLabels[
                          selectedItem.category as keyof typeof categoryLabels
                        ]
                      }
                    </span>
                    <h2 className="mb-4">{selectedItem.title}</h2>
                    {selectedItem.description && (
                      <p className="leading-relaxed text-muted-fd">
                        {selectedItem.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
