"use client";
import { CartItems } from "@/store/CartSlice/GetCart";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { toggleCartItem } from "@/store/CartSlice/Cart";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  let { user } = useSelector((state: RootState) => state.loginSlice);
  const { products, loading: cartLoading } = useSelector(
    (state: RootState) => state.getCart
  );
  let router = useRouter();
  if (!user.token) {
    router.push("/");
    return;
  }
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    dispatch(CartItems());
  }, []);

  const calculateTotal = () => {
    return products.reduce((total, item: any) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handleDeleteItem = async (productId: string) => {
    setLoading(true); // Set loading to true when deleting
    setId(productId);
    let res = await dispatch(toggleCartItem(productId));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(CartItems());
    }
    setLoading(false);
  };

  return (
    <section className="mt-[140px] mb-10">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {cartLoading ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <svg
                  className="animate-spin h-10 w-10 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-25"></circle>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M4 12a8 8 0 0116 0"
                    className="opacity-75"></path>
                </svg>
              </div>
            ) : products.length === 0 ? (
              <h2 className="text-center text-3xl">Your cart is Empty</h2>
            ) : (
              <>
                <header className="text-center">
                  <h2 className="text-xl font-bold sm:text-3xl">
                    Your Cart ({products.length})
                  </h2>
                </header>

                <div className="mt-8">
                  <ul className="space-y-4">
                    {products.map((product: any) => (
                      <li key={product._id} className="flex items-center gap-4">
                        <img
                          src={product.product.images[0]}
                          alt={product.product.title}
                          className="size-16 rounded-sm object-cover"
                        />

                        <div>
                          <h3 className="text-sm">{product.product.title}</h3>

                          <dl className="mt-0.5 space-y-px text-sm text-muted-foreground">
                            <div>
                              <dt className="inline">Price: </dt>
                              <dd className="inline">
                                {product.product.price}$
                              </dd>
                            </div>
                          </dl>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-2">
                          <form>
                            <label htmlFor="Line1Qty" className="sr-only">
                              Quantity
                            </label>

                            <input
                              type="number"
                              min="1"
                              value="1"
                              id="Line1Qty"
                              className="h-8 w-12 outline-none rounded-sm border-border bg-accent p-0 text-center text-xs text-muted-foreground"
                            />
                          </form>

                          {loading && product.product._id === id ? (
                            <Loader2
                              size={20}
                              className="animate-spin text-primary"
                            />
                          ) : (
                            <button
                              onClick={() =>
                                handleDeleteItem(product.product._id)
                              }
                              className="text-muted-foreground transition hover:text-red-600">
                              <span className="sr-only">Remove item</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex justify-end border-t border-border pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                      <dl className="space-y-0.5 text-sm text-muted-foreground">
                        <div className="flex justify-between !text-base font-bold">
                          <dt>Total</dt>
                          <dd>{calculateTotal()}$</dd>
                        </div>
                      </dl>

                      <div className="flex justify-end">
                        <Link
                          href="/checkout"
                          className={buttonVariants({ size: "lg" })}>
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
