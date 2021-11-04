import { useEffect, useState } from "react";

export const ExerciseTwentyFour = () => {
    // dados do video
    const [data, setDados] = useState();

    // dados do Input
    // const [dados, RetornarDados] = useState()

    // chave
    const API_KEY = 'AIzaSyBJKS9tPpfEiNvaBuReZSbXduCOQ_DvHi0';

    // id estático
    const ID_CANAL = '3CKqZ7GZK6A';

    
    const RetornarDados = (e, evnt) =>{
        evnt.preventDefault()
        e.target.value()

        
    }

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${ID_CANAL}&key=${API_KEY}`)
            .then((response) => response.json())
            .then((json) => setDados(json))
            .catch(error => {
                alert("erro au buscar API")
            })
        console.log(setDados)
    }, []);


    return (
        <>
            <form>
                <label for="cep">Cep</label>
                <input id="cep" type="text" />

                <label for="bairro">Bairro</label>
                <input type="text" id="bairro" />
                <button onClick={RetornarDados} >enviar</button>
            </form>
            {/* <p>resultado: {dados}</p> */}

            {data && (
                <div>
                    Titulo={data.items[0].id} <br/>
                    Resultados={data.pageInfo.totalResults}
                </div>
            )}
        </>
    )
}