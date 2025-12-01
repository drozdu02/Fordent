import GalerySection from "../components/portfolio/galery-section";
import PortfolioHeader from "../components/portfolio/portfolio-header";

export default function Portfolio(){
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <PortfolioHeader/>
            <GalerySection/>
        </div>
    )
}