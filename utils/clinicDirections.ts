import { SITE } from '../config/site';

function isIOSDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return true;
  // iPadOS 13+ may report as Macintosh with touch
  if (
    typeof navigator.maxTouchPoints === 'number' &&
    navigator.maxTouchPoints > 1 &&
    /macintosh/.test(ua)
  ) {
    return true;
  }
  return false;
}

/**
 * One-tap directions: Apple Maps on iOS, Google Maps directions elsewhere (Android / desktop).
 * Uses clinic coordinates so the destination is exact.
 */
export function clinicDirectionsHref(): string {
  const lat = SITE.mapsLatitude;
  const lng = SITE.mapsLongitude;
  if (isIOSDevice()) {
    return `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
}
