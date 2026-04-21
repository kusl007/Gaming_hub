import Link from "next/link";
import { notFound } from "next/navigation";
import { getHardwareById, hardwareData } from "@/lib/hardware-data";

type HardwareDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function HardwareDetailPage({
  params,
}: HardwareDetailPageProps) {
  const { id } = await params;
  const product = getHardwareById(Number(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = hardwareData
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground pb-16">
      <div className="border-b border-gray-800 bg-surface py-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-400">
            <Link href="/" className="hover:text-neon-purple transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/hardware"
              className="hover:text-neon-purple transition-colors"
            >
              Hardware
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="rounded-2xl border border-gray-800 bg-surface/30 p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-[360px] w-full object-contain"
            />
          </div>

          <div className="rounded-2xl border border-gray-800 bg-surface/40 p-8">
            <p className="text-neon-purple uppercase tracking-widest text-xs">
              {product.category}
            </p>
            <h1 className="text-4xl font-black text-white mt-3 mb-3">
              {product.title}
            </h1>
            <p className="text-gray-400">{product.platform}</p>
            <div className="mt-6 flex items-end gap-3">
              {product.oldPrice ? (
                <span className="text-gray-500 line-through">
                  {product.oldPrice}
                </span>
              ) : null}
              {product.discount ? (
                <span className="text-red-400">{product.discount}</span>
              ) : null}
              <span className="text-4xl font-black text-white">
                {product.price}
              </span>
            </div>
            <p className="mt-6 text-gray-300 leading-relaxed">
              {product.description}
            </p>
            <button className="mt-8 w-full rounded-lg bg-neon-purple px-4 py-3 font-bold text-white transition hover:brightness-110">
              Add to cart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 rounded-2xl border border-gray-800 bg-surface/40 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Product Description
            </h2>
            <p className="text-gray-300 leading-relaxed">{product.description}</p>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">
              Key Specifications
            </h3>
            <ul className="space-y-3">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-center gap-3 text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-neon-purple" />
                  {spec}
                </li>
              ))}
            </ul>
          </section>

          <aside className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              Similar Hardware
            </h2>
            <div className="space-y-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/hardware/${item.id}`}
                  className="block rounded-xl border border-gray-800 p-4 hover:border-neon-purple/50 transition-colors"
                >
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.category}</p>
                  <p className="text-neon-purple font-bold mt-2">{item.price}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
