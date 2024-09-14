/** @type {import('next').NextConfig} */
const nextConfig = {

	async headers() {
		return [
		  {
			source: '/api/(.*)', // Apply headers to API routes
			headers: [
			  {
				key: 'Access-Control-Allow-Origin',
				value: 'https://motsekistore.vercel.app'
			  },
			  {
				key: 'Access-Control-Allow-Methods',
				value: 'GET, OPTIONS, PATCH, DELETE, POST, PUT'
			  },
			  {
				key: 'Access-Control-Allow-Headers',
				value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
			  },
			  {
				key: 'Access-Control-Allow-Credentials',
				value: 'true'
			  }
			]
		  }
		]
	  },
	// crossOrigin: 'anonymous',
	images: {
		domains: ["utfs.io"],
	}
};

export default nextConfig;