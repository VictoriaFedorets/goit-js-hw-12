import { formInput, showLoader } from '../main';

export function getPicturesByQuery() {
  const query = formInput.value;
  console.log(query);
  const API_KEY = '44763661-907a9c415cab9d29c7901c7cc';
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    //res - відповідь від серверу(обєкт типу Response)
    console.log(res);

    //перевірка помилки 404(щоб попасти в блок catch)
    if (!res.ok) {
      throw new Error(res.status); //викид помилки
    }

    //json() - викликається на обєкті відповіді від серверу та парсить відповідь в звичайний обєкт, повертає проміс
    return res.json();
  });
}
