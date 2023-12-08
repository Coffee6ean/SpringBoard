# API Requests -

Two ways to talk with APIs:

- Client-side requests (via AJAX)
- Server-side requests

### Why Use Client-Side Requests?
![alt text][pic]
- You can do easily using AJAX libraries
- Don’t have to involve Flask in the API
- Can be faster: browser could talk directly to, say, Google Maps

### Why Use Server-Side Requests?
![alt text][pic2]
- Same-Origin Policy may prevent browser requests
- Easier for server to store/process the data
    - e.g. have Flask requests restaurants and store in SQL database
- Need password to access API
    - If API uses password & we make request in browser JS, people could learn password from reading JS

## iTunes API:
```bash
$ curl -i
  'https://itunes.apple.com/search?term=billy+bragg&limit=3'
{
 "resultCount":5,
 "results": [
  {"wrapperType":"track", "kind":"song", "artistId":"163251",
 ...
```
[iTunes API Help](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searchexamples)
Returns JSON responses

## Python Requests:
```bash
(venv) $ pip install requests
```

## GET Requests:
`requests.get(url, params)`

```python
import requests

resp = requests.get(
            "https://itunes.apple.com/search",
            params={"term": "billy bragg", "limit": 3}
       )

print(resp.json())
```

## POST Requests:
`requests.post(url, data, json)`

| Type       | Description                                                |    
| ---------- |:----------------------------------------------------------:|     
| data       | Dictionary of data to send in traditional web from format  |    
| json       | Dictionary of data to send as a JSON string                |    

Most modern APIs expect to receive JSON, not traditional web form format.

## Responses:
Both _.get()_ and _.post()_ return a Response instance

| Type         | Description                                      |    
| ------------ |:------------------------------------------------:|     
| .text        | Text of response                                 |    
| .status_code | Numeric status code (200, 404, etc)              |  
| .json()      | Convert JSON response text to Python dictionary  |      


[pic]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6318c08-db4e-4586-8e67-f050a5f09574%2Fgraphviz-3445b6af0578962ad1c8b567424210c4d530948b.svg?table=block&id=3ceb369c-d684-4461-b602-ad9e66c4df98&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Client-Side Requests"

[pic2]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6fdc52a0-dff5-4b12-b864-8239ae081bb7%2Fgraphviz-9131c9c24a8ef5389edd07853757d4bf38001a42.svg?table=block&id=db86730b-67e0-4562-9449-16f37bec3f59&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&userId=&cache=v2 "Server-Side Requests"