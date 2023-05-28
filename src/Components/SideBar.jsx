import { Link } from "react-router-dom"
import React from 'react';
export default function Sidebar() {
    return (
        <div className=" flex border-r-2">
            <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className=" bg-green-500 flex rounded-md text-xl mt-4 font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/"
                                    className=" bg-green-500 flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard"
                                    className=" bg-green-500 flex items-center p-2 space-x-3 rounded-md">
                                    <span>Chart & Map</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}