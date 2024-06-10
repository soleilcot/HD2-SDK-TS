import {apiClient} from './api/client'

const a = async () => {
    let data = await apiClient.war.getPlanetsWithPlayers();
    console.log(data);
}

a();
