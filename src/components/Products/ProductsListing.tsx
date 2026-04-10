import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, productsData } from "@/data/ProductListingData"

export default function ProductsListing() {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || "Fire Pumps");
    const [searchQuery,] = useState("");

    // Update selected category when URL parameter changes
    useEffect(() => {
        if (categoryParam && categories.includes(categoryParam)) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    // Scroll to product listing section when component mounts or category changes
    useEffect(() => {
        const section = document.getElementById('product-listing');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [categoryParam]);

    const filteredProducts = productsData.filter(product => {
        const matchesCategory = product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen w-full">
            <div className="grid grid-cols-12">
                {/* Sidebar */}
                <div className="col-span-12 lg:col-span-3 relative">
                    <div className="min-h-screen sticky top-0 bg-secondary ps-10">
                        <div className="py-8">
                            {categories.map((category) => (
                                <div key={category} className="relative overflow-y-auto">
                                    <button
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full text-left px-8 py-4 transition-all duration-200 relative ${selectedCategory === category
                                            ? "text-white font-semibold"
                                            : "text-gray-400 hover:text-gray-200 font-medium"
                                            }`}
                                        style={{
                                            borderBottom: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        {category}
                                    </button>
                                    {/* Triangle Caret Indicator */}
                                    {selectedCategory === category && (
                                        <div
                                            className="absolute right-0 top-1/2 transform -translate-y-1/2"
                                            style={{
                                                width: 0,
                                                height: 0,
                                                borderTop: '12px solid transparent',
                                                borderBottom: '12px solid transparent',
                                                borderRight: '12px solid #f5f5f5'
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="col-span-12 lg:col-span-9" id='product-listing'>
                    <div className="p-8">
                        {/* Category Title */}
                        <h1 className="text-4xl font-bold text-gray-800">
                            {selectedCategory}
                        </h1>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-10">
                                {filteredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white overflow-hidden hover:shadow-md transition-shadow duration-300 rounded-2xl h-full"
                                        style={{ border: '1px solid #e0e0e0' }}
                                    >
                                        <div className="relative h-70 bg-white overflow-hidden group flex items-center justify-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-5 flex flex-col justify-between" style={{ borderTop: '1px solid #e0e0e0' }}>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-2xl text-gray-400">No products found</p>
                                <p className="text-gray-500 mt-2">Try a different product</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}