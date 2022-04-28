// WGS84 Parameters (describes Earth as an ellipsoid)

/** In meters */
export const A = 6_378_137.0;
export const F = 1 / 298.257_223_563;
export const B = 6_356_752.314;

/** First eccentricity of earth (meters). */
export const E = 1 - (1 - F) ** 2;

/** Second eccentricity of earth (meters). */
export const E_PRIME = Math.sqrt((A ** 2 - B ** 2) / B ** 2);
