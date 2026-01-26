import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">PRIME</div>
          </Link>
          <p>Mexico, KKare bldg., Addis Ababa, Ethiopia</p>
          <span className="font-semibold">contact@prime.com</span>
          <span className="font-semibold">+251 94 xxx xxxx</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
            />
            <Image src="/tiktok.png" alt="TikTok" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="Pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="X" width={16} height={16} />
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/affiliates">Affiliates</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/new">New Arrivals</Link>
              <Link href="/accessories">Accessories</Link>
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/products">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/support">Customer Services</Link>
              <Link href="/account">My Account</Link>
              <Link href="/stores">Find a Store</Link>
              <Link href="/legal">Legal and Privacy</Link>
              <Link href="/gift-cards">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">FOLLOW US</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-prime text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="Discover" width={40} height={20} />
            <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="MasterCard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>© 2025 Prime Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <span className="text-gray-500 mr-4">Language</span>
          <span className="font-medium">Ethiopia | English</span>
        </div>
        <div>
          <span className="text-gray-500 mr-4">Currency</span>
          <span className="font-medium">ETB</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
