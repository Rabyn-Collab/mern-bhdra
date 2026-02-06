import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "./orderApi.js";
import { base } from "../../app/mainApi.js";

export default function OrderPage() {
  const { user } = useSelector((state) => state.userSlice);
  const { data: orders = [], isLoading, error } = useGetOrdersQuery(user.token);




  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold animate-pulse">Loading orders...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-medium">{error?.data?.message || "Something went wrong"}</p>
      </div>
    );

  if (!orders.length)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No orders found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-md transition"
          >
            {/* Order Header */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-500">Order ID</p>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                {order._id.slice(-6).toUpperCase()}
              </span>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${base}/${order.user?.image}`}
                alt={order.user?.username}
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold leading-none">{order.user?.username}</p>
                <p className="text-xs text-gray-500">{order.user?.email}</p>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-3 mb-4">
              {order.products.map((p) => (
                <div
                  key={p._id}
                  className="flex gap-3 border rounded-xl p-3"
                >
                  {/* Product Image */}
                  <img
                    src={`${base}/${p.product?.image[0]}`}
                    alt={p.product?.title}
                    className="w-16 h-16 rounded-lg object-cover border"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <p className="font-semibold text-sm line-clamp-1">
                      {p.product?.title}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {p.product?.detail}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">
                        Qty: {p.quantity}
                      </span>
                      <span className="text-sm font-semibold">
                        Rs. {p.product?.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t">
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className="text-lg font-bold">Rs. {order.totalAmount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
