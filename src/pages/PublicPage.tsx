export default function PublicPage() {
  return (
    <div className="text-gray-800">
<header className="bg-white shadow sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
    <div className="text-2xl font-bold text-red-600">🍽️ Restora</div>
    <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
      <a href="#" className="hover:text-red-500">Home</a>
      <a href="#menu" className="hover:text-red-500">Menu</a>
      <a href="#offers" className="hover:text-red-500">Offers</a>
      <a href="#contact" className="hover:text-red-500">Contact</a>
    </nav>
    <div className="flex items-center gap-4">
      <select className="border rounded px-2 py-1 text-sm">
        <option>EN</option>
        <option>BN</option>
      </select>
      <button className="md:hidden text-2xl">☰</button>
    </div>
  </div>
  <div className="border-t">
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border px-3 py-2 rounded-md"
        />
        <button className="text-white bg-red-500 px-4 py-2 rounded-md">🔍</button>
      </div>
    </div>
  </div>
</header>

<section className="text-center py-16 bg-gray-50" id="home">
  <h1 className="text-4xl font-bold text-gray-800">🍽️ Restaurant Menu</h1>
  <p className="text-lg text-gray-600 mt-2">Breakfast Served All Day!</p>

  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl mx-auto">
    <div className="text-center">
      <div className="text-3xl">🔥</div>
      <h4 className="font-semibold text-red-600 mt-2">Featured</h4>
    </div>
    <div className="text-center">
      <div className="text-3xl">🍔</div>
      <h4 className="font-semibold text-yellow-600 mt-2">Burgers</h4>
    </div>
    <div className="text-center">
      <div className="text-3xl">🍛</div>
      <h4 className="font-semibold text-green-600 mt-2">Rice Meals</h4>
    </div>
    <div className="text-center">
      <div className="text-3xl">🥤</div>
      <h4 className="font-semibold text-blue-600 mt-2">Drinks</h4>
    </div>
    <div className="text-center">
      <div className="text-3xl">🍰</div>
      <h4 className="font-semibold text-pink-600 mt-2">Desserts</h4>
    </div>
    <div className="text-center">
      <div className="text-3xl">🥗</div>
      <h4 className="font-semibold text-emerald-600 mt-2">Salads</h4>
    </div>
    <div className="text-center">
      <div className="text-3xl">🥪</div>
      <h4 className="font-semibold text-orange-600 mt-2">Sandwiches</h4>
    </div>
  </div>
</section>

<section id="offers" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">🎉 Special Offers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
        <h3 className="font-semibold text-xl mb-2">Buy 1 Get 1 Free</h3>
        <p className="text-gray-600">On all burgers every Friday!</p>
      </div>
      <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
        <h3 className="font-semibold text-xl mb-2">Combo Meal Discount</h3>
        <p className="text-gray-600">Get 20% off with drink + dessert combos</p>
      </div>
      <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
        <h3 className="font-semibold text-xl mb-2">Free Delivery</h3>
        <p className="text-gray-600">On orders above ৳500</p>
      </div>
    </div>
  </div>
</section>

<section id="contact" className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">📞 Contact Us</h2>
    <form className="grid gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="border px-4 py-2 rounded-md w-full"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border px-4 py-2 rounded-md w-full"
      />
      <textarea
        placeholder="Your Message"
        rows="4"
        className="border px-4 py-2 rounded-md w-full"
      ></textarea>
      <button
        type="submit"
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

<footer className="bg-gray-900 text-gray-200 py-10 mt-12">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
    <div>
      <h4 className="font-bold mb-4">🍽️ Restora</h4>
      <p>Delicious food made fresh every day. Visit us or order online!</p>
    </div>
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#menu" className="hover:underline">Menu</a></li>
        <li><a href="#offers" className="hover:underline">Offers</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-4">Newsletter</h4>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Email address"
          className="px-3 py-2 rounded-md w-full text-gray-800"
        />
        <button className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600">
          Subscribe
        </button>
      </form>
    </div>
  </div>
  <p className="text-center text-sm text-gray-400 mt-8">
    © 2025 Restora. All rights reserved.
  </p>
</footer>

    </div>
  );
}
