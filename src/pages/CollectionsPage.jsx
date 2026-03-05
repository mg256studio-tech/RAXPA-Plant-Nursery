import { collectionsData } from "../data/products";
import CollectionGrid from "../components/CollectionGrid";

export default function CollectionsPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32">
      {Object.entries(collectionsData).map(([key, collection]) => (
        <div key={key}>
          <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-20 bg-gray-50 border-b border-gray-200">
            <div className="max-w-[1440px] mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-2">
                {collection.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                {collection.subtitle}
              </p>
            </div>
          </div>
          <CollectionGrid
            products={collection.products}
            title={collection.title}
            feature={collection.feature}
          />
        </div>
      ))}
    </div>
  );
}
