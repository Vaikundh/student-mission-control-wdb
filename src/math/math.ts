import * as WGS84 from "./wgs84";
import { LLA, Vector2, Vector3 } from "./vector";

export const dist2d = ({ x, y }: Vector2): number => Math.sqrt(x ** 2 + y ** 2);

export const deg2Rad = (deg: number): number => (deg * Math.PI) / 180;
export const rad2Deg = (deg: number): number => (deg * 180) / Math.PI;

export const meters2Miles = (dist: number): number => dist / 1609;

/**
 * Converts ECEF coordinates in **meters** to lat/lon.
 */
export const ecefToLla = ({ x, y, z }: Vector3): LLA => {
  // Longitude is simple to calculate (treat it as a circle).
  const longitude = Math.atan2(y, x);

  // Latitude over an ellipsoid is less trivial to calculate
  // We use Bowring's method here

  // https://microem.ru/files/2012/08/GPS.G1-X-00006.pdf

  const distance = dist2d({ x, y });
  const theta = Math.atan((z * WGS84.A) / (distance * WGS84.B));
  const latitude = Math.atan(
    (z + WGS84.E_PRIME ** 2 * WGS84.B * Math.sin(theta) ** 3) /
      (distance - WGS84.E ** 2 * WGS84.A * Math.cos(theta) ** 3)
  );

  const radiusOfCurvature =
    WGS84.A / Math.sqrt(1 - WGS84.E ** 2 * Math.sin(latitude) ** 2);
  const altitude = distance / Math.cos(latitude) - radiusOfCurvature;

  console.log(
    (z + WGS84.E_PRIME ** 2 * WGS84.B * Math.sin(theta) ** 3) /
      (distance - WGS84.E ** 2 * WGS84.A * Math.cos(theta) ** 3)
  );

  return {
    lat: rad2Deg(latitude),
    lon: rad2Deg(longitude),
    altitude: altitude,
  };
};
