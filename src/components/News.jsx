const News = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-indigo-600 text-center mb-10">Latest News & Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <span className="text-xs text-indigo-500 font-bold">June 2026</span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">Summer Mega Sale is Live!</h3>
          <p className="text-gray-600 mt-2">Get up to 50% off on all fashion items starting this week...</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <span className="text-xs text-indigo-500 font-bold">May 2026</span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">Top 5 Gadgets of the Year</h3>
          <p className="text-gray-600 mt-2">Discover the tech trends that are reshaping how we live and work...</p>
        </div>
      </div>
    </div>
  );
};

export default News;