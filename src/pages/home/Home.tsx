function Home() {
 
  return (
   
    <div className="
        flex
        justify-center
        bg-indigo-900 ">
        <div className="
            container
            grid grid-cols-2
            text-white ">
            <div className="
                flex
                flex-col
                justify-center
                items-center
                gap-4
                py-4
                px-4">
                <h2 className="text-5xl font-semibold">Seja Bem Vindo!</h2>
                <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
                <div className="
                    flex
                    justify-around
                    gap-4 ">
                    <div className="
                        rounded
                        border-white border-solid border-2
                        py-2
                        px-4 ">
                        Nova Postagem
                    </div>
                </div>
            </div>
            <div className="
                flex
                justify-center
            ">
                <img
                    src="https://i.imgur.com/VpwApCU.png"
                    alt="Imagem da Pagina Home"
                    className="w-2/3"
                />
            </div>
        </div>
    </div>
  )
}
 
export default Home