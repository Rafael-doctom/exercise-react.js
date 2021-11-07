import { useEffect, useState } from "react";

export const ExerciseTwentyFour = () => {
    const [data, setDados] = useState();

    const [dados, setValue] = useState()

    const API_KEY = 'AIzaSyBJKS9tPpfEiNvaBuReZSbXduCOQ_DvHi0';

    //  const ID_CANAL = '3CKqZ7GZK6A';


    const RetornarDados = (evnt) => {
        evnt.preventDefault()
        var valorSearchDoId = document.getElementById("link").value
        var id = `${valorSearchDoId}`
        var link = `https:www.youtube.com/watch?v=${id}`
        var text = link.indexOf('=');
        var resultado = link.substring(text + 33)
        var ID_CANAL = `${resultado}`
        alert(ID_CANAL)

        fetch(`https:youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${ID_CANAL}&key=${API_KEY}`)
            .then((response) => response.json())
            .then((json) => setDados(json))
            .catch(error => {
                alert("erro na API" + error)
            })
        console.log(setDados)

    }


    useEffect(() => {

    }, []);


    return (
        <>
            <h1>ExerciseTwentyFour</h1>
            <form>
                <label for="link">CANAL</label>
                <input id="link" type="text" onChange={(e) => setValue(e.target.value)} onBlur={RetornarDados} placeholder="https://www.youtube.com/watch?v=y3zw5mUBcAQ&t=1s"/>

                <button  >enviar</button>
            </form>
            <p>resultado: {dados}</p>

            {data && (
                <div>
                    kind={data.kind} <br />
                    etag={data.etag}<br />
                    id do video = {data.items[0].id}<br />
                    nome do canal = {data.items[0].snippet.channelTitle}<br />
                    Resultados={data.pageInfo.totalResults}<br />
                </div>
            )}
        </>
    )
}