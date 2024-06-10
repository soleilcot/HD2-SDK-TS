import {apiClient} from './api/client'

const a = async () => {
    const data = await apiClient.war.getWarStatus();
    console.log(data?.planetEvents[0].jointOperationIds);
}

a();
