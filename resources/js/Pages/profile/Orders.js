import Pagination from "@/componentss/Pagination";
import { formatCurrency } from "@/helpers/helpers";
import { Link } from "@inertiajs/inertia-react";

import MyAccount from "./MyAccount";

const Orders = (props) => {
    console.log(props.orders);
    return (
        <MyAccount active="orders" title="Commandes">
            <table className="w-full rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="p-4 bg-gray-100 text-heading font-medium text-left">
                            Commande
                        </th>

                        <th className="p-4 bg-gray-100 text-heading font-medium text-left">
                            Date
                        </th>
                        <th className="p-4 bg-gray-100 text-heading font-medium text-left">
                            État
                        </th>
                        <th className="p-4 bg-gray-100 text-heading font-medium text-left">
                            Total
                        </th>
                        {/* <th className="p-4 bg-gray-100 text-heading font-medium text-left">
                            Opciones
                        </th> */}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {props.orders.data.map((order, index) => (
                        <tr key={index}>
                            <td className="px-4 py-5 text-left underline">
                                <Link
                                    href={route("order_details", [order.order])}
                                >
                                    #{order.order}
                                </Link>
                            </td>
                            <td className="px-4 py-5 text-left ">
                                {order.created_at}
                            </td>
                            <td className="px-4 py-5 text-left ">
                                {order.state == "successful" && (
                                    <span className="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Réussi
                                    </span>
                                )}
                                {order.state == "refunded" && (
                                    <span className="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        Remboursé
                                    </span>
                                )}
                                {order.state == "CELED" && (
                                    <span className="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        Annulé
                                    </span>
                                )}
                            </td>
                            <td className="px-4 py-5 text-left ">
                                {formatCurrency(order.total)}
                            </td>
                            {/* <td className="px-4 py-5 text-left ">
                                <button>Cancelar pedido</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="border-t border-gray-200 px-4 py-5 ">
                <Pagination data={props.orders} />
            </div>
        </MyAccount>
    );
};

export default Orders;
