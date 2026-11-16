export class HttpError extends Error {
    status;
    constructor(status) {
        super(`HTTP ${status}`);
        this.status = status;
        this.name = "HttpError";
    }
}
export async function searchCountries(query, signal) {
    const response = await fetch(`https://countries.dev/name/${encodeURIComponent(query)}`, { signal });
    if (!response.ok) {
        if (response.status === 404)
            return [];
        throw new HttpError(response.status);
    }
    return response.json();
}
