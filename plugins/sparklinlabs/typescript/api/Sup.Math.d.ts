declare module Sup {
  module Math {
    function clamp(v: number, min: number, max: number): number;

    function lerp(a: number, b: number, v: number): number;
    function lerpAngle(a: number, b: number, v: number): number;
    function wrapAngle(a);

    module Random {
      function integer(min: number, max: number): number;
      function sample<T>(collection: T[]): T;
    }

    function toRadians(degrees: number): number;
    function toDegrees(radians: number): number;

    class Vector3 {
      static forward(): Vector3;
      static back(): Vector3;
      static right(): Vector3;
      static left(): Vector3;
      static up(): Vector3;
      static down(): Vector3;
      static one(): Vector3;

      x: number;
      y: number;
      z: number;

      constructor(x?: number, y?: number, z?: number);
      set(x: number, y: number, z: number): Vector3;
      copy(v: Vector3): Vector3;
      clone(): Vector3;

      add(v: Vector3): Vector3;
      subtract(v: Vector3): Vector3;
      multiplyScalar(m: number): Vector3;
      cross(v: Vector3): Vector3;
      dot(v: Vector3): number;
      normalize(): Vector3;
      lerp(v: Vector3, t: number): Vector3;
      rotate(q : Quaternion): Vector3;
      length(): number;
      distanceTo(v: Vector3): number;
      angleTo(v: Vector3): number;
      unproject(camera: Camera): Vector3;
    }

    class Quaternion {
      x: number;
      y: number;
      z: number;
      w: number;

      constructor(x?: number, y?: number, z?: number, w?: number);

      set(x: number, y: number, z: number, w: number): Quaternion;
      setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
      setFromYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion;
      copy(q: Quaternion): Quaternion;
      clone(): Quaternion;

      multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
      multiply(q: Quaternion): Quaternion;
      slerp(q: Quaternion, t: number): Quaternion;
    }
  }
}
