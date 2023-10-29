import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
	title: "Template Title",
	description: "Template Description",
}

const AppLayout = ({ children }: React.PropsWithChildren) => {
	const inter = Inter({ subsets: ["latin"] })

	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}

export default AppLayout
