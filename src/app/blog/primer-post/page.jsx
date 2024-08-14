import Image from "next/image"
import Link from "next/link"

export default function PrimerPost () {
    return (
        <div>
            <h1>Primer Post</h1>
            <p>Este es el primer post</p>
            <Image src="/img/imagen1.jpg" alt="Primer Post" width={300} height={300} />
            <Link href="/"> Ir a la pagina principal</Link>
            <br/>
            <a href="/">Ejemplo con ancla</a>
        </div>
    )
}