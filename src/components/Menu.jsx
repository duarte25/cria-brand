
export function Menu() {
    return (
        <div className="bg-white flex justify-between items-center">
            <img
                src="/images/logoCriabrand.svg"
                alt="Logo Cria Brand"
                className="size-24"
            />

            <ul className="font-montserrat font-medium text-xl text-slate-500 gap-2 flex flex-row ">
                <li>Jobs</li>
                <li>Sobre</li>
                <li>Novidades</li>
                <li>Contato</li>
            </ul>

            <img
                src="/images/search.svg"
                alt="Pesquisar"
                className="size-10 border-2 border-yellow-300"
            />
        </div>
    );
}



