import PortofolioGaleryProps from "@/app/lib/interfaces/portfolio-galery-props"
import { categoryLabels } from "@/app/lib/constants/category-labels";
import { Button } from "@/components/ui/button";
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image";
import PortfolioItem from "@/app/lib/interfaces/portfolio-galery-item";
import { Badge, X, ZoomIn } from "lucide-react";
import { categoryColors } from "@/app/lib/constants/category-colors";

export default function PortfolioGalery({
    items, 
    activateFilter,
    onFilterChange
}: PortofolioGaleryProps) {
    
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const filteredItems = activateFilter === "all"
        ? items
        : items.filter(item => item.category === activateFilter);

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button
                    onClick={() => onFilterChange("all")}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        activateFilter === "all"
                            ? "bg-[#0EA5E9] text-white shadow-lg shadow-sky-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                    Wszystkie
                </Button>

                {Object.entries(categoryLabels).map(([key, label]) => (
                    <Button
                        key={key}
                        onClick={() => onFilterChange(key)}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            activateFilter === key
                                ? "bg-[#0EA5E9] text-white shadow-lg shadow-sky-200"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {label}
                    </Button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="aspect-4/3 overflow-hidden">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                                    <ZoomIn className="w-6 h-6 text-[#1E3A5F]" />
                                </div>
                            </div>

                            <div className="p-5">
                                <Badge className={`${categoryColors[item.category as keyof typeof categoryColors]} mb-3`}>
                                    {categoryLabels[item.category as keyof typeof categoryLabels]}
                                </Badge>


                                <h3 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {filteredItems.length === 0 && (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="col-span-full text-center py-16 text-gray-500"
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
                            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedItem(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                    onClick={(e : React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                                >
                                    <div className="relative">
                                        <Image 
                                        src={selectedItem.imageUrl}
                                        alt={selectedItem.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                        />
                                        <Button
                                        onClick={() => setSelectedItem(null)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                        >
                                            <X className="w-5 h-5"/>
                                        </Button>
                                    </div>
                                    <div className="p-8">
                                        <Badge
                                        className={`${categoryColors[selectedItem.category as keyof typeof categoryColors]} mb-4`}
                                        >
                                            {categoryLabels[selectedItem.category as keyof typeof categoryLabels]}
                                        </Badge>
                                        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                                            {selectedItem.title}
                                        </h2>
                                        {selectedItem.description && (
                                            <p className="text-gray-600 leading-relaxed">
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