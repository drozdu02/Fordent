import PortfolioItem from "./portfolio-galery-item";

interface PortofolioGaleryProps {
    items: PortfolioItem[];
    activateFilter: string;
    onFilterChange: (category: string) => void;
}

export default PortofolioGaleryProps;