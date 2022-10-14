import axios from 'axios';
const client = axios.create({
    baseURL: 'https://pensador-api.vercel.app/'
})
export async function getOnePhrase(): Promise<any>{
    const frases = client.get('?term=Karl+Marx&max=149');
    return (await frases).data.frases;
}