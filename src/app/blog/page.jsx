import Link from "next/link";

export const metadata = {
    title: 'Super blog',
    description: 'Un blog super interesante',
    keywords: ['blog', 'interesante' ]
}

export default async function Post () {
    const data = await getData();
    return (
        <div>
            <h1>Blog de prueba</h1>
            <p>Este es el contenido del blog</p>
            <br/>
            <ul>
                {
                    data.map(({id, title, body}) => (
                        <li key={id}>
                            <Link href={`/blog/${id}`}><h3>{id} -- {title} </h3></Link>
                            <p>{body}</p>
                            <br></br>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}