const url = 'https://www.cbr-xml-daily.ru';

const checkResponse = <T>(res: Response): Promise<T> => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};
  
const checkSuccess = <T>(res: any) => {
    if (res) {
        return res;
    }

    return Promise.reject(`Ответ не success: ${res}`);
};
  
const request = <T>(endpoint: RequestInfo, options?: RequestInit) => {
    return fetch(`${url}${endpoint}`, options)
        .then(res => checkResponse<T>(res))
        .then(res => checkSuccess<T>(res));
};

export const getJSON = () => request(`/daily_json.js`);