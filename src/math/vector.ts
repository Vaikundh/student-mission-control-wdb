export type Vector2 = { x: number; y: number };
export type Vector3 = { x: number; y: number; z: number };
export type Coord = { lat: number; lon: number };
export type LLA = Coord & { altitude: number };
export type GEO = {Rw: number, Rx: number, Ry: number, Rz: number};
export type ENG = {S4000002: number, S6000005: number, P4000002: number, P6000005: number, S4000005: number, S6000002: number, P4000005: number, P6000002: number};