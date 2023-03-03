import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline"

function HomePage() {
  return (
	<div>
		<div className="flex flex-col items-center justify-center">
			<DocumentMagnifyingGlassIcon className="h-64 w-64 text-emerald-400/20" />

			<h1 className="text-3xl mt-2 text-black font-bold mb-5">Welcome to the amazon web scrapper</h1>

			<h2 className="text-lg italic text-center text-black/50">To learn how to code from ZERO experience, join Panda Bit</h2>
			<h3 className="text-lg text-center italic text-black/50">huntermacias.io</h3>
		</div>
	</div>
  )
}

export default HomePage