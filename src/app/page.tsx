'use client'
// import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import * as React from 'react'
import dynamic from "next/dynamic";

export default function Home() {

	const VideoComponent = dynamic(() => import("./VideoPlayer"), { ssr: false });

	const [isLoading, setIsLoading] = React.useState<boolean>(false)

	const card = [
		{
			id: 1,
			image:
        "https://i.seadn.io/gae/0zCArK0p84Wu6rqBYDsOxZLgD9IrX_YFQKbvuy5X01WYtEgTTJvH3F_9Medh9jAKCCCSuABu8LKF4ZolpYbn5032ZQKy_krmNehY?auto=format&dpr=1&w=384",
			title: "#9829",
			text: "Ape is Testing Card in this room"
		},
		{
			id: 2,
			image:
        "https://i.seadn.io/gae/0zCArK0p84Wu6rqBYDsOxZLgD9IrX_YFQKbvuy5X01WYtEgTTJvH3F_9Medh9jAKCCCSuABu8LKF4ZolpYbn5032ZQKy_krmNehY?auto=format&dpr=1&w=384",
			title: "#9829",
			text: "Ape is Testing Card in this room"
		},
		{
			id: 3,
			image:
        "https://i.seadn.io/gae/0zCArK0p84Wu6rqBYDsOxZLgD9IrX_YFQKbvuy5X01WYtEgTTJvH3F_9Medh9jAKCCCSuABu8LKF4ZolpYbn5032ZQKy_krmNehY?auto=format&dpr=1&w=384",
			title: "#9829",
			text: "Ape is Testing Card in this room"
		},
		{
			id: 4,
			image:
        "https://i.seadn.io/gae/0zCArK0p84Wu6rqBYDsOxZLgD9IrX_YFQKbvuy5X01WYtEgTTJvH3F_9Medh9jAKCCCSuABu8LKF4ZolpYbn5032ZQKy_krmNehY?auto=format&dpr=1&w=384",
			title: "#9829",
			text: "Ape is Testing Card in this room"
		},
		{
			id: 5,
			image:
        "https://i.seadn.io/gae/0zCArK0p84Wu6rqBYDsOxZLgD9IrX_YFQKbvuy5X01WYtEgTTJvH3F_9Medh9jAKCCCSuABu8LKF4ZolpYbn5032ZQKy_krmNehY?auto=format&dpr=1&w=384",
			title: "#9829",
			text: "Ape is Testing Card in this room"
		},
		{
			id: 6,
			image:
        "https://i.seadn.io/gae/0zCArK0p84Wu6rqBYDsOxZLgD9IrX_YFQKbvuy5X01WYtEgTTJvH3F_9Medh9jAKCCCSuABu8LKF4ZolpYbn5032ZQKy_krmNehY?auto=format&dpr=1&w=384",
			title: "#9829",
			text: "Ape is Testing Card in this room"
		},
	];


return (
	<main className="flex flex-col justify-between">
		<div className="md:mx-10">
			<Navbar />
		</div>

		{/* Header */}
		<VideoComponent />
		<div className="absolute inset-0 h-screen bg-black opacity-30 z-[-1]"></div>
		<div className="h-screen w-full relative top-0 flex flex-col justify-center items-center">
			<h1 className="font-bold text-3xl">
				Ethereal: A New Era of Digital Possession
			</h1>
			<h4 className="font-bold text-xl">
				→ Empowering creators & collectors through blockchain.
			</h4>
		</div>

		{/* Card */}
		<div className="md:mx-10">
			{isLoading ? (
				<div className="">
					<p>Loading...</p>
				</div>
			) : (
				<div className="grid grid-cols-4">
					{card.map((item) => (
						<Card
							title={item.title}
							text={item.text}
							image={item.image}
							key={item.id}
						/>
					))}
				</div>
			)}
		</div>

		<Footer />
	</main>
	// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
	//   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
	//     <Image
	//       className="dark:invert"
	//       src="/next.svg"
	//       alt="Next.js logo"
	//       width={180}
	//       height={38}
	//       priority
	//     />
	//     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
	//       <li className="mb-2">
	//         Get started by editing{" "}
	//         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
	//           src/app/page.tsx
	//         </code>
	//         .
	//       </li>
	//       <li>Save and see your changes instantly.</li>
	//     </ol>

	//     <div className="flex gap-4 items-center flex-col sm:flex-row">
	//       <a
	//         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
	//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         <Image
	//           className="dark:invert"
	//           src="/vercel.svg"
	//           alt="Vercel logomark"
	//           width={20}
	//           height={20}
	//         />
	//         Deploy now
	//       </a>
	//       <a
	//         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
	//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         Read our docs
	//       </a>
	//     </div>
	//   </main>
	//   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
	//     <a
	//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	//       target="_blank"
	//       rel="noopener noreferrer"
	//     >
	//       <Image
	//         aria-hidden
	//         src="/file.svg"
	//         alt="File icon"
	//         width={16}
	//         height={16}
	//       />
	//       Learn
	//     </a>
	//     <a
	//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	//       target="_blank"
	//       rel="noopener noreferrer"
	//     >
	//       <Image
	//         aria-hidden
	//         src="/window.svg"
	//         alt="Window icon"
	//         width={16}
	//         height={16}
	//       />
	//       Examples
	//     </a>
	//     <a
	//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	//       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	//       target="_blank"
	//       rel="noopener noreferrer"
	//     >
	//       <Image
	//         aria-hidden
	//         src="/globe.svg"
	//         alt="Globe icon"
	//         width={16}
	//         height={16}
	//       />
	//       Go to nextjs.org →
	//     </a>
	//   </footer>
	// </div>
);
}
