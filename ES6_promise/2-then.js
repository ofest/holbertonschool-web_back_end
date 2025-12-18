export default function handleResponseFromApi(promise) {
  return promise
    .then((data) => {
      console.log('Got a repoponse from the API');
      return {
        status: 200,
        body: 'succes',
      };
    })
    .catch((err) => new Error());
}
