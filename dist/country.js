export function mapCountryResponse(raw) {
    return {
        name: raw.name,
        flag: raw.flags?.svg ?? raw.flags?.png ?? raw.flag ?? "",
        capital: raw.capital || "—",
        region: raw.region || "—",
        population: raw.population ?? null,
        languages: (raw.languages ?? []).map(({ name }) => name),
        currencies: (raw.currencies ?? []).map(({ name }) => name),
        description: raw.description ?? "",
        area: raw.area ?? null,
        borders: [...(raw.borders ?? [])],
    };
}
