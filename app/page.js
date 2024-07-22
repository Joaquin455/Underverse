import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
    <div className="background">
        <Image src="/Images/Doodle-Sphere.jpg" alt="background" fill={true} />
    </div>
         <nav>
            <h1>
                <span>UNDERVERSE</span>
            </h1>
           <section>
            <a href="#inicio">
                <button>
                    Inicio
                </button>
            </a>
            <a href="#who-we-are">
                <button>
                    Sinopsis
                </button>
            </a>
            <a href="#carta">
                <button>
                    Personajes
                </button>
            </a>
            <a href="#buzon">
                <button>
                    Anadir comentarios
                </button>
            </a>
            <Link href={"/auth"}>
                <button>
                    Login
                </button>
            </Link>  
           </section>
            <span className="menu" id="menu">
                <a href="#inicio">
                    <button>
                        Inicio
                    </button>
                </a>
                <a href="#who-we-are" >
                    <button>
                        Sinopsis
                    </button>
                </a>
                <a href="#carta" >
                    <button>
                        Personajes
                    </button>
                </a>
                <a href="#buzon" >
                    <button>
                        Comentarios
                    </button>
                </a>
                <Link href={"/auth"}>
                <button>
                    Login
                </button>
            </Link> 
            </span>
            </nav>
        <div className="init" id="inicio">
            <section>
                <h1>
                    Conoce la historia y a los personajes de <span>UNDERVERSE</span>
                </h1>
                <p>
                    En este nuevo multiverso de Undertale, descubriras nuevas historias, rutas y personajes con los que tendrás momentos inolvidables. Además de vivir una gran aventura para enfrentar un peligro más grande: "El Evento-X (The X-Event)". Te presentamos tu nueva historia en UNDERVERSE:
                </p>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dPAPmzV_qAE?si=WBmh_u0Gptxs1qlp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </div>
            <div className="second-section" id="who-we-are">
              <section>
                <h2>
                    Sinopsis
                </h2>
                <p>
                    La serie comienza con la introducción de Cross, un Sans proveniente del universo "XTale", el cual fue destruido debido a una serie de eventos catastróficos. Desesperado por restaurar su hogar y en busca de venganza, Cross roba un poderoso objeto conocido como el "X-Event" y comienza a viajar a diferentes universos alternativos de "Undertale" para reunir el poder necesario para sus objetivos. En su camino, Cross se encuentra con Ink, el guardián del Doodle Sphere, quien tiene la tarea de proteger la estabilidad de los universos alternativos. Ink, al darse cuenta del peligro que representa Cross y su misión, decide enfrentarlo y tratar de detener sus planes destructivos.
                </p>
    
                    <article >
                        <h3>Su misión</h3>
                        <p>
                            La misión de Cross en la serie "Underverse" es restaurar su universo original, conocido como "XTale", que fue destruido debido a una serie de eventos trágicos. Para lograr esto, Cross roba un objeto poderoso llamado el "X-Event" y empieza a viajar a través de los diferentes universos alternativos de "Undertale". En cada universo que visita, Cross busca absorber poder y recursos con la esperanza de reunir la energía necesaria para restaurar su hogar y corregir los errores que llevaron a su destrucción. Su búsqueda está impulsada por un profundo dolor y desesperación, así como un fuerte deseo de venganza contra aquellos que considera responsables de su sufrimiento y la caída de su universo.
                        </p>
                    </article>
                    <article>
                        <h3>
                            Autora
                        </h3>
                        <p>
                            Jael Peñaloza, conocida en línea como Jakei o Jakei95, es una animadora y creadora de contenido de YouTube. Originaria de México, Jakei es conocida principalmente por su serie animada "Underverse", que se basa en el universo del popular videojuego "Undertale" de Toby Fox. Jakei ha ganado reconocimiento por su habilidad en la animación y por su capacidad para crear historias complejas y emotivas dentro del fandom de "Undertale". Además de "Underverse", Jakei también ha trabajado en otros proyectos relacionados con "Undertale" y sus universos alternativos, contribuyendo significativamente a la comunidad de fans del juego. Su talento y dedicación le han permitido construir una sólida base de seguidores y ser una figura destacada en el ámbito de las animaciones de fandom en YouTube.
                        </p>
                    </article>
        
              </section>
               
            </div>
            <div className="third-section" id="carta">
                <h2>
                    Personajes Principales
                </h2>
                <div className="grid-3">
                    <article>
                        <img src="images/Ink.webp" alt="anticuchos"/>
                        <h5>
                            Ink Sans
                        </h5>
                        <p>"Soy el Guardian de los AUs"</p>
                    </article>
                    <article>
                        <img src="images/Error.webp" alt="causa de pollo"/>
                        <h5>
                            Error Sans
                        </h5>
                        <p>"Los destruiré a todos"</p>
                    </article>
                    <article>
                        <img src="images/Dream.webp" alt="causa de atún"/>
                        <h5>
                            Dream Sans
                        </h5>
                        <p>"La felicidad es el mejor sentimiento positivo"</p>
                    </article>
                    <article>
                        <img src="images/Nightmare.jpeg" alt="arroz con mariscos"/>
                        <h5>
                            Nightmare Sans
                        </h5>
                        <p>"Soy tu peor pesadilla"</p>
                    </article>
                    <article>
                        <img src="images/Cross.webp" alt="lomo saltado"/>
                        <h5>
                            Cross
                        </h5>
                        <p>"No descansaré hasta recuperarlos a todos"</p>
                    </article>
                </div>
            </div>
            <div className="form-section" id="buzon">
                <h2>
                    Buzón de sugerencias
                </h2>
                <p>Comenta algo referente a la serie</p>
                <form>
                    <div>
                        <label for="name">Nombres</label>
                        <input required id="name"/>
                    </div>
                    <div>
                        <label for="apellidos">Apellidos</label>
                        <input required id="apellidos"/>
                    </div>
                    <div>
                        <label for="phone">Celular</label>
                        <input required id="phone" type="tel" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input required id="email" type="email" />
                    </div>
                    <div>
                        <label for="sugerencia">Escribe aquí tu sugerencia</label>
                        <textarea required rows="5" id="sugerencia"></textarea>
                    </div>
                    <input aria-label="Enviar sugerencia" type="button" value="Enviar sugerencia"/>
                </form>
            </div>
    </>
  );
}
