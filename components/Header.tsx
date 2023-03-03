
"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { FormEvent, useRef } from "react"

function Header() {

	const inputRef = useRef<HTMLInputElement>(null);

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const input = inputRef.current?.value;
		if(!input) return; 

		if(inputRef.current?.value){
			inputRef.current.value = "";
		}

		try {
			// call api to activate scrapper
			// endpoint: /api/activeScraper
		} catch (error) {
			// handle any errors
		}

		// wait for the response to come back


	
	};

  return (
	<header>
		<form 
			className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-emerald-100 max-2-mx-auto"
			onSubmit={handleSearch}
		>
			<input type="text" placeholder="Search..." className="flex-1 outline-none bg-transparent text-emerald-400 placeholder:text-emerald-300"></input>
			<button hidden>Search</button>
			<MagnifyingGlassIcon className="h-6 w-6 text-emerald-500"/>
		</form>
	</header>
  );
}

export default Header