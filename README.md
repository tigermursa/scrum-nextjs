
https://jsonplaceholder.typicode.com/users

{new Date().toLocaleTimeString()}
const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      next :{revalidate :10},
    });
 <p>{new Date().toLocaleTimeString()}</p>

const ServerFetching = async () => {
  const loadBlogData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "force-cache",
    });
    return response.json();
  };

   <!-- {blogs.map(({ id, name, email }) => (
        <div key={id} className="block border border-blue-600 p-2 my-2 hover:font-bold bg-black hover:bg-slate-700 text-white w-2/3 cursor-pointer ">
          <h1>
            {id}.{name}
          </h1>
        </div>
      ))} -->



Rendering in web development is the process of displaying website content on a user's browser





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
