import BestSellingProduct from "../components/best-selling/best-selling";
import Cards from "../components/cards/cards";
import Products from "../components/products/products";
import Recentevents from "../components/recent-events/recent-events";
import RevenueStats from "../components/revenue-stats/revenue-stats";
import SalesStats from "../components/sales-by-stats/sales-by-stats";
import Social from "../components/social-media/social-media";
import SummaryChart from "../components/summary-chart/summary-chart";

export default function Home() {
  return (
  
<main className="w-full">
  <div className="max-w-[1600px] mx-auto px-4 py-6 grid gap-6">

    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      <div className="lg:col-span-1">
        <Cards />
      </div>

      <div className="lg:col-span-2">
        <SummaryChart />
      </div>
    </section>

    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
      <SalesStats />

      <div className="flex flex-col gap-6">
        <RevenueStats />
        <BestSellingProduct />
      </div>

      <Recentevents />
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      <div>
        <Social />
      </div>

      <div className="md:col-span-2">
        <Products />
      </div>
    </section>

  </div>
</main>

  );
}