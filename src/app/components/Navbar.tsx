'use client'

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

export default function Navbar() {
    const [isMenu, setIsMenu] = React.useState(false)


    function Menu() {
        return (
            <div className="bg-blue-500 w-full min-h-screen absolute md:hidden flex-col justify-between">
                <div className="">
                    <div className="m-4 flex justify-between items-center">
                        <h1 className="text-3xl font-bold">Ethereal</h1>
                        <FontAwesomeIcon
                            onClick={() => setIsMenu(!isMenu)}
                            icon={faClose}
                            color="black"
                            className="w-10 h-10 block md:hidden"
                        />
                    </div>
                    <div className="m-4 flex flex-col gap-8">
                        <p className="text-3xl font-bold">Ethereal</p>
                        <p className="text-3xl font-bold">About</p>
                        <p className="text-3xl font-bold">Collection</p>
                        <p className="text-3xl font-bold">Drop</p>
                        <ConnectButton
                            label="Connect Now!"
                            showBalance={true}
                            accountStatus="full"
                            chainStatus={"full"}
                        />
                    </div>
                </div>
            </div>
        );
    }
        
    return (
			<>
				{isMenu ? (
					<Menu />
				) : (
                    <div className="my-4 flex justify-between items-center">
                        <div className="flex gap-10">
                            <h1 className={`text-xl font-bold`}>Ethereal</h1>
                            <div className="hidden md:flex gap-4">
                                <p className="text-xl font-bold">Ethereal</p>
                                <p className="text-xl font-bold">About</p>
                                <p className="text-xl font-bold">Collection</p>
                                <p className="text-xl font-bold">Drop</p>
                            </div>
						</div>
						<div className="hidden md:flex">
							<ConnectButton
								label="Connect Now!"
								showBalance={{
									smallScreen: false,
									largeScreen: true,
								}}
								accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
								chainStatus={"full"}
							/>
						</div>
                        <FontAwesomeIcon
                            onClick={() => setIsMenu(!isMenu)}
							icon={faBars}
							color="white"
							className="w-10 h-10 md:hidden"
						/>
					</div>
				)}
			</>
		);
}