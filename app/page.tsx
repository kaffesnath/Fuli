import { StarRail } from 'starrail.js';

const client = new StarRail({cacheDirectory: './cache'});
client.cachedAssetsManager.cacheDirectorySetup();

export default async function Page() {
    const res = await client.fetchUser(600662715);
        return (
            <div>
                <h1>{res.nickname}</h1>
                <p>{res.uid}</p>
            </div>
        );
  }